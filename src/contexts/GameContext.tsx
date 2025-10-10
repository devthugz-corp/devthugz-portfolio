import React, { useCallback, useEffect, useState, createContext, useContext } from 'react';
import { useAuth } from './AuthContext';
// Define types for the Pet Fish game
export interface PetFish {
  name: string;
  level: number;
  xp: number;
  health: number;
  stage: 'Baby' | 'Juvenile' | 'Adult' | 'Legendary';
  lastFed: string;
  isResting: boolean;
}
interface GameContextType {
  petFish: PetFish;
  aquaBites: number;
  walletBalance: number;
  feedFish: () => void;
  buyAquaBites: (amount: number, quantity: number) => boolean;
  feedingLogs: FeedingLog[];
  leaderboard: LeaderboardEntry[];
  toggleRestMode: () => void;
  renameFish: (newName: string) => void;
  fishAnimation: string | null;
  setFishAnimation: (animation: string | null) => void;
  isLoading: boolean;
}
interface FeedingLog {
  timestamp: string;
  xpGained: number;
  healthGained: number;
}
interface LeaderboardEntry {
  id: string;
  name: string;
  fisherName: string;
  level: number;
  stage: string;
  region: string;
}
// Create context
const GameContext = createContext<GameContextType | undefined>(undefined);
// Calculate fish stage based on level
const calculateStage = (level: number): 'Baby' | 'Juvenile' | 'Adult' | 'Legendary' => {
  if (level < 5) return 'Baby';
  if (level < 10) return 'Juvenile';
  if (level < 15) return 'Adult';
  return 'Legendary';
};
// Provider component
export const GameProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const {
    user
  } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  // Initialize pet fish state
  const [petFish, setPetFish] = useState<PetFish>({
    name: 'Goldie',
    level: 1,
    xp: 0,
    health: 100,
    stage: 'Baby',
    lastFed: new Date().toISOString(),
    isResting: false
  });
  const [aquaBites, setAquaBites] = useState(20);
  const [walletBalance, setWalletBalance] = useState(1000);
  const [feedingLogs, setFeedingLogs] = useState<FeedingLog[]>([]);
  const [fishAnimation, setFishAnimation] = useState<string | null>(null);
  // Mock leaderboard data
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([{
    id: '1',
    name: 'Golden Emperor',
    fisherName: 'Maria Santos',
    level: 17,
    stage: 'Legendary',
    region: 'Cebu'
  }, {
    id: '2',
    name: 'Blue Marlin',
    fisherName: 'Juan Dela Cruz',
    level: 12,
    stage: 'Adult',
    region: 'Palawan'
  }, {
    id: '3',
    name: 'Coral Guardian',
    fisherName: 'Pedro Reyes',
    level: 9,
    stage: 'Juvenile',
    region: 'Batangas'
  }, {
    id: '4',
    name: 'Goldie',
    fisherName: 'Fisher Juan',
    level: 1,
    stage: 'Baby',
    region: 'Palawan'
  }, {
    id: '5',
    name: 'Silver Fin',
    fisherName: 'Ana Lim',
    level: 6,
    stage: 'Juvenile',
    region: 'Davao'
  }]);
  // Load pet fish data from local storage (simulating Firebase)
  useEffect(() => {
    // In a real implementation, this would fetch data from Firebase
    const loadGameData = async () => {
      setIsLoading(true);
      try {
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const storedFish = localStorage.getItem('petFish');
        const storedAquaBites = localStorage.getItem('aquaBites');
        const storedWalletBalance = localStorage.getItem('walletBalance');
        const storedFeedingLogs = localStorage.getItem('feedingLogs');
        if (storedFish) {
          setPetFish(JSON.parse(storedFish));
        }
        if (storedAquaBites) {
          setAquaBites(parseInt(storedAquaBites, 10));
        }
        if (storedWalletBalance) {
          setWalletBalance(parseInt(storedWalletBalance, 10));
        }
        if (storedFeedingLogs) {
          setFeedingLogs(JSON.parse(storedFeedingLogs));
        }
      } catch (error) {
        console.error('Error loading game data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadGameData();
    // Set up health decrease interval
    const healthInterval = setInterval(() => {
      setPetFish(prev => {
        // Don't decrease health if fish is already in rest mode
        if (prev.isResting) return prev;
        const newHealth = Math.max(0, prev.health - 2);
        const updatedFish = {
          ...prev,
          health: newHealth,
          // If health drops to 0, fish goes into rest mode
          isResting: newHealth === 0 ? true : prev.isResting
        };
        // Save to local storage
        localStorage.setItem('petFish', JSON.stringify(updatedFish));
        return updatedFish;
      });
    }, 3600000); // Decrease every hour (3600000 ms)
    // For demo purposes, we'll decrease health faster
    const demoHealthInterval = setInterval(() => {
      setPetFish(prev => {
        // Don't decrease health if fish is already in rest mode
        if (prev.isResting) return prev;
        const newHealth = Math.max(0, prev.health - 1);
        const updatedFish = {
          ...prev,
          health: newHealth,
          // If health drops to 0, fish goes into rest mode
          isResting: newHealth === 0 ? true : prev.isResting
        };
        // Save to local storage
        localStorage.setItem('petFish', JSON.stringify(updatedFish));
        return updatedFish;
      });
    }, 60000); // Decrease every minute for demo
    return () => {
      clearInterval(healthInterval);
      clearInterval(demoHealthInterval);
    };
  }, []);
  // Save data to local storage when it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('petFish', JSON.stringify(petFish));
      localStorage.setItem('aquaBites', aquaBites.toString());
      localStorage.setItem('walletBalance', walletBalance.toString());
      localStorage.setItem('feedingLogs', JSON.stringify(feedingLogs));
      // Update leaderboard if user's fish is in it
      setLeaderboard(prev => {
        const userIndex = prev.findIndex(entry => entry.fisherName === 'Fisher Juan');
        if (userIndex !== -1) {
          const updatedLeaderboard = [...prev];
          updatedLeaderboard[userIndex] = {
            ...updatedLeaderboard[userIndex],
            name: petFish.name,
            level: petFish.level,
            stage: petFish.stage
          };
          return updatedLeaderboard.sort((a, b) => b.level - a.level);
        }
        return prev;
      });
    }
  }, [petFish, aquaBites, walletBalance, feedingLogs, isLoading]);
  // Feed fish function
  const feedFish = useCallback(() => {
    if (aquaBites <= 0 || petFish.health >= 100) return;
    setAquaBites(prev => prev - 1);
    // Trigger feeding animation
    setFishAnimation('feeding');
    setTimeout(() => setFishAnimation(null), 2000);
    const xpGained = 10;
    const healthGained = Math.min(10, 100 - petFish.health);
    setPetFish(prev => {
      const newXp = prev.xp + xpGained;
      const levelUp = newXp >= prev.level * 100;
      const newLevel = levelUp ? prev.level + 1 : prev.level;
      const remainingXp = levelUp ? newXp - prev.level * 100 : newXp;
      const newStage = calculateStage(newLevel);
      return {
        ...prev,
        xp: remainingXp,
        level: newLevel,
        health: prev.health + healthGained,
        stage: newStage,
        lastFed: new Date().toISOString(),
        isResting: false
      };
    });
    // Add feeding log
    setFeedingLogs(prev => {
      const newLog = {
        timestamp: new Date().toISOString(),
        xpGained,
        healthGained
      };
      return [newLog, ...prev].slice(0, 10); // Keep only the last 10 logs
    });
  }, [aquaBites, petFish.health]);
  // Buy AquaBites function
  const buyAquaBites = useCallback((amount: number, quantity: number): boolean => {
    if (walletBalance < amount) return false;
    setWalletBalance(prev => prev - amount);
    setAquaBites(prev => prev + quantity);
    return true;
  }, [walletBalance]);
  // Toggle rest mode
  const toggleRestMode = useCallback(() => {
    setPetFish(prev => ({
      ...prev,
      isResting: !prev.isResting
    }));
  }, []);
  // Rename fish
  const renameFish = useCallback((newName: string) => {
    setPetFish(prev => ({
      ...prev,
      name: newName
    }));
  }, []);
  // Provide the context value
  const contextValue: GameContextType = {
    petFish,
    aquaBites,
    walletBalance,
    feedFish,
    buyAquaBites,
    feedingLogs,
    leaderboard,
    toggleRestMode,
    renameFish,
    fishAnimation,
    setFishAnimation,
    isLoading
  };
  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};
// Custom hook to use the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};