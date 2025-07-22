import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Users, DollarSign, TrendingUp, Building, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const Portfolio = () => {
  const { t } = useTranslation('home');
  const { currentLang } = useLanguage();
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Dashboard RH 360°',
      category: 'RESSOURCES HUMAINES',
      description: 'Refonte complète du reporting RH avec focus sur l\'engagement et la performance des équipes.',
      image: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      impact: {
        adoption: '+75%',
        efficiency: '+45%',
        satisfaction: '9.1/10'
      },
      details: {
        challenge: 'Tableaux Excel complexes, données éparpillées, pas de vision temps réel des KPIs RH',
        solution: 'Dashboard unifié avec drill-down par département, alertes automatiques, mobile-first',
        results: '300+ managers utilisent quotidiennement le dashboard, réduction de 60% du temps de reporting'
      }
    },
    {
      id: 2,
      title: 'Reporting Financier',
      category: 'FINANCE',
      description: 'Architecture scalable pour le pilotage financier avec alertes prédictives et analyse de variance.',
      image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      impact: {
        adoption: '+90%',
        efficiency: '+65%',
        satisfaction: '9.4/10'
      },
      details: {
        challenge: 'Reports mensuels chronophages, manque de granularité, pas d\'analyse prédictive',
        solution: 'Dashboards temps réel avec forecasting IA, segmentation automatique, alertes métier',
        results: 'Division du temps de clôture par 3, détection proactive des dérives budgétaires'
      }
    },
    {
      id: 3,
      title: 'Analytics Marketing',
      category: 'MARKETING',
      description: 'Mesure ROI campagnes et customer journey avec attribution multi-touch et cohort analysis.',
      image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      impact: {
        adoption: '+85%',
        efficiency: '+55%',
        satisfaction: '8.9/10'
      },
      details: {
        challenge: 'Données marketing silotées, attribution complexe, ROI campaigns peu clair',
        solution: 'Vue 360° customer journey, attribution model personnalisé, automated insights',
        results: '+25% ROI campaigns grâce à l\'optimisation data-driven des budgets'
      }
    },
    {
      id: 4,
      title: 'Dashboard Logistique',
      category: 'LOGISTIQUE',
      description: 'Optimisation supply chain avec tracking temps réel et analyse prédictive des stocks.',
      image: 'https://images.unsplash.com/photo-1662460149857-2759c9b2c6f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      icon: Building,
      color: 'from-orange-500 to-red-600',
      impact: {
        adoption: '+80%',
        efficiency: '+70%',
        satisfaction: '9.2/10'
      },
      details: {
        challenge: 'Ruptures stock fréquentes, visibilité supply chain limitée, forecast approximatif',
        solution: 'Monitoring temps réel des flux, ML pour prédiction demande, alertes automatisées',
        results: '-40% ruptures de stock, +30% rotation des stocks, économies 200k€ annuelles'
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-primary-dark mb-6">
              {t('portfolio.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t('portfolio.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.div
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500 cursor-pointer hover-lift"
                onClick={() => setActiveProject(project)}
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>

                  {/* View Details Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye size={16} className="text-primary-dark" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                      <project.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-turquoise transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-turquoise">{project.impact.adoption}</div>
                      <div className="text-xs text-neutral-500">Adoption</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-turquoise">{project.impact.efficiency}</div>
                      <div className="text-xs text-neutral-500">Efficacité</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-turquoise">{project.impact.satisfaction}</div>
                      <div className="text-xs text-neutral-500">Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-turquoise/20 transition-colors duration-300" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={0.6}>
          <div className="text-center">
            <motion.button 
              className="inline-flex items-center gap-3 bg-primary-turquoise text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.location.href = '/portfolio'}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(26, 188, 156, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={24} />
              Voir tout le portfolio
            </motion.button>
          </div>
        </ScrollReveal>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="relative">
                    <img 
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-64 lg:h-full object-cover rounded-2xl"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${activeProject.color} opacity-10 rounded-2xl`} />
                  </div>

                  {/* Project Details */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeProject.color} flex items-center justify-center`}>
                        <activeProject.icon className="text-white" size={28} />
                      </div>
                      <div>
                        <div className="text-primary-turquoise font-semibold mb-1">{activeProject.category}</div>
                        <h3 className="text-3xl font-bold text-primary-dark">{activeProject.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-primary-dark mb-2">🎯 Défi</h4>
                        <p className="text-neutral-600">{activeProject.details.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-primary-dark mb-2">💡 Solution</h4>
                        <p className="text-neutral-600">{activeProject.details.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-primary-dark mb-2">🚀 Résultats</h4>
                        <p className="text-neutral-600">{activeProject.details.results}</p>
                      </div>
                    </div>

                    {/* Impact Metrics Large */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-neutral-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-turquoise">{activeProject.impact.adoption}</div>
                        <div className="text-neutral-600">Taux d'adoption</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-turquoise">{activeProject.impact.efficiency}</div>
                        <div className="text-neutral-600">Gain efficacité</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-turquoise">{activeProject.impact.satisfaction}</div>
                        <div className="text-neutral-600">Satisfaction</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveProject(null)}
                      className="mt-8 w-full bg-neutral-100 text-primary-dark px-6 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-colors duration-300"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;