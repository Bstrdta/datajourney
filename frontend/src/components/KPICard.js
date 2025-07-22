import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, TrendingUp, Target, Calendar, BarChart3, Activity, Zap, Users, PieChart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const KPISection = () => {
  const { currentLang } = useLanguage();
  const [activeCard, setActiveCard] = useState(null);

  // Sample data for all charts
  const lineChartData = [45, 52, 48, 61, 67, 73, 78, 85, 91, 88, 95, 102];
  const donutData = [65, 25, 10]; // Completion percentages
  const heatmapData = [
    [20, 35, 45, 60, 75],
    [15, 40, 55, 70, 85],
    [25, 30, 50, 65, 80],
    [10, 45, 60, 75, 90]
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* 1. KPI Card (Original but optimized) */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden relative p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Info Button */}
              <button className="absolute top-4 right-4 w-6 h-6 bg-neutral-100 hover:bg-primary-turquoise hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                <Info size={12} />
              </button>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-primary-dark mb-1">Performance</h3>
                <p className="text-xs text-neutral-500 flex items-center gap-1">
                  <Calendar size={10} />
                  {currentLang === 'en' ? 'This Month' : 'Ce Mois'}
                </p>
              </div>

              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-primary-dark">847</div>
                  <div className="text-xs text-green-600 font-semibold">+35.9%</div>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[65, 78, 85, 72, 90, 95, 85].map((value, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-t from-primary-turquoise to-green-400 rounded-t-sm w-1"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(value / 100) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-neutral-600">Progress</span>
                  <span className="font-semibold text-primary-turquoise">85%</span>
                </div>
                <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-turquoise to-green-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div>
                  <div className="font-bold text-primary-dark">+36%</div>
                  <div className="text-neutral-500">Growth</div>
                </div>
                <div>
                  <div className="font-bold text-primary-dark">4.8</div>
                  <div className="text-neutral-500">Rating</div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-turquoise/10 to-transparent rounded-bl-full"></div>
            </motion.div>

            {/* 2. Futuristic Line Chart */}
            <motion.div
              className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl shadow-xl overflow-hidden relative p-6 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)" }}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <h3 className="font-bold text-sm">Analytics Flow</h3>
                </div>
                <Activity className="text-cyan-400" size={16} />
              </div>

              {/* Main Value */}
              <div className="mb-4">
                <div className="text-2xl font-bold mb-1">2.4K</div>
                <div className="text-xs text-cyan-300 flex items-center gap-1">
                  <TrendingUp size={10} />
                  Live Data Stream
                </div>
              </div>

              {/* Futuristic Line Chart */}
              <div className="relative h-16 mb-4">
                <svg viewBox="0 0 120 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area under curve */}
                  <motion.path
                    d="M0,35 L10,30 L20,28 L30,25 L40,22 L50,20 L60,18 L70,15 L80,12 L90,14 L100,10 L110,8 L120,8 L120,40 L0,40 Z"
                    fill="url(#areaGradient)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Main line */}
                  <motion.path
                    d="M0,35 L10,30 L20,28 L30,25 L40,22 L50,20 L60,18 L70,15 L80,12 L90,14 L100,10 L110,8 L120,8"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    viewport={{ once: true }}
                  />

                  {/* Animated dots */}
                  {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110].map((x, i) => {
                    const y = [35, 30, 28, 25, 22, 20, 18, 15, 12, 14, 10, 8][i];
                    return (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="1.5"
                        fill="#06b6d4"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + (i * 0.1) }}
                        viewport={{ once: true }}
                      />
                    );
                  })}
                </svg>

                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
              </div>

              {/* Bottom indicators */}
              <div className="flex justify-between text-xs">
                <div className="text-cyan-300">Real-time</div>
                <div className="text-blue-300">+127% efficiency</div>
              </div>

              {/* Cosmic background effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full filter blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full filter blur-xl"></div>
            </motion.div>

            {/* 3. Elegant Donut Chart */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden relative p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              onMouseEnter={() => setActiveCard(3)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-primary-dark text-sm">Completion Rate</h3>
                <PieChart className="text-primary-turquoise" size={16} />
              </div>

              {/* Donut Chart */}
              <div className="relative flex items-center justify-center mb-4">
                <svg viewBox="0 0 100 100" className="w-24 h-24 transform -rotate-90">
                  <defs>
                    <linearGradient id="donutGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1ABC9C" />
                      <stop offset="100%" stopColor="#16A085" />
                    </linearGradient>
                    <linearGradient id="donutGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3498DB" />
                      <stop offset="100%" stopColor="#2980B9" />
                    </linearGradient>
                  </defs>
                  
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#f1f5f9"
                    strokeWidth="8"
                    fill="none"
                  />
                  
                  {/* Progress circle 1 */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="url(#donutGradient1)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="220"
                    initial={{ strokeDashoffset: 220 }}
                    whileInView={{ strokeDashoffset: 220 - (220 * 0.75) }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Progress circle 2 */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="28"
                    stroke="url(#donutGradient2)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="176"
                    initial={{ strokeDashoffset: 176 }}
                    whileInView={{ strokeDashoffset: 176 - (176 * 0.60) }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  />
                </svg>

                {/* Center value */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary-dark">92%</div>
                    <div className="text-xs text-neutral-500">Success</div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-2 bg-primary-turquoise rounded-full"></div>
                  <span className="text-neutral-600">Completed: 75%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-neutral-600">In Progress: 60%</span>
                </div>
              </div>

              {/* Bottom metric */}
              <div className="text-center pt-2 border-t border-neutral-100">
                <div className="text-sm font-semibold text-primary-dark">1,247</div>
                <div className="text-xs text-neutral-500">Total Projects</div>
              </div>
            </motion.div>

            {/* 4. Modern Heatmap */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl border border-purple-100 overflow-hidden relative p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)" }}
              onMouseEnter={() => setActiveCard(4)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-purple-900 text-sm">Activity Heat</h3>
                <Zap className="text-purple-600" size={16} />
              </div>

              {/* Main Value */}
              <div className="mb-4">
                <div className="text-2xl font-bold text-purple-900 mb-1">156</div>
                <div className="text-xs text-purple-600 flex items-center gap-1">
                  <Users size={10} />
                  Active Sessions
                </div>
              </div>

              {/* Heatmap Grid */}
              <div className="grid grid-cols-5 gap-1 mb-4">
                {heatmapData.flat().map((intensity, index) => (
                  <motion.div
                    key={index}
                    className="aspect-square rounded-sm"
                    style={{
                      backgroundColor: `rgba(168, 85, 247, ${intensity / 100})`
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-between text-xs text-purple-600">
                <span>Low</span>
                <div className="flex gap-1">
                  {[0.2, 0.4, 0.6, 0.8, 1].map((opacity, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-sm"
                      style={{ backgroundColor: `rgba(168, 85, 247, ${opacity})` }}
                    />
                  ))}
                </div>
                <span>High</span>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-purple-200 text-center text-xs">
                <div>
                  <div className="font-bold text-purple-900">24h</div>
                  <div className="text-purple-600">Peak Time</div>
                </div>
                <div>
                  <div className="font-bold text-purple-900">+18%</div>
                  <div className="text-purple-600">This Week</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-300/20 to-transparent rounded-bl-full"></div>
            </motion.div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default KPISection;