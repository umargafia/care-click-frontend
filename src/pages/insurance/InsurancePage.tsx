import React from 'react';
import InsuranceProviders from './components/InsuranceProviders';
import PolicyDetails from './components/PolicyDetails';
import ClaimHistory from './components/ClaimHistory';

export default function InsurancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Insurance Coverage</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PolicyDetails />
          <div className="mt-8">
            <ClaimHistory />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <InsuranceProviders />
        </div>
      </div>
    </div>
  );
}