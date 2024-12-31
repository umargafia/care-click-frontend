import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const appointments = [
  {
    id: 1,
    patientName: 'Umar Musa',
    time: '10:00 AM',
    type: 'virtual',
    status: 'upcoming',
  },
  {
    id: 2,
    patientName: 'Abdulrahaman Musa',
    time: '11:30 AM',
    type: 'in-person',
    status: 'upcoming',
  },
];

export default function UpcomingAppointments() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{appointment.patientName}</h3>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {appointment.time}
                </div>
              </div>
              {appointment.type === 'virtual' && (
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
  );
}