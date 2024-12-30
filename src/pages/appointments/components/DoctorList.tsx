import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import BaseUrl from '../../../api/BaseUrl';
import axios from 'axios';

import avater from '../../../../assets/avater.png';
import { Loader } from 'lucide-react';
export default function DoctorList() {
  const { user, token } = useSelector((state: RootState) => state.auth);

  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const getAvailableDoctors = async () => {
    setLoading(true);
    const response = await axios.get(`${BaseUrl}doctors/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setDoctors(response?.data?.data);
  };
  useEffect(() => {
    getAvailableDoctors();
  }, []);
  const filteredDoctors = doctors.filter((doctor) => {
    return doctor?.name?.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-56">
        <Loader className="animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      {filteredDoctors.map((doctor) => (
        <Link key={doctor._id} to={`/doctor/${doctor._id}`} className="block">
          <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-500 cursor-pointer transition-colors">
            <img
              src={doctor.image || avater}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">{doctor.name}</h3>
              <p className="text-sm text-gray-500 capitalize">
                {doctor.specialization}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
