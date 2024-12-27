import React from 'react';
import { Video, MessageCircle, Phone } from 'lucide-react';
import ConsultationList from './components/ConsultationList';
import VideoCall from './components/VideoCall';
import Chat from './components/Chat';

export default function ConsultationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Virtual Consultation</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VideoCall />
          <div className="mt-8">
            <Chat />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <ConsultationList />
        </div>
      </div>
    </div>
  );
}