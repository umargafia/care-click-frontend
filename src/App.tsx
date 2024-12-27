import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import AppointmentsPage from './pages/appointments/AppointmentsPage';
import ConsultationPage from './pages/consultation/ConsultationPage';
import NotificationsPage from './pages/notifications/NotificationsPage';
import AuthPage from './pages/auth/AuthPage';
import UserProfilePage from './pages/profile/UserProfilePage';
import DoctorProfilePage from './pages/profile/DoctorProfilePage';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import DoctorAppointments from './pages/doctor/DoctorAppointments';
import VideoConsultation from './pages/doctor/VideoConsultation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
              </>
            }
          />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/signup" element={<AuthPage type="signup" />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/doctor/:id" element={<DoctorProfilePage />} />
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor/appointments" element={<DoctorAppointments />} />
          <Route path="/doctor/consultation/:appointmentId" element={<VideoConsultation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;