import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    date: '2024-03-10',
    comment: 'Excellent doctor! Very thorough and professional.',
    helpful: 12,
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    date: '2024-03-05',
    comment: 'Great experience overall. Would recommend.',
    helpful: 8,
  },
];

export default function ReviewsList() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Patient Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{review.name}</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-gray-600">{review.comment}</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{review.helpful} found this helpful</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}