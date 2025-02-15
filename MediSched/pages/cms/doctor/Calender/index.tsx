import React, { useContext, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { supabase } from "@/lib/supabaseClient";
import ThemeContext from "@/Theme/Themestate";
import styles from '@/styles/doctor/dct_calender.module.css';


const formatTime = (date: string, time: string) => {
  const [hours, minutes] = time.split(/[: ]/);
  const isPM = time.includes("PM");
  const formattedHours = isPM ? (parseInt(hours) % 12) + 12 : parseInt(hours);
  return `${date}T${formattedHours.toString().padStart(2, "0")}:${minutes}:00`;
};

const Calender = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [doctorName, setDoctorName] = useState<string | null>(null);
  const theme_data = useContext(ThemeContext);


  useEffect(() => {
    const storedDoctor = localStorage.getItem("doctor_session");
    if (storedDoctor) {
      const doctorData = JSON.parse(storedDoctor);
      setDoctorName(doctorData.doctorname);
    }
  }, []);


  useEffect(() => {
    const fetchAppointments = async () => {
      if (!doctorName) return;

      const { data, error } = await supabase
        .from("appointment")
        .select("*")
        .eq("doctorname", doctorName); 

      if (error) {
        console.error("Error fetching appointments:", error);
      } else {
        setAppointments(data);
      }
    };

    fetchAppointments();
  }, [doctorName]);

  useEffect(() => {
    const formattedEvents = appointments.map((apt: any) => ({
      title: `${apt.ptname} - ${apt.ptpurpose}`,
      start: formatTime(apt.appo_date, apt.appo_time),
      color: apt.ptpurpose.includes("Dental") ? "#f4b400" : apt.ptpurpose.includes("Eye") ? "#4285f4" : "#34a853",
    }));
    setEvents(formattedEvents);
  }, [appointments]);

  return (
    <div className={styles[`main_${theme_data?.theme}`]}>
      <div className={styles.container}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          editable={true}
        />
      </div>
    </div>
  );
};

export default Calender;
