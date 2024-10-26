import React from 'react';
import { Clock, TrendingUp, Shield, Star } from 'lucide-react';

export default function FilterBar() {
  return (
    <div className="bg-white border-b sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 py-4">
          <button className="flex items-center text-blue-600 border-b-2 border-blue-600 pb-1">
            <Shield className="h-5 w-5 mr-2" />
            <span className="font-medium">Verified Scans</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-600">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium">Recent</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-600">
            <TrendingUp className="h-5 w-5 mr-2" />
            <span className="font-medium">Top Value</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-600">
            <Star className="h-5 w-5 mr-2" />
            <span className="font-medium">Featured Research</span>
          </button>
        </div>
      </div>
    </div>
  );
}