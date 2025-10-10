import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UsersIcon, ShieldIcon, BriefcaseIcon, DollarSignIcon, BrainIcon, BadgeCheckIcon, BarChartIcon, GlobeIcon, MessageSquareIcon, LeafIcon, ClipboardListIcon, ChevronDownIcon, ChevronRightIcon, MapPinIcon, CompassIcon, SettingsIcon, PieChartIcon, TrendingUpIcon, CalendarIcon, UserIcon, SparklesIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
export function SuperAdminSidebar() {
  const {
    user
  } = useAuth();
  const [expandedSection, setExpandedSection] = useState<string | null>('analytics');
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
          <NavItem to="/super-admin" icon={HomeIcon}>
            Dashboard
          </NavItem>
          <NavItem to="/super-admin/fish-hub" icon={CompassIcon}>
            Fish Hub
          </NavItem>
          <NavItem to="/super-admin/gps-tracking" icon={MapPinIcon}>
            GPS Tracking
          </NavItem>
          <NavItem to="/super-admin/community" icon={UsersIcon}>
            Community
          </NavItem>
          <NavItem to="/super-admin/verification" icon={ShieldIcon}>
            Verification
          </NavItem>
          <NavSection title="Analytics & Insights" icon={BarChartIcon} id="analytics">
            <NavItem to="/superadmin/analytics/user-activity" icon={CalendarIcon}>
              Daily/Weekly/Monthly Active Users
            </NavItem>
            <NavItem to="/superadmin/analytics/regional-analysis" icon={GlobeIcon}>
              Active Users per Region
            </NavItem>
            <NavItem to="/superadmin/analytics/feature-usage" icon={PieChartIcon}>
              Feature Usage Metrics
            </NavItem>
            <NavItem to="/superadmin/analytics/growth-trends" icon={TrendingUpIcon}>
              Growth Trends & Engagement Summary
            </NavItem>
            <NavItem to="/superadmin/analytics/ai-insights" icon={SparklesIcon}>
              AI Predictive Insights
            </NavItem>
          </NavSection>
          <NavSection title="Admin Controls" icon={SettingsIcon} id="admin-controls">
            <NavItem to="/super-admin/users" icon={UsersIcon}>
              User Management
            </NavItem>
            <NavItem to="/super-admin/system-settings" icon={SettingsIcon}>
              System Settings
            </NavItem>
          </NavSection>
          <NavSection title="User Management" icon={UsersIcon} id="users">
            <NavItem to="/super-admin/users" icon={UsersIcon}>
              All Users
            </NavItem>
            <NavItem to="/super-admin/users/verification" icon={BadgeCheckIcon}>
              Verification
            </NavItem>
          </NavSection>
          <NavSection title="Admin Management" icon={ShieldIcon} id="admins">
            <NavItem to="/super-admin/admins" icon={BriefcaseIcon}>
              LGU Admins
            </NavItem>
            <NavItem to="/super-admin/admins/performance" icon={BarChartIcon}>
              Performance
            </NavItem>
          </NavSection>
          <NavSection title="Finance" icon={DollarSignIcon} id="finance">
            <NavItem to="/super-admin/finance/overview" icon={DollarSignIcon}>
              Financial Overview
            </NavItem>
            <NavItem to="/super-admin/finance/insurance" icon={ShieldIcon}>
              Insurance & Claims
            </NavItem>
          </NavSection>
          <NavItem to="/super-admin/ai-monitoring" icon={BrainIcon}>
            AI Monitoring
          </NavItem>
          <NavItem to="/super-admin/regions" icon={GlobeIcon}>
            Regional Performance
          </NavItem>
          <NavSection title="Communication" icon={MessageSquareIcon} id="communication">
            <NavItem to="/super-admin/support" icon={MessageSquareIcon}>
              Support & Feedback
            </NavItem>
          </NavSection>
          <NavItem to="/super-admin/sustainability" icon={LeafIcon}>
            Eco & Sustainability
          </NavItem>
          <NavItem to="/super-admin/activity-logs" icon={ClipboardListIcon}>
            Activity Logs
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
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>
      </div>
    </div>;
}