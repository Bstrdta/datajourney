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
  
  // Effect pour écouter le scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculer la position du toggle (de gauche vers droite) - plus rapide
  const toggleProgress = Math.min(scrollY / 200, 1); // 200px de scroll pour animation complète (plus rapide)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 pb-20">
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
          backgroundImage: `url('https://images.unsplash.com/photo-1572025418633-489b46e62332?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85')`
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
          {/* Main Heading */}
          <motion.h1 
            className="text-hero font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('hero.title')}
            <br />
            {t('language.current') === 'English' ? 'We transform them into' : 'Nous les transformons en'}{' '}
            <AnimatedText words={alternatingWords} className="text-primary-turquoise" />
          </motion.h1>

          {/* Specialist description */}
          <motion.p 
            className="text-xl text-neutral-300 mb-8 font-light leading-relaxed text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            {t('language.current') === 'English' 
              ? 'Specialists in Power BI UX/UI report redesign to make your data irresistible and your decisions obvious.'
              : 'Spécialistes de la refonte UX/UI de rapports Power BI pour rendre vos données irrésistibles et vos décisions évidentes.'}
          </motion.p>

          {/* Brand Intro Animation */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            onAnimationComplete={() => {
              // Start the logo animation sequence after the initial fade-in
              setTimeout(() => {
                document.getElementById('logo-animation')?.classList.add('animate-sequence');
              }, 500);
            }}
          >
            <div 
              id="logo-animation"
              className="flex items-center gap-3 text-6xl font-bold"
              style={{
                '--data-highlight': 'rgba(26, 188, 156, 0.8)',
                '--journey-highlight': 'rgba(26, 188, 156, 0.8)',
              }}
            >
              {/* Data part - starts highlighted */}
              <motion.span 
                className="text-white"
                initial={{ 
                  textShadow: '0 0 20px var(--data-highlight), 0 0 40px var(--data-highlight)',
                  scale: 1.1 
                }}
                animate={{ 
                  textShadow: scrollY > 100 ? '0 0 0px transparent' : '0 0 20px var(--data-highlight), 0 0 40px var(--data-highlight)',
                  scale: scrollY > 100 ? 1 : 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                Data
              </motion.span>
              
              {/* Toggle/Transition Effect */}
              <div className="relative w-20 h-10 bg-white/20 rounded-full border border-white/30 flex items-center px-2">
                <motion.div 
                  className="w-6 h-6 bg-primary-turquoise rounded-full shadow-lg"
                  initial={{ x: 0, boxShadow: '0 0 15px rgba(26, 188, 156, 0.6)' }}
                  animate={{ 
                    x: scrollY > 50 ? 48 : 0,
                    boxShadow: scrollY > 50 ? '0 0 25px rgba(26, 188, 156, 0.8)' : '0 0 15px rgba(26, 188, 156, 0.6)'
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onAnimationComplete={(definition) => {
                    if (definition.x === 48) {
                      // Animation vers Journey complétée, déclencher la shrink animation
                      setTimeout(() => {
                        if (window.completeLogoAnimation) {
                          window.completeLogoAnimation();
                        }
                      }, 500);
                    }
                  }}
                >
                  <div className="w-full h-full bg-primary-turquoise rounded-full animate-pulse"></div>
                </motion.div>
                
                {/* Trail effect */}
                <motion.div
                  className="absolute w-6 h-6 bg-primary-turquoise/40 rounded-full"
                  style={{ left: 8 }}
                  animate={{ 
                    x: scrollY > 50 ? 48 : 0,
                    opacity: scrollY > 50 ? [0, 0.6, 0] : 0
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                />
              </div>
              
              {/* Journey part - gets highlighted when toggle reaches it */}
              <motion.span 
                className="text-white"
                initial={{ 
                  textShadow: '0 0 0px transparent',
                  scale: 1 
                }}
                animate={{ 
                  textShadow: scrollY > 50 ? '0 0 20px var(--journey-highlight), 0 0 40px var(--journey-highlight)' : '0 0 0px transparent',
                  scale: scrollY > 50 ? 1.1 : 1
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Journey
              </motion.span>
            </div>
            
            {/* Shrink and move to header animation */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: scrollY > 200 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="flex items-center gap-2 text-2xl font-bold text-white"
                initial={{ scale: 1, y: 0 }}
                animate={{ 
                  scale: scrollY > 200 ? 0.4 : 1,
                  y: scrollY > 200 ? -400 : 0,
                  x: scrollY > 200 ? -600 : 0
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onAnimationComplete={() => {
                  if (scrollY > 200 && window.showHeaderLogo) {
                    window.showHeaderLogo();
                  }
                }}
              >
                <span>Data</span>
                <div className="w-12 h-6 bg-white/20 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-primary-turquoise rounded-full transform translate-x-5"></div>
                </div>
                <span>Journey</span>
              </motion.div>
            </motion.div>
          </motion.div>

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

          {/* Subtitle */}
          <motion.p 
            className="text-subtitle text-neutral-300 mb-12 font-light leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t('hero.subtitle')}
          </motion.p>

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
    </section>
  );
};

export default Hero;