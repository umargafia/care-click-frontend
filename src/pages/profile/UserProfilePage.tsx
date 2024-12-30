import React from 'react';
import { User, Mail, Phone, Calendar } from 'lucide-react';
import AppointmentHistory from './components/AppointmentHistory';
import MedicalHistory from './components/MedicalHistory';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export default function UserProfilePage() {
  const { user, token } = useSelector((state: RootState) => state.auth);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32"></div>
        <div className="px-6 py-4 -mt-16">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
              <h1 className="text-2xl text-white capitalize mb-2 font-bold">
                {user?.name}
              </h1>
              <p className="text-gray-600">Patient ID: P-123456</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <span>{user?.email}</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Phone className="h-5 w-5 text-gray-400 mr-2" />
              <span>{user?.phone || '09039513111'}</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <span>Joined Dec 2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <AppointmentHistory />
        <MedicalHistory />
      </div>
    </div>
  );
}
