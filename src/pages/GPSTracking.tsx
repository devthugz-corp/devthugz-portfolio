import React, { useCallback, useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, NavigationIcon, RadioIcon, UsersIcon, AlertTriangleIcon, PhoneIcon, LifeBuoyIcon, BellIcon } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import EmergencyReportModal from '../components/EmergencyReportModal';
import { DEFAULT_MAP_SETTINGS, TILE_LAYER_URL, TILE_LAYER_ATTRIBUTION } from '../components/LeafletConfig';
// Fix Leaflet marker icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
export function GPSTracking() {
  const [lng, setLng] = useState(DEFAULT_MAP_SETTINGS.center[1]);
  const [lat, setLat] = useState(DEFAULT_MAP_SETTINGS.center[0]);
  const [zoom, setZoom] = useState(DEFAULT_MAP_SETTINGS.zoom);
  const [selectedFisher, setSelectedFisher] = useState(null);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showEmergencyFab, setShowEmergencyFab] = useState(true);
  const [map, setMap] = useState(null);
  // Mock fishermen location data
  const fishermen = [{
    id: 1,
    name: 'Juan Dela Cruz',
    location: {
      lat: 13.7565,
      lng: 121.0583
    },
    lastUpdate: '2 minutes ago',
    distance: '8.5 km',
    signal: 'Strong',
    status: 'Active',
    phone: '+63 912 345 6789',
    boat: 'Small outrigger (bangka)'
  }, {
    id: 2,
    name: 'Maria Santos',
    location: {
      lat: 13.7612,
      lng: 121.0498
    },
    lastUpdate: '5 minutes ago',
    distance: '10.2 km',
    signal: 'Strong',
    status: 'Active',
    phone: '+63 923 456 7890',
    boat: 'Medium fishing boat'
  }, {
    id: 3,
    name: 'Pedro Reyes',
    location: {
      lat: 13.7421,
      lng: 121.0621
    },
    lastUpdate: '12 minutes ago',
    distance: '15.7 km',
    signal: 'Moderate',
    status: 'Active',
    phone: '+63 934 567 8901',
    boat: 'Small outrigger (bangka)'
  }, {
    id: 4,
    name: 'Ana Gonzales',
    location: {
      lat: 13.7689,
      lng: 121.0412
    },
    lastUpdate: '18 minutes ago',
    distance: '12.3 km',
    signal: 'Weak',
    status: 'Warning',
    phone: '+63 945 678 9012',
    boat: 'Medium fishing boat'
  }, {
    id: 5,
    name: 'Roberto Lim',
    location: {
      lat: 13.7532,
      lng: 121.0701
    },
    lastUpdate: '25 minutes ago',
    distance: '9.8 km',
    signal: 'Strong',
    status: 'Active',
    phone: '+63 956 789 0123',
    boat: 'Small outrigger (bangka)'
  }];
  // Create custom marker icon for fishermen
  const createCustomIcon = status => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${status === 'Active' ? '#22c55e' : '#ef4444'}; width: 20px; height: 20px; border-radius: 50%; position: relative; border: 2px solid white; cursor: pointer;">
              ${status === 'Active' ? `<div style="position: absolute; width: 20px; height: 20px; border-radius: 50%; background-color: rgba(34, 197, 94, 0.4); animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>` : ''}
             </div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
  };
  // Handle map move end event
  const handleMapMoveEnd = () => {
    if (map) {
      const center = map.getCenter();
      setLat(center.lat);
      setLng(center.lng);
      setZoom(map.getZoom());
    }
  };
  const handleTableRowClick = useCallback(fisher => {
    setSelectedFisher(fisher);
    if (map) {
      map.setView([fisher.location.lat, fisher.location.lng], 14, {
        animate: true,
        duration: 1
      });
    }
  }, [map]);
  // Handle marker click
  const handleMarkerClick = useCallback(fisher => {
    setSelectedFisher(fisher);
    if (map) {
      map.setView([fisher.location.lat, fisher.location.lng], 14, {
        animate: true,
        duration: 1
      });
    }
  }, [map]);
  const openEmergencyModal = () => {
    setIsEmergencyModalOpen(true);
    setShowEmergencyFab(false);
  };
  const closeEmergencyModal = () => {
    setIsEmergencyModalOpen(false);
    setShowEmergencyFab(true);
  };
  useEffect(() => {
    setMapLoaded(true);
  }, []);
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">GPS Tracking</h2>
        <p className="text-gray-600 mt-1">
          Monitor real-time locations and report emergencies
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Live Tracking Map
              </h3>
              <div className="flex space-x-2">
                <button className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 shadow-sm hover:bg-gray-50">
                  <NavigationIcon className="h-4 w-4 mr-1" />
                  My Location
                </button>
                <button className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 shadow-sm hover:bg-gray-50">
                  <RadioIcon className="h-4 w-4 mr-1" />
                  Signal Check
                </button>
              </div>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden relative">
              {!mapLoaded ? <div className="h-full flex items-center justify-center bg-blue-50">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
                    <p className="mt-3 text-sm text-gray-600">Loading map...</p>
                  </div>
                </div> : <>
                  <style jsx global>{`
                    @keyframes ping {
                      75%,
                      100% {
                        transform: scale(2);
                        opacity: 0;
                      }
                    }
                  `}</style>
                  <MapContainer center={[lat, lng]} zoom={zoom} style={{
                height: '100%',
                width: '100%'
              }} zoomControl={false} whenCreated={setMap} whenReady={() => setMapLoaded(true)} eventHandlers={{
                moveend: handleMapMoveEnd
              }}>
                    <TileLayer attribution={TILE_LAYER_ATTRIBUTION} url={TILE_LAYER_URL} />
                    <ZoomControl position="topright" />
                    {fishermen.map(fisher => <Marker key={fisher.id} position={[fisher.location.lat, fisher.location.lng]} icon={createCustomIcon(fisher.status)} eventHandlers={{
                  click: () => handleMarkerClick(fisher)
                }}>
                        <Popup>
                          <div className="p-2">
                            <h4 className="font-medium text-sm">
                              {fisher.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {fisher.boat}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              <span className={`inline-block w-2 h-2 rounded-full ${fisher.status === 'Active' ? 'bg-green-500' : 'bg-red-500'} mr-1`}></span>
                              {fisher.status} • {fisher.lastUpdate}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Distance: {fisher.distance}
                            </p>
                          </div>
                        </Popup>
                      </Marker>)}
                  </MapContainer>
                </>}
              {/* Coordinates display */}
              <div className="absolute top-2 left-2 bg-white bg-opacity-80 px-3 py-1 rounded-md text-xs">
                Lng: {lng.toFixed(4)} | Lat: {lat.toFixed(4)} | Zoom:{' '}
                {zoom.toFixed(2)}
              </div>
              {/* Map legend */}
              <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 px-3 py-2 rounded-md text-xs text-gray-700 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1"></span>
                    <span>Active</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1"></span>
                    <span>Warning</span>
                  </div>
                </div>
              </div>
              {/* Emergency button */}
              {showEmergencyFab && <motion.button className="absolute bottom-4 right-4 bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 focus:outline-none" onClick={openEmergencyModal} whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }}>
                  <LifeBuoyIcon className="h-6 w-6" />
                </motion.button>}
            </div>
            <div className="mt-6">
              <h4 className="text-md font-medium text-gray-900 mb-4">
                Active Fishermen
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Distance
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Update
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {fishermen.map(fisher => <tr key={fisher.id} className={`cursor-pointer hover:bg-gray-50 ${selectedFisher?.id === fisher.id ? 'bg-blue-50' : ''}`} onClick={() => handleTableRowClick(fisher)}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {fisher.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {fisher.location.lat.toFixed(4)}° N,{' '}
                            {fisher.location.lng.toFixed(4)}° E
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {fisher.distance}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {fisher.lastUpdate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${fisher.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {fisher.status}
                          </span>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Tracking Overview
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-teal-100">
                  <UsersIcon className="h-6 w-6 text-teal-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Active Fishermen</p>
                  <p className="text-xl font-semibold text-teal-600">5</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-red-100">
                  <AlertTriangleIcon className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Alerts</p>
                  <p className="text-xl font-semibold text-red-600">1</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-blue-100">
                  <NavigationIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Average Distance</p>
                  <p className="text-xl font-semibold text-blue-600">11.3 km</p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button onClick={openEmergencyModal} className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none">
                  <LifeBuoyIcon className="h-5 w-5 mr-2" />
                  Report Emergency
                </button>
              </div>
            </div>
          </div>
          {selectedFisher ? <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Fisher Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-medium text-gray-900">
                    {selectedFisher.name}
                  </h4>
                  <p className="text-sm text-gray-500">{selectedFisher.boat}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-medium">
                      {selectedFisher.location.lat.toFixed(4)}° N,{' '}
                      {selectedFisher.location.lng.toFixed(4)}° E
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Distance from Shore</p>
                    <p className="text-sm font-medium">
                      {selectedFisher.distance}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Signal Status</p>
                    <p className="text-sm font-medium">
                      {selectedFisher.signal}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Last Update</p>
                    <p className="text-sm font-medium">
                      {selectedFisher.lastUpdate}
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-gray-500">Contact</p>
                  <div className="flex items-center mt-1">
                    <PhoneIcon className="h-4 w-4 text-gray-400 mr-1" />
                    <p className="text-sm font-medium">
                      {selectedFisher.phone}
                    </p>
                  </div>
                </div>
                <div className="pt-2 flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-md hover:bg-teal-700 focus:outline-none">
                    Send Message
                  </button>
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none">
                    Track History
                  </button>
                </div>
              </div>
            </div> : <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center py-8">
                <MapPinIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No Fisher Selected
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Click on a fisher from the map or list to view details
                </p>
              </div>
            </div>}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Recent Alerts
              </h3>
              <button className="text-sm text-teal-600 hover:text-teal-800">
                View All
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-start p-3 bg-red-50 rounded-lg">
                <div className="flex-shrink-0">
                  <BellIcon className="h-5 w-5 text-red-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">
                    Storm Warning
                  </p>
                  <p className="text-xs text-red-700 mt-1">
                    Strong winds expected in your area. Consider returning to
                    shore.
                  </p>
                  <p className="text-xs text-red-600 mt-1">10 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
                <div className="flex-shrink-0">
                  <BellIcon className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-yellow-800">
                    Boundary Alert
                  </p>
                  <p className="text-xs text-yellow-700 mt-1">
                    You are approaching a protected marine area. Please adjust
                    your course.
                  </p>
                  <p className="text-xs text-yellow-600 mt-1">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Emergency Report Modal */}
      <EmergencyReportModal isOpen={isEmergencyModalOpen} onClose={closeEmergencyModal} location={{
      lat: parseFloat(lat),
      lng: parseFloat(lng)
    }} />
    </div>;
}