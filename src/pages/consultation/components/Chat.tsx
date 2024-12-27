import React from 'react';
import { Send } from 'lucide-react';

export default function Chat() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Chat</h3>
      </div>
      
      <div className="h-64 overflow-y-auto p-4">
        {/* Chat messages would go here */}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type your message..."
          />
          <button className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}