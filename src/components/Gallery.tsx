import React from 'react';
import MedicalImageCard from './ArtCard';
import { Shield, TrendingUp, Users } from 'lucide-react';

const medicalImages = [
  {
    imageUrl: "https://images.unsplash.com/photo-1583911650428-3aacc56a0006",
    scanType: "Brain MRI Scan",
    patientId: "P-2024-001",
    royalties: 0.85,
    usageCount: 12,
    verified: true
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370",
    scanType: "Chest X-Ray",
    patientId: "P-2024-002",
    royalties: 0.65,
    usageCount: 8,
    verified: true
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074",
    scanType: "CT Scan",
    patientId: "P-2024-003",
    royalties: 1.2,
    usageCount: 15,
    verified: true
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    scanType: "Ultrasound",
    patientId: "P-2024-004",
    royalties: 0.45,
    usageCount: 5,
    verified: true
  }
];

const stats = [
  { icon: Shield, label: 'Verified Scans', value: '10,000+' },
  { icon: Users, label: 'Research Partners', value: '500+' },
  { icon: TrendingUp, label: 'Total Royalties', value: '₿125.5' },
];

export default function Gallery() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(37, 99, 235, 0.9), rgba(29, 78, 216, 0.9)), url('https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Secure Medical Imaging Platform
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Empowering patients with control over their medical data while enabling secure access for research and development.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 px-4 sm:px-6 lg:px-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-lg p-5 backdrop-blur-lg">
                  <div className="flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-blue-100" />
                    <h3 className="ml-2 text-lg font-medium text-white">{stat.label}</h3>
                  </div>
                  <p className="mt-2 text-3xl font-semibold text-white text-center">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Verified Medical Imaging Database</h2>
          <p className="mt-2 text-gray-600">Secure, blockchain-verified medical images available for research and development.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {medicalImages.map((image, index) => (
            <MedicalImageCard key={index} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
}