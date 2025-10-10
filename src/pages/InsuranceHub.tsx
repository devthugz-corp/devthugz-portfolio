import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartPulseIcon, ShieldCheckIcon, FileTextIcon, ClockIcon, FishIcon, TrendingUpIcon, BellIcon, WalletIcon, ShoppingCartIcon, AwardIcon, UsersIcon, Settings as SettingsIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import Aquarium from '../components/Aquarium';
import FishStats from '../components/FishStats';
import FishJournal from '../components/FishJournal';
import InsuranceLeaderboard from '../components/InsuranceLeaderboard';
import AquaSureMarket from '../components/AquaSureMarket';
export function InsuranceHub() {
  const {
    petFish,
    aquaBites,
    walletBalance
  } = useGame();
  const [activeTab, setActiveTab] = useState('fish');
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [newFishName, setNewFishName] = useState('');
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Insurance Hub</h2>
        <p className="text-gray-600 mt-1">
          Grow your fish, improve your insurance coverage
        </p>
      </div>
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="flex border-b overflow-x-auto">
          <button className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'fish' ? 'text-teal-600 border-b-2 border-teal-500' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('fish')}>
            <div className="flex items-center">
              <FishIcon className="h-4 w-4 mr-2" />
              Pet Fish
            </div>
          </button>
          <button className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'coverage' ? 'text-teal-600 border-b-2 border-teal-500' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('coverage')}>
            <div className="flex items-center">
              <ShieldCheckIcon className="h-4 w-4 mr-2" />
              Coverage
            </div>
          </button>
          <button className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'market' ? 'text-teal-600 border-b-2 border-teal-500' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('market')}>
            <div className="flex items-center">
              <ShoppingCartIcon className="h-4 w-4 mr-2" />
              Market
            </div>
          </button>
          <button className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'leaderboard' ? 'text-teal-600 border-b-2 border-teal-500' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('leaderboard')}>
            <div className="flex items-center">
              <AwardIcon className="h-4 w-4 mr-2" />
              Leaderboard
            </div>
          </button>
        </div>
        {/* Pet Fish Tab */}
        {activeTab === 'fish' && <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Aquarium */}
                <Aquarium />
                {/* Fish Stats */}
                <FishStats />
                {/* Fish Journal */}
                <FishJournal />
              </div>
              <div className="space-y-6">
                {/* Insurance Progress */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full p-2 bg-blue-100">
                      <TrendingUpIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="ml-2 text-lg font-medium text-gray-900">
                      Insurance Progress
                    </h3>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-medium text-blue-800">
                        Current coverage:
                      </p>
                      <p className="text-sm font-bold text-blue-800">
                        ₱{(petFish.level * 10000).toLocaleString()}
                      </p>
                    </div>
                    {petFish.level < 15 && <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-blue-800">Next tier:</p>
                        <p className="text-sm text-blue-800">
                          Reach Level {petFish.level + 1} for ₱
                          {((petFish.level + 1) * 10000).toLocaleString()}
                        </p>
                      </div>}
                    <div className="mt-3">
                      <div className="w-full bg-blue-200 rounded-full h-2.5">
                        <motion.div className="bg-blue-600 h-2.5 rounded-full" initial={{
                      width: 0
                    }} animate={{
                      width: `${petFish.level / 15 * 100}%`
                    }} transition={{
                      duration: 1
                    }}></motion.div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-blue-600">Level 1</span>
                        <span className="text-xs text-blue-600">Level 15</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wallet */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full p-2 bg-green-100">
                      <WalletIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="ml-2 text-lg font-medium text-gray-900">
                      AquaSure Wallet
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-500">Balance</p>
                      <p className="text-xl font-semibold text-gray-900">
                        ₱{walletBalance}
                      </p>
                      <button className="mt-2 text-xs text-teal-600 hover:text-teal-800">
                        Add Credits
                      </button>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-500">AquaBites</p>
                      <p className="text-xl font-semibold text-gray-900">
                        {aquaBites}
                      </p>
                      <button className="mt-2 text-xs text-teal-600 hover:text-teal-800" onClick={() => setActiveTab('market')}>
                        Buy More
                      </button>
                    </div>
                  </div>
                </div>
                {/* Fish Settings */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full p-2 bg-purple-100">
                      <SettingsIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="ml-2 text-lg font-medium text-gray-900">
                      Fish Settings
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <button className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100" onClick={() => {
                  setNewFishName(petFish.name);
                  setIsRenameModalOpen(true);
                }}>
                      <span className="text-sm text-gray-700">Rename Fish</span>
                      <span className="text-xs text-gray-500">
                        {petFish.name}
                      </span>
                    </button>
                    <button className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <span className="text-sm text-gray-700">
                        Fish Appearance
                      </span>
                      <span className="text-xs text-gray-500">Default</span>
                    </button>
                    <button className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <span className="text-sm text-gray-700">
                        Aquarium Theme
                      </span>
                      <span className="text-xs text-gray-500">Ocean</span>
                    </button>
                  </div>
                </div>
                {/* Help & Info */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full p-2 bg-amber-100">
                      <HelpCircleIcon className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="ml-2 text-lg font-medium text-gray-900">
                      Help & Info
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <p className="text-sm font-medium text-amber-800">
                        How it works
                      </p>
                      <p className="text-xs text-amber-700 mt-1">
                        Feed your fish daily to maintain and increase your
                        insurance coverage. Higher level fish provide better
                        protection for you and your family.
                      </p>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <p className="text-sm font-medium text-amber-800">
                        Feeding Tips
                      </p>
                      <p className="text-xs text-amber-700 mt-1">
                        Each feeding gives your fish +10 XP and restores health.
                        Your fish levels up every 100 XP, and each level
                        increases your coverage amount.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {/* Coverage Tab */}
        {activeTab === 'coverage' && <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-3 bg-teal-100">
                    <ShieldCheckIcon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    Active Coverage
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-teal-600">
                    ₱{(petFish.level * 10000).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    Current coverage amount
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Policy Status</span>
                      <span className="font-medium text-green-600">Active</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-gray-600">Renewal Date</span>
                      <span className="font-medium text-gray-900">
                        Dec 31, 2024
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-gray-600">Fish Level</span>
                      <span className="font-medium text-teal-600">
                        Level {petFish.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-3 bg-blue-100">
                    <FileTextIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    Claims
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">0</p>
                  <p className="text-sm text-gray-600">Pending claims</p>
                  <div className="mt-4">
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
                      File New Claim
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-3 bg-amber-100">
                    <ClockIcon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    Premium
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-amber-600">₱150</p>
                  <p className="text-sm text-gray-600">Monthly premium</p>
                  <div className="mt-4">
                    <button className="w-full px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Coverage Tiers
              </h3>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${petFish.level >= 5 ? 'bg-teal-50 border border-teal-200' : 'bg-gray-50 border border-gray-200'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-900">Level 5</h4>
                      <p className="text-sm text-gray-600">₱50,000 coverage</p>
                    </div>
                    {petFish.level >= 5 ? <span className="px-2 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800">
                        Unlocked
                      </span> : <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                        {5 - petFish.level} levels to go
                      </span>}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Basic coverage for fishing gear and minor boat damage
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${petFish.level >= 7 ? 'bg-teal-50 border border-teal-200' : 'bg-gray-50 border border-gray-200'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-900">Level 7</h4>
                      <p className="text-sm text-gray-600">₱70,000 coverage</p>
                    </div>
                    {petFish.level >= 7 ? <span className="px-2 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800">
                        Unlocked
                      </span> : <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                        {7 - petFish.level} levels to go
                      </span>}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Improved coverage including medical benefits
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${petFish.level >= 10 ? 'bg-teal-50 border border-teal-200' : 'bg-gray-50 border border-gray-200'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-900">Level 10</h4>
                      <p className="text-sm text-gray-600">₱100,000 coverage</p>
                    </div>
                    {petFish.level >= 10 ? <span className="px-2 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800">
                        Unlocked
                      </span> : <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                        {10 - petFish.level} levels to go
                      </span>}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Enhanced coverage with family benefits and higher limits
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${petFish.level >= 15 ? 'bg-teal-50 border border-teal-200' : 'bg-gray-50 border border-gray-200'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-900">Level 15</h4>
                      <p className="text-sm text-gray-600">₱150,000 coverage</p>
                    </div>
                    {petFish.level >= 15 ? <span className="px-2 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800">
                        Unlocked
                      </span> : <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                        {15 - petFish.level} levels to go
                      </span>}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Premium coverage with maximum benefits and priority claims
                  </p>
                </div>
              </div>
            </div>
          </div>}
        {/* Market Tab */}
        {activeTab === 'market' && <div className="p-6">
            <AquaSureMarket />
          </div>}
        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && <div className="p-6">
            <InsuranceLeaderboard />
          </div>}
      </div>
      {/* Rename Fish Modal */}
      {isRenameModalOpen && <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={() => setIsRenameModalOpen(false)}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" onClick={e => e.stopPropagation()}>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FishIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Rename Your Fish
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Choose a new name for your pet fish.
                      </p>
                      <input type="text" value={newFishName} onChange={e => setNewFishName(e.target.value)} className="mt-3 w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Enter new name" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm" onClick={() => {
              // In a real app, this would update Firebase
              // For now, we'll just close the modal
              setIsRenameModalOpen(false);
            }}>
                  Save
                </button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setIsRenameModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}