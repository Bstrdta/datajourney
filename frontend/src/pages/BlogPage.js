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
      likes: '112'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);
  const recentArticles = articles.slice(0, 3);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-hero font-bold mb-6 leading-tight">
                Blog{' '}
                <span className="text-primary-turquoise">Data Journey</span>
              </h1>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                Insights, guides pratiques et retours d'expérience sur Power BI, UX Design et Data Visualization. 
                Nos experts partagent leur expertise.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">50+</div>
                  <div className="text-neutral-400">Articles publiés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">25k+</div>
                  <div className="text-neutral-400">Lecteurs mensuels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-turquoise mb-2">4.8/5</div>
                  <div className="text-neutral-400">Note moyenne</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">
              Articles à la une
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.slice(0, 2).map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 0.2}>
                <motion.article
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -4 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
                        {article.categoryLabel}
                      </span>
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star size={14} fill="currentColor" />
                        Featured
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                      {article.readTime} de lecture
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary-turquoise transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={article.authorImage} 
                          alt={article.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-primary-dark text-sm">{article.author}</div>
                          <div className="text-neutral-500 text-xs">{article.authorRole}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="flex gap-2">
                        {article.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button
                        className="text-primary-turquoise font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                        onClick={() => window.location.href = '/blog'}
                        whileHover={{ scale: 1.05 }}
                      >
                        Lire l'article
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:border-primary-turquoise focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2">
              <Filter className="text-neutral-500" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-primary-turquoise text-white'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category.name}
                    <span className="ml-1 opacity-75">({category.count})</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-primary-dark">
              {selectedCategory === 'all' ? 'Tous les articles' : categories.find(c => c.id === selectedCategory)?.name}
              <span className="ml-2 text-primary-turquoise">({filteredArticles.length})</span>
            </h2>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredArticles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 0.1}>
                <motion.article
                  layout
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500 hover-lift"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
                        {article.categoryLabel}
                      </span>
                    </div>

                    {article.featured && (
                      <div className="absolute top-4 right-4">
                        <Star className="text-yellow-400 fill-current" size={20} />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-turquoise transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4 leading-relaxed text-sm line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={article.authorImage} 
                        alt={article.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-primary-dark text-sm">{article.author}</div>
                        <div className="text-neutral-500 text-xs">{article.authorRole}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>{article.views} vues</span>
                        <span>{article.likes} ❤️</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="flex gap-1">
                        {article.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.div
                        className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-primary-turquoise group-hover:text-white transition-all duration-300 cursor-pointer"
                        onClick={() => window.location.href = '/blog'}
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </motion.div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <motion.button
              className="bg-primary-turquoise text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen size={20} />
              Charger plus d'articles
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">
              Ne ratez aucun article !
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Recevez nos derniers insights Power BI et UX directement dans votre boîte mail. Un article par semaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre.email@entreprise.com"
                className="flex-1 px-4 py-3 rounded-xl text-primary-dark focus:outline-none"
              />
              <motion.button
                className="bg-primary-turquoise text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                S'abonner
                <ArrowRight size={16} />
              </motion.button>
            </div>
            <p className="text-neutral-400 text-sm mt-4">
              Pas de spam. Désinscription facile en 1 clic.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;