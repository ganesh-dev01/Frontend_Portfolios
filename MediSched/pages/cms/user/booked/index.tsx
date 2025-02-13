import { useContext, useEffect, useState } from "react";
import ThemeContext from "@/Theme/Themestate";
import { supabase } from "@/lib/supabaseClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/user/booked.module.css";

const BookedAppo: React.FC = () => {
  const theme_data = useContext(ThemeContext);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Modal State
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);


  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        toast.error("Error fetching user session");
      } else {
        setUserEmail(data.session?.user.email || null);
      }
    };
    fetchUser();
  }, []);

 
  useEffect(() => {
    if (userEmail) {
      const fetchAppointments = async () => {
        const { data, error } = await supabase
          .from("appointment")
          .select("*")
          .eq("booked_by", userEmail);

        if (error) {
          toast.error("Error fetching appointments");
        } else {
          setAppointments(data || []);
        }
      };
      fetchAppointments();
    }
  }, [userEmail]);

 
  const handleUpdate = (appointment: any) => {
    setSelectedAppointment(appointment);
    setShowUpdateModal(true);
  };


  const handleDelete = (appointment: any) => {
    setSelectedAppointment(appointment);
    setShowDeleteModal(true);
  };


  const updateAppointment = async () => {
    if (!selectedAppointment) return;

    const { error } = await supabase
      .from("appointment")
      .update({
        doctorname: selectedAppointment.doctorname,
        appo_date: selectedAppointment.appo_date,
        appo_time: selectedAppointment.appo_time,
        ptpurpose: selectedAppointment.ptpurpose,
      })
      .eq("id", selectedAppointment.id);

    if (error) {
      toast.error("Error updating appointment");
    } else {
      toast.success("Appointment updated successfully!");
      setAppointments((prev) =>
        prev.map((app) => (app.id === selectedAppointment.id ? selectedAppointment : app))
      );
      setShowUpdateModal(false);
    }
  };


  const deleteAppointment = async () => {
    if (!selectedAppointment) return;

    const { error } = await supabase
      .from("appointment")
      .delete()
      .eq("id", selectedAppointment.id);

    if (error) {
      toast.error("Error deleting appointment");
    } else {
      toast.success("Appointment deleted successfully!");
      setAppointments((prev) => prev.filter((app) => app.id !== selectedAppointment.id));
      setShowDeleteModal(false);
    }
  };

  return (
    <div className={styles[`main_${theme_data?.theme}`]}>
      <h4 className={styles.heading}>Booked Appointments</h4>
      <div className={styles.tableContainer}>
        <table className={styles.appointmentTable}>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Purpose</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.doctorname}</td>
                  <td>{appointment.appo_date}</td>
                  <td>{appointment.appo_time}</td>
                  <td>{appointment.ptpurpose}</td>
                  <td>
                    <button className={styles.updateButton} onClick={() => handleUpdate(appointment)}>Update</button>
                    <button className={styles.deleteButton} onClick={() => handleDelete(appointment)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className={styles.noData}>No Appointments Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {showUpdateModal && selectedAppointment && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>Update Appointment</h4>
            <label>Doctor Name:</label>
            <input
              type="text"
              value={selectedAppointment.doctorname}
              onChange={(e) =>
                setSelectedAppointment({ ...selectedAppointment, doctorname: e.target.value })
              }
            />

            <label>Appointment Date:</label>
            <input
              type="date"
              value={selectedAppointment.appo_date}
              onChange={(e) =>
                setSelectedAppointment({ ...selectedAppointment, appo_date: e.target.value })
              }
            />

            <label>Appointment Time:</label>
            <input
              type="time"
              value={selectedAppointment.appo_time}
              onChange={(e) =>
                setSelectedAppointment({ ...selectedAppointment, appo_time: e.target.value })
              }
            />

            <label>Purpose:</label>
            <input
              type="text"
              value={selectedAppointment.ptpurpose}
              onChange={(e) =>
                setSelectedAppointment({ ...selectedAppointment, ptpurpose: e.target.value })
              }
            />

            <div className={styles.modalActions}>
              <button className={styles.updateButton} onClick={updateAppointment}>Update</button>
              <button className={styles.closeButton} onClick={() => setShowUpdateModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedAppointment && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>Confirm Delete</h4>
            <p>Are you sure you want to delete the appointment with <b>{selectedAppointment.doctorname}</b>?</p>
            <div className={styles.modalActions}>
              <button className={styles.deleteButton} onClick={deleteAppointment}>Delete</button>
              <button className={styles.closeButton} onClick={() => setShowDeleteModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default BookedAppo;
