import React from 'react';
import { CloudLightningIcon, CloudRainIcon, WindIcon, SunIcon } from 'lucide-react';
export const WeatherAlerts: React.FC = () => {
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Weather & Sea Alerts
        </h1>
        <p className="text-sm text-gray-500">
          Manage weather alerts and notifications for fishermen
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Current Weather Conditions
          </h2>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full">
                <SunIcon className="h-10 w-10 text-yellow-500" />
              </div>
              <div className="ml-4">
                <p className="text-3xl font-bold text-gray-900">29°C</p>
                <p className="text-sm text-gray-500">Partly Cloudy</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Wind: 15 km/h</p>
              <p className="text-sm text-gray-500">Humidity: 78%</p>
              <p className="text-sm text-gray-500">Visibility: 10 km</p>
            </div>
          </div>
          <h3 className="font-medium text-gray-900 mb-2">Today's Forecast</h3>
          <div className="grid grid-cols-4 gap-2">
            {[{
            time: '9 AM',
            temp: '27°C',
            icon: <SunIcon className="h-5 w-5 text-yellow-500" />
          }, {
            time: '12 PM',
            temp: '29°C',
            icon: <SunIcon className="h-5 w-5 text-yellow-500" />
          }, {
            time: '3 PM',
            temp: '28°C',
            icon: <CloudRainIcon className="h-5 w-5 text-blue-500" />
          }, {
            time: '6 PM',
            temp: '26°C',
            icon: <CloudRainIcon className="h-5 w-5 text-blue-500" />
          }].map((forecast, index) => <div key={index} className="bg-gray-50 p-2 rounded-md text-center">
                <p className="text-xs text-gray-500">{forecast.time}</p>
                <div className="my-1 flex justify-center">{forecast.icon}</div>
                <p className="text-sm font-medium">{forecast.temp}</p>
              </div>)}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Sea Conditions
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Wave Height</p>
                <p className="text-2xl font-bold text-gray-900">1.5m</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Wave Direction</p>
                <p className="text-2xl font-bold text-gray-900">NE</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tide</p>
                <p className="text-2xl font-bold text-gray-900">High</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Water Temp</p>
                <p className="text-2xl font-bold text-gray-900">26°C</p>
              </div>
            </div>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-500">
                Wave visualization would go here
              </span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Tide Schedule</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-500">High Tide</p>
                  <p className="text-base font-medium">10:45 AM - 1.8m</p>
                  <p className="text-sm text-gray-500">11:15 PM - 1.7m</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-500">Low Tide</p>
                  <p className="text-base font-medium">4:30 AM - 0.3m</p>
                  <p className="text-sm text-gray-500">5:10 PM - 0.4m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Active Alerts</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Create New Alert
          </button>
        </div>
        <div className="space-y-4">
          <div className="p-4 border border-red-200 rounded-lg bg-red-50">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CloudLightningIcon className="h-5 w-5 text-red-700" />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-red-800">
                    Tropical Storm Warning
                  </h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                    High Priority
                  </span>
                </div>
                <div className="mt-1 text-sm text-red-700">
                  <p>
                    Tropical Storm "Amihan" approaching from the east. Expected
                    landfall in 24-36 hours. Strong winds and heavy rainfall
                    expected.
                  </p>
                  <p className="mt-1">
                    All fishing activities are suspended until further notice.
                  </p>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <div className="text-xs text-red-700">
                    Issued: Today, 6:00 AM • Valid until: Tomorrow, 6:00 PM
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-white px-2.5 py-1 rounded text-xs font-medium text-red-700 border border-red-300 hover:bg-red-50">
                      Edit
                    </button>
                    <button className="bg-red-100 px-2.5 py-1 rounded text-xs font-medium text-red-700 hover:bg-red-200">
                      Send to All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <WindIcon className="h-5 w-5 text-yellow-700" />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Strong Wind Advisory
                  </h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                    Medium Priority
                  </span>
                </div>
                <div className="mt-1 text-sm text-yellow-700">
                  <p>
                    Strong winds of 25-35 km/h with gusts up to 45 km/h
                    expected. Small boats are advised to take necessary
                    precautions.
                  </p>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <div className="text-xs text-yellow-700">
                    Issued: Yesterday, 4:00 PM • Valid until: Tomorrow, 4:00 AM
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-white px-2.5 py-1 rounded text-xs font-medium text-yellow-700 border border-yellow-300 hover:bg-yellow-50">
                      Edit
                    </button>
                    <button className="bg-yellow-100 px-2.5 py-1 rounded text-xs font-medium text-yellow-700 hover:bg-yellow-200">
                      Send to All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Safe Fishing Prediction
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          AI-powered forecast for optimal fishing conditions in the next 7 days
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Weather
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sea Condition
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wind
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Safety Rating
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[{
              date: 'Today',
              weather: 'Partly Cloudy',
              seaCondition: 'Moderate',
              wind: '15 km/h',
              safetyRating: 'Good'
            }, {
              date: 'Tomorrow',
              weather: 'Thunderstorms',
              seaCondition: 'Rough',
              wind: '35 km/h',
              safetyRating: 'Poor'
            }, {
              date: 'Wednesday',
              weather: 'Thunderstorms',
              seaCondition: 'Very Rough',
              wind: '40 km/h',
              safetyRating: 'Dangerous'
            }, {
              date: 'Thursday',
              weather: 'Cloudy',
              seaCondition: 'Moderate',
              wind: '20 km/h',
              safetyRating: 'Fair'
            }, {
              date: 'Friday',
              weather: 'Sunny',
              seaCondition: 'Calm',
              wind: '10 km/h',
              safetyRating: 'Excellent'
            }, {
              date: 'Saturday',
              weather: 'Sunny',
              seaCondition: 'Calm',
              wind: '5 km/h',
              safetyRating: 'Excellent'
            }, {
              date: 'Sunday',
              weather: 'Partly Cloudy',
              seaCondition: 'Slight',
              wind: '12 km/h',
              safetyRating: 'Good'
            }].map((forecast, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {forecast.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {forecast.weather}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {forecast.seaCondition}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {forecast.wind}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${forecast.safetyRating === 'Excellent' ? 'bg-green-100 text-green-800' : forecast.safetyRating === 'Good' ? 'bg-green-100 text-green-800' : forecast.safetyRating === 'Fair' ? 'bg-yellow-100 text-yellow-800' : forecast.safetyRating === 'Poor' ? 'bg-red-100 text-red-800' : 'bg-red-100 text-red-800'}`}>
                      {forecast.safetyRating}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};