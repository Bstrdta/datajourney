import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CalendlyModal from './CalendlyModal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@datajourney.fr',
      subtitle: 'Réponse sous 24h'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 1 23 45 67 89',
      subtitle: 'Lun-Ven 9h-18h'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      content: 'Paris, France',
      subtitle: 'Interventions France entière'
    },
    {
      icon: Clock,
      title: 'Disponibilité',
      content: 'Démarrage sous 2 semaines',
      subtitle: 'Planning flexible'
    }
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <div className="w-20 h-20 bg-primary-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-primary-turquoise" size={40} />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              🚀 Message envoyé avec succès !
            </h3>
            
            <p className="text-xl text-neutral-300 mb-8">
              Merci pour votre message. Notre équipe vous contactera dans les 24h pour discuter de votre projet Power BI.
              <br />
              <strong>En attendant, que diriez-vous d'un audit gratuit ?</strong>
            </p>
            
            <motion.button 
              className="bg-primary-turquoise text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="inline mr-2" size={24} />
              Réserver un créneau gratuit
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-6">
              Transformons vos données{' '}
              <span className="text-primary-turquoise">ensemble</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Prêt à révolutionner vos dashboards Power BI ? Discutons de votre projet et découvrons comment nous pouvons vous aider.
            </p>
          </div>
        </ScrollReveal>

        <div className="lg:grid lg:grid-cols-5 lg:gap-12">
          
          {/* Contact Form */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-8 lg:mb-0">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Parlons de votre projet</h3>
                <p className="text-neutral-300">Quelques détails pour mieux vous accompagner</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-neutral-300">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-primary-turquoise focus:outline-none transition-colors duration-300 text-white placeholder-neutral-400"
                      placeholder="Votre nom et prénom"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2 text-neutral-300">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-primary-turquoise focus:outline-none transition-colors duration-300 text-white placeholder-neutral-400"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-neutral-300">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-primary-turquoise focus:outline-none transition-colors duration-300 text-white placeholder-neutral-400"
                    placeholder="votre.email@entreprise.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-neutral-300">
                    Décrivez-nous votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-primary-turquoise focus:outline-none transition-colors duration-300 text-white placeholder-neutral-400 resize-vertical"
                    placeholder="Parlez-nous de vos dashboards actuels, vos enjeux, vos objectifs..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-turquoise text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info & CTA */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              
              {/* Quick Contact Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-turquoise/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-primary-turquoise" size={18} />
                      </div>
                      <div>
                        <div className="font-semibold">{info.content}</div>
                        <div className="text-neutral-400 text-sm">{info.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendly Integration */}
              <div className="bg-gradient-to-br from-primary-turquoise/20 to-green-500/20 backdrop-blur-sm rounded-2xl p-6 border border-primary-turquoise/30">
                <div className="text-center">
                  <Calendar className="mx-auto text-primary-turquoise mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">Audit gratuit 30 min</h3>
                  <p className="text-neutral-300 mb-6 text-sm">
                    Analysons ensemble vos dashboards actuels et identifions les axes d'amélioration prioritaires.
                  </p>
                  <motion.button 
                    className="w-full bg-primary-turquoise text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Réserver un créneau
                  </motion.button>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center">
                <div className="flex items-center justify-center gap-2 text-primary-turquoise mb-1">
                  <Clock size={16} />
                  <span className="font-semibold">Réponse rapide</span>
                </div>
                <p className="text-neutral-400 text-sm">
                  Nous répondons à tous les messages sous 24h
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;