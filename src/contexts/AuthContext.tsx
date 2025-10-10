import React, { useEffect, useState, createContext, useContext } from 'react';
type UserRole = 'super_admin' | 'admin' | 'user';
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('aquasure_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);
  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    let mockUser: User;
    // Mock different user roles based on email
    if (email.includes('super')) {
      mockUser = {
        id: '1',
        name: 'Super Admin',
        email: email,
        role: 'super_admin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      };
    } else if (email.includes('admin')) {
      mockUser = {
        id: '2',
        name: 'LGU Admin',
        email: email,
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      };
    } else {
      mockUser = {
        id: '3',
        name: 'Fisher User',
        email: email,
        role: 'user',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      };
    }
    setUser(mockUser);
    localStorage.setItem('aquasure_user', JSON.stringify(mockUser));
    setIsLoading(false);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('aquasure_user');
  };
  return <AuthContext.Provider value={{
    user,
    login,
    logout,
    isLoading
  }}>
      {children}
    </AuthContext.Provider>;
}
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};