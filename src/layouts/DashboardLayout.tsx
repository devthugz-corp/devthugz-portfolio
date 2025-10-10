import React, { useEffect, useState, Component } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '../components/AdminSidebar';
import { SuperAdminSidebar } from '../components/SuperAdminSidebar';
import { Header } from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
interface DashboardLayoutProps {
  role: 'super_admin' | 'admin' | 'user';
  children?: React.ReactNode;
}
export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  role,
  children
}) => {
  const {
    user
  } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // Close sidebar on mobile by default
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Determine which sidebar to render based on role
  const isSuperAdmin = user?.role === 'super_admin';
  const SidebarComponent = isSuperAdmin ? SuperAdminSidebar : AdminSidebar;
  return <div className="flex h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile when closed */}
      <div className={`
        fixed inset-y-0 left-0 z-10 transition-transform duration-300 lg:relative 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <SidebarComponent />
      </div>
      {/* Overlay for mobile */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-[5] lg:hidden" onClick={toggleSidebar}></div>}
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>;
};