import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Loader } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import axios from 'axios';
import BaseUrl from '../../../api/BaseUrl';

const appointments = [
  {
    id: 1,
    doctor: 'Dr. Sarah Wilson',
    date: '2024-03-15',
    time: '10:00 AM',
    type: 'Check-up',
    status: 'completed',
  },
  {
    id: 2,
    doctor: 'Dr. Michael Chen',
    date: '2024-03-20',
    time: '2:30 PM',
    type: 'Follow-up',
    status: 'upcoming',
  },
];

export default function AppointmentHistory() {
  const { user, token } = useSelector((state: RootState) => state.auth);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAppointments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BaseUrl}appointments/patient?limit=2`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response?.data?.data);
      setAppointments(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAppointments();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-56">
        <Loader className="animate-spin text-blue-500" />
      </div>
    );
  }
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };
  const formatTime = (time: string) => {
    return new Date(time).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
  };
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Appointment History</h2>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment._id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{appointment.doctor.name}</h3>
                <p className="text-sm text-gray-500 capitalize">
                  {appointment.doctor.specialization}
                </p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  appointment.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {appointment.status}
              </span>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(appointment.time)}
              <Clock className="h-4 w-4 ml-3 mr-1" />
              {formatTime(appointment.time)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
