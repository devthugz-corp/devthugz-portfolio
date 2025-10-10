import React, { useState } from 'react';
import { MessageCircleIcon, AlertCircleIcon, CheckCircleIcon, ClockIcon, UserIcon, MessageSquareIcon, FilterIcon, SearchIcon } from 'lucide-react';
export const SupportFeedback: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const supportStats = [{
    name: 'Total Tickets',
    value: '1,245',
    change: '+12',
    icon: <MessageCircleIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Open Tickets',
    value: '87',
    change: '-5',
    icon: <ClockIcon className="h-6 w-6" />,
    color: 'bg-yellow-600'
  }, {
    name: 'Resolved Today',
    value: '42',
    change: '+8',
    icon: <CheckCircleIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }, {
    name: 'Avg. Response Time',
    value: '2.4 hrs',
    change: '-15%',
    icon: <AlertCircleIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }];
  const supportTickets = [{
    id: 'TKT-001245',
    user: 'Juan Dela Cruz',
    userType: 'Fisher',
    region: 'Cebu',
    subject: 'Insurance claim issue',
    category: 'Insurance',
    date: '2023-05-15',
    status: 'Open',
    priority: 'High',
    assignedTo: 'Maria Santos (Cebu Admin)'
  }, {
    id: 'TKT-001246',
    user: 'Maria Reyes',
    userType: 'Fisher',
    region: 'Davao',
    subject: 'AquaBite purchase failed',
    category: 'Payment',
    date: '2023-05-14',
    status: 'In Progress',
    priority: 'Medium',
    assignedTo: 'Jose Reyes (Davao Admin)'
  }, {
    id: 'TKT-001247',
    user: 'Pedro Santos',
    userType: 'Fisher',
    region: 'Palawan',
    subject: 'App crashing on profile page',
    category: 'Technical',
    date: '2023-05-14',
    status: 'In Progress',
    priority: 'Low',
    assignedTo: 'System Support'
  }, {
    id: 'TKT-001248',
    user: 'Ana Lim',
    userType: 'Admin',
    region: 'Iloilo',
    subject: 'Cannot approve verification',
    category: 'Admin Tools',
    date: '2023-05-13',
    status: 'Resolved',
    priority: 'Medium',
    assignedTo: 'System Support'
  }, {
    id: 'TKT-001249',
    user: 'Roberto Cruz',
    userType: 'Fisher',
    region: 'Zamboanga',
    subject: 'Wrong fish price in market',
    category: 'Market',
    date: '2023-05-12',
    status: 'Closed',
    priority: 'Low',
    assignedTo: 'Elena Garcia (Zamboanga Admin)'
  }];
  const feedbackData = [{
    id: 'FB-001',
    user: 'Juan Dela Cruz',
    userType: 'Fisher',
    region: 'Cebu',
    type: 'Feature Request',
    subject: 'Add fish price alerts',
    date: '2023-05-15',
    status: 'Under Review',
    votes: 28
  }, {
    id: 'FB-002',
    user: 'Maria Reyes',
    userType: 'Fisher',
    region: 'Davao',
    type: 'Improvement',
    subject: 'Make weather alerts more visible',
    date: '2023-05-14',
    status: 'Planned',
    votes: 42
  }, {
    id: 'FB-003',
    user: 'Jose Reyes',
    userType: 'Admin',
    region: 'Davao',
    type: 'Bug Report',
    subject: 'Verification page loading slow',
    date: '2023-05-13',
    status: 'Fixed',
    votes: 5
  }, {
    id: 'FB-004',
    user: 'Ana Lim',
    userType: 'Admin',
    region: 'Iloilo',
    type: 'Feature Request',
    subject: 'Bulk approve verifications',
    date: '2023-05-12',
    status: 'Implemented',
    votes: 18
  }];
  const filteredTickets = supportTickets.filter(ticket => {
    const matchesStatus = filterStatus === 'all' || ticket.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesSearch = ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) || ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) || ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) || ticket.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });
  const getStatusBadge = status => {
    switch (status) {
      case 'Open':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Open
          </span>;
      case 'In Progress':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            In Progress
          </span>;
      case 'Resolved':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Resolved
          </span>;
      case 'Closed':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            Closed
          </span>;
      case 'Under Review':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
            Under Review
          </span>;
      case 'Planned':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
            Planned
          </span>;
      case 'Fixed':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Fixed
          </span>;
      case 'Implemented':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Implemented
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>;
    }
  };
  const getPriorityBadge = priority => {
    switch (priority) {
      case 'High':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            High
          </span>;
      case 'Medium':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Medium
          </span>;
      case 'Low':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Low
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {priority}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Support & Feedback</h1>
        <p className="text-sm text-gray-500">
          Manage support tickets and user feedback
        </p>
      </div>
      {/* Support Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {supportStats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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
                  <div className={`ml-2 flex items-baseline text-sm font-semibold ${(stat.name === 'Open Tickets' || stat.name === 'Avg. Response Time') && stat.change.startsWith('-') ? 'text-green-600' : (stat.name === 'Open Tickets' || stat.name === 'Avg. Response Time') && !stat.change.startsWith('-') ? 'text-red-600' : stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      {/* Support Tickets */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 sm:mb-0">
            Support Tickets
          </h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search tickets..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex items-center">
              <FilterIcon className="mr-2 h-5 w-5 text-gray-400" />
              <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="open">Open</option>
                <option value="in progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ticket ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTickets.map((ticket, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {ticket.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <UserIcon className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          {ticket.user}
                        </div>
                        <div className="text-xs text-gray-500">
                          {ticket.userType} • {ticket.region}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {ticket.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ticket.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(ticket.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(ticket.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getPriorityBadge(ticket.priority)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-teal-600 hover:text-teal-900 mr-3">
                      View
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      Assign
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">{filteredTickets.length}</span>{' '}
            tickets
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
      {/* User Feedback */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">
            User Feedback & Feature Requests
          </h2>
          <button className="px-3 py-1 bg-teal-600 text-white text-sm rounded hover:bg-teal-700">
            Create Announcement
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Votes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {feedbackData.map((feedback, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {feedback.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <UserIcon className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          {feedback.user}
                        </div>
                        <div className="text-xs text-gray-500">
                          {feedback.userType} • {feedback.region}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {feedback.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {feedback.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(feedback.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(feedback.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {feedback.votes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-teal-600 hover:text-teal-900 mr-3">
                      View
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      Update
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};