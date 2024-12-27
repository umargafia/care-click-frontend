import React from 'react';
import { Video, Mic, MicOff, VideoOff, Phone } from 'lucide-react';

export default function VideoCall() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 bg-gray-800">
        <div className="flex items-center justify-center">
          <Video className="h-16 w-16 text-gray-400" />
        </div>
      </div>
      
      <div className="bg-gray-900 p-4">
        <div className="flex justify-center space-x-4">
          <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white">
            <Mic className="h-6 w-6" />
          </button>
          <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white">
            <Video className="h-6 w-6" />
          </button>
          <button className="p-3 rounded-full bg-red-600 hover:bg-red-700 text-white">
            <Phone className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}