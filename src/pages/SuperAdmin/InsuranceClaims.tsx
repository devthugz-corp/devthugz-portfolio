import React, { useState } from 'react';
import { ShieldIcon, CheckCircleIcon, XCircleIcon, ClockIcon, AlertTriangleIcon, FileTextIcon, DollarSignIcon, BarChart } from 'lucide-react';
export const InsuranceClaims: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const insuranceStats = [{
    name: 'Total Insured Value',
    value: '₱85.4M',
    change: '+12.3%',
    icon: <ShieldIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Active Policies',
    value: '9,458',
    change: '+8.7%',
    icon: <CheckCircleIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }, {
    name: 'Pending Claims',
    value: '142',
    change: '-3.2%',
    icon: <ClockIcon className="h-6 w-6" />,
    color: 'bg-yellow-600'
  }, {
    name: 'Claim Payout Rate',
    value: '78.5%',
    change: '+2.1%',
    icon: <DollarSignIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }];
  const claimsData = [{
    id: 'CLM-001245',
    fisherman: 'Juan Dela Cruz',
    region: 'Cebu',
    type: 'Boat Damage',
    amount: '₱25,000',
    date: '2023-05-12',
    status: 'Approved',
    details: 'Storm damage to fishing boat engine'
  }, {
    id: 'CLM-001246',
    fisherman: 'Maria Santos',
    region: 'Davao',
    type: 'Health',
    amount: '₱18,500',
    date: '2023-05-11',
    status: 'Pending',
    details: 'Medical expenses for injury during fishing'
  }, {
    id: 'CLM-001247',
    fisherman: 'Pedro Reyes',
    region: 'Palawan',
    type: 'Equipment Loss',
    amount: '₱12,800',
    date: '2023-05-10',
    status: 'Under Review',
    details: 'Lost fishing nets during storm'
  }, {
    id: 'CLM-001248',
    fisherman: 'Ana Lim',
    region: 'Iloilo',
    type: 'Boat Damage',
    amount: '₱32,500',
    date: '2023-05-09',
    status: 'Approved',
    details: 'Structural damage to fishing boat'
  }, {
    id: 'CLM-001249',
    fisherman: 'Roberto Cruz',
    region: 'Zamboanga',
    type: 'Health',
    amount: '₱9,800',
    date: '2023-05-08',
    status: 'Rejected',
    details: 'Insufficient documentation for medical claim'
  }];
  const claimsByType = [{
    type: 'Boat Damage',
    count: 458,
    amount: 12500000
  }, {
    type: 'Health',
    count: 324,
    amount: 8750000
  }, {
    type: 'Equipment Loss',
    count: 287,
    amount: 5320000
  }, {
    type: 'Natural Disaster',
    count: 196,
    amount: 9840000
  }, {
    type: 'Livelihood Loss',
    count: 145,
    amount: 4250000
  }];
  const filteredClaims = filterStatus === 'all' ? claimsData : claimsData.filter(claim => claim.status.toLowerCase() === filterStatus.toLowerCase());
  const getStatusBadge = status => {
    switch (status) {
      case 'Approved':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Approved
          </span>;
      case 'Pending':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Pending
          </span>;
      case 'Under Review':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            Under Review
          </span>;
      case 'Rejected':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Rejected
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Insurance & Claims</h1>
        <p className="text-sm text-gray-500">
          Manage insurance policies and claims across the platform
        </p>
      </div>
      {/* Insurance Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {insuranceStats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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
                  <div className={`ml-2 flex items-baseline text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      {/* Insurance Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Claims by Type
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Claims by type chart visualization
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Claims by Region
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Claims by region chart visualization
            </span>
          </div>
        </div>
      </div>
      {/* Claims by Type */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Claims by Type
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Claim Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Average Claim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Distribution
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {claimsByType.map((type, index) => {
              const totalClaims = claimsByType.reduce((acc, t) => acc + t.count, 0);
              const totalAmount = claimsByType.reduce((acc, t) => acc + t.amount, 0);
              const percentage = (type.count / totalClaims * 100).toFixed(1);
              const amountPercentage = (type.amount / totalAmount * 100).toFixed(1);
              return <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {type.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {type.count.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ₱{(type.amount / 1000000).toFixed(2)}M
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ₱{Math.round(type.amount / type.count).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {percentage}%
                        </span>
                        <div className="w-24 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{
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
      {/* Claims Management */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">
            Claims Management
          </h2>
          <div className="flex items-center space-x-2">
            <label htmlFor="status-filter" className="text-sm text-gray-500">
              Filter by Status:
            </label>
            <select id="status-filter" className="border-gray-300 rounded-md shadow-sm text-sm focus:ring-teal-500 focus:border-teal-500" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
              <option value="all">All Claims</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="under review">Under Review</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Claim ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fisherman
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
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
              {filteredClaims.map((claim, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {claim.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {claim.fisherman}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {claim.region}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {claim.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {claim.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(claim.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(claim.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-teal-600 hover:text-teal-900 mr-3">
                      View
                    </button>
                    {claim.status === 'Pending' || claim.status === 'Under Review' ? <>
                        <button className="text-green-600 hover:text-green-900 mr-3">
                          Approve
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          Reject
                        </button>
                      </> : <button className="text-blue-600 hover:text-blue-900">
                        Details
                      </button>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{filteredClaims.length}</span>{' '}
            claims
          </div>
          <div className="flex-1 flex justify-end">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>;
};