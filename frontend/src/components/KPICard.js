import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, TrendingUp, Target, Calendar, BarChart3, Activity, Zap, Users, PieChart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const KPISlideshow = () => {
  const { currentLang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const kpiData = [
    {
      id: 1,
      type: 'performance',
      title: currentLang === 'en' ? 'Performance Dashboard' : 'Tableau de Performance',
      theme: 'light'
    },
    {
      id: 2,
      type: 'analytics',
      title: currentLang === 'en' ? 'Analytics Flow' : 'Flux Analytique',
      theme: 'dark'
    },
    {
      id: 3,
      type: 'completion',
      title: currentLang === 'en' ? 'Completion Rate' : 'Taux de Completion',
      theme: 'light'
    },
    {
      id: 4,
      type: 'activity',
      title: currentLang === 'en' ? 'Activity Heat' : 'Activité Thermique',
      theme: 'gradient'
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % kpiData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + kpiData.length) % kpiData.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  // Performance KPI Component
  const PerformanceKPI = () => (
    <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden relative p-8 h-96">
      <button className="absolute top-6 right-6 w-8 h-8 bg-neutral-100 hover:bg-primary-turquoise hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
        <Info size={14} />
      </button>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary-dark mb-2">Performance</h3>
        <p className="text-sm text-neutral-500 flex items-center gap-2">
          <Calendar size={14} />
          {currentLang === 'en' ? 'This Month' : 'Ce Mois'}
        </p>
      </div>

      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="text-5xl font-bold text-primary-dark mb-2">847</div>
          <div className="flex items-center gap-2">
            <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">+35.9%</div>
          </div>
        </div>
        <div className="flex items-end gap-2 h-20">
          {[65, 78, 85, 72, 90, 95, 85].map((value, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-t from-primary-turquoise to-green-400 rounded-t-sm w-3"
              initial={{ height: 0 }}
              animate={{ height: `${(value / 100) * 100}%` }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-3">
          <span className="text-neutral-600">Progress vs Target</span>
          <span className="font-semibold text-primary-turquoise">85%</span>
        </div>
        <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-turquoise to-green-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 text-center">
        <div>
          <div className="text-2xl font-bold text-primary-dark">+36%</div>
          <div className="text-sm text-neutral-500">Growth</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary-dark">4.8</div>
          <div className="text-sm text-neutral-500">Rating</div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-turquoise/10 to-transparent rounded-bl-full"></div>
    </div>
  );

  // Analytics Flow KPI Component
  const AnalyticsKPI = () => (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl shadow-xl overflow-hidden relative p-8 text-white h-96">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <h3 className="font-bold text-2xl">Analytics Flow</h3>
        </div>
        <Activity className="text-cyan-400" size={24} />
      </div>

      <div className="mb-8">
        <div className="text-5xl font-bold mb-2">2.4K</div>
        <div className="text-sm text-cyan-300 flex items-center gap-2">
          <TrendingUp size={16} />
          Live Data Stream
        </div>
      </div>

      <div className="relative h-24 mb-8">
        <svg viewBox="0 0 200 60" className="w-full h-full">
          <defs>
            <linearGradient id="slideLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="slideAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,50 L15,45 L30,42 L45,38 L60,33 L75,30 L90,27 L105,22 L120,18 L135,21 L150,15 L165,12 L180,10 L200,10 L200,60 L0,60 Z"
            fill="url(#slideAreaGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          <motion.path
            d="M0,50 L15,45 L30,42 L45,38 L60,33 L75,30 L90,27 L105,22 L120,18 L135,21 L150,15 L165,12 L180,10 L200,10"
            stroke="url(#slideLineGradient)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
      </div>

      <div className="flex justify-between text-sm">
        <div className="text-cyan-300">Real-time Processing</div>
        <div className="text-blue-300">+127% Efficiency</div>
      </div>

      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full filter blur-2xl"></div>
    </div>
  );

  // Completion Rate KPI Component
  const CompletionKPI = () => (
    <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden relative p-8 h-96">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-primary-dark text-2xl">Completion Rate</h3>
        <PieChart className="text-primary-turquoise" size={24} />
      </div>

      <div className="relative flex items-center justify-center mb-8">
        <svg viewBox="0 0 120 120" className="w-32 h-32 transform -rotate-90">
          <defs>
            <linearGradient id="slideDonutGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1ABC9C" />
              <stop offset="100%" stopColor="#16A085" />
            </linearGradient>
            <linearGradient id="slideDonutGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3498DB" />
              <stop offset="100%" stopColor="#2980B9" />
            </linearGradient>
          </defs>
          
          <circle cx="60" cy="60" r="45" stroke="#f1f5f9" strokeWidth="12" fill="none" />
          
          <motion.circle
            cx="60"
            cy="60"
            r="45"
            stroke="url(#slideDonutGradient1)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="283"
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 283 - (283 * 0.92) }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-dark">92%</div>
            <div className="text-sm text-neutral-500">Success Rate</div>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm">
          <div className="w-4 h-3 bg-primary-turquoise rounded-full"></div>
          <span className="text-neutral-600">Completed Projects: 92%</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="w-4 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-neutral-600">In Progress: 8%</span>
        </div>
      </div>

      <div className="text-center pt-6 border-t border-neutral-100">
        <div className="text-2xl font-semibold text-primary-dark">1,247</div>
        <div className="text-sm text-neutral-500">Total Projects</div>
      </div>
    </div>
  );

  // Activity Heat KPI Component  
  const ActivityKPI = () => {
    const heatmapData = [
      [20, 35, 45, 60, 75],
      [15, 40, 55, 70, 85],
      [25, 30, 50, 65, 80],
      [10, 45, 60, 75, 90]
    ];

    return (
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl border border-purple-100 overflow-hidden relative p-8 h-96">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-purple-900 text-2xl">Activity Heat</h3>
          <Zap className="text-purple-600" size={24} />
        </div>

        <div className="mb-8">
          <div className="text-5xl font-bold text-purple-900 mb-2">156</div>
          <div className="text-sm text-purple-600 flex items-center gap-2">
            <Users size={16} />
            Active Sessions
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 mb-8">
          {heatmapData.flat().map((intensity, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-md"
              style={{ backgroundColor: `rgba(168, 85, 247, ${intensity / 100})` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-purple-600 mb-6">
          <span>Low Activity</span>
          <div className="flex gap-1">
            {[0.2, 0.4, 0.6, 0.8, 1].map((opacity, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: `rgba(168, 85, 247, ${opacity})` }}
              />
            ))}
          </div>
          <span>High Activity</span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center text-sm">
          <div>
            <div className="text-xl font-bold text-purple-900">Peak 14h</div>
            <div className="text-purple-600">Optimal Time</div>
          </div>
          <div>
            <div className="text-xl font-bold text-purple-900">+18%</div>
            <div className="text-purple-600">This Week</div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-300/30 to-transparent rounded-bl-full"></div>
      </div>
    );
  };

  const renderCurrentKPI = () => {
    switch (currentSlide) {
      case 0: return <PerformanceKPI />;
      case 1: return <AnalyticsKPI />;
      case 2: return <CompletionKPI />;
      case 3: return <ActivityKPI />;
      default: return <PerformanceKPI />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231ABC9C' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-primary-turquoise/10 text-primary-turquoise px-6 py-3 rounded-full text-sm font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <BarChart3 size={18} />
              {currentLang === 'en' ? 'Interactive Analytics' : 'Analytique Interactive'}
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
              {currentLang === 'en' ? 'KPI for' : 'KPI pour des'}{' '}
              <span className="bg-gradient-to-r from-primary-turquoise to-green-500 bg-clip-text text-transparent">
                {currentLang === 'en' ? 'Clear Insights' : 'Insights Clairs'}
              </span>
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {currentLang === 'en'
                ? 'Experience the power of well-designed KPI dashboards that transform complex data into actionable insights.'
                : 'Découvrez la puissance des tableaux de bord KPI bien conçus qui transforment des données complexes en insights exploitables.'
              }
            </p>
          </div>
        </ScrollReveal>

        {/* Slideshow Container */}
        <div className="relative">
          {/* Main Slide Area */}
          <div className="relative h-96 mb-8 overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-full max-w-lg mx-auto">
                  {renderCurrentKPI()}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8">
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center text-primary-dark hover:bg-primary-turquoise hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Slide Indicators */}
            <div className="flex gap-3">
              {kpiData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary-turquoise scale-125'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center text-primary-dark hover:bg-primary-turquoise hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Slide Titles */}
          <div className="text-center mt-6">
            <motion.h3 
              key={currentSlide}
              className="text-2xl font-bold text-primary-dark"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {kpiData[currentSlide].title}
            </motion.h3>
            <p className="text-sm text-neutral-500 mt-2">
              {currentSlide + 1} / {kpiData.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPISlideshow;