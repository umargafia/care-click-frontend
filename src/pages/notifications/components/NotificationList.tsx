import React from 'react';
import { Bell, Calendar, Pill, FileText } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'appointment',
    title: 'Upcoming Appointment',
    message: 'Appointment with Dr. Sarah Wilson tomorrow at 10:00 AM',
    time: '1 hour ago',
    icon: Calendar,
  },
  {
    id: 2,
    type: 'medication',
    title: 'Medication Reminder',
    message: 'Time to take your evening medication',
    time: '2 hours ago',
    icon: Pill,
  },
  {
    id: 3,
    type: 'report',
    title: 'Test Results Available',
    message: 'Your blood test results are now available',
    time: '1 day ago',
    icon: FileText,
  },
];

export default function NotificationList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-medium">Recent Notifications</h3>
        <button className="text-blue-600 text-sm hover:text-blue-700">
          Mark all as read
        </button>
      </div>
      
      <div className="divide-y">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div key={notification.id} className="p-4 hover:bg-gray-50">
              <div className="flex space-x-4">
                <div className={`p-2 rounded-full ${
                  notification.type === 'appointment' ? 'bg-blue-100 text-blue-600' :
                  notification.type === 'medication' ? 'bg-green-100 text-green-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium">{notification.title}</h4>
                    <span className="text-sm text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{notification.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}