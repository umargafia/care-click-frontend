import React from 'react';
import { FileText, DollarSign, Heart } from 'lucide-react';

export default function PolicyDetails() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Your Policy Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Policy Number</p>
                <p className="font-medium">POL-123456789</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <DollarSign className="h-6 w-6 text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Coverage Amount</p>
                <p className="font-medium">$500,000</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Heart className="h-6 w-6 text-red-600" />
              <div>
                <p className="text-sm text-gray-500">Plan Type</p>
                <p className="font-medium">Premium Health</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}