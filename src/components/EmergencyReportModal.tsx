import React, { useState } from 'react';
import { AlertTriangle as AlertTriangleIcon, X as XIcon, MapPin as MapPinIcon, MessageSquare as MessageSquareIcon, Camera as CameraIcon, Send as SendIcon } from 'lucide-react';
interface EmergencyReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: {
    lat: number;
    lng: number;
  };
}
const EmergencyReportModal: React.FC<EmergencyReportModalProps> = ({
  isOpen,
  onClose,
  location
}) => {
  const [emergencyType, setEmergencyType] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  if (!isOpen) return null;
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending to Firebase
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setEmergencyType('');
        setDescription('');
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 1500);
  };
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" onClick={e => e.stopPropagation()}>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <AlertTriangleIcon className="h-6 w-6 text-red-600" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Emergency Report
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Submit an emergency report to alert authorities. Your
                    current location will be shared.
                  </p>
                </div>
              </div>
              <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-500" onClick={onClose}>
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            {isSubmitted ? <div className="mt-6 text-center py-6">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  Report Submitted
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Your emergency report has been sent to the authorities.
                </p>
              </div> : <form onSubmit={handleSubmit} className="mt-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Emergency Type
                  </label>
                  <select value={emergencyType} onChange={e => setEmergencyType(e.target.value)} required className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm">
                    <option value="">Select emergency type</option>
                    <option value="medical">Medical Emergency</option>
                    <option value="boat">Boat Malfunction</option>
                    <option value="weather">Severe Weather</option>
                    <option value="security">Security Threat</option>
                    <option value="other">Other Emergency</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea value={description} onChange={e => setDescription(e.target.value)} required rows={3} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" placeholder="Describe your emergency situation..."></textarea>
                </div>
                <div className="mb-4 p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center text-sm text-gray-700">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>
                      Your location: {location.lat.toFixed(4)}°N,{' '}
                      {location.lng.toFixed(4)}°E
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2 mb-4">
                  <button type="button" className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                    <CameraIcon className="h-5 w-5 mr-2" />
                    Add Photo
                  </button>
                  <button type="button" className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                    <MessageSquareIcon className="h-5 w-5 mr-2" />
                    Request Call
                  </button>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="submit" disabled={isSubmitting || !emergencyType || !description} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg> : <>
                        <SendIcon className="h-5 w-5 mr-2" />
                        Submit Report
                      </>}
                  </button>
                  <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm" onClick={onClose}>
                    Cancel
                  </button>
                </div>
              </form>}
          </div>
        </div>
      </div>
    </div>;
};
export default EmergencyReportModal;