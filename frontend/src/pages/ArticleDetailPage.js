import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { useCalendly } from '../contexts/CalendlyContext';
import { blogArticles } from '../data/blogArticles';

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation('blog');
  const { currentLang } = useLanguage();
  const { openCalendly } = useCalendly();
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Find article by slug
  const article = blogArticles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-dark mb-4">Article non trouvé</h1>
          <Link 
            to={currentLang === 'en' ? '/en/blog' : '/blog'}
            className="text-primary-turquoise hover:underline"
          >
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const content = article.content[currentLang] || article.content.fr;
  
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231ABC9C' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            className="w-full h-full"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative">
          {/* Back Button */}
          <Link 
            to={currentLang === 'en' ? '/en/blog' : '/blog'}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            {currentLang === 'en' ? 'Back to blog' : 'Retour au blog'}
          </Link>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-white/80">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="text-sm">{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-sm">{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={16} />
              <span className="text-sm bg-primary-turquoise/20 px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
          </div>
          
          {/* Title */}
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {article.title}
          </motion.h1>
          
          {/* Excerpt */}
          <motion.p 
            className="text-xl text-white/90 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {article.excerpt}
          </motion.p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        {/* Hero Image */}
        <motion.div 
          className="mb-12 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 lg:h-80 object-cover"
          />
        </motion.div>

        {/* Introduction */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-primary-dark mb-6">
            {currentLang === 'en' ? 'Introduction' : 'Introduction'}
          </h2>
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <p className="text-lg text-neutral-700 leading-relaxed">
              {content.introduction}
            </p>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8 mb-12">
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary-dark mb-4">
                {section.title}
              </h3>
              <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conseils pratiques */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-2xl font-bold text-primary-dark mb-6">
            {currentLang === 'en' ? 'Practical Tips' : 'Conseils pratiques'}
          </h2>
          <div className="bg-primary-turquoise/5 p-6 rounded-xl border border-primary-turquoise/20">
            <ul className="space-y-3">
              {content.conseils.map((conseil, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary-turquoise flex-shrink-0 mt-1" size={20} />
                  <span className="text-neutral-700">{conseil}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Points à retenir */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h2 className="text-2xl font-bold text-primary-dark mb-6">
            {currentLang === 'en' ? 'Key Takeaways' : 'Points à retenir'}
          </h2>
          <div className="bg-gradient-to-r from-primary-dark to-blue-900 text-white p-6 rounded-xl">
            <ul className="space-y-3">
              {content.points_retenir.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary-turquoise flex-shrink-0 mt-1" size={20} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary-turquoise to-green-500 text-white p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            {currentLang === 'en' 
              ? 'Want to improve your Power BI dashboards?' 
              : 'Envie d\'améliorer vos dashboards Power BI ?'
            }
          </h3>
          <p className="text-lg mb-6 text-white/90">
            {currentLang === 'en'
              ? 'Book a free audit to discover your optimization opportunities'
              : 'Réservez un audit gratuit pour découvrir vos opportunités d\'optimisation'
            }
          </p>
          <motion.button
            onClick={openCalendly}
            className="bg-white text-primary-turquoise px-8 py-3 rounded-xl font-semibold hover:bg-neutral-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentLang === 'en' ? 'Book a free audit' : 'Réserver un audit gratuit'}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;