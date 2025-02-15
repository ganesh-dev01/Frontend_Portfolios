import React, { useContext, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { supabase } from "@/lib/supabaseClient";
import styles from "@/styles/user/calender.module.css";
import ThemeContext from "@/Theme/Themestate";


const formatTime = (date: string, time: string) => {
  const [hours, minutes] = time.split(/[: ]/);
  const isPM = time.includes("PM");
  const formattedHours = isPM ? (parseInt(hours) % 12) + 12 : parseInt(hours);
  return `${date}T${formattedHours.toString().padStart(2, "0")}:${minutes}:00`;
};


let appointmentData: { doctor: string; date: string; time: string; purpose: string }[] = [];

const AppointmentsCalendar = () => {
  const theme_data = useContext(ThemeContext);
  const [events, setEvents] = useState<any[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);


  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching user session", error);
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
          console.error("Error fetching appointments", error);
        } else {

          appointmentData = data.map((apt: any) => ({
            doctor: apt.doctorname,
            date: apt.appo_date,
            time: apt.appo_time,
            purpose: apt.ptpurpose,
          }));

          const formattedEvents = appointmentData.map((apt) => ({
            title: `${apt.doctor} - ${apt.purpose}`,
            start: formatTime(apt.date, apt.time),
            color: apt.purpose.includes("Dental") ? "#f4b400" : apt.purpose.includes("Eye") ? "#4285f4" : "#34a853",
          }));

          setEvents(formattedEvents);
        }
      };
      fetchAppointments();
    }
  }, [userEmail]);

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

export default AppointmentsCalendar;
