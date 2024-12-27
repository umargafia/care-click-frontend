import React from 'react';
import { Calendar, User } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Understanding Heart Health',
    excerpt: 'Learn about the latest research in cardiovascular health and prevention.',
    author: 'Dr. Sarah Wilson',
    date: '2024-03-15',
    category: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Mental Health in the Digital Age',
    excerpt: 'Tips for maintaining mental wellness in our connected world.',
    author: 'Dr. Michael Chen',
    date: '2024-03-10',
    category: 'Mental Health',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
  },
];

export default function BlogList() {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
              <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                {post.category}
              </span>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Read more →
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}