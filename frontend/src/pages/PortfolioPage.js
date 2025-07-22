import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, DollarSign, TrendingUp, Building, ShoppingCart, Truck, Heart, Filter, Eye, ExternalLink, Clock, Target, Award, CheckCircle, X, Shield } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CalendlyModal from '../components/CalendlyModal';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'Tous les projets', count: 8 },
    { id: 'rh', name: 'Ressources Humaines', count: 2 },
    { id: 'finance', name: 'Finance', count: 2 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'logistique', name: 'Logistique', count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Dashboard RH 360°',
      category: 'rh',
      categoryLabel: 'RESSOURCES HUMAINES',
      client: 'TechCorp France',
      description: 'Refonte complète du reporting RH avec focus sur l\'engagement et la performance des équipes.',
      image: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      imageDetail: 'https://images.unsplash.com/photo-1662460149857-2759c9b2c6f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      duration: '6 semaines',
      type: 'Refonte UX',
      impact: {
        adoption: '+75%',
        efficiency: '+45%',
        satisfaction: '9.1/10'
      },
      challenge: 'L\'équipe RH de TechCorp utilisait des tableaux Excel complexes répartis sur 12 fichiers différents. Aucune vision temps réel des KPIs RH, processus de reporting manuel chronophage, et difficulté à identifier les tendances d\'engagement des employés.',
      solution: 'Création d\'un dashboard unifié intégrant toutes les sources RH avec drill-down par département, alertes automatiques sur les métriques critiques, interface mobile-first pour les managers terrain, et système de notifications proactives.',
      results: [
        '300+ managers utilisent quotidiennement le dashboard',
        'Réduction de 60% du temps de reporting mensuel',
        'Détection proactive des risques de turnover',
        'Amélioration de 25% de la satisfaction collaborateurs'
      ],
      technologies: ['Power BI', 'Azure AD', 'Power Automate', 'SharePoint'],
      testimonial: {
        quote: "Ce dashboard a révolutionné notre approche RH. Nous anticipons maintenant les problèmes au lieu de les subir.",
        author: "Marie Dubois, Directrice RH"
      }
    },
    {
      id: 2,
      title: 'Reporting Financier Exécutif',
      category: 'finance',
      categoryLabel: 'FINANCE',
      client: 'FinanceGroup',
      description: 'Architecture scalable pour le pilotage financier avec alertes prédictives et analyse de variance.',
      image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      imageDetail: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      duration: '8 semaines',
      type: 'Création complète',
      impact: {
        adoption: '+90%',
        efficiency: '+65%',
        satisfaction: '9.4/10'
      },
      challenge: 'Processus de clôture mensuelle de 15 jours, reports statiques sans granularité, pas d\'analyse prédictive, et difficulté à identifier les écarts budgétaires significatifs en temps réel.',
      solution: 'Dashboards temps réel avec forecasting IA, segmentation automatique par BU/région, alertes métier configurables, et interface exécutive avec drill-down illimité pour l\'analyse détaillée.',
      results: [
        'Division du temps de clôture par 3 (5 jours)',
        'Détection proactive des dérives budgétaires',
        'Précision forecasting améliorée de 30%',
        'Économies identifiées : 500k€ annuels'
      ],
      technologies: ['Power BI Premium', 'Azure Analysis Services', 'Power Automate', 'SAP Connector'],
      testimonial: {
        quote: "La qualité de nos analyses financières a fait un bond quantique. Nos investors sont impressionnés.",
        author: "Thomas Martin, CFO"
      }
    },
    {
      id: 3,
      title: 'Analytics Marketing 360°',
      category: 'marketing',
      categoryLabel: 'MARKETING',
      client: 'RetailPro',
      description: 'Mesure ROI campagnes et customer journey avec attribution multi-touch et cohort analysis.',
      image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      imageDetail: 'https://images.unsplash.com/photo-1662460149539-5d37b87e2f92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      duration: '10 semaines',
      type: 'Refonte + Formation',
      impact: {
        adoption: '+85%',
        efficiency: '+55%',
        satisfaction: '8.9/10'
      },
      challenge: 'Données marketing silotées (Google, Facebook, email, CRM), attribution complexe entre canaux, ROI campaigns flou, et impossible de tracker le customer journey complet.',
      solution: 'Vue 360° customer journey, modèle d\'attribution personnalisé, automated insights avec ML, tableau de bord temps réel des performances campaigns, et segmentation dynamique des audiences.',
      results: [
        '+25% ROI campaigns grâce à l\'optimisation data-driven',
        'Réduction 40% coût d\'acquisition client',
        'Customer lifetime value +30%',
        'Attribution précise sur 15 touchpoints'
      ],
      technologies: ['Power BI', 'Google Analytics', 'Facebook API', 'Salesforce'],
      testimonial: {
        quote: "Enfin une vision claire de nos investissements marketing. Chaque euro est maintenant optimisé.",
        author: "Sophie Blanc, CMO"
      }
    },
    {
      id: 4,
      title: 'Supply Chain Intelligence',
      category: 'logistique',
      categoryLabel: 'LOGISTIQUE',
      client: 'LogisticPro',
      description: 'Optimisation supply chain avec tracking temps réel et analyse prédictive des stocks.',
      image: 'https://images.unsplash.com/photo-1662460149857-2759c9b2c6f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      imageDetail: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      icon: Truck,
      color: 'from-orange-500 to-red-600',
      duration: '12 semaines',
      type: 'Transformation complète',
      impact: {
        adoption: '+80%',
        efficiency: '+70%',
        satisfaction: '9.2/10'
      },
      challenge: 'Ruptures stock fréquentes impactant les ventes, visibilité supply chain limitée, forecast demand approximatif basé sur l\'historique, et gestion reactive plutôt que prédictive.',
      solution: 'Monitoring temps réel des flux logistiques, ML pour prédiction de la demande, alertes automatisées multi-niveaux, optimisation des stocks par IA, et dashboard géolocalisé des entrepôts.',
      results: [
        '-40% ruptures de stock critiques',
        '+30% rotation des stocks',
        'Économies logistiques : 200k€ annuelles',
        'Satisfaction client +15% sur la disponibilité'
      ],
      technologies: ['Power BI Premium', 'Azure ML', 'IoT Hub', 'SAP ERP'],
      testimonial: {
        quote: "Notre supply chain est désormais prédictive. Nous anticipons les besoins au lieu de les subir.",
        author: "Laurent Durand, Directeur Logistique"
      }
    },
    // Ajoutons d'autres projets pour enrichir le portfolio
    {
      id: 5,
      title: 'Dashboard E-commerce Performance',
      category: 'marketing',
      categoryLabel: 'E-COMMERCE',
      client: 'ShopOnline',
      description: 'Analyse complète des performances e-commerce avec customer analytics et optimisation conversions.',
      image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      imageDetail: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      icon: ShoppingCart,
      color: 'from-indigo-500 to-purple-600',
      duration: '5 semaines',
      type: 'Analytics avancés',
      impact: {
        adoption: '+95%',
        efficiency: '+60%',
        satisfaction: '9.3/10'
      },
      challenge: 'Taux de conversion stagnant, analyse parcours client limitée, segmentation basique, pas d\'insights sur l\'abandon de panier et optimisation UX data-driven impossible.',
      solution: 'Analytics comportementaux avancés, funnel analysis détaillé, heatmaps digitales, A/B testing framework, personnalisation dynamique, et recommandation engine basé sur l\'IA.',
      results: [
        'Taux de conversion +22%',
        'Abandon panier réduit de 35%',
        'Panier moyen +18%',
        'Customer satisfaction score 9.1/10'
      ],
      technologies: ['Power BI', 'Google Analytics 4', 'Hotjar', 'Shopify Plus'],
      testimonial: {
        quote: "Nos ventes en ligne ont explosé grâce aux insights comportementaux. ROI exceptionnel.",
        author: "Julien Moreau, E-commerce Director"
      }
    },
    {
      id: 6,
      title: 'Talent Analytics Platform',
      category: 'rh',
      categoryLabel: 'RESSOURCES HUMAINES',
      client: 'HRTech Solutions',
      description: 'Plateforme complète d\'analytics RH avec prédiction turnover et optimisation recrutement.',
      image: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      imageDetail: 'https://images.unsplash.com/photo-1662460149857-2759c9b2c6f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
      duration: '9 semaines',
      type: 'IA + Analytics',
      impact: {
        adoption: '+88%',
        efficiency: '+52%',
        satisfaction: '9.0/10'
      },
      challenge: 'Turnover élevé non anticipé, processus de recrutement long et coûteux, évaluation performance subjective, et manque d\'insights sur l\'engagement et la progression des talents.',
      solution: 'Modèles prédictifs de turnover avec ML, analytics recrutement end-to-end, scoring automatisé des performances, succession planning data-driven, et dashboard bien-être collaborateurs.',
      results: [
        'Prédiction turnover : 85% précision',
        'Temps de recrutement -45%',
        'Coût de recrutement -30%',
        'Retention rate +20% sur les hauts potentiels'
      ],
      technologies: ['Power BI Premium', 'Azure ML', 'LinkedIn API', 'Workday'],
      testimonial: {
        quote: "Nous sommes passés d\'une RH reactive à une RH prédictive. Game changer total.",
        author: "Nathalie Lambert, VP People"
      }
    },
    {
      id: 7,
      title: 'Financial Risk Dashboard',
      category: 'finance',
      categoryLabel: 'FINANCE',
      client: 'BankCorp',
      description: 'Monitoring risques financiers temps réel avec stress testing et compliance automation.',
      image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      imageDetail: 'https://images.unsplash.com/photo-1662460149539-5d37b87e2f92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      duration: '14 semaines',
      type: 'Compliance + Risk',
      impact: {
        adoption: '+92%',
        efficiency: '+75%',
        satisfaction: '9.5/10'
      },
      challenge: 'Monitoring risques manuel et tardif, compliance reports chronophages, stress testing limité, exposition risques mal quantifiée, et alertes non automatisées.',
      solution: 'Monitoring risques temps réel multi-assets, stress testing automatisé avec scénarios Monte Carlo, compliance dashboard réglementaire, VaR calculation dynamique, et early warning system.',
      results: [
        'Détection risques en temps réel (vs J+5)',
        'Compliance reporting automatisé à 95%',
        'Stress testing quotidien vs mensuel',
        'Réduction 60% du temps de reporting réglementaire'
      ],
      technologies: ['Power BI Premium', 'Azure ML', 'R Integration', 'Bloomberg API'],
      testimonial: {
        quote: "Notre gestion des risques est maintenant proactive et conforme. Régulateurs très satisfaits.",
        author: "Pierre Dubois, Chief Risk Officer"
      }
    },
    {
      id: 8,
      title: 'Operational Excellence Dashboard',
      category: 'logistique',
      categoryLabel: 'OPÉRATIONS',
      client: 'ManufacturingCorp',
      description: 'Excellence opérationnelle avec KPIs production, qualité et maintenance prédictive.',
      image: 'https://images.unsplash.com/photo-1662460149857-2759c9b2c6f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      imageDetail: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      icon: Building,
      color: 'from-teal-500 to-cyan-600',
      duration: '11 semaines',
      type: 'IoT + Analytics',
      impact: {
        adoption: '+87%',
        efficiency: '+68%',
        satisfaction: '9.1/10'
      },
      challenge: 'OEE (Overall Equipment Effectiveness) sous-optimal, maintenance curative coûteuse, qualité production variable, et manque de visibilité temps réel sur les performances machines.',
      solution: 'Dashboard OEE temps réel avec IoT sensors, maintenance prédictive basée sur l\'IA, contrôle qualité automatisé, alertes proactives, et optimisation planning production.',
      results: [
        'OEE amélioré de 15% (de 65% à 80%)',
        'Coûts de maintenance -35%',
        'Défauts qualité réduits de 50%',
        'Productivité +25% sur les lignes critiques'
      ],
      technologies: ['Power BI Premium', 'Azure IoT', 'Machine Learning', 'SAP MES'],
      testimonial: {
        quote: "Notre usine 4.0 est maintenant une réalité. L\'efficacité opérationnelle a bondi.",
        author: "Michel Durand, Directeur Production"
      }
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-hero font-bold mb-6 leading-tight">
                Notre{' '}
                <span className="text-primary-turquoise">Portfolio</span>
              </h1>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                Découvrez comment nous avons transformé les dashboards de nos clients en véritables outils de pilotage stratégique. 
                Résultats mesurables, ROI démontré.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">150+</div>
                  <div className="text-neutral-400">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">98%</div>
                  <div className="text-neutral-400">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">€2.5M</div>
                  <div className="text-neutral-400">Économies générées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">+65%</div>
                  <div className="text-neutral-400">Gain efficacité moyen</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="flex items-center justify-center mb-8">
              <Filter className="text-primary-turquoise mr-3" size={24} />
              <h2 className="text-2xl font-bold text-primary-dark">Filtrer par domaine</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-turquoise text-white shadow-lg'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500 cursor-pointer hover-lift"
                  onClick={() => setSelectedProject(project)}
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
                      {project.categoryLabel}
                    </div>

                    {/* View Details Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye size={16} className="text-primary-dark" />
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute bottom-4 left-4 bg-primary-turquoise text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.type}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                        <project.icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-turquoise transition-colors duration-300 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-neutral-600 font-medium">{project.client}</p>
                      </div>
                    </div>

                    <p className="text-neutral-600 mb-4 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between mb-4 text-sm text-neutral-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target size={14} />
                        <span>{project.type}</span>
                      </div>
                    </div>

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
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={selectedProject.imageDetail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-40`} />
                
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}>
                        <selectedProject.icon className="text-white" size={32} />
                      </div>
                      <div>
                        <div className="text-primary-turquoise font-semibold mb-1">{selectedProject.categoryLabel}</div>
                        <h2 className="text-4xl font-bold">{selectedProject.title}</h2>
                        <p className="text-neutral-200 font-medium">{selectedProject.client}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    
                    {/* Challenge */}
                    <div>
                      <h3 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                        <Target className="text-primary-turquoise" size={24} />
                        Le défi
                      </h3>
                      <p className="text-neutral-700 leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                        <Award className="text-primary-turquoise" size={24} />
                        Notre solution
                      </h3>
                      <p className="text-neutral-700 leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                        <TrendingUp className="text-primary-turquoise" size={24} />
                        Résultats obtenus
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                            <span className="text-neutral-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-neutral-50 rounded-2xl p-6">
                      <p className="text-neutral-700 italic text-lg mb-4 leading-relaxed">
                        "{selectedProject.testimonial.quote}"
                      </p>
                      <div className="font-semibold text-primary-dark">
                        — {selectedProject.testimonial.author}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    
                    {/* Project Info */}
                    <div className="bg-neutral-50 rounded-2xl p-6">
                      <h4 className="font-bold text-primary-dark mb-4">Informations projet</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Durée:</span>
                          <span className="font-semibold">{selectedProject.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Type:</span>
                          <span className="font-semibold">{selectedProject.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Client:</span>
                          <span className="font-semibold">{selectedProject.client}</span>
                        </div>
                      </div>
                    </div>

                    {/* Impact Metrics Large */}
                    <div className="bg-gradient-to-br from-primary-turquoise/10 to-green-500/10 rounded-2xl p-6">
                      <h4 className="font-bold text-primary-dark mb-4">Impact mesuré</h4>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary-turquoise">{selectedProject.impact.adoption}</div>
                          <div className="text-neutral-600 text-sm">Taux d'adoption</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary-turquoise">{selectedProject.impact.efficiency}</div>
                          <div className="text-neutral-600 text-sm">Gain efficacité</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary-turquoise">{selectedProject.impact.satisfaction}</div>
                          <div className="text-neutral-600 text-sm">Satisfaction</div>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="bg-neutral-50 rounded-2xl p-6">
                      <h4 className="font-bold text-primary-dark mb-4">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-primary-turquoise/10 text-primary-turquoise px-3 py-1 rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.button
                      className="w-full bg-primary-turquoise text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
                      onClick={() => setIsCalendlyOpen(true)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={20} />
                      Projet similaire ?
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">
              Votre projet sera-t-il le prochain success story ?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Chaque projet est unique. Planifions ensemble la transformation de vos dashboards Power BI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-primary-turquoise text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300"
                onClick={() => setIsCalendlyOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuter de mon projet
              </motion.button>
              <motion.button
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsCalendlyOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Télécharger le guide
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;