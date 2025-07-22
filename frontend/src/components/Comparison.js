import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, TrendingUp, Users, Navigation, Palette, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import BeforeAfterSlider from './BeforeAfterSlider';

const Comparison = () => {
  const { t } = useTranslation('home');
  const { currentLang } = useLanguage();

  const beforeItems = [
    { icon: X, text: currentLang === 'en' ? 'Unreadable tables' : 'Tableaux illisibles', color: 'text-red-500' },
    { icon: X, text: currentLang === 'en' ? 'Too much info per page' : 'Trop d\'infos par page', color: 'text-red-500' },
    { icon: X, text: currentLang === 'en' ? 'Confusing navigation' : 'Navigation confuse', color: 'text-red-500' },
    { icon: X, text: currentLang === 'en' ? 'Aggressive colors' : 'Couleurs agressives', color: 'text-red-500' },
    { icon: X, text: currentLang === 'en' ? 'Low adoption' : 'Faible adoption', color: 'text-red-500' },
  ];

  const afterItems = [
    { icon: Check, text: currentLang === 'en' ? 'Clear visualization' : 'Visualisation claire', color: 'text-green-500' },
    { icon: Check, text: currentLang === 'en' ? 'Visual hierarchy' : 'Hiérarchisation visuelle', color: 'text-green-500' },
    { icon: Check, text: currentLang === 'en' ? 'Smooth UX' : 'UX fluide', color: 'text-green-500' },
    { icon: Check, text: currentLang === 'en' ? 'Cohesive palette' : 'Palette cohérente', color: 'text-green-500' },
    { icon: Check, text: currentLang === 'en' ? 'Enhanced engagement' : 'Engagement renforcé', color: 'text-green-500' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-primary-dark mb-6">
              {t('comparison.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t('comparison.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Before/After Slider */}
        <ScrollReveal className="mb-12">
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
            afterImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
            beforeAlt="Rapport Excel complexe et surchargé"
            afterAlt="Dashboard Power BI moderne et intuitif"
          />
        </ScrollReveal>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Column */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                  <X className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-red-700">{t('comparison.before')}</h3>
              </div>
              <ul className="space-y-3">
                {beforeItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className={item.color} size={16} />
                    <span className="font-medium text-sm">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* After Column */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <Check className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-green-700">{t('comparison.after')}</h3>
              </div>
              <ul className="space-y-3">
                {afterItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className={item.color} size={16} />
                    <span className="font-medium text-sm">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Impact Metrics */}
        <ScrollReveal delay={0.6}>
          <div className="mt-20 bg-gradient-to-r from-primary-dark to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-8">Impact mesurable de nos refontes</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <TrendingUp className="mx-auto text-primary-turquoise mb-4" size={32} />
                <div className="text-3xl font-bold text-primary-turquoise">+40%</div>
                <div className="text-neutral-300">Utilisation quotidienne</div>
              </div>
              <div className="space-y-2">
                <Users className="mx-auto text-primary-turquoise mb-4" size={32} />
                <div className="text-3xl font-bold text-primary-turquoise">-65%</div>
                <div className="text-neutral-300">Temps de formation</div>
              </div>
              <div className="space-y-2">
                <Navigation className="mx-auto text-primary-turquoise mb-4" size={32} />
                <div className="text-3xl font-bold text-primary-turquoise">+85%</div>
                <div className="text-neutral-300">Facilité navigation</div>
              </div>
              <div className="space-y-2">
                <Heart className="mx-auto text-primary-turquoise mb-4" size={32} />
                <div className="text-3xl font-bold text-primary-turquoise">9.2/10</div>
                <div className="text-neutral-300">Satisfaction utilisateur</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Comparison;