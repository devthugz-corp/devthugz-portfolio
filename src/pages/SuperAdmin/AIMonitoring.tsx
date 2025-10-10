import React from 'react';
import { BrainIcon, MessageCircleIcon, AlertCircleIcon, TrendingUpIcon, BarChart } from 'lucide-react';
export const AIMonitoring: React.FC = () => {
  const aiStats = [{
    name: 'Total AI Queries',
    value: '1,245,632',
    change: '+15.2%',
    icon: <MessageCircleIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Frenzy Usage',
    value: '782,491',
    change: '+18.7%',
    icon: <BrainIcon className="h-6 w-6" />,
    color: 'bg-teal-600'
  }, {
    name: 'Nemo Usage',
    value: '463,141',
    change: '+10.3%',
    icon: <BrainIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }, {
    name: 'Error Rate',
    value: '0.42%',
    change: '-0.18%',
    icon: <AlertCircleIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }];
  const topQueries = [{
    query: 'How to feed my fish?',
    count: 12458,
    system: 'Frenzy'
  }, {
    query: 'Check weather forecast',
    count: 9873,
    system: 'Nemo'
  }, {
    query: 'Insurance coverage status',
    count: 8542,
    system: 'Frenzy'
  }, {
    query: 'How to increase insurance?',
    count: 7891,
    system: 'Frenzy'
  }, {
    query: 'Market prices today',
    count: 6547,
    system: 'Nemo'
  }, {
    query: 'Report fishing activity',
    count: 5932,
    system: 'Nemo'
  }, {
    query: 'Claim insurance',
    count: 4821,
    system: 'Frenzy'
  }, {
    query: 'View my wallet',
    count: 4215,
    system: 'Nemo'
  }];
  const errorLogs = [{
    id: 1,
    error: 'Query timeout',
    system: 'Frenzy',
    time: 'Today, 10:23 AM',
    status: 'Resolved',
    frequency: 12
  }, {
    id: 2,
    error: 'API connection failure',
    system: 'Nemo',
    time: 'Today, 09:17 AM',
    status: 'Investigating',
    frequency: 28
  }, {
    id: 3,
    error: 'NLP processing error',
    system: 'Frenzy',
    time: 'Yesterday, 11:05 PM',
    status: 'Fixed',
    frequency: 5
  }, {
    id: 4,
    error: 'Data inconsistency',
    system: 'Nemo',
    time: 'Yesterday, 08:32 PM',
    status: 'Monitoring',
    frequency: 9
  }, {
    id: 5,
    error: 'Authentication failure',
    system: 'Frenzy',
    time: 'May 15, 2023, 02:45 PM',
    status: 'Resolved',
    frequency: 3
  }];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">AI Monitoring</h1>
        <p className="text-sm text-gray-500">
          Track and manage AI systems performance (Frenzy & Nemo)
        </p>
      </div>
      {/* AI Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {aiStats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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
      {/* AI Usage Chart */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            AI Usage Trends
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              AI usage trends chart visualization
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Frenzy vs Nemo Usage
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Comparison chart visualization
            </span>
          </div>
        </div>
      </div>
      {/* Top Queries */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Top User Queries
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Query
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  System
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topQueries.map((query, index) => {
              const total = topQueries.reduce((acc, q) => acc + q.count, 0);
              const percentage = (query.count / total * 100).toFixed(1);
              return <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {query.query}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {query.count.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${query.system === 'Frenzy' ? 'bg-teal-100 text-teal-800' : 'bg-purple-100 text-purple-800'}`}>
                        {query.system}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {percentage}%
                        </span>
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div className={`h-2.5 rounded-full ${query.system === 'Frenzy' ? 'bg-teal-500' : 'bg-purple-500'}`} style={{
                        width: `${percentage}%`
                      }}></div>
                        </div>
                      </div>
                    </td>
                  </tr>;
            })}
            </tbody>
          </table>
        </div>
      </div>
      {/* Error Logs */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Error Logs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Error
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  System
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
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
              {errorLogs.map(error => <tr key={error.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {error.error}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${error.system === 'Frenzy' ? 'bg-teal-100 text-teal-800' : 'bg-purple-100 text-purple-800'}`}>
                      {error.system}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {error.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {error.frequency} occurrences
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${error.status === 'Resolved' || error.status === 'Fixed' ? 'bg-green-100 text-green-800' : error.status === 'Investigating' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {error.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-teal-600 hover:text-teal-900 mr-3">
                      Details
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      Resolve
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};