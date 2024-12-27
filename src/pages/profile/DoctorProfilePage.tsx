import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Award, Calendar } from 'lucide-react';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import ReviewsList from './components/ReviewsList';

const doctors = {
  1: {
    id: 1,
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    experience: '15+ Years',
    rating: 4.8,
    reviews: 128,
    about: 'Dr. Wilson is a board-certified cardiologist specializing in preventive cardiology and heart disease management.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
  },
  2: {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: '12+ Years',
    rating: 4.9,
    reviews: 156,
    about: 'Dr. Chen is a renowned neurologist with expertise in treating complex neurological conditions.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
  },
};

export default function DoctorProfilePage() {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors[id as keyof typeof doctors];

  if (!doctor) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Doctor not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-6">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">{doctor.name}</h1>
                <p className="text-blue-600">{doctor.specialty}</p>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-semibold">{doctor.rating}</span>
                <span className="text-gray-500 ml-1">({doctor.reviews} reviews)</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-blue-500 mr-2" />
                <span>{doctor.experience} Experience</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                <span>Available Today</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-gray-600">{doctor.about}</p>
            </div>

            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <AvailabilityCalendar />
        <ReviewsList />
      </div>
    </div>
  );
}