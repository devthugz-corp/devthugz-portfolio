import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
export function Layout({
  darkMode,
  toggleDarkMode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <div className={`min-h-screen bg-gray-100 ${darkMode ? 'dark' : ''}`}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-100">
            <Outlet />
          </main>
        </div>
      </div>
    </div>;
}