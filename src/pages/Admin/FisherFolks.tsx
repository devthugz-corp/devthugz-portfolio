import React from 'react';
export const FisherFolks: React.FC = () => {
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Fisher Folk Management
        </h1>
        <p className="text-sm text-gray-500">
          Manage registered fishermen in your area
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="mb-6 flex flex-wrap gap-4 justify-between">
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-grow max-w-md">
              <input type="text" placeholder="Search by name, ID, or location..." className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
            <div className="w-full sm:w-auto">
              <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option>All Barangays</option>
                <option>Barangay San Pedro</option>
                <option>Barangay Santa Ana</option>
                <option>Barangay San Juan</option>
                <option>Barangay Santo Niño</option>
              </select>
            </div>
            <div className="w-full sm:w-auto">
              <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending Verification</option>
              </select>
            </div>
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Add Fisher Folk
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Insurance
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Activity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[{
              name: 'Juan Dela Cruz',
              id: 'FF-10045',
              location: 'Barangay San Pedro',
              insurance: 'Active',
              lastActivity: 'Today, 8:30 AM'
            }, {
              name: 'Maria Reyes',
              id: 'FF-10046',
              location: 'Barangay Santa Ana',
              insurance: 'Active',
              lastActivity: 'Yesterday'
            }, {
              name: 'Pedro Santos',
              id: 'FF-10032',
              location: 'Barangay San Juan',
              insurance: 'At Risk',
              lastActivity: '3 days ago'
            }, {
              name: 'Ana Lim',
              id: 'FF-10089',
              location: 'Barangay Santo Niño',
              insurance: 'Inactive',
              lastActivity: '1 week ago'
            }, {
              name: 'Roberto Cruz',
              id: 'FF-10054',
              location: 'Barangay San Pedro',
              insurance: 'Active',
              lastActivity: 'Today, 10:15 AM'
            }, {
              name: 'Elena Garcia',
              id: 'FF-10067',
              location: 'Barangay Santa Ana',
              insurance: 'Pending',
              lastActivity: 'Just now'
            }, {
              name: 'Carlos Tan',
              id: 'FF-10078',
              location: 'Barangay San Juan',
              insurance: 'Active',
              lastActivity: 'Today, 9:45 AM'
            }].map((fisher, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 30}.jpg`} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {fisher.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          fisher{index + 1}@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {fisher.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {fisher.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${fisher.insurance === 'Active' ? 'bg-green-100 text-green-800' : fisher.insurance === 'At Risk' ? 'bg-yellow-100 text-yellow-800' : fisher.insurance === 'Inactive' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                      {fisher.insurance}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {fisher.lastActivity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      View
                    </button>
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Deactivate
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">7</span> of{' '}
            <span className="font-medium">843</span> fisher folk
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