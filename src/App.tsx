import React, { useEffect, useState } from 'react';
import { AppRouter } from './AppRouter';
import { AuthProvider } from './contexts/AuthContext';
import { GameProvider } from './contexts/GameContext';
export function App() {
  const [darkMode, setDarkMode] = useState(false);
  // Check if dark mode is enabled in localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
    setDarkMode(!darkMode);
  };
  return <AuthProvider>
      <GameProvider>
        <AppRouter darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </GameProvider>
    </AuthProvider>;
}