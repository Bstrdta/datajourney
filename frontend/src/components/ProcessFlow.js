import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Layers, Play, Share2, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const ProcessFlow = () => {
  const { t } = useTranslation('home');
  const { currentLang } = useLanguage();

  const processSteps = [
    {
      id: 1,
      icon: FileText,
      title: currentLang === 'en' ? 'Define Requirements' : 'Définition des besoins',
      description: currentLang === 'en' 
        ? 'We analyze your business needs and data objectives to create a comprehensive specification.'
        : 'Nous analysons vos besoins métier et objectifs data pour créer un cahier des charges complet.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      delay: 0.1
    },
    {
      id: 2,
      icon: Layers,
      title: currentLang === 'en' ? 'Create Mockups' : 'Création des maquettes',
      description: currentLang === 'en'
        ? 'Our designers craft intuitive wireframes and visual mockups using Figma for optimal UX.'
        : 'Nos designers créent des wireframes intuitifs et maquettes visuelles avec Figma pour une UX optimale.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      delay: 0.2
    },
    {
      id: 3,
      icon: Play,
      title: currentLang === 'en' ? 'Build Prototype' : 'Prototypage',
      description: currentLang === 'en'
        ? 'We develop interactive prototypes in Power BI, testing functionality and user experience.'
        : 'Nous développons des prototypes interactifs sous Power BI, testant fonctionnalités et expérience utilisateur.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      delay: 0.3
    },
    {
      id: 4,
      icon: Share2,
      title: currentLang === 'en' ? 'Deploy & Support' : 'Déploiement',
      description: currentLang === 'en'
        ? 'Final deployment with training, documentation, and ongoing support for maximum adoption.'
        : 'Déploiement final avec formation, documentation et accompagnement pour une adoption maximale.',
      color: 'from-primary-turquoise to-green-500',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-primary-turquoise',
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
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
              className="inline-flex items-center gap-2 bg-primary-turquoise/10 text-primary-turquoise px-4 py-2 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle size={16} />
              {currentLang === 'en' ? 'Our Proven Process' : 'Notre Processus Éprouvé'}
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              {currentLang === 'en' 
                ? 'Design Thinking Applied to' 
                : 'Design Thinking Appliqué au'
              }<br />
              <span className="bg-gradient-to-r from-primary-turquoise to-green-500 bg-clip-text text-transparent">
                Power BI
              </span>
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {currentLang === 'en'
                ? 'Our structured methodology ensures every Power BI project delivers exceptional user experience and maximum business impact.'
                : 'Notre méthodologie structurée garantit que chaque projet Power BI offre une expérience utilisateur exceptionnelle et un impact business maximal.'
              }
            </p>
          </div>
        </ScrollReveal>

        {/* Process Flow Visualization */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block">
            <svg className="absolute top-24 left-0 w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
              <motion.path
                d="M0,1 Q25,0 50,1 T100,1"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="33%" stopColor="#8B5CF6" />
                  <stop offset="66%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#1ABC9C" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.id} delay={step.delay}>
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-dark text-white rounded-full flex items-center justify-center text-sm font-bold z-10 group-hover:scale-110 transition-transform duration-300">
                    {step.id}
                  </div>

                  {/* Main Card */}
                  <div className={`${step.bgColor} rounded-2xl p-6 h-full border border-white shadow-lg group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                    
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white shadow-md group-hover:shadow-lg transition-all duration-300`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <step.icon className={`${step.iconColor} group-hover:scale-110 transition-transform duration-300`} size={28} />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-turquoise transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-neutral-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow for flow indication - only on desktop */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-20">
                        <motion.div
                          className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center border border-neutral-200"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.4, delay: step.delay + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <ArrowRight className="text-primary-turquoise" size={12} />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <motion.div
              className="inline-flex items-center gap-4 bg-gradient-to-r from-primary-dark to-blue-900 text-white px-8 py-4 rounded-2xl shadow-xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(10, 37, 64, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <CheckCircle className="text-primary-turquoise" size={24} />
              <div className="text-left">
                <div className="font-bold text-lg">
                  {currentLang === 'en' ? 'Ready to Transform Your Data?' : 'Prêt à Transformer Vos Données ?'}
                </div>
                <div className="text-neutral-300 text-sm">
                  {currentLang === 'en' ? 'Let\'s discuss your project' : 'Discutons de votre projet'}
                </div>
              </div>
              <ArrowRight className="text-primary-turquoise" size={20} />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessFlow;