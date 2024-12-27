import React from 'react';
import { Calendar, Clock } from 'lucide-react';

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
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Appointment History</h2>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{appointment.doctor}</h3>
                <p className="text-sm text-gray-500">{appointment.type}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                appointment.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {appointment.status}
              </span>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {appointment.date}
              <Clock className="h-4 w-4 ml-3 mr-1" />
              {appointment.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}