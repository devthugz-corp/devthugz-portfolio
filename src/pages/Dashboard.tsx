import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AdminDashboard } from './admin/Dashboard';
import { useGame } from '../contexts/GameContext';
import { FishIcon, HeartPulseIcon, CloudRainIcon, TrendingUpIcon, UsersIcon, AlertTriangleIcon, WalletIcon, ActivityIcon, MapPinIcon, MessageCircleIcon, ShoppingCartIcon } from 'lucide-react';
export function Dashboard() {
  const {
    user
  } = useAuth();
  const {
    petFish,
    aquaBites,
    walletBalance
  } = useGame();
  const isSuperAdmin = user?.role === 'super_admin';
  const isAdmin = user?.role === 'admin' || isSuperAdmin;
  const isFisher = user?.role === 'user';
  // If user is admin, show the admin dashboard
  if (isAdmin) {
    return <AdminDashboard />;
  }
  const StatCard = ({
    icon: Icon,
    title,
    value,
    color
  }) => <div className="bg-white rounded-lg shadow p-5">
      <div className="flex items-center">
        <div className={`rounded-full p-3 ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>;
  // Calculate insurance coverage based on fish level
  const calculateCoverage = () => {
    return (petFish.level * 10000).toLocaleString();
  };
  return <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome, {user?.name}
        </h2>
        <p className="text-gray-600 mt-1">
          {isFisher && 'Monitor and manage your fishing activities'}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {isFisher && <>
            <StatCard icon={FishIcon} title="Insurance Coverage" value={`₱ ${calculateCoverage()}`} color="bg-teal-500" />
            <StatCard icon={WalletIcon} title="AquaWallet Balance" value={`₱ ${walletBalance}`} color="bg-blue-500" />
            <StatCard icon={ActivityIcon} title="Pet Fish Level" value={`Level ${petFish.level}`} color="bg-indigo-500" />
            <StatCard icon={CloudRainIcon} title="Weather Status" value="Favorable" color="bg-green-500" />
          </>}
      </div>
      {isFisher && <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow lg:col-span-2">
            <div className="p-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Pet Fish Insurance Status
              </h3>
            </div>
            <div className="p-5">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-100">
                      Fish Health
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-teal-600">
                      {petFish.health}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-100">
                  <div style={{
                width: `${petFish.health}%`
              }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
                </div>
                <p className="text-sm text-gray-600">
                  Feed your fish daily to maintain or increase your insurance
                  coverage!
                </p>
                <div className="mt-4">
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none" onClick={() => window.location.href = '/insurance-hub'}>
                    Go to Insurance Hub
                  </button>
                  <span className="ml-3 text-sm text-gray-500">
                    You have {aquaBites} AquaBites remaining
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Quick Actions
              </h3>
            </div>
            <div className="p-5">
              <div className="space-y-3">
                <a href="/gps-tracking" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="rounded-full p-2 bg-blue-100">
                    <MapPinIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      GPS Tracking
                    </p>
                    <p className="text-xs text-gray-500">
                      Track your location and report emergencies
                    </p>
                  </div>
                </a>
                <a href="/community" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="rounded-full p-2 bg-green-100">
                    <MessageCircleIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Community Chat
                    </p>
                    <p className="text-xs text-gray-500">
                      Connect with other fishermen
                    </p>
                  </div>
                </a>
                <a href="/insurance-hub" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="rounded-full p-2 bg-purple-100">
                    <ShoppingCartIcon className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      AquaSure Market
                    </p>
                    <p className="text-xs text-gray-500">
                      Buy AquaBites and pet fish
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow lg:col-span-3">
            <div className="p-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Recent Activity
              </h3>
            </div>
            <div className="p-5">
              <div className="flow-root">
                <ul className="-mb-8">
                  <li>
                    <div className="relative pb-8">
                      <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div className="relative flex items-start space-x-3">
                        <div>
                          <div className="relative px-1">
                            <div className="h-8 w-8 bg-teal-500 rounded-full flex items-center justify-center ring-8 ring-white">
                              <FishIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm">
                              <a href="#" className="font-medium text-gray-900">
                                Pet Fish Leveled Up
                              </a>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Your fish reached Level {petFish.level}
                            </p>
                          </div>
                          <div className="mt-2 text-sm text-gray-500">
                            <p>
                              Your insurance coverage increased to ₱
                              {calculateCoverage()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="relative pb-8">
                      <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div className="relative flex items-start space-x-3">
                        <div>
                          <div className="relative px-1">
                            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center ring-8 ring-white">
                              <MapPinIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm">
                              <a href="#" className="font-medium text-gray-900">
                                GPS Tracking Active
                              </a>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Your location is being tracked for safety
                            </p>
                          </div>
                          <div className="mt-2 text-sm text-gray-500">
                            <p>Last updated: 5 minutes ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="relative pb-8">
                      <div className="relative flex items-start space-x-3">
                        <div>
                          <div className="relative px-1">
                            <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center ring-8 ring-white">
                              <MessageCircleIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm">
                              <a href="#" className="font-medium text-gray-900">
                                New Announcement
                              </a>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              From Batangas Fishing Association
                            </p>
                          </div>
                          <div className="mt-2 text-sm text-gray-500">
                            <p>
                              "Reminder: Monthly meeting this Saturday at 9 AM"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}