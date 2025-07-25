import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useTranslation('common');
  const { currentLang } = useLanguage();
  const navigate = useNavigate();

  // Simple navigation handler
  const handleNavigation = (type, target) => {
    if (type === 'page') {
      // Navigate to a different page
      navigate(target);
    } else if (type === 'section') {
      // Scroll to section on current page
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (type === 'page-section') {
      // Navigate to page and then scroll to section
      const [page, section] = target.split('#');
      navigate(page);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  };

  const footerLinks = {
    services: [
      { 
        name: currentLang === 'en' ? 'UX Power BI Redesign' : 'Refonte UX Power BI', 
        type: 'page',
        target: currentLang === 'en' ? '/en/services' : '/services'
      },
      { 
        name: currentLang === 'en' ? 'Dashboard Creation' : 'Création de Dashboards', 
        type: 'page',
        target: currentLang === 'en' ? '/en/services' : '/services'
      },
      { 
        name: currentLang === 'en' ? 'UX Coaching' : 'Coaching UX', 
        type: 'page',
        target: currentLang === 'en' ? '/en/services' : '/services'
      },
      { 
        name: currentLang === 'en' ? 'Free Audit' : 'Audit gratuit', 
        type: 'page',
        target: currentLang === 'en' ? '/en/services' : '/services'
      }
    ],
    ressources: [
      { 
        name: 'Portfolio', 
        type: 'page',
        target: currentLang === 'en' ? '/en/portfolio' : '/portfolio'
      },
      { 
        name: currentLang === 'en' ? 'Blog & Articles' : 'Blog & Articles', 
        type: 'page',
        target: currentLang === 'en' ? '/en/blog' : '/blog'
      },
      { 
        name: currentLang === 'en' ? 'Free PDF Guide' : 'Guide PDF gratuit', 
        type: window.location.pathname === (currentLang === 'en' ? '/en' : '/') ? 'section' : 'page-section',
        target: window.location.pathname === (currentLang === 'en' ? '/en' : '/') ? 'lead-magnet' : `${currentLang === 'en' ? '/en' : '/'}#lead-magnet`
      },
      { 
        name: currentLang === 'en' ? 'Case Studies' : 'Cas d\'études', 
        type: 'page',
        target: currentLang === 'en' ? '/en/portfolio' : '/portfolio'
      }
    ],
    entreprise: [
      { 
        name: currentLang === 'en' ? 'About Us' : 'À propos', 
        type: 'page',
        target: currentLang === 'en' ? '/en/about' : '/about'
      },
      { 
        name: currentLang === 'en' ? 'Our Team' : 'Notre équipe', 
        type: 'page-section',
        target: `${currentLang === 'en' ? '/en/about' : '/about'}#team`
      },
      { 
        name: currentLang === 'en' ? 'Our Values' : 'Nos valeurs', 
        type: 'page-section',
        target: `${currentLang === 'en' ? '/en/about' : '/about'}#values`
      },
      { 
        name: 'Contact', 
        type: window.location.pathname === (currentLang === 'en' ? '/en' : '/') ? 'section' : 'page-section',
        target: window.location.pathname === (currentLang === 'en' ? '/en' : '/') ? 'contact' : `${currentLang === 'en' ? '/en' : '/'}#contact`
      }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/datajourney', name: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/datajourney', name: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/datajourney', name: 'Facebook' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {currentLang === 'en' ? 'Stay informed about the latest' : 'Restez informé des dernières'}{' '}
              <span className="text-primary-turquoise">
                {currentLang === 'en' ? 'Power BI trends' : 'tendances Power BI'}
              </span>
            </h3>
            <p className="text-neutral-300 mb-8">
              {currentLang === 'en' 
                ? 'Receive our UX tips, practical guides and experience feedback directly in your mailbox.'
                : 'Recevez nos conseils UX, guides pratiques et retours d\'expérience directement dans votre boîte mail.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={currentLang === 'en' ? 'your.email@company.com' : 'votre.email@entreprise.com'}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:border-primary-turquoise focus:outline-none"
              />
              <motion.button
                className="bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentLang === 'en' ? 'Subscribe' : 'S\'abonner'}
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-turquoise to-green-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">DJ</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Data Journey</span>
                <div className="text-primary-turquoise font-medium">Experts en transformation BI</div>
              </div>
            </div>
            
            <p className="text-neutral-300 leading-relaxed">
              Spécialistes de la transformation UX de vos dashboards Power BI. 
              Nous créons des expériences data qui inspirent l'action et facilitent la prise de décision.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-primary-turquoise flex-shrink-0" size={18} />
                <span>hello@datajourney.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary-turquoise flex-shrink-0" size={18} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-turquoise flex-shrink-0" size={18} />
                <span>Paris, France</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-turquoise transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{currentLang === 'en' ? 'Services' : 'Services'}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.type, link.target)}
                    className="text-neutral-300 hover:text-primary-turquoise transition-colors duration-300 flex items-center gap-2 group text-left"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{currentLang === 'en' ? 'Resources' : 'Ressources'}</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.type, link.target)}
                    className="text-neutral-300 hover:text-primary-turquoise transition-colors duration-300 flex items-center gap-2 group text-left"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{currentLang === 'en' ? 'Company' : 'Entreprise'}</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.type, link.target)}
                    className="text-neutral-300 hover:text-primary-turquoise transition-colors duration-300 flex items-center gap-2 group text-left"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm">
              {currentLang === 'en' 
                ? '© 2024 Data Journey. All rights reserved.' 
                : '© 2024 Data Journey. Tous droits réservés.'
              }
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/legal/privacy" className="text-neutral-400 hover:text-primary-turquoise transition-colors duration-300">
                {currentLang === 'en' ? 'Privacy Policy' : 'Politique de confidentialité'}
              </Link>
              <Link to="/legal/terms" className="text-neutral-400 hover:text-primary-turquoise transition-colors duration-300">
                {currentLang === 'en' ? 'Terms of Service' : 'Conditions d\'utilisation'}
              </Link>
              <Link to="/legal/cookies" className="text-neutral-400 hover:text-primary-turquoise transition-colors duration-300">
                {currentLang === 'en' ? 'Cookies' : 'Cookies'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;