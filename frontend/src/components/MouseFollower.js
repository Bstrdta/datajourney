import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState([]);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();
    let moveTimer;

    const updateMousePosition = (e) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      
      // Calculate speed (pixels per millisecond)
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / deltaTime;
      const clampedSpeed = Math.min(speed * 100, 10); // Scale and clamp speed
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      setMouseSpeed(clampedSpeed);
      setIsMoving(true);

      // Update spring values
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add to trail
      setTrail(prevTrail => {
        const newTrail = [
          { x: e.clientX, y: e.clientY, id: Date.now() },
          ...prevTrail.slice(0, Math.floor(clampedSpeed) + 5)
        ];
        return newTrail;
      });

      // Clear moving state after a delay
      clearTimeout(moveTimer);
      moveTimer = setTimeout(() => {
        setIsMoving(false);
        setMouseSpeed(0);
        setTrail([]);
      }, 150);

      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = currentTime;
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(moveTimer);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative"
          style={{
            width: 20 + mouseSpeed * 10,
            height: 20 + mouseSpeed * 10,
            marginLeft: -(10 + mouseSpeed * 5),
            marginTop: -(10 + mouseSpeed * 5),
          }}
        >
          {/* Central glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, 
                rgba(26, 188, 156, ${0.8 + mouseSpeed * 0.2}) 0%, 
                rgba(26, 188, 156, ${0.4 + mouseSpeed * 0.3}) 30%, 
                rgba(26, 188, 156, ${0.1 + mouseSpeed * 0.2}) 60%, 
                transparent 100%)`,
              filter: `blur(${2 + mouseSpeed * 2}px)`,
            }}
            animate={{
              scale: isMoving ? [1, 1.2, 1] : 1,
              rotate: isMoving ? [0, 180, 360] : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
          />

          {/* Speed particles */}
          {mouseSpeed > 2 && (
            <>
              {[...Array(Math.floor(mouseSpeed))].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary-turquoise rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: (Math.random() - 0.5) * 40 * mouseSpeed,
                    y: (Math.random() - 0.5) * 40 * mouseSpeed,
                    opacity: [1, 0],
                    scale: [1, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Trail effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-40 mix-blend-screen"
          style={{
            left: point.x,
            top: point.y,
            width: Math.max(4, 12 - index),
            height: Math.max(4, 12 - index),
            marginLeft: -Math.max(2, 6 - index / 2),
            marginTop: -Math.max(2, 6 - index / 2),
            background: `radial-gradient(circle, 
              rgba(26, 188, 156, ${Math.max(0.1, 0.6 - index * 0.1)}) 0%, 
              transparent 100%)`,
            borderRadius: '50%',
            filter: `blur(${1 + index * 0.5}px)`,
          }}
          animate={{
            opacity: [0.8, 0],
            scale: [1, 0.5],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        />
      ))}
    </>
  );
};

export default MouseFollower;