import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Heart, Linkedin, Mail, Calendar, MapPin, Star, TrendingUp } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const AboutPage = () => {
  const team = [
    {
      name: 'Jean-Marc Dupont',
      role: 'Fondateur & UX Designer Senior',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: '10+ années d\'expérience en UX Design. Ancien Lead Designer chez Microsoft, spécialisé dans les interfaces data complexes.',
      specialties: ['UX Strategy', 'Design Systems', 'User Research', 'Prototyping'],
      linkedin: 'https://linkedin.com/in/jeanmarc-dupont',
      email: 'jm.dupont@datajourney.fr'
    },
    {
      name: 'Sophie Martin',
      role: 'Lead Power BI Developer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop&crop=face',
      bio: 'Experte Power BI depuis 2018. Certifiée Microsoft MVP, elle maîtrise parfaitement DAX et l\'architecture des solutions BI enterprise.',
      specialties: ['Power BI Premium', 'DAX Expert', 'Data Modeling', 'Performance'],
      linkedin: 'https://linkedin.com/in/sophie-martin-bi',
      email: 's.martin@datajourney.fr'
    },
    {
      name: 'Thomas Leroy',
      role: 'Senior BI Consultant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Consultant BI depuis 8 ans, spécialisé dans la transformation digitale des entreprises et l\'adoption des outils décisionnels.',
      specialties: ['Change Management', 'BI Strategy', 'Training', 'Project Management'],
      linkedin: 'https://linkedin.com/in/thomas-leroy-bi',
      email: 't.leroy@datajourney.fr'
    },
    {
      name: 'Marie Dubois',
      role: 'Data Storytelling Expert',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Spécialiste du storytelling data et de la communication visuelle. Elle transforme les insights complexes en narratifs engageants.',
      specialties: ['Data Storytelling', 'Visual Design', 'Communication', 'Training'],
      linkedin: 'https://linkedin.com/in/marie-dubois-data',
      email: 'm.dubois@datajourney.fr'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence Technique',
      description: 'Nous maîtrisons parfaitement Power BI et les dernières innovations Microsoft pour vous offrir des solutions techniques de pointe.',
      color: 'from-blue-500 to-primary-dark'
    },
    {
      icon: Users,
      title: 'Centré Utilisateur',
      description: 'Chaque dashboard est conçu pour ses utilisateurs finaux. Nous plaçons l\'expérience utilisateur au cœur de nos créations.',
      color: 'from-primary-turquoise to-green-500'
    },
    {
      icon: Heart,
      title: 'Passion Data',
      description: 'Nous sommes passionnés par la transformation de données brutes en insights actionnables qui font la différence.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Résultats Mesurables',
      description: 'Chaque projet est évalué sur ses résultats concrets : adoption, efficacité, satisfaction utilisateur et ROI.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Fondation de Data Journey',
      description: 'Jean-Marc Dupont fonde Data Journey après 10 ans chez Microsoft, avec la vision de révolutionner l\'UX des dashboards.'
    },
    {
      year: '2020',
      title: 'Premier projet de transformation',
      description: 'Première mission de refonte UX pour TechCorp : +75% d\'adoption utilisateur, validation du concept Data Journey.'
    },
    {
      year: '2021',
      title: 'Croissance de l\'équipe',
      description: 'Arrivée de Sophie Martin (Power BI Expert) et Thomas Leroy (BI Consultant). Première certification MVP.'
    },
    {
      year: '2022',
      title: 'Reconnaissance marché',
      description: 'Prix "Innovation BI" au Microsoft Partner Summit. 50+ projets réalisés, équipe de 4 experts.'
    },
    {
      year: '2023',
      title: 'Expansion expertise',
      description: 'Développement de l\'offre coaching et formation. Lancement du blog avec 15k+ lecteurs mensuels.'
    },
    {
      year: '2024',
      title: 'Leadership marché',
      description: '150+ dashboards transformés, 98% satisfaction client. Référence française sur l\'UX Power BI.'
    }
  ];

  const stats = [
    { icon: Award, value: '150+', label: 'Projets réalisés' },
    { icon: Users, value: '98%', label: 'Satisfaction client' },
    { icon: TrendingUp, value: '€2.5M', label: 'Économies générées' },
    { icon: Star, value: '5 ans', label: 'Expertise moyenne équipe' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-dark to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-hero font-bold mb-6 leading-tight">
                À propos de{' '}
                <span className="text-primary-turquoise">Data Journey</span>
              </h1>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                Nous sommes une équipe d'experts passionnés par la transformation de vos données en expériences utilisateur exceptionnelles. 
                Notre mission : révolutionner votre approche de la Business Intelligence.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="mx-auto text-primary-turquoise mb-3" size={32} />
                    <div className="text-3xl font-bold text-primary-turquoise mb-2">{stat.value}</div>
                    <div className="text-neutral-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display font-bold text-primary-dark mb-6">
                Notre{' '}
                <span className="text-primary-turquoise">Histoire</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Data Journey est née d'un constat simple : trop de dashboards Power BI sont techniquement corrects mais inutilisés. 
                Nous avons décidé de changer cela.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex gap-6 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary-turquoise rounded-full flex items-center justify-center text-white font-bold">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-16 bg-primary-turquoise/30 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary-turquoise font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold text-primary-dark">{item.title}</h3>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display font-bold text-primary-dark mb-6">
                Nos{' '}
                <span className="text-primary-turquoise">Valeurs</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Quatre piliers fondamentaux guident notre approche et garantissent la qualité de nos livrables.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="group bg-white rounded-3xl p-8 shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -8 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display font-bold text-primary-dark mb-6">
                Notre{' '}
                <span className="text-primary-turquoise">Équipe</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Des experts passionnés qui combinent excellence technique et vision UX pour transformer vos dashboards.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="group bg-white rounded-3xl p-6 shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500 text-center"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-t from-primary-turquoise/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-primary-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-turquoise font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-primary-turquoise/10 hover:text-primary-turquoise transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail size={18} />
                    </motion.a>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Discutons de votre projet autour d'un café (virtuel ou réel). 
              Nous sommes basés à Paris mais intervenons dans toute la France.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                className="bg-primary-turquoise text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                Réserver un appel
              </motion.button>
              <motion.button
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Nous contacter
              </motion.button>
            </div>
            <div className="flex items-center justify-center gap-2 text-neutral-400">
              <MapPin size={16} />
              <span>Paris, France • Interventions nationales</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;