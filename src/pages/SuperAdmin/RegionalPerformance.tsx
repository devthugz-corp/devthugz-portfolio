import React, { useState } from 'react';
import { GlobeIcon, MapPinIcon, UsersIcon, ShieldIcon, TrendingUpIcon, BarChart, PieChartIcon } from 'lucide-react';
export const RegionalPerformance: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const regionalStats = [{
    name: 'Total Regions',
    value: '16',
    change: '+2',
    icon: <GlobeIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Active Users',
    value: '12,458',
    change: '+8.7%',
    icon: <UsersIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }, {
    name: 'Active Admins',
    value: '48',
    change: '+4',
    icon: <ShieldIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }, {
    name: 'Growth Rate',
    value: '15.3%',
    change: '+2.1%',
    icon: <TrendingUpIcon className="h-6 w-6" />,
    color: 'bg-teal-600'
  }];
  const regionPerformanceData = [{
    region: 'Cebu',
    users: 2456,
    admins: 5,
    activePercentage: 94,
    insuranceCoverage: 87,
    tradingVolume: '₱1.2M',
    growth: '+18%',
    status: 'Excellent'
  }, {
    region: 'Davao',
    users: 1845,
    admins: 4,
    activePercentage: 91,
    insuranceCoverage: 82,
    tradingVolume: '₱0.9M',
    growth: '+15%',
    status: 'Good'
  }, {
    region: 'Palawan',
    users: 1240,
    admins: 3,
    activePercentage: 88,
    insuranceCoverage: 85,
    tradingVolume: '₱0.8M',
    growth: '+12%',
    status: 'Good'
  }, {
    region: 'Iloilo',
    users: 950,
    admins: 3,
    activePercentage: 85,
    insuranceCoverage: 78,
    tradingVolume: '₱0.5M',
    growth: '+9%',
    status: 'Average'
  }, {
    region: 'Zamboanga',
    users: 720,
    admins: 2,
    activePercentage: 82,
    insuranceCoverage: 72,
    tradingVolume: '₱0.3M',
    growth: '+7%',
    status: 'Average'
  }, {
    region: 'Leyte',
    users: 580,
    admins: 2,
    activePercentage: 78,
    insuranceCoverage: 68,
    tradingVolume: '₱0.25M',
    growth: '+5%',
    status: 'Needs Attention'
  }];
  const getStatusBadge = status => {
    switch (status) {
      case 'Excellent':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Excellent
          </span>;
      case 'Good':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            Good
          </span>;
      case 'Average':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Average
          </span>;
      case 'Needs Attention':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Needs Attention
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Regional Performance
        </h1>
        <p className="text-sm text-gray-500">
          Monitor and compare performance across different regions
        </p>
      </div>
      {/* Regional Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {regionalStats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className={`flex-shrink-0 rounded-md p-3 ${stat.color} text-white`}>
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
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    {stat.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      {/* Regional Performance Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Regional User Distribution
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <PieChartIcon className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Regional distribution chart visualization
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Regional Growth Comparison
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Growth comparison chart visualization
            </span>
          </div>
        </div>
      </div>
      {/* Region Filter */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">
            Regional Performance Metrics
          </h2>
          <div className="flex items-center space-x-2">
            <label htmlFor="region-filter" className="text-sm text-gray-500">
              Filter by Region:
            </label>
            <select id="region-filter" className="border-gray-300 rounded-md shadow-sm text-sm focus:ring-teal-500 focus:border-teal-500" value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
              <option value="all">All Regions</option>
              {regionPerformanceData.map(region => <option key={region.region} value={region.region}>
                  {region.region}
                </option>)}
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Admins
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active %
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Insurance Coverage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trading Volume
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {regionPerformanceData.filter(region => selectedRegion === 'all' || region.region === selectedRegion).map((region, index) => <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">
                          {region.region}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {region.users.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {region.admins}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {region.activePercentage}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className={`h-2 rounded-full ${region.activePercentage >= 90 ? 'bg-green-500' : region.activePercentage >= 80 ? 'bg-blue-500' : region.activePercentage >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${region.activePercentage}%`
                    }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {region.insuranceCoverage}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className={`h-2 rounded-full ${region.insuranceCoverage >= 85 ? 'bg-green-500' : region.insuranceCoverage >= 75 ? 'bg-blue-500' : region.insuranceCoverage >= 65 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${region.insuranceCoverage}%`
                    }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {region.tradingVolume}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      {region.growth}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(region.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-teal-600 hover:text-teal-900 mr-3">
                        Details
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        Report
                      </button>
                    </td>
                  </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Regional Leaderboard */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Regional Leaderboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionPerformanceData.sort((a, b) => {
          // Sort by status first
          const statusOrder = {
            Excellent: 1,
            Good: 2,
            Average: 3,
            'Needs Attention': 4
          };
          if (statusOrder[a.status] !== statusOrder[b.status]) {
            return statusOrder[a.status] - statusOrder[b.status];
          }
          // Then by users
          return b.users - a.users;
        }).slice(0, 6).map((region, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className={`flex items-center justify-center h-8 w-8 rounded-full mr-3 ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-gray-300' : index === 2 ? 'bg-amber-600' : 'bg-blue-100'} text-white font-bold`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-900">
                        {region.region}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {region.users.toLocaleString()} users
                      </p>
                    </div>
                  </div>
                  {getStatusBadge(region.status)}
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Active Users</span>
                    <span className="font-medium">
                      {region.activePercentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{
                width: `${region.activePercentage}%`
              }}></div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Insurance Coverage</span>
                    <span className="font-medium">
                      {region.insuranceCoverage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{
                width: `${region.insuranceCoverage}%`
              }}></div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Growth:</span>
                    <span className="text-green-600 font-medium">
                      {region.growth}
                    </span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Trading Volume:</span>
                    <span className="font-medium">{region.tradingVolume}</span>
                  </div>
                </div>
              </div>)}
        </div>
      </div>
    </div>;
};