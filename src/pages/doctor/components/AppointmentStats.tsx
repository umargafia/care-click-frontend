import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

const stats = [
  {
    title: "Today's Appointments",
    value: 8,
    icon: Calendar,
    color: 'bg-blue-500',
  },
  {
    title: 'Total Patients',
    value: 145,
    icon: Users,
    color: 'bg-green-500',
  },
  {
    title: 'Pending Appointments',
    value: 12,
    icon: Clock,
    color: 'bg-yellow-500',
  },
];

export default function AppointmentStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}