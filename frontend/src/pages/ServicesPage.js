import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Plus, Users, Clock, Target, Shield, CheckCircle, Star, ArrowRight, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { useCalendly } from '../contexts/CalendlyContext';
import ScrollReveal from '../components/ScrollReveal';

const ServicesPage = () => {
  const { t } = useTranslation(['services', 'common']);
  const { openCalendly } = useCalendly();
  const { currentLang } = useLanguage();

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231ABC9C' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            className="w-full h-full"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-hero font-bold mb-6 leading-tight">
                {currentLang === 'en' ? 'Our Services' : 'Nos Services'}
              </h1>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                {currentLang === 'en' 
                  ? 'Tailored solutions to transform your data into competitive advantage'
                  : 'Des solutions sur mesure pour transformer vos données en avantage concurrentiel'
                }
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <ScrollReveal delay={0.1}>
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <RefreshCw className="text-blue-600" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  {currentLang === 'en' 
                    ? 'UX redesign of your existing reports'
                    : 'Refonte UX de vos rapports existants'
                  }
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {currentLang === 'en'
                    ? 'User experience optimization of your existing Power BI reports for maximum adoption.'
                    : 'Optimisation de l\'expérience utilisateur de vos rapports Power BI existants pour une adoption maximale.'
                  }
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold text-primary-turquoise">
                    {currentLang === 'en' ? 'Starting from €3,500' : 'À partir de 3 500€'}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {currentLang === 'en' ? '2-4 weeks' : '2-4 semaines'}
                  </span>
                </div>

                <motion.button 
                  onClick={openCalendly}
                  className="w-full bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentLang === 'en' ? 'Discover this service' : 'Découvrir ce service'}
                </motion.button>
              </motion.div>
            </ScrollReveal>

            {/* Service 2 */}
            <ScrollReveal delay={0.2}>
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-primary-turquoise/10 rounded-xl flex items-center justify-center mb-6">
                  <Plus className="text-primary-turquoise" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  {currentLang === 'en'
                    ? 'Complete dashboard creation'
                    : 'Création complète de tableaux de bord'
                  }
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Custom design and development of Power BI dashboards from A to Z.'
                    : 'Conception et développement de tableaux de bord Power BI sur mesure, de A à Z.'
                  }
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold text-primary-turquoise">
                    {currentLang === 'en' ? 'Starting from €7,500' : 'À partir de 7 500€'}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {currentLang === 'en' ? '4-8 weeks' : '4-8 semaines'}
                  </span>
                </div>

                <motion.button 
                  onClick={openCalendly}
                  className="w-full bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentLang === 'en' ? 'Discover this service' : 'Découvrir ce service'}
                </motion.button>
              </motion.div>
            </ScrollReveal>

            {/* Service 3 */}
            <ScrollReveal delay={0.3}>
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="text-purple-600" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  {currentLang === 'en'
                    ? 'UX coaching for internal teams'
                    : 'Coaching UX pour équipes internes'
                  }
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Training and support for your teams to create engaging reports.'
                    : 'Formation et accompagnement de vos équipes pour créer des rapports engageants.'
                  }
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold text-primary-turquoise">
                    {currentLang === 'en' ? 'Starting from €2,500' : 'À partir de 2 500€'}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {currentLang === 'en' ? '1-3 weeks' : '1-3 semaines'}
                  </span>
                </div>

                <motion.button 
                  onClick={openCalendly}
                  className="w-full bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentLang === 'en' ? 'Discover this service' : 'Découvrir ce service'}
                </motion.button>
              </motion.div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {currentLang === 'en'
                ? 'Ready to transform your Power BI reports?'
                : 'Prêt à transformer vos rapports Power BI ?'
              }
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {currentLang === 'en'
                ? "Let's discuss your project and find the solution that best fits your needs."
                : 'Discutons de votre projet et trouvons ensemble la solution la plus adaptée à vos besoins.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-primary-turquoise text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300"
                onClick={openCalendly}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentLang === 'en' ? 'Book a free audit' : 'Réserver un audit gratuit'}
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;