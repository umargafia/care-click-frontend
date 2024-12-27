import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';
import EditMedicalHistory from './EditMedicalHistory';

const medicalRecords = [
  {
    id: 1,
    type: 'Blood Test',
    date: '2024-03-10',
    doctor: 'Dr. Sarah Wilson',
    status: 'normal',
  },
  {
    id: 2,
    type: 'X-Ray',
    date: '2024-03-05',
    doctor: 'Dr. Michael Chen',
    status: 'attention',
  },
];

export default function MedicalHistory() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Medical History</h2>
        <EditMedicalHistory />
      </div>
      
      <div className="space-y-4">
        {medicalRecords.map((record) => (
          <div key={record.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                <div>
                  <h3 className="font-medium">{record.type}</h3>
                  <p className="text-sm text-gray-500">{record.doctor}</p>
                </div>
              </div>
              {record.status === 'attention' && (
                <AlertCircle className="h-5 w-5 text-yellow-500" />
              )}
            </div>
            <p className="mt-2 text-sm text-gray-500">{record.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}