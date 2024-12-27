import React from 'react';
import NotificationList from './components/NotificationList';
import NotificationSettings from './components/NotificationSettings';

export default function NotificationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Notifications</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <NotificationList />
        </div>
        
        <div className="lg:col-span-1">
          <NotificationSettings />
        </div>
      </div>
    </div>
  );
}