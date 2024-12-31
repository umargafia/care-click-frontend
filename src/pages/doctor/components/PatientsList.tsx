import React from 'react';
import { User } from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'umar musa',
    age: 32,
    lastVisit: '2024-03-15',
  },
  {
    id: 2,
    name: 'Abdulrahaman Musa',
    age: 45,
    lastVisit: '2024-03-10',
  },
];

export default function PatientsList() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Patients</h2>
      <div className="space-y-4">
        {patients.map((patient) => (
          <div key={patient.id} className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="bg-gray-100 p-2 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium">{patient.name}</h3>
              <p className="text-sm text-gray-500">
                Age: {patient.age} | Last Visit: {patient.lastVisit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}