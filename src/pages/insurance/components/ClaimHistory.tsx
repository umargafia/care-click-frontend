import React from 'react';
import { Calendar, DollarSign } from 'lucide-react';

const claims = [
  {
    id: 1,
    date: '2024-03-15',
    type: 'Medical Consultation',
    amount: 150,
    status: 'approved',
  },
  {
    id: 2,
    date: '2024-03-01',
    type: 'Prescription Medication',
    amount: 75,
    status: 'pending',
  },
];

export default function ClaimHistory() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Recent Claims</h3>
      </div>
      
      <div className="divide-y">
        {claims.map((claim) => (
          <div key={claim.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{claim.type}</h4>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  {claim.date}
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-medium">{claim.amount}</span>
                </div>
                <span className={`mt-1 inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  claim.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {claim.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}