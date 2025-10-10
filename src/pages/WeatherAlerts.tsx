import React, { useState } from 'react';
import { CloudRainIcon, CloudLightningIcon, SunIcon, CloudIcon, WindIcon, WavesIcon, AlertTriangleIcon, PlusIcon, MegaphoneIcon } from 'lucide-react';
export function WeatherAlerts() {
  const [isCreateAlertModalOpen, setIsCreateAlertModalOpen] = useState(false);
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Weather & Sea Alerts
          </h2>
          <p className="text-gray-600 mt-1">
            Real-time weather information and fishing conditions
          </p>
        </div>
        <button onClick={() => setIsCreateAlertModalOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Alert
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                Today's Forecast
              </h3>
              <span className="text-sm text-gray-500">May 15, 2023</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="rounded-full p-3 bg-blue-100">
                  <CloudRainIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Light Rain
                  </h4>
                  <p className="text-gray-600">Batangas Bay Area</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-3xl font-bold text-gray-900">26°C</div>
                <div className="text-sm text-gray-600">Feels like 28°C</div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-md font-medium text-gray-900 mb-4">
                Hourly Forecast
              </h4>
              <div className="overflow-x-auto">
                <div className="inline-flex space-x-4 min-w-full pb-2">
                  {[{
                  time: '9 AM',
                  icon: <SunIcon className="h-6 w-6 text-amber-500" />,
                  temp: '25°C',
                  precip: '0%'
                }, {
                  time: '10 AM',
                  icon: <SunIcon className="h-6 w-6 text-amber-500" />,
                  temp: '26°C',
                  precip: '0%'
                }, {
                  time: '11 AM',
                  icon: <CloudIcon className="h-6 w-6 text-gray-500" />,
                  temp: '26°C',
                  precip: '10%'
                }, {
                  time: '12 PM',
                  icon: <CloudIcon className="h-6 w-6 text-gray-500" />,
                  temp: '27°C',
                  precip: '20%'
                }, {
                  time: '1 PM',
                  icon: <CloudRainIcon className="h-6 w-6 text-blue-500" />,
                  temp: '26°C',
                  precip: '40%'
                }, {
                  time: '2 PM',
                  icon: <CloudRainIcon className="h-6 w-6 text-blue-500" />,
                  temp: '25°C',
                  precip: '60%'
                }, {
                  time: '3 PM',
                  icon: <CloudRainIcon className="h-6 w-6 text-blue-500" />,
                  temp: '25°C',
                  precip: '70%'
                }, {
                  time: '4 PM',
                  icon: <CloudRainIcon className="h-6 w-6 text-blue-500" />,
                  temp: '24°C',
                  precip: '60%'
                }, {
                  time: '5 PM',
                  icon: <CloudIcon className="h-6 w-6 text-gray-500" />,
                  temp: '24°C',
                  precip: '30%'
                }, {
                  time: '6 PM',
                  icon: <CloudIcon className="h-6 w-6 text-gray-500" />,
                  temp: '23°C',
                  precip: '20%'
                }].map((hour, index) => <div key={index} className="flex flex-col items-center">
                      <div className="text-sm font-medium text-gray-500">
                        {hour.time}
                      </div>
                      <div className="my-2">{hour.icon}</div>
                      <div className="text-sm font-medium text-gray-900">
                        {hour.temp}
                      </div>
                      <div className="text-xs text-blue-500">{hour.precip}</div>
                    </div>)}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-md font-medium text-gray-900">
                  5-Day Forecast
                </h4>
              </div>
              <div className="space-y-2">
                {[{
                day: 'Today',
                icon: <CloudRainIcon className="h-6 w-6 text-blue-500" />,
                high: '27°C',
                low: '23°C',
                precip: '60%'
              }, {
                day: 'Tomorrow',
                icon: <CloudIcon className="h-6 w-6 text-gray-500" />,
                high: '28°C',
                low: '24°C',
                precip: '20%'
              }, {
                day: 'Wednesday',
                icon: <SunIcon className="h-6 w-6 text-amber-500" />,
                high: '30°C',
                low: '25°C',
                precip: '0%'
              }, {
                day: 'Thursday',
                icon: <SunIcon className="h-6 w-6 text-amber-500" />,
                high: '31°C',
                low: '26°C',
                precip: '0%'
              }, {
                day: 'Friday',
                icon: <CloudLightningIcon className="h-6 w-6 text-purple-500" />,
                high: '29°C',
                low: '25°C',
                precip: '80%'
              }].map((day, index) => <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <div className="w-20 text-sm font-medium text-gray-900">
                        {day.day}
                      </div>
                      <div className="mr-2">{day.icon}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900 mr-4">
                        H: {day.high} L: {day.low}
                      </div>
                      <div className="text-sm text-blue-500 w-12 text-right">
                        {day.precip}
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-red-100">
                <AlertTriangleIcon className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                Active Alerts
              </h3>
            </div>
            <div className="p-4 bg-red-50 border border-red-100 rounded-md mb-4">
              <div className="flex items-center mb-2">
                <CloudRainIcon className="h-5 w-5 text-red-500 mr-2" />
                <h4 className="font-medium text-red-700">Heavy Rain Warning</h4>
              </div>
              <p className="text-sm text-red-700 mb-2">
                Heavy rainfall expected in Batangas coastal areas tomorrow
                afternoon. Potential for flash floods.
              </p>
              <p className="text-xs text-red-600">
                Issued: May 15, 2023 - 8:30 AM
              </p>
              <div className="mt-2 flex justify-end">
                <button className="text-sm text-red-600 hover:text-red-800">
                  Edit
                </button>
                <button className="text-sm text-red-600 hover:text-red-800 ml-3">
                  Delete
                </button>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-md">
              <div className="flex items-center mb-2">
                <WindIcon className="h-5 w-5 text-yellow-600 mr-2" />
                <h4 className="font-medium text-yellow-700">
                  Strong Wind Advisory
                </h4>
              </div>
              <p className="text-sm text-yellow-700 mb-2">
                Strong winds of 25-35 km/h with gusts up to 45 km/h expected.
                Small boats are advised to take necessary precautions.
              </p>
              <p className="text-xs text-yellow-600">
                Issued: May 14, 2023 - 4:15 PM
              </p>
              <div className="mt-2 flex justify-end">
                <button className="text-sm text-yellow-600 hover:text-yellow-800">
                  Edit
                </button>
                <button className="text-sm text-yellow-600 hover:text-yellow-800 ml-3">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-teal-100">
                <WavesIcon className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                Sea Conditions
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Wave Height
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  1.2 meters
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Wave Direction
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  South-East
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Water Temperature
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  28°C
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Tide</span>
                <span className="text-sm font-semibold text-gray-900">
                  Low tide at 3:45 PM
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-blue-100">
                <WindIcon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                Safe Fishing Time
              </h3>
            </div>
            <div className="p-4 bg-blue-50 rounded-md">
              <h4 className="font-medium text-blue-800 mb-2">AI Prediction</h4>
              <p className="text-sm text-blue-800 mb-4">
                Best fishing conditions today:{' '}
                <strong>6:00 AM - 10:00 AM</strong>
              </p>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{
                width: '40%'
              }}></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>12 AM</span>
                <span>6 AM</span>
                <span>12 PM</span>
                <span>6 PM</span>
                <span>12 AM</span>
              </div>
              <div className="mt-4">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
                  View Detailed Forecast
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Create Alert Modal */}
      {isCreateAlertModalOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsCreateAlertModalOpen(false)}></div>
          <div className="relative bg-white rounded-lg max-w-lg w-full mx-auto p-6 shadow-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Create Weather Alert
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Alert Title
                </label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="e.g., Storm Warning" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Alert Type
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                  <option>Storm</option>
                  <option>Heavy Rain</option>
                  <option>Strong Winds</option>
                  <option>High Waves</option>
                  <option>Typhoon</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Priority
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                  <option>High - Immediate danger</option>
                  <option>Medium - Potential risk</option>
                  <option>Low - Informational</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Alert Message
                </label>
                <textarea rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Detailed information about the alert..."></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Valid From
                  </label>
                  <input type="datetime-local" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Valid Until
                  </label>
                  <input type="datetime-local" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" id="send-sms" />
                <label htmlFor="send-sms" className="ml-2 block text-sm text-gray-700">
                  Send SMS alert to all registered fishermen
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" id="post-announcement" />
                <label htmlFor="post-announcement" className="ml-2 block text-sm text-gray-700">
                  Also post as announcement
                </label>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none" onClick={() => setIsCreateAlertModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none">
                  Issue Alert
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
}