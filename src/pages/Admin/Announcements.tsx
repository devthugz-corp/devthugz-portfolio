import React, { useState } from 'react';
import { MegaphoneIcon, CalendarIcon, GlobeIcon, UsersIcon, BellIcon, CheckCircleIcon, PlusIcon } from 'lucide-react';
export const Announcements: React.FC = () => {
  const [showNewAnnouncementForm, setShowNewAnnouncementForm] = useState(false);
  const announcementStats = [{
    name: 'Total Announcements',
    value: '42',
    change: '+3',
    icon: <MegaphoneIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Active Announcements',
    value: '12',
    change: '+1',
    icon: <BellIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }, {
    name: 'Scheduled',
    value: '5',
    change: '+2',
    icon: <CalendarIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }, {
    name: 'Read Rate',
    value: '82.5%',
    change: '+1.8%',
    icon: <CheckCircleIcon className="h-6 w-6" />,
    color: 'bg-teal-600'
  }];
  const announcements = [{
    id: 'ANN-001',
    title: 'Weather Advisory for Eastern Coast',
    content: 'Strong winds and high waves expected along the eastern coast for the next 48 hours. Please secure your boats and avoid going out to sea.',
    type: 'Weather',
    audience: 'Fishers',
    regions: 'Eastern Region',
    status: 'Active',
    publishDate: '2023-05-18',
    expiryDate: '2023-05-20',
    readCount: 245,
    totalRecipients: 320
  }, {
    id: 'ANN-002',
    title: 'New Verification Process',
    content: 'We have updated our verification process to make it faster and easier. Please visit the verification center to update your documents.',
    type: 'System',
    audience: 'All Users',
    regions: 'All Regions',
    status: 'Active',
    publishDate: '2023-05-15',
    expiryDate: '2023-05-30',
    readCount: 412,
    totalRecipients: 520
  }, {
    id: 'ANN-003',
    title: 'Community Meeting',
    content: 'Join us for a community meeting on sustainable fishing practices on May 25, 2023 at the town hall.',
    type: 'Event',
    audience: 'Fishers',
    regions: 'Central Region',
    status: 'Scheduled',
    publishDate: '2023-05-20',
    expiryDate: '2023-05-26',
    readCount: 0,
    totalRecipients: 180
  }];
  const getStatusBadge = status => {
    switch (status) {
      case 'Active':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>;
      case 'Scheduled':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            Scheduled
          </span>;
      case 'Expired':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            Expired
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>;
    }
  };
  const getTypeBadge = type => {
    switch (type) {
      case 'Weather':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Weather
          </span>;
      case 'System':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
            System
          </span>;
      case 'Event':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Event
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {type}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
        <p className="text-sm text-gray-500">
          Create and manage announcements for fishers in your region
        </p>
      </div>
      {/* Announcement Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {announcementStats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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
      {/* New Announcement Form */}
      {showNewAnnouncementForm ? <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">
              Create New Announcement
            </h2>
            <button onClick={() => setShowNewAnnouncementForm(false)} className="text-gray-400 hover:text-gray-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input type="text" name="title" id="title" className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Announcement title" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <div className="mt-1">
                  <select id="type" name="type" className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    <option>Weather</option>
                    <option>System</option>
                    <option>Event</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Content
                </label>
                <div className="mt-1">
                  <textarea id="content" name="content" rows={4} className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Announcement content"></textarea>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700">
                  Publish Date
                </label>
                <div className="mt-1">
                  <input type="date" name="publishDate" id="publishDate" className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <div className="mt-1">
                  <input type="date" name="expiryDate" id="expiryDate" className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="urgent" name="urgent" type="checkbox" className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="urgent" className="font-medium text-gray-700">
                      Mark as Urgent
                    </label>
                    <p className="text-gray-500">
                      This will send push notifications to all recipients
                      immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500" onClick={() => setShowNewAnnouncementForm(false)}>
                Cancel
              </button>
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Publish
              </button>
            </div>
          </form>
        </div> : <div className="flex justify-end mb-6">
          <button onClick={() => setShowNewAnnouncementForm(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            <PlusIcon className="h-4 w-4 mr-2" />
            Create Announcement
          </button>
        </div>}
      {/* Announcements List */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-6">
          All Announcements
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Publish Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Read Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {announcements.map((announcement, index) => {
              const readRate = Math.round(announcement.readCount / announcement.totalRecipients * 100) || 0;
              return <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {announcement.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {announcement.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getTypeBadge(announcement.type)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(announcement.publishDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(announcement.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {announcement.status === 'Scheduled' ? <span className="text-sm text-gray-500">
                          Not published yet
                        </span> : <div className="flex items-center">
                          <span className="text-sm text-gray-900 mr-2">
                            {readRate}%
                          </span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div className={`h-2 rounded-full ${readRate >= 80 ? 'bg-green-500' : readRate >= 60 ? 'bg-blue-500' : readRate >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                        width: `${readRate}%`
                      }}></div>
                          </div>
                        </div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-teal-600 hover:text-teal-900 mr-3">
                        Edit
                      </button>
                      {announcement.status === 'Active' && <button className="text-red-600 hover:text-red-900">
                          End
                        </button>}
                      {announcement.status === 'Scheduled' && <button className="text-blue-600 hover:text-blue-900">
                          Publish Now
                        </button>}
                    </td>
                  </tr>;
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};