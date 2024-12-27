import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const timeSlots = [
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: false },
  { time: '11:00 AM', available: true },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: false },
];

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function AvailabilityCalendar() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Availability</h2>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">March 2024</h3>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Calendar className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map((day, index) => (
            <div key={`weekday-${index}`} className="text-center text-sm font-medium text-gray-500">
              {day.charAt(0)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-medium mb-4">Available Time Slots</h3>
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((slot, index) => (
            <button
              key={`timeslot-${index}`}
              disabled={!slot.available}
              className={`flex items-center justify-center px-4 py-2 rounded-lg text-sm ${
                slot.available
                  ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Clock className="h-4 w-4 mr-2" />
              {slot.time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}