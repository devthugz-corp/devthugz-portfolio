import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BellIcon, MenuIcon, UserIcon, LogOutIcon, SettingsIcon, MessageCircleIcon, MoonIcon, SunIcon } from 'lucide-react';
export function Header({
  darkMode,
  toggleDarkMode
}) {
  const {
    user,
    logout
  } = useAuth();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    if (isNotificationsOpen) setIsNotificationsOpen(false);
  };
  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isProfileMenuOpen) setIsProfileMenuOpen(false);
  };
  const handleLogout = () => {
    logout();
  };
  return <header className="bg-white shadow-sm z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="sm:hidden">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-semibold text-teal-600">AquaSure</h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button onClick={toggleNotifications} className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              {isNotificationsOpen && <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-700">
                        Notifications
                      </p>
                    </div>
                    <div className="max-h-72 overflow-y-auto">
                      <a href="#" className="block px-4 py-3 hover:bg-gray-50 transition ease-in-out duration-150">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                            <MessageCircleIcon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="ml-3 w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Weather Alert
                            </p>
                            <p className="text-sm text-gray-500">
                              Strong winds expected in your area tomorrow.
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                              3 min ago
                            </p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-gray-50 transition ease-in-out duration-150">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 bg-green-100 rounded-full p-1">
                            <MessageCircleIcon className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="ml-3 w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Insurance Reminder
                            </p>
                            <p className="text-sm text-gray-500">
                              Don't forget to feed your fish today!
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                              2 hours ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="border-t border-gray-100 py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-center text-teal-600 hover:text-teal-800">
                        View all notifications
                      </a>
                    </div>
                  </div>
                </div>}
            </div>
            <div className="ml-3 relative">
              <div>
                <button onClick={toggleProfileMenu} className="flex items-center max-w-xs rounded-full text-sm focus:outline-none">
                  {user?.avatar ? <img className="h-8 w-8 rounded-full" src={user.avatar} alt={user.name} /> : <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
                      <UserIcon className="h-5 w-5 text-white" />
                    </div>}
                  <span className="ml-2 hidden md:block text-sm font-medium text-gray-700">
                    {user?.name}
                  </span>
                  <span className="ml-1 hidden md:block text-xs text-gray-500">
                    {user?.role === 'super_admin' ? 'Super Admin' : user?.role === 'admin' ? 'LGU Admin' : 'Fisher'}
                  </span>
                </button>
              </div>
              {isProfileMenuOpen && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <UserIcon className="mr-3 h-4 w-4 text-gray-400" />
                      Profile
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <SettingsIcon className="mr-3 h-4 w-4 text-gray-400" />
                      Settings
                    </a>
                    <button onClick={toggleDarkMode} className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      {darkMode ? <>
                          <SunIcon className="mr-3 h-4 w-4 text-gray-400" />
                          Light Mode
                        </> : <>
                          <MoonIcon className="mr-3 h-4 w-4 text-gray-400" />
                          Dark Mode
                        </>}
                    </button>
                    <button onClick={handleLogout} className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <LogOutIcon className="mr-3 h-4 w-4 text-gray-400" />
                      Sign out
                    </button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </header>;
}