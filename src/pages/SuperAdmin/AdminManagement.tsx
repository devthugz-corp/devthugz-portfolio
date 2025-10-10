import React, { useState } from 'react';
import { Users2Icon, ShieldIcon, PlusIcon, SearchIcon, MapPinIcon, BarChart2Icon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, EyeIcon, EditIcon, TrashIcon, RefreshCwIcon, KeyIcon, GlobeIcon, CalendarIcon, ClockIcon, MailIcon, PhoneIcon, MessageSquareIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
export const AdminManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedAdmin, setSelectedAdmin] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  // Mock admin data
  const admins = [{
    id: 1,
    name: 'Maria Santos',
    email: 'maria@lgu.gov.ph',
    phone: '+63 912 345 6789',
    role: 'Regional Admin',
    lgu: 'Cebu City',
    region: 'Central Visayas',
    users: 234,
    status: 'Active',
    lastActive: '2 hours ago',
    joined: 'Jan 15, 2023',
    performance: {
      rating: 4.8,
      verificationRate: 98,
      responseTime: '1.2 hours',
      userSatisfaction: 92,
      completedTasks: 156
    },
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  }, {
    id: 2,
    name: 'Jose Reyes',
    email: 'jose@lgu.gov.ph',
    phone: '+63 923 456 7890',
    role: 'Regional Admin',
    lgu: 'Davao City',
    region: 'Davao Region',
    users: 187,
    status: 'Active',
    lastActive: '5 hours ago',
    joined: 'Feb 22, 2023',
    performance: {
      rating: 4.5,
      verificationRate: 95,
      responseTime: '1.5 hours',
      userSatisfaction: 89,
      completedTasks: 132
    },
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  }, {
    id: 3,
    name: 'Ana Lim',
    email: 'ana@lgu.gov.ph',
    phone: '+63 934 567 8901',
    role: 'Regional Admin',
    lgu: 'Iloilo City',
    region: 'Western Visayas',
    users: 156,
    status: 'Inactive',
    lastActive: '2 weeks ago',
    joined: 'Mar 10, 2023',
    performance: {
      rating: 3.9,
      verificationRate: 82,
      responseTime: '2.8 hours',
      userSatisfaction: 78,
      completedTasks: 95
    },
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  }, {
    id: 4,
    name: 'Roberto Cruz',
    email: 'roberto@lgu.gov.ph',
    phone: '+63 945 678 9012',
    role: 'Regional Admin',
    lgu: 'Tacloban City',
    region: 'Eastern Visayas',
    users: 98,
    status: 'Active',
    lastActive: '1 day ago',
    joined: 'Apr 5, 2023',
    performance: {
      rating: 4.2,
      verificationRate: 90,
      responseTime: '1.8 hours',
      userSatisfaction: 85,
      completedTasks: 110
    },
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
  }, {
    id: 5,
    name: 'Elena Garcia',
    email: 'elena@lgu.gov.ph',
    phone: '+63 956 789 0123',
    role: 'Regional Admin',
    lgu: 'Zamboanga City',
    region: 'Zamboanga Peninsula',
    users: 112,
    status: 'Active',
    lastActive: '3 hours ago',
    joined: 'May 18, 2023',
    performance: {
      rating: 4.6,
      verificationRate: 94,
      responseTime: '1.3 hours',
      userSatisfaction: 91,
      completedTasks: 128
    },
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
  }, {
    id: 6,
    name: 'Carlos Tan',
    email: 'carlos@lgu.gov.ph',
    phone: '+63 967 890 1234',
    role: 'Regional Admin',
    lgu: 'Baguio City',
    region: 'Cordillera',
    users: 145,
    status: 'Active',
    lastActive: '6 hours ago',
    joined: 'Jun 7, 2023',
    performance: {
      rating: 4.4,
      verificationRate: 92,
      responseTime: '1.6 hours',
      userSatisfaction: 87,
      completedTasks: 118
    },
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg'
  }, {
    id: 7,
    name: 'Rosario Mendoza',
    email: 'rosario@lgu.gov.ph',
    phone: '+63 978 901 2345',
    role: 'Regional Admin',
    lgu: 'Legazpi City',
    region: 'Bicol Region',
    users: 89,
    status: 'Suspended',
    lastActive: '1 month ago',
    joined: 'Jul 15, 2023',
    performance: {
      rating: 3.2,
      verificationRate: 76,
      responseTime: '3.5 hours',
      userSatisfaction: 68,
      completedTasks: 65
    },
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg'
  }];
  // Filter admins based on search and filters
  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) || admin.email.toLowerCase().includes(searchTerm.toLowerCase()) || admin.lgu.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === 'all' || admin.region === filterRegion;
    const matchesStatus = filterStatus === 'all' || admin.status === filterStatus;
    return matchesSearch && matchesRegion && matchesStatus;
  });
  // Calculate admin stats
  const totalAdmins = admins.length;
  const activeAdmins = admins.filter(a => a.status === 'Active').length;
  const inactiveAdmins = admins.filter(a => a.status === 'Inactive').length;
  const suspendedAdmins = admins.filter(a => a.status === 'Suspended').length;
  // Calculate total users managed by all admins
  const totalUsers = admins.reduce((sum, admin) => sum + admin.users, 0);
  // Calculate average performance metrics
  const avgRating = admins.reduce((sum, admin) => sum + admin.performance.rating, 0) / admins.length;
  const avgVerificationRate = admins.reduce((sum, admin) => sum + admin.performance.verificationRate, 0) / admins.length;
  const avgSatisfaction = admins.reduce((sum, admin) => sum + admin.performance.userSatisfaction, 0) / admins.length;
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>;
      case 'Inactive':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            Inactive
          </span>;
      case 'Suspended':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Suspended
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>;
    }
  };
  const getRatingBadge = (rating: number) => {
    if (rating >= 4.5) {
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Excellent
        </span>;
    } else if (rating >= 4.0) {
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
          Good
        </span>;
    } else if (rating >= 3.5) {
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
          Average
        </span>;
    } else {
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
          Needs Improvement
        </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Management</h1>
        <p className="text-sm text-gray-500">
          Manage Local Government Unit administrators
        </p>
      </div>
      {/* Admin Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <ShieldIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Admins</p>
              <p className="text-xl font-semibold">{totalAdmins}</p>
              <div className="flex items-center mt-1">
                <div className="h-1 w-full bg-gray-200 rounded-full">
                  <div className="h-1 bg-purple-500 rounded-full" style={{
                  width: '100%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <CheckCircleIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Admins</p>
              <p className="text-xl font-semibold">{activeAdmins}</p>
              <div className="flex items-center mt-1">
                <div className="h-1 w-full bg-gray-200 rounded-full">
                  <div className="h-1 bg-green-500 rounded-full" style={{
                  width: `${activeAdmins / totalAdmins * 100}%`
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <Users2Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users Managed</p>
              <p className="text-xl font-semibold">{totalUsers}</p>
              <div className="flex items-center mt-1">
                <div className="h-1 w-full bg-gray-200 rounded-full">
                  <div className="h-1 bg-blue-500 rounded-full" style={{
                  width: '100%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
              <XCircleIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Inactive/Suspended</p>
              <p className="text-xl font-semibold">
                {inactiveAdmins + suspendedAdmins}
              </p>
              <div className="flex items-center mt-1">
                <div className="h-1 w-full bg-gray-200 rounded-full">
                  <div className="h-1 bg-red-500 rounded-full" style={{
                  width: `${(inactiveAdmins + suspendedAdmins) / totalAdmins * 100}%`
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Performance Metrics */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Admin Performance Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-gray-600">Average Rating</p>
              <p className="text-lg font-semibold text-teal-600">
                {avgRating.toFixed(1)}/5.0
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
              <div className="bg-teal-500 h-1.5 rounded-full" style={{
              width: `${avgRating / 5 * 100}%`
            }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>0</span>
              <span>2.5</span>
              <span>5.0</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-gray-600">Verification Rate</p>
              <p className="text-lg font-semibold text-blue-600">
                {avgVerificationRate.toFixed(1)}%
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
              <div className="bg-blue-500 h-1.5 rounded-full" style={{
              width: `${avgVerificationRate}%`
            }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-gray-600">User Satisfaction</p>
              <p className="text-lg font-semibold text-purple-600">
                {avgSatisfaction.toFixed(1)}%
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
              <div className="bg-purple-500 h-1.5 rounded-full" style={{
              width: `${avgSatisfaction}%`
            }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>
      {/* Regional Distribution */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Regional Admin Distribution
        </h2>
        <div className="h-64 relative">
          {/* Simple map visualization */}
          <div className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-full w-full relative">
              <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center" title="Cordillera">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
                  1
                </div>
              </div>
              <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center" title="Bicol Region">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-medium">
                  1
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-green-200 flex items-center justify-center" title="Central Visayas">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-medium">
                  1
                </div>
              </div>
              <div className="absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center" title="Western Visayas">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-medium">
                  1
                </div>
              </div>
              <div className="absolute top-1/2 right-1/5 w-12 h-12 rounded-full bg-red-200 flex items-center justify-center" title="Eastern Visayas">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-medium">
                  1
                </div>
              </div>
              <div className="absolute bottom-1/5 left-1/5 w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center" title="Zamboanga Peninsula">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-medium">
                  1
                </div>
              </div>
              <div className="absolute top-2/3 right-1/4 w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center" title="Davao Region">
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-medium">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {['Cordillera', 'Bicol Region', 'Central Visayas', 'Western Visayas', 'Eastern Visayas', 'Zamboanga Peninsula', 'Davao Region'].map((region, i) => {
          const colors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-indigo-500', 'bg-teal-500'];
          const color = colors[i % colors.length];
          return <div key={i} className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${color} mr-1`}></div>
                <span className="text-xs text-gray-600">{region}</span>
              </div>;
        })}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">All Admins</h2>
          <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 flex items-center" onClick={() => setShowAddModal(true)}>
            <PlusIcon className="h-4 w-4 mr-2" />
            Add New Admin
          </button>
        </div>
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" placeholder="Search admins by name, email, or LGU..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md" value={filterRegion} onChange={e => setFilterRegion(e.target.value)}>
                <option value="all">All Regions</option>
                <option value="Central Visayas">Central Visayas</option>
                <option value="Davao Region">Davao Region</option>
                <option value="Western Visayas">Western Visayas</option>
                <option value="Eastern Visayas">Eastern Visayas</option>
                <option value="Zamboanga Peninsula">Zamboanga Peninsula</option>
                <option value="Cordillera">Cordillera</option>
                <option value="Bicol Region">Bicol Region</option>
              </select>
            </div>
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <RefreshCwIcon className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    LGU
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Users
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAdmins.map(admin => <tr key={admin.id} className={`hover:bg-gray-50 ${selectedAdmin === admin.id ? 'bg-blue-50' : ''}`} onClick={() => setSelectedAdmin(admin.id)}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={admin.avatar} alt={admin.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {admin.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {admin.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{admin.lgu}</div>
                      <div className="text-xs text-gray-500">
                        {admin.region}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {admin.users}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(admin.status)}
                      <div className="text-xs text-gray-500 mt-1">
                        Last active: {admin.lastActive}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => <div key={i} className={`h-3 w-3 ${i < Math.floor(admin.performance.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ★
                            </div>)}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {admin.performance.rating}
                        </span>
                      </div>
                      <div className="mt-1">
                        {getRatingBadge(admin.performance.rating)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900" title="View Details">
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button className="text-teal-600 hover:text-teal-900" title="Edit Admin">
                          <EditIcon className="h-5 w-5" />
                        </button>
                        {admin.status === 'Active' ? <button className="text-red-600 hover:text-red-900" title="Suspend Admin">
                            <XCircleIcon className="h-5 w-5" />
                          </button> : <button className="text-green-600 hover:text-green-900" title="Activate Admin">
                            <CheckCircleIcon className="h-5 w-5" />
                          </button>}
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          {selectedAdmin && <div className="lg:w-1/4 bg-gray-50 rounded-lg p-4">
              {admins.filter(a => a.id === selectedAdmin).map(admin => <div key={admin.id} className="space-y-4">
                    <div className="flex flex-col items-center">
                      <img src={admin.avatar} alt={admin.name} className="h-20 w-20 rounded-full mb-2" />
                      <h3 className="text-lg font-medium text-gray-900">
                        {admin.name}
                      </h3>
                      <div className="text-sm text-gray-500">{admin.role}</div>
                      <div className="flex items-center mt-1">
                        {getStatusBadge(admin.status)}
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        Contact Information
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <MailIcon className="h-4 w-4 text-gray-400 mr-2" />
                          <p className="text-sm">{admin.email}</p>
                        </div>
                        <div className="flex items-center">
                          <PhoneIcon className="h-4 w-4 text-gray-400 mr-2" />
                          <p className="text-sm">{admin.phone}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        Location
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 text-gray-400 mr-2" />
                          <p className="text-sm">{admin.lgu}</p>
                        </div>
                        <div className="flex items-center">
                          <GlobeIcon className="h-4 w-4 text-gray-400 mr-2" />
                          <p className="text-sm">{admin.region}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        Performance Metrics
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-gray-500">
                              Rating
                            </span>
                            <span className="text-xs font-medium">
                              {admin.performance.rating}/5.0
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-teal-500 h-1 rounded-full" style={{
                      width: `${admin.performance.rating / 5 * 100}%`
                    }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-gray-500">
                              Verification Rate
                            </span>
                            <span className="text-xs font-medium">
                              {admin.performance.verificationRate}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-blue-500 h-1 rounded-full" style={{
                      width: `${admin.performance.verificationRate}%`
                    }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-gray-500">
                              Response Time
                            </span>
                            <span className="text-xs font-medium">
                              {admin.performance.responseTime}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-purple-500 h-1 rounded-full" style={{
                      width: `${100 - parseFloat(admin.performance.responseTime) / 4 * 100}%`
                    }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-gray-500">
                              User Satisfaction
                            </span>
                            <span className="text-xs font-medium">
                              {admin.performance.userSatisfaction}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-green-500 h-1 rounded-full" style={{
                      width: `${admin.performance.userSatisfaction}%`
                    }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        Account Information
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-xs text-gray-500">Joined</p>
                          <p className="text-sm">{admin.joined}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Last Active</p>
                          <p className="text-sm">{admin.lastActive}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Users Managed</p>
                          <p className="text-sm">{admin.users}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">
                            Tasks Completed
                          </p>
                          <p className="text-sm">
                            {admin.performance.completedTasks}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex flex-col space-y-2">
                      <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                        <EditIcon className="h-4 w-4 mr-2" />
                        Edit Admin
                      </button>
                      <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <KeyIcon className="h-4 w-4 mr-2" />
                        Reset Password
                      </button>
                      {admin.status === 'Active' ? <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          <XCircleIcon className="h-4 w-4 mr-2" />
                          Suspend Admin
                        </button> : <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          <CheckCircleIcon className="h-4 w-4 mr-2" />
                          Activate Admin
                        </button>}
                      <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                        <MessageSquareIcon className="h-4 w-4 mr-2" />
                        Message Admin
                      </button>
                    </div>
                  </div>)}
            </div>}
        </div>
      </div>
    </div>;
};