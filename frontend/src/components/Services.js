import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Plus, Users, ArrowRight, Clock, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const Services = () => {
  const { t } = useTranslation('home');
  const { currentLang } = useLanguage();
  const services = [
    {
      icon: RefreshCw,
      title: t('services.service1.title'),
      subtitle: currentLang === 'en' ? 'Existing reports enhancement' : 'Revalorisation de rapports existants',
      description: t('services.service1.description'),
      process: currentLang === 'en' 
        ? ['Comprehensive UX/UI audit', 'Figma design', 'Power BI development', 'Team training']
        : ['Audit UX/UI approfondi', 'Conception sur Figma', 'Développement Power BI', 'Formation équipe'],
      duration: currentLang === 'en' ? '4-8 weeks' : '4-8 semaines',
      price: t('services.service1.price'),
      image: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      color: 'from-blue-500 to-primary-dark'
    },
    {
      icon: Plus,
      title: t('services.service2.title'),
      subtitle: currentLang === 'en' ? 'From modeling to visualization' : 'De la modélisation à la visualisation',
      description: t('services.service2.description'),
      process: currentLang === 'en'
        ? ['Business scoping & KPIs', 'Data architecture', 'Complete UX design', 'Deployment & monitoring']
        : ['Cadrage métier & KPIs', 'Architecture de données', 'Design UX complet', 'Déploiement & monitoring'],
      duration: currentLang === 'en' ? '6-12 weeks' : '6-12 semaines',
      price: t('services.service2.price'),
      image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      color: 'from-primary-turquoise to-green-500'
    },
    {
      icon: Users,
      title: t('services.service3.title'),
      subtitle: currentLang === 'en' ? 'Internal teams coaching' : 'Accompagnement d\'équipes internes',
      description: t('services.service3.description'),
      process: currentLang === 'en'
        ? ['Practice audit', 'Team training', 'Guided co-design', 'Guidelines & documentation']
        : ['Audit des pratiques', 'Formation équipe', 'Co-design guidé', 'Guidelines & documentation'],
      duration: currentLang === 'en' ? '2-4 weeks' : '2-4 semaines',
      price: t('services.service3.price'),
      image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-primary-dark mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Services Cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-dark mb-2">
                          {service.title}
                        </h3>
                        <p className="text-primary-turquoise font-semibold">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Process Steps */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-primary-dark mb-4 flex items-center gap-2">
                        <Target size={18} className="text-primary-turquoise" />
                        {currentLang === 'en' ? 'Our process' : 'Notre processus'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary-turquoise rounded-full flex-shrink-0" />
                            <span className="text-neutral-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Duration */}
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center gap-2 text-neutral-600">
                        <Clock size={16} className="text-primary-turquoise" />
                        <span className="text-sm font-medium">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield size={16} className="text-primary-turquoise" />
                        <span className="text-sm font-bold text-primary-dark">{service.price}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link 
                      to="/services" 
                      className="group/btn inline-flex items-center gap-2 bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
                    >
                      Découvrir ce service
                      <ArrowRight 
                        size={16} 
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      />
                    </Link>
                  </div>

                  {/* Image Side */}
                  <div className="relative lg:h-full">
                    <div className="h-64 lg:h-full relative overflow-hidden lg:rounded-r-3xl">
                      <img 
                        src={service.image} 
                        alt={`Illustration ${service.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-turquoise/20 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={0.8}>
          <div className="mt-16 text-center bg-gradient-to-r from-primary-dark to-blue-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pas sûr de quel service choisir ?
            </h3>
            <p className="text-neutral-300 mb-8 text-lg">
              Réservez un audit gratuit de 30 minutes pour identifier la meilleure approche pour vos besoins.
            </p>
            <motion.button 
              className="inline-flex items-center gap-3 bg-primary-turquoise text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.location.href = '/services'}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(26, 188, 156, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Clock size={24} />
              Planifier un audit gratuit
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;