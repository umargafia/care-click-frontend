import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import HowItWorks from './components/landing/HowItWorks';
import Benefits from './components/landing/Benefits';
import Features from './components/home/Features';
import Testimonials from './components/landing/Testimonials';
import FAQ from './components/landing/FAQ';
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
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <HowItWorks />
                    <Benefits />
                    <Features />
                    <Testimonials />
                    <FAQ />
                  </>
                }
              />
              <Route path="/login" element={<AuthPage type="login" />} />
              <Route path="/signup" element={<AuthPage type="signup" />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <UserProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor/:id"
                element={
                  <ProtectedRoute>
                    <DoctorProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor/dashboard"
                element={
                  <ProtectedRoute>
                    <DoctorDashboard />{' '}
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor/appointments"
                element={
                  <ProtectedRoute>
                    <DoctorAppointments />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor/consultation/:appointmentId"
                element={
                  <ProtectedRoute>
                    <VideoConsultation />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/appointments"
                element={
                  <ProtectedRoute>
                    <AppointmentsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor/dashboard"
                element={
                  <ProtectedRoute allowedUserTypes={['doctor']}>
                    <DoctorProfilePage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
