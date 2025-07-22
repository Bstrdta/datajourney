import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, User, ArrowRight, Search, Filter, Star, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { blogArticles } from '../data/blogArticles';
import ScrollReveal from '../components/ScrollReveal';

const BlogPage = () => {
  const { t } = useTranslation('blog');
  const { currentLang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: currentLang === 'en' ? 'All articles' : 'Tous les articles', count: blogArticles.length },
    { id: 'ux-design', name: 'UX Design', count: 2 },
    { id: 'power-bi', name: 'Power BI', count: 2 },
    { id: 'tools', name: currentLang === 'en' ? 'Tools' : 'Outils', count: 1 },
    { id: 'strategy', name: currentLang === 'en' ? 'Strategy' : 'Stratégie', count: 1 }
  ];

  // Use the imported articles from blogArticles.js
  const articles = blogArticles;

  // Filter articles based on search and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      article.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-hero font-bold mb-6 leading-tight">
                {currentLang === 'en' ? 'Blog' : 'Blog'}{' '}
                <span className="text-primary-turquoise">Power BI & UX</span>
              </h1>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                {currentLang === 'en'
                  ? 'Tips, insights and best practices to optimize your data'
                  : 'Conseils, insights et bonnes pratiques pour optimiser vos données'
                }
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                placeholder={currentLang === 'en' ? 'Search for an article...' : 'Rechercher un article...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-turquoise focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-turquoise text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 0.1}>
                <Link to={currentLang === 'en' ? `/en/blog/${article.slug}` : `/blog/${article.slug}`}>
                  <motion.article
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500 hover-lift cursor-pointer"
                    whileHover={{ y: -8 }}
                  >
                    {/* Article Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-turquoise/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
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
                      </div>
                      
                      {/* Read Article Button */}
                      <div className="mt-4">
                        <motion.span 
                          className="inline-flex items-center gap-2 text-primary-turquoise font-semibold hover:text-green-600 transition-colors duration-300 cursor-pointer"
                          whileHover={{ x: 4 }}
                        >
                          {currentLang === 'en' ? 'Read article' : 'Lire l\'article'}
                          <ArrowRight size={16} />
                        </motion.span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;