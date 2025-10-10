import React from 'react';
import { Users2Icon, CloudLightningIcon, ShoppingCartIcon, IdCardIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
export const AdminHome: React.FC = () => {
  const {
    user
  } = useAuth();
  const stats = [{
    name: 'Fisher Folk Users',
    value: '843',
    change: '+12',
    icon: <Users2Icon className="h-6 w-6" />
  }, {
    name: 'Active Weather Alerts',
    value: '2',
    change: 'High priority',
    icon: <CloudLightningIcon className="h-6 w-6" />
  }, {
    name: 'Market Transactions',
    value: '156',
    change: 'Today',
    icon: <ShoppingCartIcon className="h-6 w-6" />
  }, {
    name: 'Pending Verifications',
    value: '24',
    change: 'Needs review',
    icon: <IdCardIcon className="h-6 w-6" />
  }];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">
          {user?.location ? `${user.location} Local Government Unit` : 'Local Government Unit'}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md p-3 bg-blue-50 text-blue-700">
                {stat.icon}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-gray-600">
                    {stat.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              Recent Registrations
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View all
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[{
                name: 'Juan Dela Cruz',
                location: 'Barangay San Pedro',
                status: 'Verified',
                joined: 'Today'
              }, {
                name: 'Maria Reyes',
                location: 'Barangay Santa Ana',
                status: 'Pending',
                joined: 'Yesterday'
              }, {
                name: 'Pedro Santos',
                location: 'Barangay San Juan',
                status: 'Verified',
                joined: '2 days ago'
              }, {
                name: 'Ana Lim',
                location: 'Barangay Santo Niño',
                status: 'Pending',
                joined: '3 days ago'
              }].map((user, index) => <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 flex-shrink-0">
                          <img className="h-8 w-8 rounded-full" src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 20}.jpg`} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.joined}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              Weather Alerts
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Manage alerts
            </button>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CloudLightningIcon className="h-5 w-5 text-red-700" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Storm Warning
                  </h3>
                  <div className="mt-1 text-sm text-red-700">
                    <p>
                      Strong storm approaching from the east. Expected to hit
                      coastal areas in 6-8 hours.
                    </p>
                  </div>
                  <div className="mt-2">
                    <div className="flex space-x-2">
                      <button className="bg-red-100 px-2.5 py-1.5 rounded-md text-xs font-medium text-red-800 hover:bg-red-200">
                        Send Alert to All
                      </button>
                      <button className="bg-white px-2.5 py-1.5 rounded-md text-xs font-medium text-red-800 border border-red-300 hover:bg-red-50">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CloudLightningIcon className="h-5 w-5 text-yellow-700" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    High Waves Alert
                  </h3>
                  <div className="mt-1 text-sm text-yellow-700">
                    <p>
                      Wave heights expected to reach 2-3 meters in the next 24
                      hours. Small boats advised to stay ashore.
                    </p>
                  </div>
                  <div className="mt-2">
                    <div className="flex space-x-2">
                      <button className="bg-yellow-100 px-2.5 py-1.5 rounded-md text-xs font-medium text-yellow-800 hover:bg-yellow-200">
                        Send Alert to All
                      </button>
                      <button className="bg-white px-2.5 py-1.5 rounded-md text-xs font-medium text-yellow-800 border border-yellow-300 hover:bg-yellow-50">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CloudLightningIcon className="h-5 w-5 text-green-700" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Favorable Fishing Conditions
                  </h3>
                  <div className="mt-1 text-sm text-green-700">
                    <p>
                      Clear skies and calm seas expected for the next 48 hours.
                      Good conditions for fishing activities.
                    </p>
                  </div>
                  <div className="mt-2">
                    <button className="bg-white px-2.5 py-1.5 rounded-md text-xs font-medium text-green-800 border border-green-300 hover:bg-green-50">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">
            Insurance Status Overview
          </h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            View full report
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {[{
          label: 'Total Insured',
          value: '685',
          percent: '81%',
          color: 'bg-blue-600'
        }, {
          label: 'Active Coverage',
          value: '592',
          percent: '70%',
          color: 'bg-green-500'
        }, {
          label: 'At Risk',
          value: '93',
          percent: '11%',
          color: 'bg-yellow-500'
        }, {
          label: 'Uninsured',
          value: '158',
          percent: '19%',
          color: 'bg-red-500'
        }].map((stat, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">
                {stat.label}
              </h3>
              <div className="mt-1">
                <p className="text-xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`${stat.color} h-2.5 rounded-full`} style={{
                  width: stat.percent
                }}></div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {stat.percent} of registered fishermen
                  </p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <span className="text-gray-500">
            Insurance status trends chart would go here
          </span>
        </div>
      </div>
    </div>;
};