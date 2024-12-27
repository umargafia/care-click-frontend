import React from 'react';
import { Shield } from 'lucide-react';

const providers = [
  {
    id: 1,
    name: 'Blue Cross',
    logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=200&h=200',
    coverage: ['Primary Care', 'Specialists', 'Emergency'],
  },
  {
    id: 2,
    name: 'Aetna',
    logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=200&h=200',
    coverage: ['Hospital Care', 'Prescriptions', 'Mental Health'],
  },
];

export default function InsuranceProviders() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Supported Providers</h3>
      </div>
      
      <div className="divide-y">
        {providers.map((provider) => (
          <div key={provider.id} className="p-4">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h4 className="font-medium">{provider.name}</h4>
                <div className="mt-1 flex flex-wrap gap-2">
                  {provider.coverage.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}