import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, TrendingUp, TrendingDown, DollarSign, Users, BarChart3, PieChart, Activity, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const DashboardShowcase = () => {
  const { currentLang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Dashboard examples data
  const dashboards = [
    {
      id: 1,
      title: currentLang === 'en' ? 'Financial Analytics Dashboard' : 'Tableau de Bord Financier',
      category: currentLang === 'en' ? 'Finance' : 'Finance',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      type: 'financial'
    },
    {
      id: 2,
      title: currentLang === 'en' ? 'Marketing Performance Dashboard' : 'Tableau de Performance Marketing',
      category: currentLang === 'en' ? 'Marketing' : 'Marketing',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      type: 'marketing'
    },
    {
      id: 3,
      title: currentLang === 'en' ? 'Sales Analytics Dashboard' : 'Tableau de Bord Commercial',
      category: currentLang === 'en' ? 'Sales' : 'Ventes',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      type: 'sales'
    },
    {
      id: 4,
      title: currentLang === 'en' ? 'HR Analytics Dashboard' : 'Tableau de Bord RH',
      category: currentLang === 'en' ? 'Human Resources' : 'Ressources Humaines',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      type: 'hr'
    },
    {
      id: 5,
      title: currentLang === 'en' ? 'Operations Dashboard' : 'Tableau de Bord Opérationnel',
      category: currentLang === 'en' ? 'Operations' : 'Opérations',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      type: 'operations'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % dashboards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, dashboards.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % dashboards.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + dashboards.length) % dashboards.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    })
  };

  // Financial Dashboard Component
  const FinancialDashboard = () => (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-96">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Financial Overview</h3>
          <p className="text-sm text-gray-500">Q4 2024 Performance</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">$2.4M</div>
            <div className="text-xs text-gray-500">Total Revenue</div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6 h-64">
        {/* Left Column - KPIs */}
        <div className="space-y-4">
          <div className="bg-emerald-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-emerald-600" size={16} />
              <span className="text-xs font-semibold text-emerald-600">PROFIT</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">$456K</div>
            <div className="text-xs text-emerald-600">+12.5% vs last quarter</div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="text-blue-600" size={16} />
              <span className="text-xs font-semibold text-blue-600">CASH FLOW</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">$89K</div>
            <div className="text-xs text-blue-600">Monthly average</div>
          </div>
        </div>

        {/* Center Column - Chart */}
        <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
          <div className="relative w-full h-full">
            <svg viewBox="0 0 200 120" className="w-full h-full">
              <defs>
                <linearGradient id="financeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
              
              <motion.path
                d="M20,100 L50,85 L80,70 L110,45 L140,35 L170,20"
                stroke="url(#financeGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />

              {[20, 50, 80, 110, 140, 170].map((x, i) => {
                const y = [100, 85, 70, 45, 35, 20][i];
                return (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#10b981"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right Column - Metrics */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Operating Costs</span>
            <span className="text-sm font-semibold text-gray-900">$1.2M</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <motion.div
              className="bg-emerald-500 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Net Margin</span>
            <span className="text-sm font-semibold text-gray-900">18.5%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <motion.div
              className="bg-blue-500 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">ROI</span>
            <span className="text-sm font-semibold text-gray-900">24.2%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <motion.div
              className="bg-purple-500 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ duration: 1.5, delay: 0.9 }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Marketing Dashboard Component
  const MarketingDashboard = () => (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-96">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Marketing Analytics</h3>
          <p className="text-sm text-gray-500">Campaign Performance</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-600">847K</div>
          <div className="text-xs text-gray-500">Total Impressions</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 h-64">
        {/* Conversion Funnel */}
        <div className="col-span-2 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Conversion Funnel</h4>
          
          {[
            { stage: 'Impressions', value: '847K', width: '100%', color: 'bg-purple-500' },
            { stage: 'Clicks', value: '25.4K', width: '75%', color: 'bg-purple-400' },
            { stage: 'Leads', value: '4.2K', width: '50%', color: 'bg-purple-300' },
            { stage: 'Conversions', value: '1.1K', width: '25%', color: 'bg-purple-600' }
          ].map((item, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-600">{item.stage}</span>
                <span className="text-xs font-semibold text-gray-900">{item.value}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className={`${item.color} h-2 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: item.width }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Cards */}
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <div className="text-lg font-bold text-blue-600">3.2%</div>
            <div className="text-xs text-gray-500">CTR</div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <div className="text-lg font-bold text-green-600">$2.45</div>
            <div className="text-xs text-gray-500">CPC</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-4 text-center">
            <div className="text-lg font-bold text-orange-600">4.8x</div>
            <div className="text-xs text-gray-500">ROAS</div>
          </div>
        </div>

        {/* Traffic Sources Pie */}
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center">
          <div className="relative w-20 h-20 mb-2">
            <svg viewBox="0 0 42 42" className="w-full h-full transform -rotate-90">
              <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e5e7eb" strokeWidth="3" />
              <motion.circle
                cx="21" cy="21" r="15.915" fill="transparent"
                stroke="#8b5cf6" strokeWidth="3" strokeDasharray="60, 40"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">60%</span>
            </div>
          </div>
          <div className="text-xs text-center">
            <div className="font-semibold text-gray-700">Organic</div>
            <div className="text-gray-500">Traffic</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Sales Dashboard Component
  const SalesDashboard = () => (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-96">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Sales Performance</h3>
          <p className="text-sm text-gray-500">Monthly Overview</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">$156K</div>
          <div className="text-xs text-gray-500">This Month</div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 h-64">
        {/* Revenue Chart */}
        <div className="col-span-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Revenue Trend</h4>
          <div className="relative h-32">
            <svg viewBox="0 0 280 100" className="w-full h-full">
              <defs>
                <linearGradient id="salesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              <motion.path
                d="M0,80 Q70,60 140,40 T280,20 L280,100 L0,100 Z"
                fill="url(#salesGradient)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
              
              <motion.path
                d="M0,80 Q70,60 140,40 T280,20"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>
          </div>
        </div>

        {/* KPIs Column */}
        <div className="col-span-2 space-y-4">
          <div className="bg-emerald-50 rounded-xl p-3">
            <div className="flex items-center justify-between">
              <Target className="text-emerald-600" size={16} />
              <span className="text-xs text-emerald-600 font-semibold">TARGET</span>
            </div>
            <div className="text-lg font-bold text-gray-900 mt-1">92%</div>
            <div className="text-xs text-gray-500">Achievement</div>
          </div>

          <div className="bg-purple-50 rounded-xl p-3">
            <div className="flex items-center justify-between">
              <Users className="text-purple-600" size={16} />
              <span className="text-xs text-purple-600 font-semibold">LEADS</span>
            </div>
            <div className="text-lg font-bold text-gray-900 mt-1">342</div>
            <div className="text-xs text-gray-500">New this month</div>
          </div>

          <div className="bg-orange-50 rounded-xl p-3">
            <div className="flex items-center justify-between">
              <BarChart3 className="text-orange-600" size={16} />
              <span className="text-xs text-orange-600 font-semibold">DEALS</span>
            </div>
            <div className="text-lg font-bold text-gray-900 mt-1">78</div>
            <div className="text-xs text-gray-500">Closed won</div>
          </div>

          <div className="bg-pink-50 rounded-xl p-3">
            <div className="flex items-center justify-between">
              <Activity className="text-pink-600" size={16} />
              <span className="text-xs text-pink-600 font-semibold">PIPELINE</span>
            </div>
            <div className="text-lg font-bold text-gray-900 mt-1">$890K</div>
            <div className="text-xs text-gray-500">Total value</div>
          </div>
        </div>
      </div>
    </div>
  );

  // HR Dashboard Component
  const HRDashboard = () => (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-96">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">HR Analytics</h3>
          <p className="text-sm text-gray-500">Workforce Overview</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-orange-600">247</div>
          <div className="text-xs text-gray-500">Total Employees</div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 h-64">
        {/* Employee Distribution */}
        <div className="col-span-2 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Department Split</h4>
          
          {[
            { dept: 'Engineering', count: 89, color: 'bg-blue-500', width: '90%' },
            { dept: 'Sales', count: 45, color: 'bg-green-500', width: '45%' },
            { dept: 'Marketing', count: 28, color: 'bg-purple-500', width: '28%' },
            { dept: 'HR', count: 15, color: 'bg-orange-500', width: '15%' }
          ].map((item, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">{item.dept}</span>
                <span className="text-xs font-semibold text-gray-900">{item.count}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                <motion.div
                  className={`${item.color} h-1.5 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: item.width }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Satisfaction Gauge */}
        <div className="col-span-2 bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center">
          <div className="relative w-24 h-12 mb-2">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path d="M10,40 A 30,30 0 0,1 90,40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
              <motion.path
                d="M10,40 A 30,30 0 0,1 90,40"
                stroke="#f97316"
                strokeWidth="8"
                fill="none"
                strokeDasharray="94"
                initial={{ strokeDashoffset: 94 }}
                animate={{ strokeDashoffset: 94 - (94 * 0.85) }}
                transition={{ duration: 2 }}
              />
              <text x="50" y="45" textAnchor="middle" className="text-xs font-bold fill-gray-700">85%</text>
            </svg>
          </div>
          <div className="text-xs text-center">
            <div className="font-semibold text-gray-700">Satisfaction</div>
            <div className="text-gray-500">Score</div>
          </div>
        </div>

        {/* Metrics */}
        <div className="col-span-2 space-y-3">
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-green-600">5.2%</div>
            <div className="text-xs text-gray-500">Turnover Rate</div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-blue-600">12</div>
            <div className="text-xs text-gray-500">New Hires</div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-purple-600">94%</div>
            <div className="text-xs text-gray-500">Attendance</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Operations Dashboard Component
  const OperationsDashboard = () => (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-96">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Operations Dashboard</h3>
          <p className="text-sm text-gray-500">Real-time Monitoring</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-500">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 h-64">
        {/* System Health */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">System Health</h4>
          
          {[
            { system: 'API', status: 99.8, color: 'text-green-600', bg: 'bg-green-500' },
            { system: 'DB', status: 97.2, color: 'text-yellow-600', bg: 'bg-yellow-500' },
            { system: 'Cache', status: 99.9, color: 'text-green-600', bg: 'bg-green-500' }
          ].map((item, index) => (
            <div key={index} className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 ${item.bg} rounded-full`}></div>
                <span className="text-xs text-gray-600">{item.system}</span>
              </div>
              <span className={`text-xs font-semibold ${item.color}`}>{item.status}%</span>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="col-span-2 bg-gray-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Performance Metrics</h4>
          <div className="grid grid-cols-2 gap-4 h-32">
            
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">1.2s</div>
                <div className="text-xs text-gray-500">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">847</div>
                <div className="text-xs text-gray-500">Active Users</div>
              </div>
            </div>

            <div className="relative">
              <svg viewBox="0 0 100 80" className="w-full h-full">
                <defs>
                  <linearGradient id="opsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
                
                <motion.path
                  d="M5,60 L20,45 L35,50 L50,30 L65,35 L80,20 L95,25"
                  stroke="url(#opsGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />

                {[5, 20, 35, 50, 65, 80, 95].map((x, i) => {
                  const y = [60, 45, 50, 30, 35, 20, 25][i];
                  return (
                    <motion.circle
                      key={i}
                      cx={x} cy={y} r="2"
                      fill="#ec4899"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-2">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2">
            <div className="text-xs font-semibold text-yellow-700">Warning</div>
            <div className="text-xs text-yellow-600">High CPU usage</div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-2">
            <div className="text-xs font-semibold text-green-700">Success</div>
            <div className="text-xs text-green-600">Backup completed</div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
            <div className="text-xs font-semibold text-blue-700">Info</div>
            <div className="text-xs text-blue-600">Update available</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentDashboard = () => {
    switch (currentSlide) {
      case 0: return <FinancialDashboard />;
      case 1: return <MarketingDashboard />;
      case 2: return <SalesDashboard />;
      case 3: return <HRDashboard />;
      case 4: return <OperationsDashboard />;
      default: return <FinancialDashboard />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-turquoise/10 to-blue-500/10 text-primary-turquoise px-6 py-3 rounded-full text-sm font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <PieChart size={18} />
              {currentLang === 'en' ? 'Dashboard Showcase' : 'Vitrine de Tableaux de Bord'}
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
              {currentLang === 'en' ? 'Clean &' : 'Tableaux'}{' '}
              <span className="bg-gradient-to-r from-primary-turquoise to-blue-500 bg-clip-text text-transparent">
                {currentLang === 'en' ? 'Designed Dashboards' : 'Épurés & Designés'}
              </span>
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {currentLang === 'en'
                ? 'Discover our expertly crafted dashboard examples that transform complex data into clear, actionable insights with beautiful, clean design.'
                : 'Découvrez nos exemples de tableaux de bord expertement conçus qui transforment des données complexes en insights clairs et exploitables avec un design magnifique et épuré.'
              }
            </p>
          </div>
        </ScrollReveal>

        {/* Dashboard Carousel */}
        <div className="relative">
          {/* Main Dashboard Display */}
          <div className="relative h-96 mb-8 overflow-hidden">
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
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-full max-w-4xl mx-auto">
                  {renderCurrentDashboard()}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mb-8">
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center text-primary-dark hover:bg-primary-turquoise hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Auto-play Toggle */}
            <motion.button
              onClick={toggleAutoPlay}
              className={`w-12 h-12 rounded-full shadow-lg border border-neutral-200 flex items-center justify-center transition-all duration-300 ${
                isAutoPlaying ? 'bg-primary-turquoise text-white' : 'bg-white text-primary-dark hover:bg-primary-turquoise hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </motion.button>

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

          {/* Dashboard Thumbnails/Indicators */}
          <div className="flex justify-center gap-4 flex-wrap">
            {dashboards.map((dashboard, index) => (
              <button
                key={dashboard.id}
                onClick={() => goToSlide(index)}
                className={`group px-6 py-3 rounded-2xl transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${dashboard.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
                }`}
              >
                <div className="text-sm font-semibold">{dashboard.category}</div>
                <div className="text-xs opacity-80">{dashboard.title}</div>
              </button>
            ))}
          </div>

          {/* Current Dashboard Info */}
          <div className="text-center mt-8">
            <motion.h3 
              key={currentSlide}
              className="text-2xl font-bold text-primary-dark mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {dashboards[currentSlide].title}
            </motion.h3>
            <p className="text-sm text-neutral-500">
              {currentSlide + 1} / {dashboards.length} • {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;