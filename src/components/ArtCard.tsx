import React from 'react';
import { DollarSign, BarChart2, Shield, Share2 } from 'lucide-react';

interface MedicalImageCardProps {
  imageUrl: string;
  scanType: string;
  patientId: string;
  royalties: number;
  usageCount: number;
  verified: boolean;
}

export default function MedicalImageCard({ 
  imageUrl, 
  scanType, 
  patientId, 
  royalties, 
  usageCount,
  verified 
}: MedicalImageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={`Medical scan - ${scanType}`}
          className="w-full h-full object-cover"
        />
        {verified && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full">
            <Shield className="h-4 w-4" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{scanType}</h3>
            <p className="text-sm text-gray-600">ID: {patientId}</p>
          </div>
          <button className="text-gray-600 hover:text-blue-600">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center text-gray-700">
            <DollarSign className="h-5 w-5 mr-1 text-green-600" />
            <span className="font-medium">{royalties} ETH</span>
          </div>
          <div className="flex items-center text-gray-700">
            <BarChart2 className="h-5 w-5 mr-1 text-blue-600" />
            <span>{usageCount} uses</span>
          </div>
        </div>
      </div>
    </div>
  );
}