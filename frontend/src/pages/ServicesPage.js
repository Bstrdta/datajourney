import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Plus, Users, Clock, Target, Shield, CheckCircle, Star, ArrowRight, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { useCalendly } from '../contexts/CalendlyContext';
import ScrollReveal from '../components/ScrollReveal';

const ServicesPage = () => {
  const { t } = useTranslation('services');
  const { openCalendly } = useCalendly();
  const { currentLang } = useLanguage();
  const services = [
    {
      id: 'refonte',
      icon: RefreshCw,
      title: t('service1.title'),
      subtitle: currentLang === 'en' ? 'Existing reports enhancement' : 'Revalorisation de rapports existants',
      description: t('service1.description'),
      duration: t('service1.duration'),
      price: t('service1.price'),
      image: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      color: 'from-blue-500 to-primary-dark',
      deliverables: t('service1.deliverables', { returnObjects: true })
    },
    {
      id: 'creation',
      icon: Plus,
      title: t('service2.title'),
      subtitle: currentLang === 'en' ? 'From modeling to visualization' : 'De la stratégie data à la visualisation',
      description: t('service2.description'),
      duration: t('service2.duration'),
      price: t('service2.price'),
      image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      color: 'from-primary-turquoise to-green-500',
      deliverables: t('service2.deliverables', { returnObjects: true })
    },
    {
      id: 'coaching',
      icon: Users,
      title: t('service3.title'),
      subtitle: currentLang === 'en' ? 'Internal teams coaching' : 'Accompagnement d\'équipes internes',
      description: t('service3.description'),
      duration: t('service3.duration'),
      price: t('service3.price'),
      image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      color: 'from-purple-500 to-pink-500',
      deliverables: t('service3.deliverables', { returnObjects: true })
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
                {t('title')}
              </h1>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                {t('subtitle')}
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

                      {/* Deliverables */}
                      {service.deliverables && (
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-primary-dark mb-4 flex items-center gap-2">
                            <Award className="text-primary-turquoise" size={20} />
                            Livrables inclus
                          </h3>
                          <div className="bg-neutral-50 rounded-2xl p-6">
                            <div className="grid grid-cols-1 gap-3">
                              {service.deliverables.map((deliverable, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="w-6 h-6 bg-primary-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-xs font-bold">{idx + 1}</span>
                                  </div>
                                  <span className="text-neutral-800 font-medium leading-relaxed">{deliverable}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

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
                        onClick={openCalendly}
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
                onClick={openCalendly}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Réserver un audit gratuit
              </motion.button>
              <motion.button
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                onClick={openCalendly}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Télécharger notre guide
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;