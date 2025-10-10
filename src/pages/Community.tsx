import React, { useState } from 'react';
import { UsersIcon, MessageCircleIcon, CalendarIcon, PlusIcon, UserPlusIcon, FilterIcon, SearchIcon, MapPinIcon } from 'lucide-react';
import ChatInterface from '../components/ChatInterface';
export function Community() {
  const [activeTab, setActiveTab] = useState('groups');
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
  // Mock community groups data
  const communityGroups = [{
    id: 1,
    name: 'Batangas Fishing Association',
    members: 78,
    location: 'Batangas City',
    description: 'Official group for registered fishermen in Batangas City',
    image: 'https://images.unsplash.com/photo-1545566239-0d774a5a3ddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    name: 'Small-Scale Fishers Network',
    members: 124,
    location: 'Batangas Province',
    description: 'Support network for small-scale and artisanal fishermen',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 3,
    name: 'Sustainable Fishing Practices',
    members: 56,
    location: 'Multiple Locations',
    description: 'Group focused on promoting sustainable fishing methods',
    image: 'https://images.unsplash.com/photo-1540976575976-0c4b88b42efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 4,
    name: 'Fishing Equipment Exchange',
    members: 92,
    location: 'Online',
    description: 'Platform for trading, selling, and buying fishing equipment',
    image: 'https://images.unsplash.com/photo-1500646953400-93ab8cca8284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];
  // Mock announcements data
  const announcements = [{
    id: 1,
    title: "Fishermen's Day Celebration",
    content: "Join us for the annual Fishermen's Day celebration at Batangas City Plaza on July 1st. There will be competitions, food, and entertainment for all registered fishermen and their families.",
    date: '2023-06-15',
    author: 'Admin LGU'
  }, {
    id: 2,
    title: 'New Fishing License Requirements',
    content: 'Starting next month, all fishermen must update their licenses with the new QR code system. Visit the Municipal Agriculture Office with your old license and valid ID.',
    date: '2023-06-10',
    author: 'Admin LGU'
  }, {
    id: 3,
    title: 'Free Boat Maintenance Workshop',
    content: 'The Department of Agriculture is offering a free boat maintenance workshop next Saturday. Limited slots available, register at the municipal hall.',
    date: '2023-06-05',
    author: 'Admin LGU'
  }];
  // Mock upcoming events data
  const events = [{
    id: 1,
    title: "Fishermen's Day Celebration",
    date: '2023-07-01',
    time: '8:00 AM - 5:00 PM',
    location: 'Batangas City Plaza',
    attendees: 145
  }, {
    id: 2,
    title: 'Boat Maintenance Workshop',
    date: '2023-06-24',
    time: '9:00 AM - 12:00 PM',
    location: 'Municipal Hall Training Room',
    attendees: 32
  }, {
    id: 3,
    title: 'Sustainable Fishing Seminar',
    date: '2023-07-15',
    time: '1:00 PM - 4:00 PM',
    location: 'Batangas State University',
    attendees: 78
  }];
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Community</h2>
          <p className="text-gray-600 mt-1">
            Connect with other fishers and join community groups
          </p>
        </div>
        <div className="flex space-x-3">
          <button onClick={() => setIsCreateGroupModalOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
            <UserPlusIcon className="h-5 w-5 mr-2" />
            Join Group
          </button>
        </div>
      </div>
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button onClick={() => setActiveTab('groups')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'groups' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <UsersIcon className="h-5 w-5 inline mr-2 -mt-0.5" />
              Community Groups
            </button>
            <button onClick={() => setActiveTab('chat')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'chat' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <MessageCircleIcon className="h-5 w-5 inline mr-2 -mt-0.5" />
              Chat
            </button>
            <button onClick={() => setActiveTab('announcements')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'announcements' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <MessageCircleIcon className="h-5 w-5 inline mr-2 -mt-0.5" />
              Announcements
            </button>
            <button onClick={() => setActiveTab('events')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'events' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <CalendarIcon className="h-5 w-5 inline mr-2 -mt-0.5" />
              Upcoming Events
            </button>
          </nav>
        </div>
        <div className="p-6">
          {/* Groups Tab */}
          {activeTab === 'groups' && <div>
              <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-3 sm:space-y-0">
                <div className="relative w-full sm:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Search groups..." />
                </div>
                <div className="flex items-center">
                  <FilterIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                    <option>All Locations</option>
                    <option>Batangas City</option>
                    <option>Batangas Province</option>
                    <option>Multiple Locations</option>
                    <option>Online</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communityGroups.map(group => <div key={group.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img src={group.image} alt={group.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {group.name}
                      </h3>
                      <div className="flex items-center mt-1 mb-2">
                        <UsersIcon className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">
                          {group.members} members
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">
                          {group.location}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {group.description}
                      </p>
                      <div className="flex justify-between">
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                          View Details
                        </button>
                        <button className="px-4 py-2 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700" onClick={() => setActiveTab('chat')}>
                          Join Chat
                        </button>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>}
          {/* Chat Tab */}
          {activeTab === 'chat' && <ChatInterface />}
          {/* Announcements Tab */}
          {activeTab === 'announcements' && <div className="space-y-6">
              {announcements.map(announcement => <div key={announcement.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-900">
                      {announcement.title}
                    </h3>
                    <div className="text-sm text-gray-500">
                      {new Date(announcement.date).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">{announcement.content}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Posted by: {announcement.author}
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
                        Read More
                      </button>
                      <button className="px-3 py-1 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                        Share
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>}
          {/* Events Tab */}
          {activeTab === 'events' && <div className="space-y-6">
              {events.map(event => <div key={event.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="sm:flex sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {event.title}
                      </h3>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                          {new Date(event.date).toLocaleDateString()} •{' '}
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <UsersIcon className="h-4 w-4 mr-1 text-gray-400" />
                          {event.attendees} attending
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col space-y-2">
                      <button className="px-4 py-2 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700">
                        RSVP
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>}
        </div>
      </div>
      {/* Create Group Modal */}
      {isCreateGroupModalOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsCreateGroupModalOpen(false)}></div>
          <div className="relative bg-white rounded-lg max-w-lg w-full mx-auto p-6 shadow-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Join Community Group
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Group
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                  <option value="">Choose a community group</option>
                  {communityGroups.map(group => <option key={group.id} value={group.id}>
                      {group.name}
                    </option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Why do you want to join?
                </label>
                <textarea rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"></textarea>
              </div>
              <div className="flex items-center">
                <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the group rules and community guidelines
                </label>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none" onClick={() => setIsCreateGroupModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                  Request to Join
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
}