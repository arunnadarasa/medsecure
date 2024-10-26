import React, { useState } from 'react';
import { HeartPulse, Plus, Wallet2, FileText } from 'lucide-react';
import RequestForm from './RequestForm';

export default function Header() {
  const [showRequestModal, setShowRequestModal] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <HeartPulse className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MedSecure</span>
              <nav className="hidden md:flex ml-8 space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600">Dashboard</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">My Images</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Royalties</a>
                <button 
                  onClick={() => setShowRequestModal(true)}
                  className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                  <FileText className="h-4 w-4 mr-1" />
                  Request Records
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                <Wallet2 className="h-5 w-5 mr-2" />
                Connect Wallet
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Plus className="h-5 w-5 mr-2" />
                Upload Scan
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {showRequestModal && (
        <RequestForm onClose={() => setShowRequestModal(false)} />
      )}
    </>
  );
}