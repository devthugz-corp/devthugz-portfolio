import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../contexts/GameContext';
// Fish component that will be animated
const Fish: React.FC<{
  stage: string;
  isResting: boolean;
  animation: string | null;
}> = ({
  stage,
  isResting,
  animation
}) => {
  // Different fish images based on stage
  const fishImages = {
    Baby: 'https://images.unsplash.com/photo-1545816250-0c2c90e5f59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    Juvenile: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    Adult: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    Legendary: 'https://images.unsplash.com/photo-1513039464749-94912b3841ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  };
  // Animation variants
  const swimVariants = {
    idle: {
      x: [0, 10, 0, -10, 0],
      y: [0, 5, 0, -5, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut'
        },
        y: {
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut'
        }
      }
    },
    resting: {
      y: [0, -2, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut'
        }
      }
    },
    feeding: {
      scale: [1, 1.1, 1],
      y: [0, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };
  return <motion.div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{
    left: '50%',
    top: '50%',
    filter: isResting ? 'brightness(0.7)' : 'brightness(1)'
  }} variants={swimVariants} animate={isResting ? 'resting' : animation === 'feeding' ? 'feeding' : 'idle'}>
      <img src={fishImages[stage] || fishImages.Baby} alt={`${stage} Fish`} className="w-32 h-32 object-contain" />
      {isResting && <div className="absolute top-0 right-0">
          <span className="text-xl">💤</span>
        </div>}
    </motion.div>;
};
// Bubble component
const Bubble: React.FC<{
  delay: number;
  size: number;
  left: string;
}> = ({
  delay,
  size,
  left
}) => {
  return <motion.div className="absolute bottom-0 rounded-full bg-white bg-opacity-50" style={{
    width: size,
    height: size,
    left
  }} animate={{
    y: [0, -300],
    opacity: [0.7, 0]
  }} transition={{
    duration: 3 + Math.random() * 2,
    delay,
    repeat: Infinity,
    ease: 'easeOut'
  }} />;
};
// Main Aquarium component
const Aquarium: React.FC = () => {
  const {
    petFish,
    fishAnimation
  } = useGame();
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    size: number;
    delay: number;
    left: string;
  }>>([]);
  // Generate random bubbles
  useEffect(() => {
    const bubbleCount = 15;
    const newBubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        id: i,
        size: 5 + Math.random() * 15,
        delay: Math.random() * 5,
        left: `${5 + Math.random() * 90}%`
      });
    }
    setBubbles(newBubbles);
  }, []);
  return <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl bg-gradient-to-b from-blue-300 to-blue-500 overflow-hidden">
      {/* Water surface animation */}
      <motion.div className="absolute top-0 left-0 right-0 h-4 bg-blue-200 bg-opacity-30" animate={{
      y: [0, 2, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-amber-200 bg-opacity-80" />
      <div className="absolute bottom-12 left-1/4 w-16 h-20 bg-green-700 bg-opacity-60 rounded-t-lg" />
      <div className="absolute bottom-12 right-1/4 w-12 h-16 bg-green-600 bg-opacity-60 rounded-t-lg" />
      {/* Bubbles */}
      {bubbles.map(bubble => <Bubble key={bubble.id} size={bubble.size} delay={bubble.delay} left={bubble.left} />)}
      {/* Fish */}
      <Fish stage={petFish.stage} isResting={petFish.isResting} animation={fishAnimation} />
      {/* Feeding animation */}
      <AnimatePresence>
        {fishAnimation === 'feeding' && <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2" initial={{
        y: -20,
        opacity: 0
      }} animate={{
        y: 100,
        opacity: [0, 1, 0]
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 1.5
      }}>
            <div className="w-6 h-6 bg-amber-300 rounded-full" />
          </motion.div>}
      </AnimatePresence>
      {/* Fish name display */}
      <div className="absolute top-2 left-2 bg-white bg-opacity-70 px-2 py-1 rounded text-sm font-medium">
        {petFish.name} - Level {petFish.level} {petFish.stage}
      </div>
    </div>;
};
export default Aquarium;