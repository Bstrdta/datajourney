import React from 'react';
import { motion } from 'framer-motion';
import { Palette, BarChart3, Brain, Code, Shield, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Pillars = () => {
  const pillars = [
    {
      icon: Palette,
      title: 'UX/UI Design',
      subtitle: 'Clarté, hiérarchie, esthétique',
      description: 'Nous transformons vos données complexes en visualisations intuitives et élégantes qui favorisent la prise de décision.',
      features: ['Design System cohérent', 'Hiérarchie visuelle claire', 'Palette de couleurs optimisée', 'Interface responsive'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Power BI Expert',
      subtitle: 'DAX, sécurité, performance',
      description: 'Maîtrise technique complète de Power BI : optimisation des requêtes, sécurité des données et architecture performante.',
      features: ['Optimisation DAX avancée', 'Sécurité Row Level', 'Architecture scalable', 'Performance monitoring'],
      color: 'from-primary-turquoise to-green-500'
    },
    {
      icon: Brain,
      title: 'Data Storytelling',
      subtitle: 'Données qui racontent une histoire',
      description: 'Nous structurons vos données pour créer des narratifs clairs qui guident naturellement vers l\'action.',
      features: ['Narrative data-driven', 'KPIs métier alignés', 'Call-to-action intégrés', 'Insights automatisés'],
      color: 'from-blue-500 to-primary-dark'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-primary-dark mb-6">
              Une approche unique, au croisement de la{' '}
              <span className="text-primary-turquoise">data et du design</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Notre expertise combine compétences techniques Power BI et vision UX pour créer des dashboards qui transforment vraiment votre activité.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={index} delay={index * 0.2} direction="up">
              <motion.div
                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500 hover-lift"
                whileHover={{ y: -8 }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-primary-turquoise font-semibold mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                        <div className="w-1.5 h-1.5 bg-primary-turquoise rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-turquoise/20 transition-colors duration-300`} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Expertise Section */}
        <ScrollReveal delay={0.6}>
          <div className="mt-20 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">
              Et aussi notre expertise technique
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                <Code className="text-primary-turquoise flex-shrink-0" size={24} />
                <span className="font-medium text-primary-dark">Power Query</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                <Shield className="text-primary-turquoise flex-shrink-0" size={24} />
                <span className="font-medium text-primary-dark">Azure AD</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                <Zap className="text-primary-turquoise flex-shrink-0" size={24} />
                <span className="font-medium text-primary-dark">Gateway</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                <BarChart3 className="text-primary-turquoise flex-shrink-0" size={24} />
                <span className="font-medium text-primary-dark">Analysis Services</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                <Brain className="text-primary-turquoise flex-shrink-0" size={24} />
                <span className="font-medium text-primary-dark">AI Builder</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                <Palette className="text-primary-turquoise flex-shrink-0" size={24} />
                <span className="font-medium text-primary-dark">Custom Visuals</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pillars;