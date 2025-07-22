import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Plus, Users, Clock, Target, Shield, CheckCircle, Star, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CalendlyModal from '../components/CalendlyModal';

const ServicesPage = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = React.useState(false);
  const services = [
    {
      id: 'refonte',
      icon: RefreshCw,
      title: 'Refonte UX de rapports Power BI',
      subtitle: 'Revalorisation de rapports existants',
      description: 'Transformez vos dashboards existants en outils de pilotage efficaces grâce à notre expertise UX/UI combinée à la maîtrise technique Power BI.',
      longDescription: 'Nos refontes UX ne sont pas de simples restylings. Nous analysons en profondeur l\'usage réel de vos rapports, identifions les points de friction, et reconstruisons l\'expérience utilisateur pour maximiser l\'adoption et l\'efficacité décisionnelle.',
      process: [
        { step: 'Audit UX/UI approfondi', detail: '2-3 jours d\'analyse utilisateurs, workflows et pain points' },
        { step: 'Conception sur Figma', detail: 'Prototypes interactifs haute-fidélité avec tests utilisateurs' },
        { step: 'Développement Power BI', detail: 'Implémentation technique optimisée (DAX, performance, sécurité)' },
        { step: 'Formation équipe', detail: 'Accompagnement change management et bonnes pratiques' }
      ],
      duration: '4-8 semaines',
      price: 'À partir de 5 000€',
      image: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      color: 'from-blue-500 to-primary-dark',
      benefits: [
        '+40% d\'utilisation quotidienne moyenne',
        '-60% du temps de formation nécessaire',
        '9.2/10 de satisfaction utilisateur',
        'ROI mesuré sous 3 mois'
      ],
      included: [
        'Audit complet existant',
        'Wireframes & prototypes Figma',
        'Refonte complète Power BI',
        'Guide de style & documentation',
        'Formation équipe (4h)',
        'Support 3 mois inclus'
      ],
      deliverables: [
        'Rapport d\'audit UX/UI (PDF)',
        'Prototype interactif Figma',
        'Rapport Power BI optimisé (PBIX)',
        'Documentation technique (DAX, modèle, sécurité)',
        'Kit de formation & bonnes pratiques',
        'Rapport de tests utilisateurs',
        'Suivi post-livraison (usage, ROI, adoption)'
      ]
    },
    {
      id: 'creation',
      icon: Plus,
      title: 'Création complète de dashboards',
      subtitle: 'De la stratégie data à la visualisation',
      description: 'Conception et développement de dashboards Power BI from scratch, alignés sur vos objectifs métier et optimisés pour l\'expérience utilisateur.',
      longDescription: 'Nous ne créons pas seulement des rapports, nous concevons des expériences data complètes. De la définition de votre stratégie de données à la mise en production, nous assurons une approche holistique qui garantit l\'adoption et la valeur métier.',
      process: [
        { step: 'Cadrage métier & KPIs', detail: 'Workshops stratégiques avec stakeholders et définition OKRs' },
        { step: 'Architecture de données', detail: 'Modélisation optimale, sources, transformations, sécurité' },
        { step: 'Design UX complet', detail: 'User journeys, wireframes, design system, prototypage' },
        { step: 'Déploiement & monitoring', detail: 'Mise en production, tests utilisateurs, plan de déploiement' }
      ],
      duration: '6-12 semaines',
      price: 'À partir de 8 000€',
      image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      color: 'from-primary-turquoise to-green-500',
      benefits: [
        'Time-to-insight divisé par 5',
        'Adoption > 85% dès le lancement',
        'Architecture scalable long-terme',
        'Réduction 70% temps de reporting'
      ],
      included: [
        'Cadrage métier complet',
        'Architecture données optimale',
        'Design system personnalisé',
        'Développement Power BI avancé',
        'Plan de déploiement',
        'Formation & documentation',
        'Support 6 mois inclus'
      ]
    },
    {
      id: 'coaching',
      icon: Users,
      title: 'Coaching UX & montée en compétences',
      subtitle: 'Autonomisez vos équipes internes',
      description: 'Accompagnement personnalisé de vos équipes pour maîtriser les bonnes pratiques UX Power BI et créer une culture data-driven.',
      longDescription: 'Le coaching le plus efficace est celui qui rend vos équipes autonomes. Nous transmettons notre expertise à travers un accompagnement pratique, du mentoring individuel et la co-création de vos propres guidelines UX.',
      process: [
        { step: 'Audit des pratiques', detail: 'Évaluation competences actuelles et identification des gaps' },
        { step: 'Formation sur-mesure', detail: 'Programme adapté aux besoins et niveau de chaque participant' },
        { step: 'Co-design guidé', detail: 'Accompagnement hands-on sur vos projets réels en cours' },
        { step: 'Guidelines & documentation', detail: 'Création de votre propre référentiel de bonnes pratiques' }
      ],
      duration: '2-4 semaines',
      price: 'À partir de 3 000€',
      image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Équipes 100% autonomes',
        'Qualité UX constante',
        'Réduction délais projets -50%',
        'Culture data renforcée'
      ],
      included: [
        'Assessment compétences',
        'Formation personnalisée',
        'Mentoring individuel',
        'Co-design projets réels',
        'Guidelines entreprise',
        'Ressources & templates',
        'Suivi 3 mois'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Data Journey a transformé notre approche de la Business Intelligence. Nos dashboards sont maintenant utilisés quotidiennement par 300+ managers.",
      author: "Marie Dubois",
      position: "Directrice Data",
      company: "TechCorp France",
      rating: 5
    },
    {
      quote: "L'accompagnement coaching nous a permis d'acquérir une véritable expertise UX en interne. ROI exceptionnel sur ce type d'investissement.",
      author: "Thomas Martin",
      position: "Head of BI",
      company: "FinanceGroup",
      rating: 5
    },
    {
      quote: "Délais respectés, qualité au rendez-vous. L'équipe Data Journey maîtrise parfaitement l'écosystème Power BI et l'approche UX.",
      author: "Sophie Blanc",
      position: "Responsable Analytics",
      company: "RetailPro",
      rating: 5
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-hero font-bold mb-6 leading-tight">
                Nos services{' '}
                <span className="text-primary-turquoise">Power BI & UX</span>
              </h1>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                Trois approches expertes pour transformer vos dashboards en véritables outils de pilotage. 
                Du quick win à la transformation complète.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">150+</div>
                  <div className="text-neutral-400">Dashboards transformés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">98%</div>
                  <div className="text-neutral-400">Satisfaction client</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">5 ans</div>
                  <div className="text-neutral-400">Expertise Power BI</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <ScrollReveal delay={index * 0.2}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                          <service.icon className="text-white" size={32} />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-primary-dark mb-2">
                            {service.title}
                          </h2>
                          <p className="text-primary-turquoise font-semibold">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <p className="text-neutral-700 mb-8 leading-relaxed">
                        {service.longDescription}
                      </p>

                      {/* Process */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-primary-dark mb-4 flex items-center gap-2">
                          <Target className="text-primary-turquoise" size={20} />
                          Notre processus
                        </h3>
                        <div className="space-y-4">
                          {service.process.map((step, idx) => (
                            <div key={idx} className="flex gap-4">
                              <div className="w-8 h-8 bg-primary-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-primary-turquoise font-bold text-sm">{idx + 1}</span>
                              </div>
                              <div>
                                <div className="font-semibold text-primary-dark">{step.step}</div>
                                <div className="text-neutral-600 text-sm">{step.detail}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-primary-dark mb-4">
                          Résultats mesurés
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                              <span className="text-neutral-700 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="flex flex-wrap gap-6 mb-8">
                        <div className="flex items-center gap-2">
                          <Clock className="text-primary-turquoise" size={18} />
                          <span className="font-semibold text-primary-dark">{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="text-primary-turquoise" size={18} />
                          <span className="font-bold text-primary-dark">{service.price}</span>
                        </div>
                      </div>

                      <motion.button
                        className="bg-primary-turquoise text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
                        onClick={() => setIsCalendlyOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Demander un devis
                        <ArrowRight size={20} />
                      </motion.button>
                    </div>

                    {/* Image */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-96 object-cover rounded-2xl shadow-premium"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-10 rounded-2xl`} />
                        
                        {/* Included Features Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                          <h4 className="font-semibold text-primary-dark mb-2">Inclus dans ce service:</h4>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            {service.included.slice(0, 4).map((item, idx) => (
                              <div key={idx} className="flex items-center gap-1">
                                <CheckCircle className="text-green-500" size={12} />
                                <span className="text-neutral-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <h2 className="text-display font-bold text-center text-primary-dark mb-16">
              Ce que disent nos clients
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={18} />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-primary-dark">{testimonial.author}</div>
                    <div className="text-sm text-neutral-600">{testimonial.position}</div>
                    <div className="text-sm text-primary-turquoise font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">
              Prêt à transformer vos dashboards ?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Planifions un audit gratuit de 30 minutes pour identifier le service le plus adapté à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-primary-turquoise text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300"
                onClick={() => setIsCalendlyOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Réserver un audit gratuit
              </motion.button>
              <motion.button
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsCalendlyOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Télécharger notre guide
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </div>
  );
};

export default ServicesPage;