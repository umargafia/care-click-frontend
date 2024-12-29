import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Award, Calendar } from 'lucide-react';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import ReviewsList from './components/ReviewsList';
import axios from 'axios';
import BaseUrl from '../../api/BaseUrl';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../app/hooks';

import avater from '../../../assets/avater.png';

export default function DoctorProfilePage() {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState(null);
  const { token } = useAppSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(true);
  const [availableSlots, setAvailableSlots] = useState([]);

  const getDoctor = async () => {
    try {
      const response = await axios.get(`${BaseUrl}doctors/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDoctor(response?.data?.data?.doctor);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);

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
              src={avater}
              alt={doctor?.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">{doctor?.name}</h1>
                <p className="text-blue-600 capitalize ">
                  {doctor?.specialization}
                </p>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-semibold">0.0</span>
                <span className="text-gray-500 ml-1">(0 reviews)</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-blue-500 mr-2" />
                <span>10 years Experience</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                <span>Available Today</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-gray-600">{doctor?.about || 'No about'}</p>
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
