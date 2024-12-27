import React from 'react';
import { Tag } from 'lucide-react';

const categories = [
  { id: 1, name: 'Cardiology', count: 12 },
  { id: 2, name: 'Mental Health', count: 8 },
  { id: 3, name: 'Nutrition', count: 15 },
  { id: 4, name: 'Pediatrics', count: 6 },
  { id: 5, name: 'Fitness', count: 10 },
];

export default function BlogCategories() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Categories</h3>
      </div>
      
      <div className="p-4">
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center">
                <Tag className="h-4 w-4 text-blue-600 mr-2" />
                <span>{category.name}</span>
              </div>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}