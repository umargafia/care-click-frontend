import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function AppointmentCalendar() {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Select Date</h3>
        <CalendarIcon className="h-5 w-5 text-gray-400" />
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="py-2 text-gray-500 font-medium">
            {day}
          </div>
        ))}
        {/* Calendar days would be dynamically generated here */}
      </div>
    </div>
  );
}