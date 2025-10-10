import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UsersIcon, ShieldIcon, SettingsIcon, UserIcon, ChevronDownIcon, ChevronRightIcon, MapPinIcon, CompassIcon, MessageSquareIcon, MegaphoneIcon, CloudLightningIcon, ShoppingCartIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
export function AdminSidebar() {
  const {
    user
  } = useAuth();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  const NavItem = ({
    to,
    icon: Icon,
    children
  }) => {
    return <NavLink to={to} className={({
      isActive
    }) => `flex items-center px-4 py-2 my-1 text-sm font-medium rounded-md transition-colors ${isActive ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:bg-gray-100'}`}>
        <Icon className="mr-3 h-5 w-5 text-gray-400" />
        {children}
      </NavLink>;
  };
  const NavSection = ({
    title,
    icon: Icon,
    children,
    id
  }) => {
    const isExpanded = expandedSection === id;
    return <div className="mb-2">
        <button onClick={() => toggleSection(id)} className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
          <div className="flex items-center">
            <Icon className="mr-3 h-5 w-5 text-gray-400" />
            {title}
          </div>
          {isExpanded ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
        </button>
        {isExpanded && <div className="ml-4 mt-1">{children}</div>}
      </div>;
  };
  return <div className="hidden sm:flex sm:flex-col w-64 bg-white border-r border-gray-200 h-full">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-teal-600">AquaSure</h1>
      </div>
      <div className="flex flex-col flex-grow p-4 overflow-y-auto">
        <div className="space-y-1">
          <NavItem to="/admin" icon={HomeIcon}>
            Dashboard
          </NavItem>
          <NavItem to="/admin/fishers" icon={UsersIcon}>
            Fisher Folks
          </NavItem>
          <NavItem to="/admin/fish-hub" icon={CompassIcon}>
            Fish Hub
          </NavItem>
          <NavItem to="/admin/gps-tracking" icon={MapPinIcon}>
            GPS Tracking
          </NavItem>
          <NavItem to="/admin/weather" icon={CloudLightningIcon}>
            Weather Alerts
          </NavItem>
          <NavItem to="/admin/market" icon={ShoppingCartIcon}>
            Market Overview
          </NavItem>
          <NavSection title="Community" icon={MessageSquareIcon} id="community">
            <NavItem to="/admin/community" icon={UsersIcon}>
              Community Programs
            </NavItem>
            <NavItem to="/admin/announcements" icon={MegaphoneIcon}>
              Announcements
            </NavItem>
          </NavSection>
          <NavItem to="/admin/verification" icon={ShieldIcon}>
            Verification Requests
          </NavItem>
          <NavSection title="Admin Controls" icon={SettingsIcon} id="admin-controls">
            <NavItem to="/admin/user-management" icon={UserIcon}>
              User Management
            </NavItem>
            <NavItem to="/admin/system-settings" icon={SettingsIcon}>
              System Settings
            </NavItem>
          </NavSection>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          {user?.avatar ? <img className="h-8 w-8 rounded-full" src={user.avatar} alt={user.name} /> : <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
              <UserIcon className="h-5 w-5 text-white" />
            </div>}
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">{user?.name}</p>
            <p className="text-xs text-gray-500">LGU Admin</p>
          </div>
        </div>
      </div>
    </div>;
}