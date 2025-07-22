import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CalendlyModal from './CalendlyModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'À propos', path: '/about' }
  ];

  const isActive = (path) => location.pathname === path;

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
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-1">
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
            </div>
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
                      : 'text-white hover:text-primary-turquoise hover:bg-white/10'
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

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <motion.button
              className="bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Réservez un audit gratuit
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-primary-dark hover:bg-neutral-100' 
                : 'text-white hover:bg-white/10'
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
                
                {/* Mobile CTA */}
                <motion.button
                  className="w-full mt-4 bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Réservez un audit gratuit
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