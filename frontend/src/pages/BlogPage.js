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
      category: 'power-bi',
      categoryLabel: 'Power BI',
      featured: false,
      tags: ['Adoption', 'Change Management', 'ROI', 'Strategy'],
      color: 'from-blue-500 to-primary-dark',
      views: '1.8k',
      likes: '89'
    },
    {
      id: 3,
      title: 'Figma + Power BI : le duo gagnant',
      slug: 'figma-power-bi-workflow',
      excerpt: 'Découvrez comment utiliser Figma pour concevoir des interfaces Power BI qui convertissent vraiment et accélèrent le développement.',
      content: 'L\'intégration Figma/Power BI révolutionne le processus de conception...',
      image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      author: 'Thomas Leroy',
      authorRole: 'Senior BI Developer',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      date: '1 Mars 2024',
      readTime: '10 min',
      category: 'ux-design',
      categoryLabel: 'UX Design',
      featured: false,
      tags: ['Figma', 'Prototyping', 'Workflow', 'Tools'],
      color: 'from-primary-turquoise to-green-500',
      views: '3.2k',
      likes: '156'
    },
    {
      id: 4,
      title: 'Data Storytelling : raconter avec vos données',
      slug: 'data-storytelling-guide',
      excerpt: 'Maîtrisez l\'art de transformer vos insights en histoires captivantes qui poussent vraiment à l\'action décisionnelle.',
      content: 'Le storytelling transforme des données froides en narratifs engageants...',
      image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      author: 'Marie Dubois',
      authorRole: 'Data Storytelling Expert',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      date: '22 Février 2024',
      readTime: '15 min',
      category: 'data-viz',
      categoryLabel: 'Data Visualization',
      featured: true,
      tags: ['Storytelling', 'Narrative', 'Insights', 'Communication'],
      color: 'from-purple-500 to-indigo-500',
      views: '4.1k',
      likes: '203'
    },
    {
      id: 5,
      title: 'Performance Power BI : optimiser pour la vitesse',
      slug: 'performance-power-bi-optimisation',
      excerpt: 'Guide complet pour optimiser les performances de vos rapports Power BI : DAX, modèle de données, et bonnes pratiques.',
      content: 'La performance peut faire la différence entre adoption et abandon...',
      image: 'https://images.unsplash.com/photo-1662460149857-2759c9b2c6f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      author: 'Pierre Moreau',
      authorRole: 'Power BI Architect',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      date: '14 Février 2024',
      readTime: '18 min',
      category: 'power-bi',
      categoryLabel: 'Power BI',
      featured: false,
      tags: ['Performance', 'DAX', 'Optimization', 'Architecture'],
      color: 'from-orange-500 to-red-500',
      views: '2.9k',
      likes: '134'
    },
    {
      id: 6,
      title: 'Cas d\'étude : Transformation BI chez TechCorp',
      slug: 'case-study-techcorp-transformation',
      excerpt: 'Retour d\'expérience détaillé sur la transformation complète de l\'écosystème BI chez TechCorp : défis, solutions, résultats.',
      content: 'TechCorp avait des défis BI majeurs que nous avons transformés...',
      image: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      author: 'Laurent Dubois',
      authorRole: 'BI Consultant Senior',
      authorImage: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
      date: '5 Février 2024',
      readTime: '20 min',
      category: 'case-studies',
      categoryLabel: 'Cas d\'étude',
      featured: false,
      tags: ['Case Study', 'Transformation', 'ROI', 'Enterprise'],
      color: 'from-teal-500 to-cyan-500',
      views: '1.7k',
      likes: '95'
    },
    // Plus d'articles pour remplir
    {
      id: 7,
      title: 'Mobile-First Design pour Power BI',
      slug: 'mobile-first-power-bi',
      excerpt: 'Concevez des dashboards Power BI optimisés pour mobile dès la conception. Stratégies et bonnes pratiques.',
      image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
      author: 'Julie Chen',
      authorRole: 'Mobile UX Designer',
      authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      date: '28 Janvier 2024',
      readTime: '9 min',
      category: 'ux-design',
      categoryLabel: 'UX Design',
      featured: false,
      tags: ['Mobile', 'Responsive', 'UX', 'Design'],
      color: 'from-indigo-500 to-purple-500',
      views: '1.4k',
      likes: '76'
    },
    {
      id: 8,
      title: 'Sécurité et gouvernance des données BI',
      slug: 'securite-gouvernance-power-bi',
      excerpt: 'Implémentez une gouvernance robuste de vos données Power BI : sécurité, compliance, et bonnes pratiques.',
      image: 'https://images.unsplash.com/photo-1662460149539-5d37b87e2f92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
      author: 'David Wilson',
      authorRole: 'Data Governance Expert',
      authorImage: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
      date: '20 Janvier 2024',
      readTime: '14 min',
      category: 'power-bi',
      categoryLabel: 'Power BI',
      featured: false,
      tags: ['Security', 'Governance', 'Compliance', 'Best Practices'],
      color: 'from-gray-600 to-gray-800',
      views: '2.1k',
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