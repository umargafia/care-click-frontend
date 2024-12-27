import React from 'react';
import { useParams } from 'react-router-dom';
import { Video, Mic, MicOff, VideoOff, Phone, MessageSquare } from 'lucide-react';

export default function VideoConsultation() {
  const { appointmentId } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
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
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow h-full">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Patient Notes</h2>
            </div>
            <div className="p-4">
              <textarea
                className="w-full h-48 p-2 border rounded-lg resize-none"
                placeholder="Add consultation notes..."
              />
              <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Save Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}