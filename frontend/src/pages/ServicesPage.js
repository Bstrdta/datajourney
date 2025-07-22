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

  const services = [
    {
      id: 'refonte',
      icon: RefreshCw,
      title: currentLang === 'en' ? 'UX redesign of existing Power BI reports' : 'Refonte UX de rapports Power BI',
      subtitle: currentLang === 'en' ? 'Existing reports enhancement' : 'Revalorisation de rapports existants',
      description: currentLang === 'en' 
        ? 'Transform your existing dashboards into effective management tools thanks to our UX/UI expertise combined with Power BI technical mastery.'
        : 'Transformez vos dashboards existants en outils de pilotage efficaces grâce à notre expertise UX/UI combinée à la maîtrise technique Power BI.',
      longDescription: currentLang === 'en'
        ? 'Our UX redesigns are not simple restylings. We analyze in depth the real usage of your reports, identify friction points, and rebuild the user experience to maximize adoption and decision-making efficiency.'
        : 'Nos refontes UX ne sont pas de simples restylings. Nous analysons en profondeur l\'usage réel de vos rapports, identifions les points de friction, et reconstruisons l\'expérience utilisateur pour maximiser l\'adoption et l\'efficacité décisionnelle.',
      process: currentLang === 'en' ? [
        { step: 'In-depth UX/UI audit', detail: '2-3 days of user analysis, workflows and pain points' },
        { step: 'Figma design', detail: 'High-fidelity interactive prototypes with user testing' },
        { step: 'Power BI development', detail: 'Optimized technical implementation (DAX, performance, security)' },
        { step: 'Team training', detail: 'Change management support and best practices' }
      ] : [
        { step: 'Audit UX/UI approfondi', detail: '2-3 jours d\'analyse utilisateurs, workflows et pain points' },
        { step: 'Conception sur Figma', detail: 'Prototypes interactifs haute-fidélité avec tests utilisateurs' },
        { step: 'Développement Power BI', detail: 'Implémentation technique optimisée (DAX, performance, sécurité)' },
        { step: 'Formation équipe', detail: 'Accompagnement change management et bonnes pratiques' }
      ],
      duration: currentLang === 'en' ? '4-8 weeks' : '4-8 semaines',
      price: currentLang === 'en' ? 'Starting from €5,000' : 'À partir de 5 000€',
      image: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      color: 'from-blue-500 to-primary-dark',
      benefits: currentLang === 'en' ? [
        '+40% average daily usage',
        '-60% training time required',
        '9.2/10 user satisfaction',
        'ROI measured in under 3 months'
      ] : [
        '+40% d\'utilisation quotidienne moyenne',
        '-60% du temps de formation nécessaire',
        '9.2/10 de satisfaction utilisateur',
        'ROI mesuré sous 3 mois'
      ],
      included: currentLang === 'en' ? [
        'Complete existing audit',
        'Wireframes & Figma prototypes',
        'Complete Power BI redesign',
        'Style guide & documentation',
        'Team training (4h)',
        '3 months support included'
      ] : [
        'Audit complet existant',
        'Wireframes & prototypes Figma',
        'Refonte complète Power BI',
        'Guide de style & documentation',
        'Formation équipe (4h)',
        'Support 3 mois inclus'
      ],
      deliverables: currentLang === 'en' ? [
        'UX/UI audit report (PDF)',
        'Interactive Figma prototype',
        'Optimized Power BI report (PBIX)',
        'Technical documentation (DAX, model, security)',
        'Training kit & best practices',
        'User testing report',
        'Post-delivery follow-up (usage, ROI, adoption)'
      ] : [
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
      title: currentLang === 'en' ? 'Complete dashboard creation' : 'Création complète de dashboards',
      subtitle: currentLang === 'en' ? 'From data strategy to visualization' : 'De la stratégie data à la visualisation',
      description: currentLang === 'en'
        ? 'Design and development of Power BI dashboards from scratch, aligned with your business objectives and optimized for user experience.'
        : 'Conception et développement de dashboards Power BI from scratch, alignés sur vos objectifs métier et optimisés pour l\'expérience utilisateur.',
      longDescription: currentLang === 'en'
        ? 'We don\'t just create reports, we design complete data experiences. From defining your data strategy to production deployment, we ensure a holistic approach that guarantees adoption and business value.'
        : 'Nous ne créons pas seulement des rapports, nous concevons des expériences data complètes. De la définition de votre stratégie de données à la mise en production, nous assurons une approche holistique qui garantit l\'adoption et la valeur métier.',
      process: currentLang === 'en' ? [
        { step: 'Business scoping & KPIs', detail: 'Strategic workshops with stakeholders and OKRs definition' },
        { step: 'Data architecture', detail: 'Optimal modeling, sources, transformations, security' },
        { step: 'Complete UX design', detail: 'User journeys, wireframes, design system, prototyping' },
        { step: 'Deployment & monitoring', detail: 'Production deployment, user testing, deployment plan' }
      ] : [
        { step: 'Cadrage métier & KPIs', detail: 'Workshops stratégiques avec stakeholders et définition OKRs' },
        { step: 'Architecture de données', detail: 'Modélisation optimale, sources, transformations, sécurité' },
        { step: 'Design UX complet', detail: 'User journeys, wireframes, design system, prototypage' },
        { step: 'Déploiement & monitoring', detail: 'Mise en production, tests utilisateurs, plan de déploiement' }
      ],
      duration: currentLang === 'en' ? '6-12 weeks' : '6-12 semaines',
      price: currentLang === 'en' ? 'Starting from €8,000' : 'À partir de 8 000€',
      image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      color: 'from-primary-turquoise to-green-500',
      benefits: currentLang === 'en' ? [
        '+85% adoption vs internal development',
        '4x faster than non-specialized team',
        'Scalable architecture for growth',
        'Training and skill transfer included'
      ] : [
        '+85% d\'adoption vs développement interne',
        '4x plus rapide qu\'une équipe non spécialisée',
        'Architecture scalable pour la croissance',
        'Formation et transfert de compétences inclus'
      ],
      included: currentLang === 'en' ? [
        'Scoping workshop (2 days)',
        'Complete data architecture',
        'Design system & UX mockups',
        'Complete Power BI development',
        'Tests & user validation',
        'Training & documentation',
        '6 months support'
      ] : [
        'Workshop de cadrage (2 jours)',
        'Architecture complète des données',
        'Design system & maquettes UX',
        'Développement Power BI complet',
        'Tests & validation utilisateurs',
        'Formation & documentation',
        'Support 6 mois'
      ],
      deliverables: currentLang === 'en' ? [
        'Strategy and data roadmap (PDF)',
        'Complete technical architecture',
        'Design system and Figma mockups',
        'Power BI dashboards (PBIX)',
        'User & technical documentation',
        'Complete training kit',
        'Monitoring and evolution plan'
      ] : [
        'Stratégie et roadmap data (PDF)',
        'Architecture technique complète',
        'Design system et maquettes Figma',
        'Dashboards Power BI (PBIX)',
        'Documentation utilisateur & technique',
        'Kit de formation complet',
        'Plan de monitoring et évolution'
      ]
    },
    {
      id: 'coaching',
      icon: Users,
      title: currentLang === 'en' ? 'UX coaching for internal teams' : 'Coaching UX pour équipes internes',
      subtitle: currentLang === 'en' ? 'Support and training' : 'Accompagnement et formation',
      description: currentLang === 'en'
        ? 'Skills development for your internal teams on UX best practices applied to Power BI for complete autonomy.'
        : 'Montée en compétences de vos équipes internes sur les bonnes pratiques UX appliquées à Power BI pour une autonomie complète.',
      longDescription: currentLang === 'en'
        ? 'Beyond simple training, we transfer our methodology and tools so your teams can create professional-quality dashboards autonomously and scalably.'
        : 'Au-delà de la simple formation, nous transférons notre méthodologie et nos outils pour que vos équipes puissent créer des dashboards de qualité professionnelle de manière autonome et scalable.',
      process: currentLang === 'en' ? [
        { step: 'Current practices audit', detail: 'Assessment of existing skills and processes' },
        { step: 'Applied UX training', detail: 'Practical workshop on UX principles for Power BI' },
        { step: 'Guided co-creation', detail: 'Hands-on support on your real projects' },
        { step: 'Progressive autonomy', detail: 'Complete transfer of methods and tools' }
      ] : [
        { step: 'Audit des pratiques actuelles', detail: 'Évaluation des compétences et processus existants' },
        { step: 'Formation UX appliquée', detail: 'Workshop pratique sur les principes UX pour Power BI' },
        { step: 'Co-création projets pilotes', detail: 'Accompagnement hands-on sur vos vrais projets' },
        { step: 'Autonomisation progressive', detail: 'Transfert complet des méthodes et outils' }
      ],
      duration: currentLang === 'en' ? '2-4 weeks' : '2-4 semaines',
      price: currentLang === 'en' ? 'Starting from €3,000' : 'À partir de 3 000€',
      image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      color: 'from-purple-500 to-pink-500',
      benefits: currentLang === 'en' ? [
        'Complete team autonomy',
        'Constant UX quality',
        'Project timeline reduction -50%',
        'Strengthened data culture'
      ] : [
        'Autonomie complète de vos équipes',
        'Qualité UX constante',
        'Réduction délais projets -50%',
        'Culture data renforcée'
      ],
      included: currentLang === 'en' ? [
        'Skills assessment',
        'Personalized training',
        'Individual mentoring',
        'Real project co-design',
        'Company guidelines',
        'Resources & templates',
        '3 months follow-up'
      ] : [
        'Assessment compétences',
        'Formation personnalisée',
        'Mentoring individuel',
        'Co-design projets réels',
        'Guidelines entreprise',
        'Ressources & templates',
        'Suivi 3 mois'
      ],
      deliverables: currentLang === 'en' ? [
        'Power BI UX practices audit report',
        'Personalized training program',
        'Mentoring & co-design sessions',
        'Internal UX documentation (guidelines, checklists)',
        'Power BI best practices repository',
        'Post-training support (Q&A, spot coaching)'
      ] : [
        'Rapport d\'audit des pratiques UX Power BI',
        'Programme de formation personnalisé',
        'Sessions de mentoring & co-design',
        'Documentation UX interne (guidelines, checklists)',
        'Référentiel de bonnes pratiques Power BI',
        'Support post-formation (Q&A, coaching ponctuel)'
      ]
    }
  ];

  const testimonials = [
    {
      quote: currentLang === 'en' 
        ? "Data Journey transformed our Business Intelligence approach. Our dashboards are now used daily by 300+ managers."
        : "Data Journey a transformé notre approche de la Business Intelligence. Nos dashboards sont maintenant utilisés quotidiennement par 300+ managers.",
      author: "Marie Dubois",
      position: currentLang === 'en' ? "Data Director" : "Directrice Data",
      company: "TechCorp France",
      rating: 5
    },
    {
      quote: currentLang === 'en'
        ? "The coaching support allowed us to acquire real internal UX expertise. Exceptional ROI on this type of investment."
        : "L'accompagnement coaching nous a permis d'acquérir une véritable expertise UX en interne. ROI exceptionnel sur ce type d'investissement.",
      author: "Thomas Martin",
      position: currentLang === 'en' ? "Head of BI" : "Head of BI",
      company: "FinanceGroup",
      rating: 5
    },
    {
      quote: currentLang === 'en'
        ? "Deadlines met, quality delivered. The Data Journey team perfectly masters the Power BI ecosystem and UX approach."
        : "Délais respectés, qualité au rendez-vous. L'équipe Data Journey maîtrise parfaitement l'écosystème Power BI et l'approche UX.",
      author: "Sophie Blanc",
      position: currentLang === 'en' ? "Analytics Manager" : "Responsable Analytics",
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
                {currentLang === 'en' ? 'Our Services' : 'Nos services'}{' '}
                <span className="text-primary-turquoise">Power BI & UX</span>
              </h1>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                {currentLang === 'en'
                  ? 'Three expert approaches to transform your dashboards into true management tools. From quick wins to complete transformation.'
                  : 'Trois approches expertes pour transformer vos dashboards en véritables outils de pilotage. Du quick win à la transformation complète.'
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">150+</div>
                  <div className="text-neutral-400">
                    {currentLang === 'en' ? 'Dashboards transformed' : 'Dashboards transformés'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">98%</div>
                  <div className="text-neutral-400">
                    {currentLang === 'en' ? 'Client satisfaction' : 'Satisfaction client'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">5 ans</div>
                  <div className="text-neutral-400">
                    {currentLang === 'en' ? 'Power BI expertise' : 'Expertise Power BI'}
                  </div>
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
                          {currentLang === 'en' ? 'Our process' : 'Notre processus'}
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
                          {currentLang === 'en' ? 'Measured results' : 'Résultats mesurés'}
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

                      {/* Deliverables */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-primary-dark mb-4 flex items-center gap-2">
                          <Award className="text-primary-turquoise" size={18} />
                          {currentLang === 'en' ? 'Included deliverables' : 'Livrables inclus'}
                        </h3>
                        <ul className="space-y-2">
                          {service.deliverables.slice(0, 4).map((deliverable, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <div className="w-6 h-6 bg-primary-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold text-primary-turquoise">{idx + 1}</span>
                              </div>
                              <span className="text-neutral-700">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button 
                          onClick={openCalendly}
                          className="flex-1 bg-primary-turquoise text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {currentLang === 'en' ? 'Discover this service' : 'Découvrir ce service'}
                          <ArrowRight size={18} />
                        </motion.button>
                        <motion.button 
                          onClick={openCalendly}
                          className="flex-1 bg-white border-2 border-primary-turquoise text-primary-turquoise px-8 py-4 rounded-xl font-semibold hover:bg-primary-turquoise hover:text-white transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {currentLang === 'en' ? 'Free audit' : 'Audit gratuit'}
                        </motion.button>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      {/* Floating Badge */}
                      <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                        <div className="flex items-center gap-2">
                          <Star className="text-yellow-500" size={20} fill="currentColor" />
                          <span className="font-bold text-primary-dark">4.9/5</span>
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
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display font-bold text-primary-dark mb-6">
                {currentLang === 'en' ? 'What our clients say' : 'Ce que disent nos clients'}
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                {currentLang === 'en'
                  ? 'Discover the testimonials of companies that have transformed their data with Data Journey'
                  : 'Découvrez les témoignages des entreprises qui ont transformé leur data avec Data Journey'
                }
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200 h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500" size={20} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-primary-dark">{testimonial.author}</div>
                    <div className="text-sm text-neutral-500">{testimonial.position}</div>
                    <div className="text-sm text-primary-turquoise font-medium">{testimonial.company}</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8">
          <ScrollReveal>
            <h2 className="text-display font-bold mb-6">
              {currentLang === 'en' ? 'Ready to transform your dashboards?' : 'Prêt à transformer vos dashboards ?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {currentLang === 'en'
                ? "Let's discuss your project and discover the potential of your data together."
                : 'Échangeons sur votre projet et découvrons ensemble le potentiel de vos données.'
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
              <motion.button
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                onClick={openCalendly}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentLang === 'en' ? 'Download our guide' : 'Télécharger notre guide'}
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;