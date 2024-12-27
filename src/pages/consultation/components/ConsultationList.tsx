import React from 'react';
import { Clock } from 'lucide-react';

const consultations = [
  {
    id: 1,
    doctor: 'Dr. Sarah Wilson',
    time: '10:00 AM',
    status: 'upcoming',
  },
  {
    id: 2,
    doctor: 'Dr. Michael Chen',
    time: '2:30 PM',
    status: 'completed',
  },
];

export default function ConsultationList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Your Consultations</h3>
      </div>
      
      <div className="divide-y">
        {consultations.map((consultation) => (
          <div key={consultation.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{consultation.doctor}</h4>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  {consultation.time}
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                consultation.status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {consultation.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}