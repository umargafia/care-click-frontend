import React from 'react';
import { Bell, Mail, Phone, Calendar } from 'lucide-react';

const settings = [
  {
    id: 'appointments',
    label: 'Appointment Reminders',
    description: 'Get notified about upcoming appointments',
    icon: Calendar,
  },
  {
    id: 'medications',
    label: 'Medication Reminders',
    description: 'Receive medication schedule alerts',
    icon: Bell,
  },
  {
    id: 'email',
    label: 'Email Notifications',
    description: 'Receive updates via email',
    icon: Mail,
  },
  {
    id: 'sms',
    label: 'SMS Notifications',
    description: 'Get text message alerts',
    icon: Phone,
  },
];

export default function NotificationSettings() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Notification Settings</h3>
      </div>
      
      <div className="p-4 space-y-4">
        {settings.map((setting) => {
          const Icon = setting.icon;
          return (
            <div key={setting.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">{setting.label}</p>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}