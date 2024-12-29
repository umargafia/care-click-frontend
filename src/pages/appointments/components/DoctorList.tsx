import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import BaseUrl from '../../../api/BaseUrl';
import axios from 'axios';

import avater from '../../../../assets/avater.png';
export default function DoctorList() {
  const { user, token } = useSelector((state: RootState) => state.auth);

  const [doctors, setDoctors] = useState([]);
  const getAvailableDoctors = async () => {
    const response = await axios.get(`${BaseUrl}doctors/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setDoctors(response?.data?.data);
  };
  useEffect(() => {
    getAvailableDoctors();
  }, []);
  return (
    <div className="space-y-4">
      {doctors.map((doctor) => (
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
