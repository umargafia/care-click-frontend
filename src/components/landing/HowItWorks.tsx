import React from 'react';
import { Search, Calendar, VideoIcon, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Search Doctor',
    description: 'Find the right doctor based on specialty and location',
    icon: Search,
  },
  {
    title: 'Book Appointment',
    description: 'Select a convenient time slot and book instantly',
    icon: Calendar,
  },
  {
    title: 'Get Consultation',
    description: 'Visit the doctor or get online consultation',
    icon: VideoIcon,
  },
  {
    title: 'Follow Up',
    description: 'Get follow-up care and track your health journey',
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Process
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get started with CareClik in 4 simple steps
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
