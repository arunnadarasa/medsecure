import React, { useState } from 'react';
import { X, Download, Clipboard } from 'lucide-react';

interface RequestFormProps {
  onClose: () => void;
}

export default function RequestForm({ onClose }: RequestFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    hospitalName: '',
    medicalRecordNumber: '',
    dateRange: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateRequest = () => {
    const request = `
Subject: Request for Personal Medical Images and DICOM Data Under Freedom of Information Act

Dear Medical Records Department,

I am writing to request copies of my medical imaging records in DICOM format, including all associated metadata, under the Freedom of Information Act and patient data access rights.

Personal Information:
- Full Name: ${formData.fullName}
- Date of Birth: ${formData.dateOfBirth}
- Medical Record Number: ${formData.medicalRecordNumber}

Request Details:
- Facility: ${formData.hospitalName}
- Date Range of Records: ${formData.dateRange}
- Format Requested: DICOM format with complete metadata

I will provide a USB drive to collect these images in person, in accordance with your facility's security protocols. Please inform me of:
1. Any specific requirements for the USB drive
2. Available pickup times
3. Any identification documents needed
4. Any applicable fees

Contact Information:
Email: ${formData.email}
Phone: ${formData.phone}

I understand that you may need to verify my identity before processing this request. Please contact me if you require any additional information.

Thank you for your assistance in this matter.

Sincerely,
${formData.fullName}
    `.trim();

    return request;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateRequest());
  };

  const downloadRequest = () => {
    const element = document.createElement('a');
    const file = new Blob([generateRequest()], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'medical-records-request.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Generate Records Request</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Hospital/Facility Name</label>
              <input
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Medical Record Number</label>
              <input
                type="text"
                name="medicalRecordNumber"
                value={formData.medicalRecordNumber}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date Range of Records</label>
              <input
                type="text"
                name="dateRange"
                placeholder="e.g., January 2023 - Present"
                value={formData.dateRange}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Clipboard className="h-4 w-4 mr-2" />
              Copy to Clipboard
            </button>
            <button
              onClick={downloadRequest}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}