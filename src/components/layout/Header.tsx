import React from 'react';
import { Menu, X, User, Bell, Layout, Calendar, Video } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isDoctorRoute = location.pathname.startsWith('/doctor');

  const doctorNavItems = [
    { path: '/doctor/dashboard', label: 'Dashboard', icon: Layout },
    { path: '/doctor/appointments', label: 'Appointments', icon: Calendar },
  ];

  const patientNavItems = [
    { path: '/appointments', label: 'Book Appointment', icon: Calendar },
    { path: '/consultation', label: 'Consultation', icon: Video },
  ];

  const navItems = isDoctorRoute ? doctorNavItems : patientNavItems;

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={isDoctorRoute ? "/doctor/dashboard" : "/"} className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">CareClick</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <item.icon className="w-5 h-5 mr-1" />
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <Link to="/notifications" className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-600" />
              </Link>
              <Link 
                to={isDoctorRoute ? "/doctor/profile" : "/profile"} 
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <User className="w-5 h-5 text-gray-600" />
              </Link>
              <Link 
                to="/login" 
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.label}
              </Link>
            ))}
            <Link
              to="/notifications"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <Bell className="w-5 h-5 mr-2" />
              Notifications
            </Link>
            <Link
              to={isDoctorRoute ? "/doctor/profile" : "/profile"}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <User className="w-5 h-5 mr-2" />
              Profile
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}