import React, { createContext, useContext, useState } from 'react';

const LogoAnimationContext = createContext();

export const useLogoAnimation = () => {
  const context = useContext(LogoAnimationContext);
  if (!context) {
    throw new Error('useLogoAnimation must be used within a LogoAnimationProvider');
  }
  return context;
};

export const LogoAnimationProvider = ({ children }) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setIsAnimationComplete(true);
  };

  return (
    <LogoAnimationContext.Provider value={{ isAnimationComplete, completeAnimation }}>
      {children}
    </LogoAnimationContext.Provider>
  );
};