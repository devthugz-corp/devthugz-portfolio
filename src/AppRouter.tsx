import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { InsuranceHub } from './pages/InsuranceHub';
import { WeatherAlerts } from './pages/WeatherAlerts';
import { FishHub } from './pages/FishHub';
import { GPSTracking } from './pages/GPSTracking';
import { EmergencyReport } from './pages/EmergencyReport';
import { Community } from './pages/Community';
import { Verification } from './pages/Verification';
import { UserManagement } from './pages/admin/UserManagement';
import { SystemSettings } from './pages/admin/SystemSettings';
import { AdminWeatherAlerts } from './pages/admin/WeatherAlerts';
import { AdminGPSTracking } from './pages/admin/GPSTracking';
import { AdminCommunity } from './pages/admin/Community';
import { AdminVerification } from './pages/admin/Verification';
import { AdminFishHub } from './pages/admin/FishHub';
import { Layout } from './components/Layout';
import { useAuth } from './contexts/AuthContext';
import { SuperAdminDashboard } from './pages/SuperAdmin/Dashboard';
import { AdminDashboard } from './pages/Admin/Dashboard';
function ProtectedRoute({
  children,
  allowedRoles
}) {
  const {
    user
  } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}
export function AppRouter({
  darkMode,
  toggleDarkMode
}) {
  const {
    user
  } = useAuth();
  return <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Super Admin Routes */}
        <Route path="/super-admin/*" element={<ProtectedRoute allowedRoles={['super_admin']}>
              <SuperAdminDashboard />
            </ProtectedRoute>} />
        {/* Admin Routes */}
        <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>} />
        {/* Regular User Routes */}
        <Route path="/" element={<ProtectedRoute allowedRoles={['super_admin', 'admin', 'user']}>
              <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </ProtectedRoute>}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="insurance-hub" element={<InsuranceHub />} />
          <Route path="weather-alerts" element={<WeatherAlerts />} />
          <Route path="fish-hub" element={<FishHub />} />
          <Route path="gps-tracking" element={<GPSTracking />} />
          <Route path="emergency-report" element={<EmergencyReport />} />
          <Route path="community" element={<Community />} />
          <Route path="verification" element={<Verification />} />
        </Route>
        {/* Fallback redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>;
}