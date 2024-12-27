import React from 'react';
import { Calendar, Video, CreditCard, Shield } from 'lucide-react';

const features = [
  {
    name: 'Easy Appointment Booking',
    description: 'Schedule appointments with healthcare professionals at your convenience.',
    icon: Calendar,
  },
  {
    name: 'Virtual Consultations',
    description: 'Connect with doctors remotely through secure video calls.',
    icon: Video,
  },
  {
    name: 'Secure Payments',
    description: 'Safe and hassle-free payment options for all services.',
    icon: CreditCard,
  },
  {
    name: 'Insurance Coverage',
    description: 'Seamless integration with major insurance providers.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Healthcare made simple
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to manage your healthcare journey in one place.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}