import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Loader, User, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BaseUrl from '../../api/BaseUrl';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { formatTime } from '../../components/formatTime';
import { formatDate } from '../../components/formatTime';

type AppointmentStatus = 'upcoming' | 'completed' | 'cancelled';

interface Appointment {
  id: number;
  patientName: string;
  date: string;
  time: string;
  type: 'virtual' | 'in-person';
  status: AppointmentStatus;
}

const appointments: Appointment[] = [
  {
    id: 1,
    patientName: 'Musa Isa',
    date: '2024-03-20',
    time: '10:00 AM',
    type: 'virtual',
    status: 'upcoming',
  },
  {
    id: 2,
    patientName: 'AbdulKarim',
    date: '2024-03-20',
    time: '11:30 AM',
    type: 'in-person',
    status: 'upcoming',
  },
  {
    id: 3,
    patientName: 'Aisha kabir',
    date: '2024-03-19',
    time: '3:00 PM',
    type: 'virtual',
    status: 'completed',
  },
];

export default function DoctorAppointments() {
  const [statusFilter, setStatusFilter] = useState<AppointmentStatus | 'all'>(
    'all'
  );

  const { userType, token, user } = useSelector(
    (state: RootState) => state.auth
  );

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAppointments = async () => {
    setLoading(true);
    try {
      let response;
      userType === 'patient'
        ? (response = await axios.get(`${BaseUrl}appointments/patient`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }))
        : (response = await axios.get(
            `${BaseUrl}appointments/doctor/${user._id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          ));
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
  const filteredAppointments = appointments.filter(
    (appointment) =>
      statusFilter === 'all' || appointment.status === statusFilter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
        <div className="flex space-x-2">
          {(['all', 'upcoming', 'completed', 'cancelled'] as const).map(
            (status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  statusFilter === status
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            )
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y">
          {filteredAppointments.map((appointment, index) => (
            <div key={appointment._id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <User className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{appointment?.doctor?.name}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(appointment.time)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {formatTime(appointment.time)}
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          appointment.status === 'upcoming'
                            ? 'bg-green-100 text-green-800'
                            : appointment.status === 'completed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                </div>

                {index === 0 && (
                  <Link
                    to={`/doctor/consultation/${appointment.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Join Call
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
