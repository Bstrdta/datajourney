import React, { createContext, useContext, useState } from 'react';

const CalendlyContext = createContext();

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error('useCalendly must be used within a CalendlyProvider');
  }
  return context;
};

export const CalendlyProvider = ({ children }) => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const value = {
    isCalendlyOpen,
    openCalendly,
    closeCalendly
  };

  return (
    <CalendlyContext.Provider value={value}>
      {children}
    </CalendlyContext.Provider>
  );
};

export default CalendlyContext;