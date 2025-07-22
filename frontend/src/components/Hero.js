import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCalendly } from '../contexts/CalendlyContext';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const { t } = useTranslation('home');
  const { openCalendly } = useCalendly();
  const alternatingWords = t('hero.title_animated_words', { returnObjects: true });
  
  // State pour l'animation de scroll
  const [scrollY, setScrollY] = useState(0);
  
  // State pour l'animation d'introduction
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  
  // Effect pour écouter le scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Effect pour gérer l'animation d'introduction
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
      // Signal au header que l'animation est terminée
      if (window.showHeaderLogo) {
        setTimeout(() => {
          window.showHeaderLogo();
        }, 800); // Synchronisé avec l'animation de transition
      }
      setTimeout(() => {
        setShowIntro(false);
      }, 800); // Délai réduit pour transition plus rapide
    }, 2500); // Animation d'intro plus courte - 2.5 secondes

    return () => clearTimeout(timer);
  }, []);
  
  // Calculer la position du toggle (de gauche vers droite) - plus rapide
  const toggleProgress = Math.min(scrollY / 200, 1); // 200px de scroll pour animation complète (plus rapide)

  return (
    <>
      {/* Full Screen Intro Animation */}
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[100] bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: introComplete ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231ABC9C' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Full Screen Logo */}
          <motion.div
            className="flex items-center gap-4 sm:gap-8 text-white px-4 sm:px-0"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: introComplete ? 0.15 : 1, 
              opacity: introComplete ? 0.9 : 1,
              y: introComplete ? -350 : 0,
              x: introComplete ? -800 : 0
            }}
            transition={{ 
              duration: introComplete ? 0.8 : 0.6, 
              ease: introComplete ? [0.25, 0.1, 0.25, 1] : "easeOut",
              delay: introComplete ? 0 : 0.3
            }}
          >
            {/* Data part */}
            <motion.span 
              className="font-bold tracking-wide"
              style={{
                fontSize: introComplete 
                  ? "2rem" 
                  : window.innerWidth < 640 
                    ? "4rem" 
                    : window.innerWidth < 1024 
                      ? "6rem" 
                      : "8rem"
              }}
              initial={{ 
                textShadow: '0 0 30px rgba(26, 188, 156, 0.8), 0 0 60px rgba(26, 188, 156, 0.6)',
              }}
              animate={{
                textShadow: introComplete 
                  ? '0 0 0px transparent'
                  : [
                      '0 0 30px rgba(26, 188, 156, 0.8), 0 0 60px rgba(26, 188, 156, 0.6)',
                      '0 0 20px rgba(26, 188, 156, 1), 0 0 40px rgba(26, 188, 156, 0.8)',
                      '0 0 30px rgba(26, 188, 156, 0.8), 0 0 60px rgba(26, 188, 156, 0.6)'
                    ]
              }}
              transition={{ 
                fontSize: { duration: introComplete ? 0.8 : 0 },
                textShadow: { duration: introComplete ? 0.3 : 2, repeat: introComplete ? 0 : Infinity, ease: "easeInOut" }
              }}
            >
              Data
            </motion.span>
            
            {/* Toggle animé - responsive */}
            <motion.div 
              className="relative bg-white/20 rounded-full border-2 border-white/30 flex items-center"
              style={{
                width: introComplete 
                  ? "3rem" 
                  : window.innerWidth < 640 
                    ? "4rem" 
                    : window.innerWidth < 1024 
                      ? "6rem" 
                      : "8rem",
                height: introComplete 
                  ? "1.5rem" 
                  : window.innerWidth < 640 
                    ? "2rem" 
                    : window.innerWidth < 1024 
                      ? "3rem" 
                      : "4rem",
                padding: introComplete 
                  ? "0.25rem" 
                  : window.innerWidth < 640 
                    ? "0.5rem" 
                    : "0.75rem"
              }}
              transition={{ 
                width: { duration: 0.8 },
                height: { duration: 0.8 },
                padding: { duration: 0.8 }
              }}
            >
              <motion.div 
                className="bg-primary-turquoise rounded-full shadow-2xl"
                style={{
                  width: introComplete 
                    ? "1rem" 
                    : window.innerWidth < 640 
                      ? "1.25rem" 
                      : window.innerWidth < 1024 
                        ? "1.75rem" 
                        : "2.5rem",
                  height: introComplete 
                    ? "1rem" 
                    : window.innerWidth < 640 
                      ? "1.25rem" 
                      : window.innerWidth < 1024 
                        ? "1.75rem" 
                        : "2.5rem"
                }}
                initial={{ x: 0, boxShadow: '0 0 25px rgba(26, 188, 156, 0.8)' }}
                animate={{ 
                  x: introComplete 
                    ? "1.25rem" 
                    : window.innerWidth < 640 
                      ? [0, "2.25rem", 0]
                      : window.innerWidth < 1024 
                        ? [0, "3.5rem", 0]
                        : [0, "4.75rem", 0],
                  boxShadow: introComplete 
                    ? '0 0 10px rgba(26, 188, 156, 0.6)'
                    : [
                        '0 0 25px rgba(26, 188, 156, 0.8)',
                        '0 0 40px rgba(26, 188, 156, 1)',
                        '0 0 25px rgba(26, 188, 156, 0.8)'
                      ]
                }}
                transition={{ 
                  width: { duration: 0.8 },
                  height: { duration: 0.8 },
                  x: { 
                    duration: introComplete ? 0.8 : 2.5, 
                    repeat: introComplete ? 0 : Infinity,
                    ease: introComplete ? [0.25, 0.1, 0.25, 1] : "easeInOut"
                  },
                  boxShadow: { 
                    duration: introComplete ? 0.3 : 2.5, 
                    repeat: introComplete ? 0 : Infinity 
                  }
                }}
              >
                <div className="w-full h-full bg-primary-turquoise rounded-full animate-pulse"></div>
              </motion.div>
              
              {/* Trail effect - responsive */}
              {!introComplete && (
                <motion.div
                  className="absolute bg-primary-turquoise/60 rounded-full"
                  style={{ 
                    left: window.innerWidth < 640 ? "0.5rem" : "0.75rem",
                    width: window.innerWidth < 640 
                      ? "1.25rem" 
                      : window.innerWidth < 1024 
                        ? "1.75rem" 
                        : "2.5rem", 
                    height: window.innerWidth < 640 
                      ? "1.25rem" 
                      : window.innerWidth < 1024 
                        ? "1.75rem" 
                        : "2.5rem"
                  }}
                  animate={{ 
                    x: window.innerWidth < 640 
                      ? [0, "2.25rem", 0]
                      : window.innerWidth < 1024 
                        ? [0, "3.5rem", 0]
                        : [0, "4.75rem", 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut", 
                    delay: 0.2
                  }}
                />
              )}
            </motion.div>
            
            {/* Journey part */}
            <motion.span 
              className="font-bold tracking-wide"
              style={{
                fontSize: introComplete 
                  ? "2rem" 
                  : window.innerWidth < 640 
                    ? "4rem" 
                    : window.innerWidth < 1024 
                      ? "6rem" 
                      : "8rem"
              }}
              initial={{ 
                textShadow: '0 0 20px rgba(26, 188, 156, 0.4)',
              }}
              animate={{
                textShadow: introComplete 
                  ? '0 0 0px transparent'
                  : [
                      '0 0 20px rgba(26, 188, 156, 0.4)',
                      '0 0 30px rgba(26, 188, 156, 0.8), 0 0 60px rgba(26, 188, 156, 0.6)',
                      '0 0 20px rgba(26, 188, 156, 0.4)'
                    ]
              }}
              transition={{ 
                fontSize: { duration: introComplete ? 0.8 : 0 },
                textShadow: { 
                  duration: introComplete ? 0.3 : 2, 
                  repeat: introComplete ? 0 : Infinity, 
                  ease: "easeInOut",
                  delay: introComplete ? 0 : 1
                }
              }}
            >
              Journey
            </motion.span>
          </motion.div>

          {/* Loading indicator - seulement avant la transition */}
          {!introComplete && (
            <motion.div
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-primary-turquoise rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Main Hero Content - only show after intro */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 pb-20"
        initial={{ opacity: showIntro ? 0 : 1 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5, delay: showIntro ? 0 : 1 }}
      >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231ABC9C' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url('https://i.ibb.co/Xx4pF8Lp/Capture-d-cran-2025-07-22-230712.png')`
        }}
      />

      {/* Animated Visual Elements - Left Side */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="space-y-6">
          {/* KPI Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 w-48"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/80 text-sm">Adoption Rate</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-white">+75%</span>
              <span className="text-green-400 text-sm">↗</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 mt-2">
              <motion.div
                className="bg-green-400 h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Mini Chart */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 w-48"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-white/80 text-sm mb-3">Performance Trends</div>
            <div className="flex items-end justify-between h-16">
              {[40, 60, 45, 80, 70, 90, 85].map((height, index) => (
                <motion.div
                  key={index}
                  className="bg-primary-turquoise rounded-t"
                  style={{ width: '8px' }}
                  initial={{ height: '8px' }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          {/* ROI Indicator */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 w-48"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-white/80 text-sm mb-2">ROI Projections</div>
            <div className="text-xl font-bold text-primary-turquoise">€2.5M</div>
            <div className="text-green-400 text-sm">Économies générées</div>
          </motion.div>
        </div>
      </div>

      {/* Animated Visual Elements - Right Side */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="space-y-6">
          {/* Efficiency Gauge */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 w-48"
            animate={{ rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-white/80 text-sm mb-3">Efficiency Gain</div>
            <div className="relative w-24 h-24 mx-auto">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#1ABC9C"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "251.2", strokeDashoffset: "251.2" }}
                  animate={{ strokeDashoffset: "62.8" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-white">+65%</span>
              </div>
            </div>
          </motion.div>

          {/* Time Saved */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 w-48"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="text-white/80 text-sm mb-2">Time Saved</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-white">-60%</div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary-turquoise rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary-turquoise rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-primary-turquoise rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
            <div className="text-primary-turquoise text-sm">Reporting time</div>
          </motion.div>

          {/* User Satisfaction */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 w-48"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="text-white/80 text-sm mb-2">User Satisfaction</div>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  className="text-yellow-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: star * 0.1 }}
                >
                  ★
                </motion.div>
              ))}
            </div>
            <div className="text-xl font-bold text-white">9.2/10</div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading - First Part */}
          <motion.h1 
            className="text-hero font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('hero.title')}
          </motion.h1>

          {/* Main Heading - Second Part with Animation */}
          <motion.h2 
            className="text-hero font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t('language.current') === 'English' ? 'We transform them into' : 'Nous les transformons en'}{' '}
            <AnimatedText words={alternatingWords} className="text-primary-turquoise" />
          </motion.h2>

          {/* Specialist description - repositionné juste après le titre */}
          <motion.p 
            className="text-xl text-neutral-300 mb-8 font-light leading-relaxed text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {t('language.current') === 'English' 
              ? 'Specialists in Power BI UX/UI report redesign to make your data irresistible and your decisions obvious.'
              : 'Spécialistes de la refonte UX/UI de rapports Power BI pour rendre vos données irrésistibles et vos décisions évidentes.'}
          </motion.p>

          {/* Minimalist Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className="bg-primary-turquoise/10 border border-primary-turquoise/30 text-primary-turquoise px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              🏆 {t('language.current') === 'English' ? 'Certified Power BI Experts' : 'Experts Power BI certifiés'}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.button 
              onClick={openCalendly}
              className="group inline-flex items-center gap-3 bg-primary-turquoise text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(26, 188, 156, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Search size={24} />
              {t('hero.cta')}
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-turquoise mb-2">150+</div>
              <div className="text-neutral-400 text-sm">
                {t('language.current') === 'English' ? 'Dashboards transformed' : 'Dashboards transformés'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-turquoise mb-2">98%</div>
              <div className="text-neutral-400 text-sm">
                {t('language.current') === 'English' ? 'Satisfaction rate' : 'Taux de satisfaction'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-turquoise mb-2">5 ans</div>
              <div className="text-neutral-400 text-sm">
                {t('language.current') === 'English' ? 'Power BI expertise' : 'D\'expertise Power BI'}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </motion.section>
    </>
  );
};

export default Hero;