import React, { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import BaseUrl from '../../../api/BaseUrl';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { RootState } from '../../../app/store';
import { useAppSelector } from '../../../app/hooks';
import { GridLoader } from 'react-spinners';

const timeSlots = [
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: false },
  { time: '11:00 AM', available: true },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: false },
];

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function AvailabilityCalendar() {
  const { id } = useParams();
  const { token } = useAppSelector((state: RootState) => state.auth);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const navigate = useNavigate();
  const getDoctor = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BaseUrl}doctors/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAvailableSlots(response?.data?.data?.availableSlots);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center -mt-60 items-center h-screen">
        <GridLoader color="#36d7b7" />
      </div>
    );
  }

  const handleBookAppointment = async () => {
    if (!selectedSlot) {
      alert('Please select a time slot');
      return;
    }

    try {
      // Create a new Date object for today
      const today = new Date();

      // Parse the selected time slot
      const [time, period] = selectedSlot.split(' ');
      const [hours, minutes] = time.split(':');

      // Convert to 24-hour format
      let hour = parseInt(hours);
      if (period === 'PM' && hour !== 12) {
        hour += 12;
      } else if (period === 'AM' && hour === 12) {
        hour = 0;
      }

      // Create appointment date by combining today's date with selected time
      const appointmentDate = new Date(
        today.setHours(hour, parseInt(minutes), 0, 0)
      );

      const response = await axios.post(
        `${BaseUrl}appointments/create`,
        {
          doctorId: id,
          time: appointmentDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status === 'success') {
        alert('Appointment booked successfully!');
        getDoctor();
        navigate('/doctor/appointments');
      }
    } catch (error) {
      console.error('Error booking appointment:', error.response.data.message);
      alert('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold mb-4">Availability</h2>
          <h3 className="font-medium">
            {new Date().toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </h3>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-medium mb-4">Available Time Slots</h3>
        <div className="grid grid-cols-2 gap-2">
          {availableSlots.map((slot: any, index: number) => (
            <button
              key={`timeslot-${index}`}
              disabled={!slot.available}
              className={`flex items-center justify-center px-4 py-2 rounded-lg text-sm ${
                slot.available
                  ? selectedSlot === slot.time
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
              onClick={() => setSelectedSlot(slot.time)}
            >
              <Clock className="h-4 w-4 mr-2" />
              {slot.time}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 w-full flex justify-end">
        <button
          className={`px-6 py-2 rounded-lg ${
            selectedSlot
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={handleBookAppointment}
          disabled={!selectedSlot}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
