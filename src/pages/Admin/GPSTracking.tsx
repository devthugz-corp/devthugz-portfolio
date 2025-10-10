import React from 'react';
import GPSTrackingMap from '../../components/GPSTrackingMap';
export function AdminGPSTracking() {
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">GPS Tracking</h2>
        <p className="text-gray-600 mt-1">
          Monitor real-time locations of registered fishermen in your region
        </p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <GPSTrackingMap isSuperAdmin={false} />
      </div>
    </div>;
}