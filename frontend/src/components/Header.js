import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { useCalendly } from '../contexts/CalendlyContext';
import { useLogoAnimation } from '../contexts/LogoAnimationContext';

const Header = () => {
  const { t } = useTranslation('common');
  const { currentLang, switchLanguage, isInitialized } = useLanguage();
  const { openCalendly } = useCalendly();
  const { isAnimationComplete } = useLogoAnimation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeaderLogo, setShowHeaderLogo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Show header logo after scroll animation completes
      if (window.scrollY > 200 && isAnimationComplete) {
        setShowHeaderLogo(true);
      }
    };

    // Global function for Hero component to call
    window.showHeaderLogo = () => {
      setShowHeaderLogo(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      delete window.showHeaderLogo;
    };
  }, [isAnimationComplete]);

  const menuItems = [
    { name: t('nav.home'), path: currentLang === 'en' ? '/en' : '/' },
    { name: t('nav.services'), path: currentLang === 'en' ? '/en/services' : '/services' },
    { name: t('nav.portfolio'), path: currentLang === 'en' ? '/en/portfolio' : '/portfolio' },
    { name: t('nav.blog'), path: currentLang === 'en' ? '/en/blog' : '/blog' },
    { name: t('nav.about'), path: currentLang === 'en' ? '/en/about' : '/about' }
  ];

  const isActive = (path) => location.pathname === path;

  const handleLanguageSwitch = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    switchLanguage(newLang);
  };

  if (!isInitialized) {
    return null; // or a loading spinner
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-200/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to={currentLang === 'en' ? '/en' : '/'} className="flex items-center gap-3 group">
            <AnimatePresence>
              {showHeaderLogo && (
                <motion.div 
                  className="flex items-center gap-1"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className={`text-2xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-primary-dark' : 'text-white'
                  }`}>
                    Data
                  </span>
                  {/* Toggle Button */}
                  <div className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-primary-dark/20' : 'bg-white/20'
                  } flex items-center px-1`}>
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      isScrolled ? 'bg-primary-turquoise' : 'bg-white'
                    } transform translate-x-5`}></div>
                  </div>
                  <span className={`text-2xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-primary-dark' : 'text-white'
                  }`}>
                    journey
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            {!showHeaderLogo && (
              <div className="w-48 h-8"></div> // Placeholder to maintain layout
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? isScrolled 
                      ? 'text-primary-turquoise bg-primary-turquoise/10' 
                      : 'text-primary-turquoise bg-white/20'
                    : isScrolled
                      ? 'text-neutral-700 hover:text-primary-turquoise hover:bg-neutral-100'
                      : 'text-primary-dark hover:text-primary-turquoise hover:bg-white/10'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-turquoise rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switch Button */}
            <motion.button
              onClick={handleLanguageSwitch}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled
                  ? 'text-neutral-700 hover:bg-neutral-100'
                  : 'text-primary-dark hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={18} />
              <span className="text-sm">
                {currentLang === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
              </span>
            </motion.button>

            {/* CTA Button */}
            <motion.button
              onClick={openCalendly}
              className="bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('buttons.book_audit')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-primary-dark hover:bg-neutral-100' 
                : 'text-primary-dark hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-neutral-200 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="px-6 py-4 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-primary-turquoise bg-primary-turquoise/10 border-l-4 border-primary-turquoise'
                        : 'text-neutral-700 hover:text-primary-turquoise hover:bg-neutral-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Language Switch */}
                <motion.button
                  onClick={() => {
                    handleLanguageSwitch();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-neutral-700 hover:bg-neutral-50 transition-colors duration-300"
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe size={18} />
                  <span>
                    {currentLang === 'fr' ? '🇬🇧 Switch to English' : '🇫🇷 Passer au français'}
                  </span>
                </motion.button>
                
                {/* Mobile CTA */}
                <motion.button
                  onClick={() => {
                    openCalendly();
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-4 bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  {t('buttons.book_audit')}
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;