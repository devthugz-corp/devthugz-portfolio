import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { SuperAdminSidebar } from './SuperAdminSidebar';
import { AdminSidebar } from './AdminSidebar';
import { HomeIcon, FishIcon, HeartPulseIcon, CloudRainIcon, CompassIcon, ShoppingCartIcon, MapPinIcon, UsersIcon, ShieldIcon, SettingsIcon, UserIcon, ChevronDownIcon, ChevronRightIcon, AlertTriangleIcon } from 'lucide-react';
export function Sidebar() {
  const {
    user
  } = useAuth();
  const location = useLocation();
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
  // Use role-specific sidebar components for admin and super admin
  const isSuperAdmin = user?.role === 'super_admin';
  const isAdmin = user?.role === 'admin' || isSuperAdmin;
  if (isSuperAdmin) {
    return <SuperAdminSidebar />;
  }
  if (isAdmin) {
    return <AdminSidebar />;
  }
  // Regular user sidebar below
  const NavItem = ({
    to,
    icon: Icon,
    children,
    end = false
  }) => {
    const isActive = location.pathname === to;
    return <NavLink to={to} end={end} className={({
      isActive
    }) => `flex items-center px-4 py-2 my-1 text-sm font-medium rounded-md transition-colors ${isActive ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:bg-gray-100'}`}>
        <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-teal-500' : 'text-gray-400'}`} />
        {children}
      </NavLink>;
  };
  return <div className="hidden sm:flex sm:flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-teal-600">AquaSure</h1>
      </div>
      <div className="flex flex-col flex-grow p-4 overflow-y-auto">
        <div className="space-y-1">
          <NavItem to="/dashboard" icon={HomeIcon} end>
            Dashboard
          </NavItem>
          <NavItem to="/insurance-hub" icon={HeartPulseIcon}>
            Insurance Hub
          </NavItem>
          <NavItem to="/weather-alerts" icon={CloudRainIcon}>
            Weather Alerts
          </NavItem>
          <NavItem to="/fish-hub" icon={CompassIcon}>
            Fish Hub
          </NavItem>
          <NavItem to="/gps-tracking" icon={MapPinIcon}>
            GPS Tracking
          </NavItem>
          <NavItem to="/emergency-report" icon={AlertTriangleIcon}>
            Emergency Report
          </NavItem>
          <NavItem to="/community" icon={UsersIcon}>
            Community
          </NavItem>
          <NavItem to="/verification" icon={ShieldIcon}>
            Verification
          </NavItem>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          {user?.avatar ? <img className="h-8 w-8 rounded-full" src={user.avatar} alt={user.name} /> : <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
              <UserIcon className="h-5 w-5 text-white" />
            </div>}
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">{user?.name}</p>
            <p className="text-xs text-gray-500">Fisher</p>
          </div>
        </div>
      </div>
    </div>;
}