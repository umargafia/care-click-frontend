import React, { useState } from 'react';
import { Mail, Lock, User, Stethoscope } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import BaseUrl from '../../../api/BaseUrl';

export default function SignupForm() {
  const [userType, setUserType] = useState<'patient' | 'doctor'>('patient');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    specialty: '',
  });
  const [error, setError] = useState<any>('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    console.log(formData);

    try {
      setLoading(true);
      const endpoint =
        userType === 'patient' ? 'auth/register/user' : 'auth/register/doctor';

      const response = await axios.post(BaseUrl + endpoint, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        ...(userType === 'doctor' && { specialty: formData.specialty }),
      });
      setLoading(false);
      const data = response.data;

      console.log(data);
      if (data.status !== 'success') {
        throw new Error(data.message || 'Signup failed');
      }

      // Store the token in localStorage
      localStorage.setItem('token', data.token);

      // Redirect based on user type
      navigate(userType === 'patient' ? '/appointments' : '/doctor/dashboard');
    } catch (err: any) {
      setError(
        err instanceof AxiosError
          ? err.response?.data?.message
          : 'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {loading && <div className="text-center">Loading...</div>}
      {error && (
        <div className="p-3 text-sm text-red-600 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      <div className="flex rounded-md shadow-sm">
        <button
          type="button"
          onClick={() => setUserType('patient')}
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-md ${
            userType === 'patient'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
        >
          Patient
        </button>
        <button
          type="button"
          onClick={() => setUserType('doctor')}
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-md ${
            userType === 'doctor'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
        >
          Doctor
        </button>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="John Doe"
          />
        </div>
      </div>

      {userType === 'doctor' && (
        <div>
          <label
            htmlFor="specialty"
            className="block text-sm font-medium text-gray-700"
          >
            Specialty
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Stethoscope className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="specialty"
              name="specialty"
              type="text"
              required
              value={formData.specialty}
              onChange={handleChange}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="e.g., Cardiologist"
            />
          </div>
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {loading ? 'Creating account...' : 'Create account'}
        </button>
      </div>

      <div className="text-sm text-center">
        <span className="text-gray-600">Already have an account?</span>{' '}
        <Link
          to="/login"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
}
