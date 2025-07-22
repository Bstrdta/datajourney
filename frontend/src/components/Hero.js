import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const alternatingWords = ['décisions', 'histoires', 'révélations clés'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            className="text-hero font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Vous avez des données.
            <br />
            Nous les transformons en{' '}
            <AnimatedText words={alternatingWords} className="text-primary-turquoise" />
          </motion.h1>

          {/* Minimalist Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className="bg-primary-turquoise/10 border border-primary-turquoise/30 text-primary-turquoise px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              🏆 Experts Power BI certifiés
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-subtitle text-neutral-300 mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Des dashboards clairs qui racontent votre performance.
            <br />
            <span className="text-primary-turquoise font-medium">
              Spécialistes UX/UI Power BI depuis 2020
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.button 
              className="group inline-flex items-center gap-3 bg-primary-turquoise text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(26, 188, 156, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Search size={24} />
              Réservez un audit gratuit
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
              <div className="text-neutral-400 text-sm">Dashboards transformés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-turquoise mb-2">98%</div>
              <div className="text-neutral-400 text-sm">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-turquoise mb-2">5 ans</div>
              <div className="text-neutral-400 text-sm">D'expertise Power BI</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;