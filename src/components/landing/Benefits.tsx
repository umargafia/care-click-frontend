import React from 'react';
import { Clock, Shield, Heart, Award } from 'lucide-react';

const benefits = [
  {
    title: '24/7 Availability',
    description: 'Book appointments anytime, anywhere',
    icon: Clock,
  },
  {
    title: 'Secure Platform',
    description: 'Your health data is protected and encrypted',
    icon: Shield,
  },
  {
    title: 'Quality Healthcare',
    description: 'Access to verified and experienced doctors',
    icon: Heart,
  },
  {
    title: 'Easy Management',
    description: 'Track appointments and medical records effortlessly',
    icon: Award,
  },
];

export default function Benefits() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Benefits
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose CareClik?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience healthcare the modern way
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
