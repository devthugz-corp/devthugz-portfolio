import React from 'react';
import { Outlet } from 'react-router-dom';
import { SuperAdminSidebar } from '../components/SuperAdminSidebar';
import { Header } from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
export function SuperAdminLayout({
  children
}: {
  children?: React.ReactNode;
}) {
  const {
    user
  } = useAuth();
  const isSuperAdmin = user?.role === 'super_admin';
  // Redirect or show error if not super admin
  if (!isSuperAdmin) {
    return <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
          <p className="mt-2">You don't have permission to access this area.</p>
        </div>
      </div>;
  }
  return <div className="flex h-screen bg-gray-50">
      <SuperAdminSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {children || <Outlet />}
        </main>
      </div>
    </div>;
}