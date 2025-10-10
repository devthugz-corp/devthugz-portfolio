import React, { useState } from 'react';
import { CompassIcon, PlusIcon, SearchIcon, FilterIcon, EyeIcon, EditIcon, TrashIcon, BrainIcon, MapPinIcon, CloudSunIcon, DropletIcon, BarChartIcon, ThumbsUpIcon, AlertTriangleIcon } from 'lucide-react';
export function FishHub() {
  const [isAddFishModalOpen, setIsAddFishModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showNemoAI, setShowNemoAI] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('Palawan');
  // Mock fish species data
  const fishSpecies = [{
    id: 1,
    name: 'Bangus (Milkfish)',
    scientificName: 'Chanos chanos',
    category: 'Freshwater',
    habitat: 'Rivers, Lakes, Brackish water',
    description: 'The national fish of the Philippines, commonly farmed in fishponds and fish pens.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    name: 'Tilapia',
    scientificName: 'Oreochromis niloticus',
    category: 'Freshwater',
    habitat: 'Rivers, Lakes, Ponds',
    description: 'A popular freshwater fish that is easy to farm and widely consumed.',
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 3,
    name: 'Tuna (Yellowfin)',
    scientificName: 'Thunnus albacares',
    category: 'Saltwater',
    habitat: 'Open ocean, Deep sea',
    description: 'A large, commercially important fish found in open waters. Known for its high-quality meat.',
    image: 'https://images.unsplash.com/photo-1580845456874-3f1f2a8d3c45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 4,
    name: 'Lapu-Lapu (Grouper)',
    scientificName: 'Epinephelus lanceolatus',
    category: 'Saltwater',
    habitat: 'Coral reefs, Rocky areas',
    description: 'A high-value fish with firm white flesh, commonly found around coral reefs.',
    image: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 5,
    name: 'Galunggong (Mackerel Scad)',
    scientificName: 'Decapterus macarellus',
    category: 'Saltwater',
    habitat: 'Coastal waters',
    description: "Often called the 'poor man's fish', it's an affordable and widely consumed fish in the Philippines.",
    image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 6,
    name: 'Hito (Catfish)',
    scientificName: 'Clarias batrachus',
    category: 'Freshwater',
    habitat: 'Rivers, Swamps, Rice fields',
    description: 'A hardy fish that can survive in low-oxygen environments, commonly farmed in the Philippines.',
    image: 'https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];
  // Mock Nemo AI recommendations
  const nemoRecommendations = [{
    id: 1,
    name: 'Yellowfin Tuna',
    confidence: 95,
    season: 'Currently in season',
    trend: 'High catch rates reported',
    location: 'Offshore, 15-20km from coast'
  }, {
    id: 2,
    name: 'Mackerel Scad',
    confidence: 88,
    season: 'Peak season',
    trend: 'Abundant catches this week',
    location: 'Coastal waters, 5-8km from shore'
  }, {
    id: 3,
    name: 'Blue Marlin',
    confidence: 72,
    season: 'Early season',
    trend: 'Increasing sightings',
    location: 'Deep waters, 25km+ offshore'
  }];
  // Filter fish based on search term and category
  const filteredFish = fishSpecies.filter(fish => {
    const matchesSearch = fish.name.toLowerCase().includes(searchTerm.toLowerCase()) || fish.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || fish.category === filterCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Fish Hub</h2>
          <p className="text-gray-600 mt-1">
            Manage and explore fish species information
          </p>
        </div>
        <div className="flex space-x-3">
          <button onClick={() => setShowNemoAI(!showNemoAI)} className={`inline-flex items-center px-4 py-2 border ${showNemoAI ? 'bg-blue-50 text-blue-700 border-blue-200' : 'border-gray-300 text-gray-700 bg-white'} rounded-md hover:bg-gray-50 focus:outline-none`}>
            <BrainIcon className="h-5 w-5 mr-2" />
            Nemo AI Assistant
          </button>
          <button onClick={() => setIsAddFishModalOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Species
          </button>
        </div>
      </div>
      {/* Nemo AI Panel */}
      {showNemoAI && <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg p-6 mb-6 text-white">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full">
                <BrainIcon className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium">
                  Nemo AI Fishing Assistant
                </h3>
                <p className="text-sm text-blue-100">
                  Intelligent recommendations based on current conditions
                </p>
              </div>
            </div>
            <button onClick={() => setShowNemoAI(false)} className="text-white hover:text-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <h4 className="font-medium">Location</h4>
              </div>
              <p className="text-sm">{currentLocation}</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <CloudSunIcon className="h-5 w-5 mr-2" />
                <h4 className="font-medium">Weather</h4>
              </div>
              <p className="text-sm">Partly Cloudy, 29°C</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <DropletIcon className="h-5 w-5 mr-2" />
                <h4 className="font-medium">Water Temp</h4>
              </div>
              <p className="text-sm">26°C, Calm seas</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <BarChartIcon className="h-5 w-5 mr-2" />
                <h4 className="font-medium">Season</h4>
              </div>
              <p className="text-sm">Peak fishing season</p>
            </div>
          </div>
          <h4 className="text-lg font-medium mb-4">
            Today's Top Recommendations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nemoRecommendations.map(fish => <div key={fish.id} className="bg-white rounded-lg shadow overflow-hidden text-gray-800">
                <div className="h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h5 className="font-medium text-lg">{fish.name}</h5>
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      {fish.confidence}% match
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center text-sm">
                      <ThumbsUpIcon className="h-4 w-4 text-blue-500 mr-2" />
                      <span>{fish.season}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BarChartIcon className="h-4 w-4 text-blue-500 mr-2" />
                      <span>{fish.trend}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPinIcon className="h-4 w-4 text-blue-500 mr-2" />
                      <span>{fish.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between">
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      View Details
                    </button>
                    <button className="text-sm text-teal-600 hover:text-teal-800">
                      Set as Target
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="mt-6 text-center">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 focus:outline-none">
              View All Recommendations
            </button>
          </div>
        </div>}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Search fish species..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="sm:w-64 flex items-center">
            <FilterIcon className="h-5 w-5 text-gray-400 mr-2" />
            <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md" value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="Freshwater">Freshwater</option>
              <option value="Saltwater">Saltwater</option>
              <option value="Brackish">Brackish</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFish.map(fish => <div key={fish.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={fish.image} alt={fish.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {fish.name}
                </h3>
                <p className="text-sm text-gray-500 italic mb-2">
                  {fish.scientificName}
                </p>
                <div className="mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                    {fish.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Habitat:</strong> {fish.habitat}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {fish.description}
                </p>
                <div className="flex justify-end space-x-2">
                  <button className="p-1 rounded-full text-teal-600 hover:bg-teal-50">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                  <button className="p-1 rounded-full text-blue-600 hover:bg-blue-50">
                    <EditIcon className="h-5 w-5" />
                  </button>
                  <button className="p-1 rounded-full text-red-600 hover:bg-red-50">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        {filteredFish.length === 0 && <div className="text-center py-12">
            <CompassIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No fish species found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>}
      </div>
      {/* Add Fish Modal - In a real implementation, this would be a separate component */}
      {isAddFishModalOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsAddFishModalOpen(false)}></div>
          <div className="relative bg-white rounded-lg max-w-lg w-full mx-auto p-6 shadow-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Add New Fish Species
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Common Name
                </label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Scientific Name
                </label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                  <option>Freshwater</option>
                  <option>Saltwater</option>
                  <option>Brackish</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Habitat
                </label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none" onClick={() => setIsAddFishModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                  Save Species
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
}