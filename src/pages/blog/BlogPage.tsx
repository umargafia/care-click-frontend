import React from 'react';
import BlogList from './components/BlogList';
import BlogCategories from './components/BlogCategories';
import FeaturedPosts from './components/FeaturedPosts';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Health & Wellness Blog</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FeaturedPosts />
          <div className="mt-8">
            <BlogList />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <BlogCategories />
        </div>
      </div>
    </div>
  );
}