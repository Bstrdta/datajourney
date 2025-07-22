import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  const benefits = [
    'Les 5 erreurs UX les plus critiques',
    'Checklist de validation avant déploiement',
    'Templates Figma pour Power BI',
    'Guide de couleurs et typographies',
    'Cas d\'étude avec avant/après'
  ];

  const stats = [
    { icon: Users, value: '2,500+', label: 'Téléchargements' },
    { icon: Star, value: '4.9/5', label: 'Note moyenne' },
    { icon: TrendingUp, value: '85%', label: 'Améliorations mesurées' }
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary-turquoise/10 via-blue-50 to-primary-dark/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-premium"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-500" size={40} />
            </div>
            
            <h3 className="text-3xl font-bold text-primary-dark mb-4">
              🎉 Parfait ! Votre guide arrive dans votre boîte mail
            </h3>
            
            <p className="text-xl text-neutral-600 mb-8">
              Vérifiez vos emails (et vos spams) dans les prochaines minutes.
              <br />
              En attendant, découvrez nos services ou réservez un audit gratuit !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir nos services
              </motion.button>
              <motion.button 
                className="bg-white text-primary-turquoise px-6 py-3 rounded-xl font-semibold border-2 border-primary-turquoise hover:bg-primary-turquoise hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Réserver un audit gratuit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-magnet" className="py-20 bg-gradient-to-br from-primary-turquoise/10 via-blue-50 to-primary-dark/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left Side - Content */}
          <ScrollReveal direction="left">
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Download className="text-white" size={24} />
                </div>
                <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                  GUIDE GRATUIT PDF
                </div>
              </div>
              
              <h2 className="text-display font-bold text-primary-dark mb-6">
                📘 Les 5 erreurs UX à éviter{' '}
                <span className="text-primary-turquoise">dans Power BI</span>
              </h2>
              
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Le guide complet pour transformer vos dashboards complexes en outils de pilotage efficaces. 
                <strong> 32 pages d'insights pratiques</strong> basés sur l'analyse de 150+ projets.
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-8">
                <h3 className="font-semibold text-primary-dark mb-4">Ce que vous allez découvrir :</h3>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary-turquoise rounded-full flex-shrink-0" />
                    <span className="text-neutral-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="mx-auto text-primary-turquoise mb-2" size={20} />
                    <div className="font-bold text-primary-dark">{stat.value}</div>
                    <div className="text-xs text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Form */}
          <ScrollReveal direction="right">
            <div className="bg-white rounded-3xl p-8 shadow-premium border border-neutral-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-turquoise to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-2">
                  Téléchargement immédiat
                </h3>
                <p className="text-neutral-600">
                  Recevez le guide PDF par email en moins de 60 secondes
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-primary-turquoise focus:outline-none transition-colors duration-300 text-primary-dark"
                    placeholder="votre.email@entreprise.com"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary-turquoise to-green-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
                      <Download size={24} />
                      Télécharger le guide PDF
                    </>
                  )}
                </motion.button>

                <div className="text-center">
                  <p className="text-xs text-neutral-500">
                    🔒 Pas de spam. Désinscription en 1 clic.
                    <br />
                    Nous respectons votre vie privée.
                  </p>
                </div>
              </form>

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white" />
                  </div>
                  <span>Rejoint par <strong>2,500+ professionnels</strong></span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;