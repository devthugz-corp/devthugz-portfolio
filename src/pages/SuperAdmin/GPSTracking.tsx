import React from 'react';
import GPSTrackingMap from '../../components/GPSTrackingMap';
export const GPSTracking: React.FC = () => {
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">GPS Tracking</h1>
        <p className="text-sm text-gray-500">
          Monitor real-time locations of registered fishermen across all regions
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <GPSTrackingMap isSuperAdmin={true} />
      </div>
    </div>;
};