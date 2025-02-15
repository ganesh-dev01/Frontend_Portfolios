import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeContext from "@/Theme/Themestate";
import styles from "@/styles/user/cretae.module.css";
import { supabase } from "@/lib/supabaseClient";

const CreateAppo: React.FC = () => {
  const theme_data = useContext(ThemeContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [doctors, setDoctors] = useState<any[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Fetch Available Doctors from Supabase
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data, error } = await supabase.from("doctorSignup").select("doctorname");
      if (error) {
        toast.error(`Error fetching doctors: ${error.message}`);
      } else {
        setDoctors(data || []);
      }
    };
    fetchDoctors();
  }, []);

  // Fetch Logged-in User Session
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        toast.error("Error fetching user session");
      } else {
        setUserEmail(data?.session?.user?.email || null);
      }
    };
    fetchUser();
  }, []);


  const onSubmit = async (data: any) => {
    if (!userEmail) {
      toast.error("User not logged in. Please log in to book an appointment.");
      return;
    }

    const { error } = await supabase.from("appointment").insert([
      {
        ptname: data.patientName,
        ptemail: data.email,
        ptphone: data.phone,
        ptaddress: data.address,
        ptpurpose: data.purpose,
        appo_date: data.date,
        appo_time: data.time,
        doctorname: data.doctor,
        booked_by: userEmail,
      },
    ]);

    if (error) {
      toast.error(`Error booking appointment: ${error.message}`);
    } else {
      toast.success("Appointment booked successfully!");
      reset(); 
    }
  };

  return (
    <div className={styles[`main_${theme_data?.theme}`]}>
      <h2 className={styles.header}>Book an Appointment</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label>Available Doctors</label>
          <select {...register("doctor", { required: "Doctor is required" })}>
            <option value="">Select a doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.doctorname}>
                {doctor.doctorname}
              </option>
            ))}
          </select>
          {errors.doctor && <p className={styles.error}>{errors.doctor.message as string}</p>}
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Appointment Date</label>
            <input type="date" {...register("date", { required: "Date is required" })} />
            {errors.date && <p className={styles.error}>{errors.date.message as string}</p>}
          </div>

          <div className={styles.formGroup}>
            <label>Appointment Time</label>
            <input type="time" {...register("time", { required: "Time is required" })} />
            {errors.time && <p className={styles.error}>{errors.time.message as string}</p>}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Patient Name</label>
            <input type="text" {...register("patientName", { required: "Name is required" })} />
            {errors.patientName && <p className={styles.error}>{errors.patientName.message as string}</p>}
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" {...register("email", { required: "Email is required" })} />
            {errors.email && <p className={styles.error}>{errors.email.message as string}</p>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input type="tel" {...register("phone", { required: "Phone number is required" })} />
          {errors.phone && <p className={styles.error}>{errors.phone.message as string}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Patient Address</label>
          <input type="text" {...register("address", { required: "Address is required" })} />
          {errors.address && <p className={styles.error}>{errors.address.message as string}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Purpose</label>
          <textarea {...register("purpose", { required: "Purpose is required" })}></textarea>
          {errors.purpose && <p className={styles.error}>{errors.purpose.message as string}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>Book Appointment</button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default CreateAppo;
