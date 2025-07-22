import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, TrendingUp, Target, Calendar, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const KPICard = () => {
  const { currentLang } = useLanguage();
  const [showInfo, setShowInfo] = useState(false);

  // Sample KPI data
  const kpiData = {
    title: currentLang === 'en' ? 'Dashboard Performance' : 'Performance Dashboard',
    subtitle: currentLang === 'en' ? 'Monthly Analytics Report' : 'Rapport Analytique Mensuel',
    currentValue: 847,
    targetValue: 1000,
    previousValue: 623,
    unit: currentLang === 'en' ? 'Users' : 'Utilisateurs',
    period: currentLang === 'en' ? 'This Month' : 'Ce Mois',
    growthRate: '+35.9%',
    status: 'improving',
    chartData: [65, 78, 85, 72, 90, 95, 847/10] // Simplified chart data
  };

  const completionPercentage = Math.round((kpiData.currentValue / kpiData.targetValue) * 100);

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            {/* KPI Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              {/* Header */}
              <div className="p-6 pb-4 relative">
                {/* Info Button */}
                <button
                  className="absolute top-4 right-4 w-8 h-8 bg-neutral-100 hover:bg-primary-turquoise hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group"
                  onClick={() => setShowInfo(!showInfo)}
                  onMouseEnter={() => setShowInfo(true)}
                  onMouseLeave={() => setShowInfo(false)}
                >
                  <Info size={14} />
                </button>

                {/* Info Tooltip */}
                {showInfo && (
                  <motion.div
                    className="absolute top-14 right-4 bg-primary-dark text-white text-xs rounded-lg px-3 py-2 shadow-lg z-10 max-w-xs"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    {currentLang === 'en' 
                      ? 'Real-time dashboard showing user engagement metrics and performance indicators.'
                      : 'Dashboard temps réel montrant les métriques d\'engagement utilisateur et indicateurs de performance.'
                    }
                    <div className="absolute -top-1 right-4 w-2 h-2 bg-primary-dark rotate-45"></div>
                  </motion.div>
                )}

                {/* Title & Subtitle */}
                <div className="pr-10">
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{kpiData.title}</h3>
                  <p className="text-sm text-neutral-500 flex items-center gap-2">
                    <Calendar size={14} />
                    {kpiData.subtitle}
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 pt-2">
                {/* Current Value & Growth */}
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-bold text-primary-dark">
                        {kpiData.currentValue.toLocaleString()}
                      </span>
                      <span className="text-neutral-500 text-sm">{kpiData.unit}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                        kpiData.status === 'improving' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        <TrendingUp size={12} />
                        {kpiData.growthRate}
                      </div>
                      <span className="text-xs text-neutral-400">{kpiData.period}</span>
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="flex items-end gap-1 h-16">
                    {kpiData.chartData.map((value, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-t from-primary-turquoise to-green-400 rounded-t-sm"
                        style={{ width: '6px' }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(value / Math.max(...kpiData.chartData)) * 100}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    ))}
                  </div>
                </div>

                {/* Progress vs Target */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Target className="text-primary-turquoise" size={16} />
                      <span className="text-sm font-semibold text-neutral-700">
                        {currentLang === 'en' ? 'Progress vs Target' : 'Progression vs Objectif'}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-primary-turquoise">
                      {completionPercentage}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-turquoise to-green-400 rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${completionPercentage}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        {/* Animated glow effect */}
                        <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                      </motion.div>
                    </div>

                    {/* Target indicator */}
                    <div className="flex items-center justify-between mt-2 text-xs text-neutral-500">
                      <span>0</span>
                      <div className="flex items-center gap-1">
                        <Target size={12} />
                        <span>{kpiData.targetValue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-dark">
                      +{((kpiData.currentValue - kpiData.previousValue) / kpiData.previousValue * 100).toFixed(1)}%
                    </div>
                    <div className="text-xs text-neutral-500">
                      {currentLang === 'en' ? 'vs Last Month' : 'vs Mois Dernier'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-dark flex items-center justify-center gap-1">
                      <BarChart3 size={16} />
                      4.8/5
                    </div>
                    <div className="text-xs text-neutral-500">
                      {currentLang === 'en' ? 'Satisfaction' : 'Satisfaction'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-turquoise/10 via-transparent to-transparent rounded-bl-full"></div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default KPICard;