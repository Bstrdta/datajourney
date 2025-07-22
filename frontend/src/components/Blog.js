import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { blogArticles } from '../data/blogArticles';
import ScrollReveal from './ScrollReveal';

const Blog = () => {
  const { t } = useTranslation('home');
  const { currentLang } = useLanguage();
  
  // Use the imported articles
  const articles = blogArticles;

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-primary-dark mb-6">
              {t('blog.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t('blog.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Article */}
        <ScrollReveal className="mb-12">
          <div className="relative bg-gradient-to-r from-primary-dark to-blue-900 rounded-3xl overflow-hidden">
            <div className="lg:grid lg:grid-cols-2 lg:gap-0">
              <div className="p-8 lg:p-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="text-primary-turquoise" size={16} />
                  <span className="text-primary-turquoise text-sm font-semibold">ARTICLE FEATURED</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  {articles[0].title}
                </h3>
                
                <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-neutral-400 text-sm">
                    <Calendar size={16} />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400 text-sm">
                    <Clock size={16} />
                    <span>{articles[0].readTime} de lecture</span>
                  </div>
                  <div className="px-3 py-1 bg-primary-turquoise/20 text-primary-turquoise rounded-full text-sm font-medium">
                    {articles[0].category}
                  </div>
                </div>
                
                <Link to={currentLang === 'en' ? `/en/blog/${articles[0].slug}` : `/blog/${articles[0].slug}`}>
                  <motion.button 
                    className="group inline-flex items-center gap-2 bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentLang === 'en' ? 'Read article' : 'Lire l\'article'}
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.button>
                </Link>
              </div>
              
              <div className="relative h-64 lg:h-full">
                <img 
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/60 to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Link to={currentLang === 'en' ? `/en/blog/${article.slug}` : `/blog/${article.slug}`}>
                <motion.article
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500 hover-lift cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-dark rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                  
                  {article.featured && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-primary-turquoise rounded-full animate-pulse" />
                  )}
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-turquoise transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <motion.div
                      className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-primary-turquoise group-hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <motion.button
              className="inline-flex items-center gap-3 bg-primary-dark text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.location.href = '/blog'}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(10, 37, 64, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Voir tous les articles
              <ArrowRight size={20} />
            </motion.button>
            
            <p className="text-neutral-600 mt-4">
              Nouveau contenu chaque semaine
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Blog;