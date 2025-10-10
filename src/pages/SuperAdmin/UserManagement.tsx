import React, { useState } from 'react';
import { Users2Icon, SearchIcon, FilterIcon, SlidersIcon, DownloadIcon, RefreshCwIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, EyeIcon, EditIcon, TrashIcon, ShieldIcon, MapPinIcon, HeartIcon, FishIcon, BadgeCheckIcon } from 'lucide-react';
export const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterInsurance, setFilterInsurance] = useState('all');
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  // Mock user data
  const users = [{
    id: 1,
    name: 'Juan Dela Cruz',
    email: 'juan@fisherman.com',
    location: 'Palawan',
    region: 'MIMAROPA',
    status: 'Active',
    insurance: 'Premium',
    insuranceStatus: 'Active',
    joined: 'Jan 15, 2023',
    lastActive: '2 hours ago',
    verified: true,
    boatRegistration: 'PL-2023-0123',
    licenseNumber: 'FL-2023-5678',
    phone: '+63 912 345 6789',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg'
  }, {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@fisherman.com',
    location: 'Cebu',
    region: 'Central Visayas',
    status: 'Active',
    insurance: 'Standard',
    insuranceStatus: 'Active',
    joined: 'Mar 22, 2023',
    lastActive: '5 hours ago',
    verified: true,
    boatRegistration: 'CB-2023-0456',
    licenseNumber: 'FL-2023-7890',
    phone: '+63 923 456 7890',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg'
  }, {
    id: 3,
    name: 'Pedro Santos',
    email: 'pedro@fisherman.com',
    location: 'Batangas',
    region: 'CALABARZON',
    status: 'Inactive',
    insurance: 'Premium',
    insuranceStatus: 'Expired',
    joined: 'Nov 5, 2022',
    lastActive: '2 weeks ago',
    verified: true,
    boatRegistration: 'BT-2022-0789',
    licenseNumber: 'FL-2022-1234',
    phone: '+63 934 567 8901',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg'
  }, {
    id: 4,
    name: 'Ana Lim',
    email: 'ana@fisherman.com',
    location: 'Davao',
    region: 'Davao Region',
    status: 'Active',
    insurance: 'Basic',
    insuranceStatus: 'Active',
    joined: 'Feb 18, 2023',
    lastActive: '1 day ago',
    verified: true,
    boatRegistration: 'DV-2023-0234',
    licenseNumber: 'FL-2023-5678',
    phone: '+63 945 678 9012',
    avatar: 'https://randomuser.me/api/portraits/women/13.jpg'
  }, {
    id: 5,
    name: 'Roberto Cruz',
    email: 'roberto@fisherman.com',
    location: 'Iloilo',
    region: 'Western Visayas',
    status: 'Pending',
    insurance: 'None',
    insuranceStatus: 'Pending',
    joined: 'Apr 30, 2023',
    lastActive: '3 days ago',
    verified: false,
    boatRegistration: 'IL-2023-0567',
    licenseNumber: 'Pending',
    phone: '+63 956 789 0123',
    avatar: 'https://randomuser.me/api/portraits/men/14.jpg'
  }, {
    id: 6,
    name: 'Elena Garcia',
    email: 'elena@fisherman.com',
    location: 'Zamboanga',
    region: 'Zamboanga Peninsula',
    status: 'Active',
    insurance: 'Standard',
    insuranceStatus: 'Active',
    joined: 'Dec 10, 2022',
    lastActive: '12 hours ago',
    verified: true,
    boatRegistration: 'ZM-2022-0890',
    licenseNumber: 'FL-2022-9012',
    phone: '+63 967 890 1234',
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg'
  }, {
    id: 7,
    name: 'Carlos Tan',
    email: 'carlos@fisherman.com',
    location: 'Leyte',
    region: 'Eastern Visayas',
    status: 'Suspended',
    insurance: 'Premium',
    insuranceStatus: 'Inactive',
    joined: 'May 8, 2023',
    lastActive: '1 month ago',
    verified: true,
    boatRegistration: 'LY-2023-0123',
    licenseNumber: 'FL-2023-3456',
    phone: '+63 978 901 2345',
    avatar: 'https://randomuser.me/api/portraits/men/16.jpg'
  }, {
    id: 8,
    name: 'Mariano Bautista',
    email: 'mariano@fisherman.com',
    location: 'Bohol',
    region: 'Central Visayas',
    status: 'Active',
    insurance: 'Basic',
    insuranceStatus: 'Active',
    joined: 'Jun 15, 2023',
    lastActive: '6 hours ago',
    verified: true,
    boatRegistration: 'BH-2023-0456',
    licenseNumber: 'FL-2023-7890',
    phone: '+63 989 012 3456',
    avatar: 'https://randomuser.me/api/portraits/men/17.jpg'
  }];
  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()) || user.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === 'all' || user.region === filterRegion;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    const matchesInsurance = filterInsurance === 'all' || user.insuranceStatus === filterInsurance;
    return matchesSearch && matchesRegion && matchesStatus && matchesInsurance;
  });
  // Get counts for the dashboard
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'Active').length;
  const inactiveUsers = users.filter(u => u.status === 'Inactive').length;
  const pendingUsers = users.filter(u => u.status === 'Pending').length;
  const suspendedUsers = users.filter(u => u.status === 'Suspended').length;
  const insuranceCounts = {
    premium: users.filter(u => u.insurance === 'Premium').length,
    standard: users.filter(u => u.insurance === 'Standard').length,
    basic: users.filter(u => u.insurance === 'Basic').length,
    none: users.filter(u => u.insurance === 'None').length
  };
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
      case 'Pending':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Pending
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
  const getInsuranceBadge = (insurance: string) => {
    switch (insurance) {
      case 'Premium':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
            Premium
          </span>;
      case 'Standard':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            Standard
          </span>;
      case 'Basic':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-100 text-teal-800">
            Basic
          </span>;
      case 'None':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            None
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {insurance}
          </span>;
    }
  };
  const getInsuranceStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>;
      case 'Expired':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Expired
          </span>;
      case 'Pending':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Pending
          </span>;
      case 'Inactive':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            Inactive
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
        <p className="text-sm text-gray-500">
          Manage Fisher Folk users across all regions
        </p>
      </div>
      {/* User Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <Users2Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
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
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <CheckCircleIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Users</p>
              <p className="text-xl font-semibold">{activeUsers}</p>
              <div className="flex items-center mt-1">
                <div className="h-1 w-full bg-gray-200 rounded-full">
                  <div className="h-1 bg-green-500 rounded-full" style={{
                  width: `${activeUsers / totalUsers * 100}%`
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
              <AlertTriangleIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Verification</p>
              <p className="text-xl font-semibold">{pendingUsers}</p>
              <div className="flex items-center mt-1">
                <div className="h-1 w-full bg-gray-200 rounded-full">
                  <div className="h-1 bg-yellow-500 rounded-full" style={{
                  width: `${pendingUsers / totalUsers * 100}%`
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
              <p className="text-sm text-gray-500">Suspended/Inactive</p>
              <p className="text-xl font-semibold">
                {inactiveUsers + suspendedUsers}
              </p>
              <div className="flex items-center mt-1">
                <div className="h-1 w-full bg-gray-200 rounded-full">
                  <div className="h-1 bg-red-500 rounded-full" style={{
                  width: `${(inactiveUsers + suspendedUsers) / totalUsers * 100}%`
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Insurance Distribution */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Insurance Distribution
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Premium</span>
              </div>
              <span className="text-sm font-medium">
                {insuranceCounts.premium}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-purple-500 h-1.5 rounded-full" style={{
              width: `${insuranceCounts.premium / totalUsers * 100}%`
            }}></div>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Standard</span>
              </div>
              <span className="text-sm font-medium">
                {insuranceCounts.standard}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-blue-500 h-1.5 rounded-full" style={{
              width: `${insuranceCounts.standard / totalUsers * 100}%`
            }}></div>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Basic</span>
              </div>
              <span className="text-sm font-medium">
                {insuranceCounts.basic}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-teal-500 h-1.5 rounded-full" style={{
              width: `${insuranceCounts.basic / totalUsers * 100}%`
            }}></div>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">None</span>
              </div>
              <span className="text-sm font-medium">
                {insuranceCounts.none}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-gray-500 h-1.5 rounded-full" style={{
              width: `${insuranceCounts.none / totalUsers * 100}%`
            }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Fisher Folk Users
        </h2>
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" placeholder="Search users by name, email, or location..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md" value={filterRegion} onChange={e => setFilterRegion(e.target.value)}>
                <option value="all">All Regions</option>
                <option value="MIMAROPA">MIMAROPA</option>
                <option value="Central Visayas">Central Visayas</option>
                <option value="CALABARZON">CALABARZON</option>
                <option value="Davao Region">Davao Region</option>
                <option value="Western Visayas">Western Visayas</option>
                <option value="Zamboanga Peninsula">Zamboanga Peninsula</option>
                <option value="Eastern Visayas">Eastern Visayas</option>
              </select>
            </div>
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md" value={filterInsurance} onChange={e => setFilterInsurance(e.target.value)}>
                <option value="all">All Insurance</option>
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <FilterIcon className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Export
            </button>
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
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Insurance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map(user => <tr key={user.id} className={`hover:bg-gray-50 ${selectedUser === user.id ? 'bg-blue-50' : ''}`} onClick={() => setSelectedUser(user.id)}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={user.avatar} alt={user.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                            {user.verified && <BadgeCheckIcon className="h-4 w-4 text-blue-500 inline ml-1" />}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.location}
                      </div>
                      <div className="text-xs text-gray-500">{user.region}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(user.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col space-y-1">
                        {getInsuranceBadge(user.insurance)}
                        {getInsuranceStatusBadge(user.insuranceStatus)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{user.joined}</div>
                      <div className="text-xs text-gray-400">
                        Last active: {user.lastActive}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900" title="View Details">
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button className="text-teal-600 hover:text-teal-900" title="Edit User">
                          <EditIcon className="h-5 w-5" />
                        </button>
                        {user.status === 'Active' ? <button className="text-red-600 hover:text-red-900" title="Suspend User">
                            <XCircleIcon className="h-5 w-5" />
                          </button> : <button className="text-green-600 hover:text-green-900" title="Activate User">
                            <CheckCircleIcon className="h-5 w-5" />
                          </button>}
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          {selectedUser && <div className="lg:w-1/4 bg-gray-50 rounded-lg p-4">
              {users.filter(u => u.id === selectedUser).map(user => <div key={user.id} className="space-y-4">
                    <div className="flex flex-col items-center">
                      <img src={user.avatar} alt={user.name} className="h-20 w-20 rounded-full mb-2" />
                      <h3 className="text-lg font-medium text-gray-900">
                        {user.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        {getStatusBadge(user.status)}
                        {user.verified && <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            Verified
                          </span>}
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        User Information
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500">Email</p>
                          <p className="text-sm font-medium">{user.email}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Phone</p>
                          <p className="text-sm font-medium">{user.phone}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-xs text-gray-500">Location</p>
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                          <p className="text-sm font-medium">
                            {user.location}, {user.region}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        Insurance Details
                      </h4>
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-100 rounded-md">
                          <HeartIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {user.insurance} Plan
                          </p>
                          <p className="text-xs text-gray-500">
                            Status: {user.insuranceStatus}
                          </p>
                          <div className="mt-1">
                            {getInsuranceStatusBadge(user.insuranceStatus)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        Registration Details
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Joined</p>
                          <p className="text-sm font-medium">{user.joined}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Last Active</p>
                          <p className="text-sm font-medium">
                            {user.lastActive}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">
                            Boat Registration
                          </p>
                          <p className="text-sm font-medium">
                            {user.boatRegistration}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">
                            License Number
                          </p>
                          <p className="text-sm font-medium">
                            {user.licenseNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex flex-col space-y-2">
                      <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                        <EditIcon className="h-4 w-4 mr-2" />
                        Edit Profile
                      </button>
                      {user.status === 'Active' ? <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          <XCircleIcon className="h-4 w-4 mr-2" />
                          Suspend User
                        </button> : <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          <CheckCircleIcon className="h-4 w-4 mr-2" />
                          Activate User
                        </button>}
                      {!user.verified && <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <BadgeCheckIcon className="h-4 w-4 mr-2" />
                          Verify User
                        </button>}
                    </div>
                  </div>)}
            </div>}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">{filteredUsers.length}</span> of{' '}
            <span className="font-medium">{filteredUsers.length}</span> users
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>;
};