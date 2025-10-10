import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, LayersControl, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FisherLocation, getAllFisherLocations, getRegionFisherLocations, getMockFisherLocations } from '../services/firebase';
import { useAuth } from '../contexts/AuthContext';
import { SearchIcon, UserIcon, PhoneIcon, MapPinIcon, ClockIcon, InfoIcon, RefreshCwIcon, AlertTriangleIcon } from 'lucide-react';
// Fix Leaflet marker icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// Initialize default icon
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
// Map configuration
const TILE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// Satellite layer
const SATELLITE_LAYER_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const SATELLITE_LAYER_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
// Default map center (Philippines)
const DEFAULT_CENTER = [12.8797, 121.774];
const DEFAULT_ZOOM = 6;
// Update interval in milliseconds
const UPDATE_INTERVAL = 10000; // 10 seconds
// Map view updater component
const MapViewUpdater = ({
  center,
  zoom
}) => {
  const map = useMap();
  useEffect(() => {
    if (center && zoom) {
      map.setView(center, zoom);
    }
  }, [map, center, zoom]);
  return null;
};
interface GPSTrackingMapProps {
  isSuperAdmin?: boolean;
}
const GPSTrackingMap: React.FC<GPSTrackingMapProps> = ({
  isSuperAdmin = false
}) => {
  const {
    user
  } = useAuth();
  const [fisherLocations, setFisherLocations] = useState<FisherLocation[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<FisherLocation[]>([]);
  const [selectedFisher, setSelectedFisher] = useState<FisherLocation | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [mapCenter, setMapCenter] = useState<[number, number]>(DEFAULT_CENTER);
  const [mapZoom, setMapZoom] = useState<number>(DEFAULT_ZOOM);
  const [viewMode, setViewMode] = useState<'all' | 'active' | 'alerts'>('all');
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  // Reference to unsubscribe from Firebase listener
  const unsubscribeRef = useRef<() => void | undefined>();
  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  // Set up Firebase listener based on user role
  useEffect(() => {
    setIsLoading(true);
    // Cleanup previous listener
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
    }
    if (isOffline) {
      // Use mock data when offline
      setFisherLocations(getMockFisherLocations());
      setIsLoading(false);
      setLastUpdated(new Date());
      return;
    }
    // For development/testing, use mock data
    // In production, this would use the Firebase listeners
    const useMockData = true; // Change to false to use actual Firebase
    if (useMockData) {
      setFisherLocations(getMockFisherLocations());
      setIsLoading(false);
      setLastUpdated(new Date());
      // Simulate real-time updates
      const intervalId = setInterval(() => {
        const mockData = getMockFisherLocations().map(location => {
          // Add some random movement to simulate real-time changes
          return {
            ...location,
            latitude: location.latitude + (Math.random() - 0.5) * 0.01,
            longitude: location.longitude + (Math.random() - 0.5) * 0.01,
            lastUpdated: new Date()
          };
        });
        setFisherLocations(mockData);
        setLastUpdated(new Date());
      }, UPDATE_INTERVAL);
      return () => clearInterval(intervalId);
    } else {
      try {
        // Use the appropriate Firebase listener based on user role
        if (isSuperAdmin) {
          // Super Admin can see all fishers
          unsubscribeRef.current = getAllFisherLocations(locations => {
            setFisherLocations(locations);
            setIsLoading(false);
            setLastUpdated(new Date());
          });
        } else if (user?.region) {
          // Admin can only see fishers in their region
          unsubscribeRef.current = getRegionFisherLocations(user.region, locations => {
            setFisherLocations(locations);
            setIsLoading(false);
            setLastUpdated(new Date());
          });
        }
      } catch (error) {
        console.error('Error setting up Firebase listener:', error);
        setIsLoading(false);
        // Fallback to mock data if Firebase fails
        setFisherLocations(getMockFisherLocations());
      }
      return () => {
        if (unsubscribeRef.current) {
          unsubscribeRef.current();
        }
      };
    }
  }, [isSuperAdmin, user, isOffline]);
  // Filter locations based on search term and view mode
  useEffect(() => {
    let filtered = fisherLocations;
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(fisher => fisher.name.toLowerCase().includes(term) || fisher.userId.toLowerCase().includes(term) || fisher.boatId && fisher.boatId.toLowerCase().includes(term));
    }
    // Filter by view mode
    if (viewMode === 'active') {
      filtered = filtered.filter(fisher => fisher.status === 'active');
    } else if (viewMode === 'alerts') {
      filtered = filtered.filter(fisher => fisher.alert !== null);
    }
    setFilteredLocations(filtered);
  }, [fisherLocations, searchTerm, viewMode]);
  // Create custom marker icon based on fisher status and alert
  const createCustomMarkerIcon = (status: string, alert: string | null) => {
    let color = '#6b7280'; // gray for inactive
    if (status === 'active') {
      color = '#22c55e'; // green for active
      if (alert === 'sos') {
        color = '#ef4444'; // red for SOS
      } else if (alert === 'weather') {
        color = '#eab308'; // yellow for weather warning
      } else if (alert === 'boundary') {
        color = '#f97316'; // orange for boundary warning
      }
    }
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; position: relative;">
              ${status === 'active' ? `<div style="position: absolute; width: 16px; height: 16px; border-radius: 50%; background-color: rgba(${color === '#22c55e' ? '34, 197, 94' : color === '#ef4444' ? '239, 68, 68' : color === '#eab308' ? '234, 179, 8' : color === '#f97316' ? '249, 115, 22' : '107, 114, 128'}, 0.5); animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>` : ''}
             </div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
  };
  // Format time since last update
  const formatTimeSince = (date: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    if (diffSec < 60) {
      return `${diffSec} seconds ago`;
    }
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) {
      return `${diffMin} minutes ago`;
    }
    const diffHour = Math.floor(diffMin / 60);
    if (diffHour < 24) {
      return `${diffHour} hours ago`;
    }
    const diffDay = Math.floor(diffHour / 24);
    return `${diffDay} days ago`;
  };
  // Handle marker click
  const handleMarkerClick = (fisher: FisherLocation) => {
    setSelectedFisher(fisher);
    setMapCenter([fisher.latitude, fisher.longitude]);
    setMapZoom(14);
  };
  // Handle fisher selection from the list
  const handleFisherClick = (fisher: FisherLocation) => {
    setSelectedFisher(fisher);
    setMapCenter([fisher.latitude, fisher.longitude]);
    setMapZoom(14);
  };
  // Get alert badge component
  const getAlertBadge = (alert: string | null) => {
    if (!alert) return null;
    switch (alert) {
      case 'sos':
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            SOS Emergency
          </span>;
      case 'weather':
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Weather Warning
          </span>;
      case 'boundary':
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
            Boundary Alert
          </span>;
      default:
        return null;
    }
  };
  return <div className="h-full">
      {/* Map Controls */}
      <div className="mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-medium text-gray-900">Live Tracking</h2>
          <div className="flex space-x-2">
            <button className={`px-3 py-1 text-xs font-medium rounded-full ${viewMode === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`} onClick={() => setViewMode('all')}>
              All Fishers
            </button>
            <button className={`px-3 py-1 text-xs font-medium rounded-full ${viewMode === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`} onClick={() => setViewMode('active')}>
              Active Only
            </button>
            <button className={`px-3 py-1 text-xs font-medium rounded-full ${viewMode === 'alerts' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'} flex items-center`} onClick={() => setViewMode('alerts')}>
              <AlertTriangleIcon className="h-3 w-3 mr-1" />
              Alerts
            </button>
          </div>
        </div>
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Search by name or boat ID..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
      </div>
      {/* Update frequency indicator */}
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          <RefreshCwIcon className="h-4 w-4 mr-1" />
          <span>
            Updates every 10 seconds • Last updated:{' '}
            {formatTimeSince(lastUpdated)}
          </span>
        </div>
        {isOffline && <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Offline Mode
          </span>}
      </div>
      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map container */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-4 h-[600px]">
            <div className="relative h-full">
              {isLoading ? <div className="h-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
                    <p className="mt-3 text-sm text-gray-600">Loading map...</p>
                  </div>
                </div> : <>
                  {/* CSS for ping animation */}
                  <style jsx global>{`
                    @keyframes ping {
                      75%,
                      100% {
                        transform: scale(2);
                        opacity: 0;
                      }
                    }
                  `}</style>
                  <MapContainer center={mapCenter} zoom={mapZoom} style={{
                height: '100%',
                width: '100%',
                borderRadius: '0.5rem'
              }} zoomControl={false} whenCreated={() => setMapLoaded(true)}>
                    <MapViewUpdater center={mapCenter} zoom={mapZoom} />
                    <LayersControl position="topright">
                      <LayersControl.BaseLayer checked name="OpenStreetMap">
                        <TileLayer attribution={TILE_LAYER_ATTRIBUTION} url={TILE_LAYER_URL} />
                      </LayersControl.BaseLayer>
                      <LayersControl.BaseLayer name="Satellite">
                        <TileLayer attribution={SATELLITE_LAYER_ATTRIBUTION} url={SATELLITE_LAYER_URL} />
                      </LayersControl.BaseLayer>
                    </LayersControl>
                    <ZoomControl position="topright" />
                    {/* Fisher markers */}
                    {filteredLocations.map(fisher => <Marker key={fisher.userId} position={[fisher.latitude, fisher.longitude]} icon={createCustomMarkerIcon(fisher.status, fisher.alert)} eventHandlers={{
                  click: () => handleMarkerClick(fisher)
                }}>
                        <Popup>
                          <div className="p-2">
                            <h4 className="font-medium text-sm">
                              {fisher.name}
                            </h4>
                            {fisher.boatId && <p className="text-xs text-gray-500">
                                Boat ID: {fisher.boatId}
                              </p>}
                            <p className="text-xs text-gray-500 mt-1">
                              <span className={`inline-block w-2 h-2 rounded-full ${fisher.status === 'active' ? 'bg-green-500' : 'bg-gray-500'} mr-1`}></span>
                              {fisher.status === 'active' ? 'Active' : 'Inactive'}{' '}
                              • {formatTimeSince(fisher.lastUpdated)}
                            </p>
                            {fisher.region && <p className="text-xs text-gray-500 mt-1">
                                Region: {fisher.region}
                              </p>}
                            {fisher.alert && <div className="mt-2">
                                {getAlertBadge(fisher.alert)}
                              </div>}
                          </div>
                        </Popup>
                      </Marker>)}
                  </MapContainer>
                  {/* Map legend */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow p-3 z-[1000]">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center">
                        <div className="p-1 rounded-full bg-green-500 mr-2">
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-xs text-gray-700">Active</span>
                      </div>
                      <div className="flex items-center">
                        <div className="p-1 rounded-full bg-gray-500 mr-2">
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-xs text-gray-700">Inactive</span>
                      </div>
                      <div className="flex items-center">
                        <div className="p-1 rounded-full bg-red-500 mr-2">
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-xs text-gray-700">SOS</span>
                      </div>
                      <div className="flex items-center">
                        <div className="p-1 rounded-full bg-yellow-500 mr-2">
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-xs text-gray-700">Weather</span>
                      </div>
                    </div>
                  </div>
                </>}
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Fisher list */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Fishers</h3>
            {filteredLocations.length === 0 ? <div className="text-center py-8">
                <UserIcon className="mx-auto h-8 w-8 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No fishers found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchTerm ? 'Try adjusting your search' : 'No fishers are currently active'}
                </p>
              </div> : <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {filteredLocations.map(fisher => <div key={fisher.userId} className={`p-3 border rounded-lg cursor-pointer ${selectedFisher?.userId === fisher.userId ? 'border-teal-300 bg-teal-50' : 'border-gray-200 hover:bg-gray-50'}`} onClick={() => handleFisherClick(fisher)}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 rounded-full p-2 ${fisher.status === 'active' ? fisher.alert === 'sos' ? 'bg-red-100 text-red-600' : fisher.alert === 'weather' ? 'bg-yellow-100 text-yellow-600' : fisher.alert === 'boundary' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                          <UserIcon className="h-4 w-4" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {fisher.name}
                          </p>
                          {fisher.boatId && <p className="text-xs text-gray-500">
                              {fisher.boatId}
                            </p>}
                          <div className="flex items-center mt-1">
                            <div className={`h-2 w-2 rounded-full ${fisher.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                            <span className="ml-1 text-xs text-gray-500">
                              {fisher.status === 'active' ? 'Active' : 'Inactive'}{' '}
                              • {formatTimeSince(fisher.lastUpdated)}
                            </span>
                          </div>
                        </div>
                      </div>
                      {fisher.alert && <div className="ml-2">
                          {fisher.alert === 'sos' && <div className="p-1 rounded-full bg-red-100">
                              <AlertTriangleIcon className="h-4 w-4 text-red-600" />
                            </div>}
                          {fisher.alert === 'weather' && <div className="p-1 rounded-full bg-yellow-100">
                              <AlertTriangleIcon className="h-4 w-4 text-yellow-600" />
                            </div>}
                          {fisher.alert === 'boundary' && <div className="p-1 rounded-full bg-orange-100">
                              <AlertTriangleIcon className="h-4 w-4 text-orange-600" />
                            </div>}
                        </div>}
                    </div>
                  </div>)}
              </div>}
          </div>
          {/* Selected fisher details */}
          {selectedFisher && <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Fisher Details
              </h3>
              {selectedFisher.alert && <div className={`p-3 rounded-lg mb-4 ${selectedFisher.alert === 'sos' ? 'bg-red-50 border border-red-200' : selectedFisher.alert === 'weather' ? 'bg-yellow-50 border border-yellow-200' : 'bg-orange-50 border border-orange-200'}`}>
                  <div className="flex items-start">
                    <AlertTriangleIcon className={`h-5 w-5 mr-2 ${selectedFisher.alert === 'sos' ? 'text-red-500' : selectedFisher.alert === 'weather' ? 'text-yellow-500' : 'text-orange-500'}`} />
                    <div>
                      <p className={`text-sm font-medium ${selectedFisher.alert === 'sos' ? 'text-red-800' : selectedFisher.alert === 'weather' ? 'text-yellow-800' : 'text-orange-800'}`}>
                        {selectedFisher.alert === 'sos' ? 'SOS Emergency Alert' : selectedFisher.alert === 'weather' ? 'Weather Warning' : 'Boundary Violation Alert'}
                      </p>
                      <p className={`text-xs ${selectedFisher.alert === 'sos' ? 'text-red-600' : selectedFisher.alert === 'weather' ? 'text-yellow-600' : 'text-orange-600'}`}>
                        {selectedFisher.alert === 'sos' ? 'Immediate assistance required' : selectedFisher.alert === 'weather' ? 'Dangerous weather conditions in area' : 'Fisherman has crossed into restricted waters'}
                      </p>
                    </div>
                  </div>
                </div>}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {selectedFisher.name}
                  </p>
                </div>
                {selectedFisher.phone && <div>
                    <p className="text-sm text-gray-500">Contact</p>
                    <div className="mt-1 flex items-center">
                      <PhoneIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-sm text-gray-900">
                        {selectedFisher.phone}
                      </p>
                    </div>
                  </div>}
                <div className="grid grid-cols-2 gap-4">
                  {selectedFisher.region && <div>
                      <p className="text-sm text-gray-500">Region</p>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedFisher.region}
                      </p>
                    </div>}
                  {selectedFisher.organization && <div>
                      <p className="text-sm text-gray-500">Organization</p>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedFisher.organization}
                      </p>
                    </div>}
                </div>
                {selectedFisher.boatId && <div>
                    <p className="text-sm text-gray-500">Boat ID</p>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedFisher.boatId}
                    </p>
                  </div>}
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-900">
                    Location Details
                  </p>
                  <div className="mt-2 space-y-2">
                    {selectedFisher.tripStart && selectedFisher.tripStart !== 'N/A' && <div className="flex justify-between">
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-500">
                              Started:
                            </span>
                          </div>
                          <span className="text-xs font-medium text-gray-900">
                            {selectedFisher.tripStart}
                          </span>
                        </div>}
                    {selectedFisher.estimatedReturn && selectedFisher.estimatedReturn !== 'N/A' && <div className="flex justify-between">
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-500">
                              Est. Return:
                            </span>
                          </div>
                          <span className="text-xs font-medium text-gray-900">
                            {selectedFisher.estimatedReturn}
                          </span>
                        </div>}
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">
                          Coordinates:
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-900">
                        {selectedFisher.latitude.toFixed(4)}°N,{' '}
                        {selectedFisher.longitude.toFixed(4)}°E
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <InfoIcon className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">
                          Last Update:
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-900">
                        {formatTimeSince(selectedFisher.lastUpdated)}
                      </span>
                    </div>
                    {selectedFisher.distanceFromShore && selectedFisher.distanceFromShore !== 'N/A' && <div className="flex justify-between">
                          <div className="flex items-center">
                            <InfoIcon className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-500">
                              Distance from Shore:
                            </span>
                          </div>
                          <span className="text-xs font-medium text-gray-900">
                            {selectedFisher.distanceFromShore}
                          </span>
                        </div>}
                  </div>
                </div>
                <div className="pt-2 flex space-x-2">
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                    Contact Fisher
                  </button>
                  {selectedFisher.alert === 'sos' && <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none">
                      Send Help
                    </button>}
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default GPSTrackingMap;