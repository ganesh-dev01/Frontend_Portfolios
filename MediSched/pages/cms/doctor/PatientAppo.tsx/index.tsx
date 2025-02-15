import { useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ThemeContext from "@/Theme/Themestate";
import styles from "@/styles/doctor/patientappo.module.css";

const PatientAppo: React.FC = () => {
  const theme_data = useContext(ThemeContext);

  // State for appointments
  const [appointments, setAppointments] = useState<any[]>([]);
  const [doctorName, setDoctorName] = useState<string | null>(null);

  // Modal states
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [postponeDate, setPostponeDate] = useState("");
  const [reason, setReason] = useState("");


  useEffect(() => {
    const storedDoctor = localStorage.getItem("doctor_session");
    if (storedDoctor) {
      const doctorData = JSON.parse(storedDoctor);
      setDoctorName(doctorData.doctorname);
    }
  }, []);


  useEffect(() => {
    if (doctorName) {
      const fetchAppointments = async () => {
        const { data, error } = await supabase
          .from("appointment")
          .select("*")
          .eq("doctorname", doctorName);

        if (error) {
          console.error("Error fetching appointments", error);
        } else {
          setAppointments(data);
        }
      };
      fetchAppointments();
    }
  }, [doctorName]);


  const handleConfirmDone = async () => {
    if (selectedAppointment) {
      const { error } = await supabase
        .from("appointment")
        .delete()
        .eq("id", selectedAppointment.id);

      if (error) {
        console.error("Error deleting appointment", error);
      } else {
        setAppointments((prev) => prev.filter((app) => app.id !== selectedAppointment.id));
        setShowUpdateModal(false);
      }
    }
  };

 
  const handleSendDecline = async () => {
    if (selectedAppointment && doctorName) {
   
      const { error: insertError } = await supabase.from("status").insert([
        {
          doctorname: doctorName,
          ptemail: selectedAppointment.ptemail,
          postpone_date: postponeDate,
          reason: reason,
          booked_person: selectedAppointment.booked_by,
        },
      ]);

      if (insertError) {
        console.error("Error inserting decline status", insertError);
        return;
      }

  
      const { error: deleteError } = await supabase
        .from("appointment")
        .delete()
        .eq("id", selectedAppointment.id);

      if (deleteError) {
        console.error("Error deleting appointment", deleteError);
      } else {
        setAppointments((prev) =>
          prev.filter((app) => app.id !== selectedAppointment.id)
        );
        setShowDeclineModal(false);
        setPostponeDate("");
        setReason("");
      }
    }
  };

  return (
    <div className={styles[`main_${theme_data?.theme}`]}>
      <h4 className={styles.heading}>Patient Appointments</h4>
      <div className={styles.tableContainer}>
        <table className={styles.appointmentTable}>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Purpose</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.ptname}</td>
                <td>{appointment.appo_date}</td>
                <td>{appointment.appo_time}</td>
                <td>{appointment.ptpurpose}</td>
                <td>
                  <button className={styles.acceptbtn} onClick={() => { setSelectedAppointment(appointment); setShowUpdateModal(true); }}>Done</button>
                  <button className={styles.declinebtn} onClick={() => { setSelectedAppointment(appointment); setShowDeclineModal(true); }}>Decline</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Accept Confirmation Modal */}
      {showUpdateModal && selectedAppointment && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>Confirm Appointment</h4>
            <p>Are you sure this patient has visited you?</p>
            <div className={styles.modalActions}>
              <button className={styles.confirmbtn} onClick={handleConfirmDone}>Confirm</button>
              <button className={styles.closeButton} onClick={() => setShowUpdateModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Decline Modal */}
      {showDeclineModal && selectedAppointment && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>Decline Appointment</h4>

            <label>Postpone to Another Date:</label>
            <input
              type="date"
              value={postponeDate}
              onChange={(e) => setPostponeDate(e.target.value)}
            />

            <label>Reason:</label>
            <textarea
              rows={3}
              placeholder="Enter reason for declining..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>

            <div className={styles.modalActions}>
              <button className={styles.sendbtn} onClick={handleSendDecline}>Send</button>
              <button className={styles.closeButton} onClick={() => setShowDeclineModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientAppo;
