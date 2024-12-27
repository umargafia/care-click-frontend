import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
  },
];

export default function DoctorList() {
  return (
    <div className="space-y-4">
      {doctors.map((doctor) => (
        <Link
          key={doctor.id}
          to={`/doctor/${doctor.id}`}
          className="block"
        >
          <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-500 cursor-pointer transition-colors">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialty}</p>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{doctor.rating}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}