import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';
import AppointmentStats from './components/AppointmentStats';
import UpcomingAppointments from './components/UpcomingAppointments';
import PatientsList from './components/PatientsList';

export default function DoctorDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Doctor Dashboard</h1>
      
      <AppointmentStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <UpcomingAppointments />
        <PatientsList />
      </div>
    </div>
  );
}