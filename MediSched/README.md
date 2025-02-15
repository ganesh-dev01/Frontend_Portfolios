# MediSched - Doctor Appointment Management System

## 📌 Overview
**MediSched** is a **Doctor Appointment Management System** built using **Next.js** and **Supabase**. It allows users to book, track, and manage doctor appointments efficiently. The system includes features for user authentication, appointment booking, doctor calendars, and status updates.

## 🛠️ Setup & Installation
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/ganesh-dev01/Assignment.git
cd Assignment
```
### 2️⃣ **Install Dependencies**
```bash
npm install
# or
yarn install
```
### 3️⃣ **Run the Project**
```bash
npm run dev
# or
yarn dev
```
The project will run on `http://localhost:3000`

## 🏗️ Tech Stack
- **Frontend:** Next.js, React, MUI, React Hook Form, React Query, React Toastify
- **Backend:** Supabase (PostgreSQL, Authentication, Database)
- **Database:** Supabase
- **State Management:** React Context API
- **Styling:** CSS Modules

## 🔑 Features
### **For Patients:**
✅ **User Authentication** – Secure login and signup with Supabase Auth.  
✅ **Book Appointments** – Select a doctor and schedule an appointment. 
✅ **Patient Calendar** – Display scheduled appointments in a calendar view.   
✅ **View Canceled Appointments** – Check declined or rescheduled appointments.  
✅ **Responsive UI** – Works smoothly on both desktop and mobile.  

### **For Doctors:**
✅ **View Appointments** – See all booked appointments.  
✅ **Manage Appointments** – Accept, decline, or reschedule bookings.  
✅ **Doctor Calendar** – Display scheduled appointments in a calendar view.  
✅ **Session-Based Authentication** – Secure login and session handling with Supabase.  

### **Admin Panel:**
✅ **Hidden Admin Portal** – Accessible only via a special URL.  
✅ **Admin Login URL:** `/auth/admin/signin/154154541`  
✅ **Admin Login user name:** admin@example.com
✅ **Admin Login password:** 123456
✅ **Add and Manage Doctors:** – Admins can oversee the entire system.  


## 🔍 Key Files & Functions
- `supabaseClient.ts` → Initializes and connects to Supabase.
- `Status.tsx` → Fetches and displays canceled appointments for logged-in users.
- `PatientAppo.tsx` → Doctors manage appointments (approve/decline).
- `Calender.tsx` → Displays doctor’s schedule dynamically.

## 📌 Future Improvements
🚀 **Email Notifications** – Notify patients about changes in their appointments.  
🚀 **Admin Dashboard** – Manage doctors, patients, and appointments.  
🚀 **Improved UI/UX** – Enhance the user experience with animations and better styling.  

## 💡 Credits
Developed by **Ganesh Saha**. 



