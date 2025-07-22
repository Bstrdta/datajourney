import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [currentLang, setCurrentLang] = useState('fr');
  const [isInitialized, setIsInitialized] = useState(false);

  // Function to detect if we're on English route
  const isEnglishRoute = (pathname) => {
    return pathname.startsWith('/en');
  };

  // Function to get corresponding route in other language
  const getCorrespondingRoute = (pathname, targetLang) => {
    if (targetLang === 'en') {
      // Converting from French to English
      if (pathname === '/') return '/en';
      if (pathname.startsWith('/en')) return pathname; // Already English
      return `/en${pathname}`;
    } else {
      // Converting from English to French
      if (pathname === '/en') return '/';
      if (pathname.startsWith('/en/')) return pathname.substring(3);
      if (pathname === '/en') return '/';
      return pathname;
    }
  };

  // Function to switch language
  const switchLanguage = (newLang) => {
    const currentPath = location.pathname;
    const newPath = getCorrespondingRoute(currentPath, newLang);
    
    // Update i18n language
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
    
    // Save preference to localStorage
    localStorage.setItem('i18nextLng', newLang);
    localStorage.setItem('manualLanguageChoice', 'true');
    
    // Navigate to corresponding route
    if (newPath !== currentPath) {
      navigate(newPath, { replace: true });
    }
  };

  // Initialize language detection
  useEffect(() => {
    const currentPath = location.pathname;
    const isEnRoute = isEnglishRoute(currentPath);
    const manualChoice = localStorage.getItem('manualLanguageChoice') === 'true';
    const storedLang = localStorage.getItem('i18nextLng');
    
    let detectedLang = 'fr'; // Default to French
    
    if (isEnRoute) {
      // If on English route, set to English
      detectedLang = 'en';
    } else if (manualChoice && storedLang) {
      // If user manually chose language before, respect that choice
      detectedLang = storedLang;
    } else if (!manualChoice) {
      // Auto-detect browser language only if no manual choice was made
      const browserLang = navigator.language || navigator.languages[0];
      if (browserLang && (browserLang.startsWith('en') || browserLang === 'en')) {
        detectedLang = 'en';
        // Redirect to English route if not already there
        if (!isEnRoute && currentPath !== '/en') {
          const englishRoute = getCorrespondingRoute(currentPath, 'en');
          navigate(englishRoute, { replace: true });
        }
      }
    }
    
    // Set the detected language
    i18n.changeLanguage(detectedLang);
    setCurrentLang(detectedLang);
    setIsInitialized(true);
  }, [location.pathname, navigate, i18n]);

  // Update current language when route changes
  useEffect(() => {
    if (isInitialized) {
      const isEnRoute = isEnglishRoute(location.pathname);
      const expectedLang = isEnRoute ? 'en' : 'fr';
      
      if (expectedLang !== currentLang) {
        i18n.changeLanguage(expectedLang);
        setCurrentLang(expectedLang);
      }
    }
  }, [location.pathname, currentLang, i18n, isInitialized]);

  const value = {
    currentLang,
    switchLanguage,
    isEnglish: currentLang === 'en',
    isFrench: currentLang === 'fr',
    getCorrespondingRoute,
    isInitialized
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;