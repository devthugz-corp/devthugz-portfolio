import React from 'react';
import { Users2Icon, TrendingUpIcon, ShieldIcon, AwardIcon, BarChart, StarIcon } from 'lucide-react';
export const AdminPerformance: React.FC = () => {
  const performanceMetrics = [{
    name: 'Active Admins',
    value: '48',
    change: '+4',
    icon: <ShieldIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Users Managed',
    value: '12,458',
    change: '+8.2%',
    icon: <Users2Icon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }, {
    name: 'Avg. Response Time',
    value: '2.4 hrs',
    change: '-15%',
    icon: <TrendingUpIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }, {
    name: 'Top Performers',
    value: '12',
    change: '+2',
    icon: <AwardIcon className="h-6 w-6" />,
    color: 'bg-teal-600'
  }];
  const adminPerformanceData = [{
    name: 'Maria Santos',
    region: 'Cebu City',
    users: 1245,
    active: 1180,
    verifications: 98,
    responseTime: '1.2 hrs',
    rating: 4.9,
    status: 'Excellent'
  }, {
    name: 'Jose Reyes',
    region: 'Davao City',
    users: 985,
    active: 920,
    verifications: 85,
    responseTime: '1.8 hrs',
    rating: 4.7,
    status: 'Excellent'
  }, {
    name: 'Ana Lim',
    region: 'Iloilo City',
    users: 756,
    active: 680,
    verifications: 72,
    responseTime: '2.2 hrs',
    rating: 4.5,
    status: 'Good'
  }, {
    name: 'Roberto Cruz',
    region: 'Tacloban City',
    users: 542,
    active: 480,
    verifications: 65,
    responseTime: '2.5 hrs',
    rating: 4.3,
    status: 'Good'
  }, {
    name: 'Elena Garcia',
    region: 'Zamboanga City',
    users: 489,
    active: 410,
    verifications: 58,
    responseTime: '3.1 hrs',
    rating: 4.0,
    status: 'Average'
  }, {
    name: 'Carlos Tan',
    region: 'Bacolod City',
    users: 412,
    active: 325,
    verifications: 45,
    responseTime: '3.8 hrs',
    rating: 3.7,
    status: 'Needs Improvement'
  }];
  const renderRatingStars = rating => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return <div className="flex">
        {[...Array(fullStars)].map((_, i) => <StarIcon key={`full-${i}`} className="h-4 w-4 text-yellow-400 fill-current" />)}
        {hasHalfStar && <div className="relative">
            <StarIcon className="h-4 w-4 text-gray-300 fill-current" />
            <div className="absolute top-0 left-0 overflow-hidden" style={{
          width: '50%'
        }}>
              <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
            </div>
          </div>}
        {[...Array(emptyStars)].map((_, i) => <StarIcon key={`empty-${i}`} className="h-4 w-4 text-gray-300 fill-current" />)}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>;
  };
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
      case 'Needs Improvement':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Needs Improvement
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Performance</h1>
        <p className="text-sm text-gray-500">
          Monitor and evaluate LGU Admin performance metrics
        </p>
      </div>
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {performanceMetrics.map(metric => <div key={metric.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className={`flex-shrink-0 rounded-md p-3 ${metric.color} text-white`}>
                {metric.icon}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {metric.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {metric.value}
                  </div>
                  <div className={`ml-2 flex items-baseline text-sm font-semibold ${metric.name === 'Avg. Response Time' && metric.change.startsWith('-') ? 'text-green-600' : metric.name === 'Avg. Response Time' && !metric.change.startsWith('-') ? 'text-red-600' : metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      {/* Performance Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Admin Activity Trends
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Admin activity chart visualization
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Regional Performance Comparison
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Regional comparison chart visualization
            </span>
          </div>
        </div>
      </div>
      {/* Admin Performance Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">
            Admin Performance Metrics
          </h2>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-teal-600 text-white text-sm rounded hover:bg-teal-700">
              Export Report
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Admin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active %
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Verifications
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Response Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
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
              {adminPerformanceData.map((admin, index) => {
              const activePercentage = Math.round(admin.active / admin.users * 100);
              return <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index + 1}.jpg`} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {admin.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            admin{index + 1}@lgu.gov
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {admin.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {admin.users.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {activePercentage}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className={`h-2 rounded-full ${activePercentage >= 90 ? 'bg-green-500' : activePercentage >= 80 ? 'bg-blue-500' : activePercentage >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                        width: `${activePercentage}%`
                      }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {admin.verifications}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {admin.responseTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {renderRatingStars(admin.rating)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(admin.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-teal-600 hover:text-teal-900 mr-3">
                        Details
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        Message
                      </button>
                    </td>
                  </tr>;
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};