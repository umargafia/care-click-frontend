import React from 'react';

const featuredPosts = [
  {
    id: 1,
    title: 'COVID-19: Latest Updates and Prevention',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=800',
    category: 'Health News',
  },
  {
    id: 2,
    title: 'Healthy Living: A Guide to Wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    category: 'Lifestyle',
  },
];

export default function FeaturedPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {featuredPosts.map((post) => (
        <div
          key={post.id}
          className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 p-6">
              <span className="text-sm text-white/80">{post.category}</span>
              <h3 className="text-xl font-bold text-white mt-2">{post.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}