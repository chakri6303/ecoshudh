import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 5
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-100" />
      
      {/* Animated Mesh */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 2000 1000">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3d2a14" stopOpacity="0.8" />
              <stop offset="15%" stopColor="#4a3621" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#6b7280" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
            </linearGradient>
            <pattern id="dirtyPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#2c1810" opacity="0.4" />
              <circle cx="5" cy="5" r="1.5" fill="#241409" opacity="0.3" />
              <circle cx="15" cy="15" r="1" fill="#1a0f06" opacity="0.5" />
            </pattern>
          </defs>
          
          <motion.path
            className="wave-path"
            d="M -200 400 Q 300 300 1000 400 T 2200 400 L 2200 1000 L -200 1000 Z"
            fill="url(#gradient1)"
            animate={{
              d: [
                "M -200 400 Q 300 300 1000 400 T 2200 400 L 2200 1000 L -200 1000 Z",
                "M -200 450 Q 300 350 1000 450 T 2200 450 L 2200 1000 L -200 1000 Z",
                "M -200 400 Q 300 300 1000 400 T 2200 400 L 2200 1000 L -200 1000 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity
            }}
          />
          <motion.path
            d="M -200 400 Q 300 300 1000 400 T 2200 400 L 2200 1000 L -200 1000 Z"
            fill="url(#dirtyPattern)"
            animate={{
              d: [
                "M -200 400 Q 300 300 1000 400 T 2200 400 L 2200 1000 L -200 1000 Z",
                "M -200 450 Q 300 350 1000 450 T 2200 450 L 2200 1000 L -200 1000 Z",
                "M -200 400 Q 300 300 1000 400 T 2200 400 L 2200 1000 L -200 1000 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity
            }}
            style={{ mixBlendMode: 'multiply' }}
            opacity={0.3}
          />
        </svg>
      </div>

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-200/20 to-cyan-200/10 backdrop-blur-sm"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(bubble.id) * 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay
          }}
        />
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
}
