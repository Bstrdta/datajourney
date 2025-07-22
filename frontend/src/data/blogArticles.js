export const blogArticles = [
  {
    id: 1,
    slug: 'les-5-erreurs-ux-fatales-power-bi',
    title: 'Les 5 erreurs UX fatales dans Power BI',
    excerpt: 'Découvrez les pièges les plus fréquents qui ruinent l\'expérience utilisateur de vos dashboards et comment les éviter.',
    image: 'https://images.unsplash.com/photo-1662460149539-5d37b87e2f92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
    date: '15 Mars 2024',
    readTime: '8 min',
    category: 'UX Design',
    featured: true,
    color: 'from-red-500 to-pink-500',
    content: {
      fr: {
        introduction: "L'impact de l'UX (expérience utilisateur) dans Power BI est souvent sous-estimé. Pourtant, un mauvais design peut rendre un dashboard inutilisable, même si les données sont pertinentes. Voici les 5 erreurs les plus courantes à éviter.",
        sections: [
          {
            title: "1. Trop d'informations à l'écran",
            content: "► Problème : surcharge cognitive, difficulté de lecture.\n► Solution : prioriser l'information clé, regrouper par thèmes, utiliser la hiérarchie visuelle."
          },
          {
            title: "2. Mauvais choix de visuels", 
            content: "► Problème : camemberts non pertinents, graphes 3D inutiles.\n► Solution : choisir le visuel en fonction du message (ex : histogramme pour comparer, ligne pour évolution)."
          },
          {
            title: "3. Navigation confuse",
            content: "► Problème : filtres dispersés, absence de fil conducteur.\n► Solution : organiser la navigation, utiliser des segments et des bookmarks de façon intuitive."
          },
          {
            title: "4. Absence de feedback utilisateur",
            content: "► Problème : difficulté à comprendre ce qui est filtré ou actif.\n► Solution : indiquer clairement les filtres actifs, utiliser des KPIs visuels."
          },
          {
            title: "5. Manque de tests utilisateurs",
            content: "► Problème : dashboard créé sans validation réelle.\n► Solution : organiser des sessions de tests avant d'industrialiser."
          }
        ],
        conseils: [
          "Impliquez les utilisateurs finaux très tôt.",
          "Travaillez avec un UX designer ou formez vos développeurs aux bases de l'UX.",
          "Privilégiez la simplicité et l'efficacité à l'esthétique seule."
        ],
        points_retenir: [
          "Un bon dashboard doit être clair, utile, et utilisable.",
          "L'UX est un levier clé pour l'adoption des dashboards.",
          "Eviter les erreurs UX classiques permet un gain d'efficacité immédiat."
        ]
      },
      en: {
        introduction: "The impact of UX (user experience) in Power BI is often underestimated. Yet poor design can make a dashboard unusable, even with relevant data. Here are the 5 most common mistakes to avoid.",
        sections: [
          {
            title: "1. Too much information on screen",
            content: "► Problem: cognitive overload, difficulty reading.\n► Solution: prioritize key information, group by themes, use visual hierarchy."
          },
          {
            title: "2. Poor visual choices",
            content: "► Problem: irrelevant pie charts, useless 3D graphs.\n► Solution: choose visuals based on the message (e.g., histogram to compare, line for evolution)."
          },
          {
            title: "3. Confusing navigation", 
            content: "► Problem: scattered filters, no guiding thread.\n► Solution: organize navigation, use segments and bookmarks intuitively."
          },
          {
            title: "4. Lack of user feedback",
            content: "► Problem: difficulty understanding what is filtered or active.\n► Solution: clearly indicate active filters, use visual KPIs."
          },
          {
            title: "5. Lack of user testing",
            content: "► Problem: dashboard created without real validation.\n► Solution: organize testing sessions before industrialization."
          }
        ],
        conseils: [
          "Involve end users very early.",
          "Work with a UX designer or train your developers in UX basics.",
          "Prioritize simplicity and efficiency over aesthetics alone."
        ],
        points_retenir: [
          "A good dashboard must be clear, useful, and usable.",
          "UX is a key lever for dashboard adoption.",
          "Avoiding classic UX mistakes provides immediate efficiency gains."
        ]
      }
    }
  },
  {
    id: 2,
    slug: 'pourquoi-dashboards-pas-utilises',
    title: 'Pourquoi vos dashboards ne sont pas utilisés ?',
    excerpt: 'Analysez les causes profondes du faible taux d\'adoption de vos rapports et les solutions pour y remédier.',
    image: 'https://images.unsplash.com/photo-1661028191560-3aa1f664f397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MHx8fGJsdWV8MTc1MzE3NzU3M3ww&ixlib=rb-4.1.0&q=85',
    date: '8 Mars 2024',
    readTime: '12 min',
    category: 'Stratégie',
    featured: false,
    color: 'from-blue-500 to-primary-dark',
    content: {
      fr: {
        introduction: "Vous avez investi des semaines dans vos dashboards Power BI, mais les utilisateurs ne les consultent pas ? Voici les raisons les plus courantes.",
        sections: [
          {
            title: "1. Dashboard non aligné avec les besoins métier",
            content: "► Cause : le rapport répond à une demande supposée, pas réelle.\n► Solution : mener des ateliers de cadrage avec les utilisateurs finaux."
          },
          {
            title: "2. Difficulté de navigation / d'accès",
            content: "► Cause : trop de clics, interfaces complexes.\n► Solution : simplifier les parcours, proposer des vues personnalisées."
          },
          {
            title: "3. Manque de formation ou d'accompagnement",
            content: "► Cause : les utilisateurs ne comprennent pas les indicateurs.\n► Solution : organiser des formations, documenter les KPIs."
          },
          {
            title: "4. Données peu fiables ou obsolètes",
            content: "► Cause : perte de confiance.\n► Solution : mettre en place un processus de validation des données."
          },
          {
            title: "5. Pas de culture data dans l'entreprise",
            content: "► Cause : les décisions ne sont pas prises avec la donnée.\n► Solution : sensibiliser les managers, donner l'exemple."
          }
        ],
        conseils: [
          "Faites un audit d'usage de vos rapports (clics, fréquence, feedback).",
          "Mettez en avant les bénéfices clés (gain de temps, décisions plus rapides).",
          "Identifiez un sponsor métier qui pousse l'usage du dashboard."
        ],
        points_retenir: [
          "L'utilisation est un indicateur de valeur : si personne ne consulte, c'est qu'il y a un problème.",
          "La co-construction avec les utilisateurs est indispensable.",
          "La technique ne suffit pas : l'adoption est une affaire humaine."
        ]
      },
      en: {
        introduction: "You've invested weeks in your Power BI dashboards, but users aren't consulting them? Here are the most common reasons.",
        sections: [
          {
            title: "1. Dashboard not aligned with business needs",
            content: "► Cause: the report answers a supposed need, not a real one.\n► Solution: conduct scoping workshops with end users."
          },
          {
            title: "2. Navigation / access difficulties", 
            content: "► Cause: too many clicks, complex interfaces.\n► Solution: simplify journeys, offer personalized views."
          },
          {
            title: "3. Lack of training or support",
            content: "► Cause: users don't understand the indicators.\n► Solution: organize training, document KPIs."
          },
          {
            title: "4. Unreliable or obsolete data",
            content: "► Cause: loss of confidence.\n► Solution: implement a data validation process."
          },
          {
            title: "5. No data culture in the company",
            content: "► Cause: decisions are not made with data.\n► Solution: raise awareness among managers, lead by example."
          }
        ],
        conseils: [
          "Audit your report usage (clicks, frequency, feedback).",
          "Highlight key benefits (time savings, faster decisions).",
          "Identify a business sponsor who drives dashboard usage."
        ],
        points_retenir: [
          "Usage is an indicator of value: if no one consults, there's a problem.",
          "Co-construction with users is essential.",
          "Technology isn't enough: adoption is a human matter."
        ]
      }
    }
  },
  {
    id: 3,
    slug: 'figma-power-bi-duo-gagnant',
    title: 'Figma + Power BI : le duo gagnant',
    excerpt: 'Comment utiliser Figma pour concevoir des interfaces Power BI qui convertissent vraiment.',
    image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxNzc1NjZ8MA&ixlib=rb-4.1.0&q=85',
    date: '1 Mars 2024',
    readTime: '10 min',
    category: 'Outils',
    featured: false,
    color: 'from-primary-turquoise to-green-500',
    content: {
      fr: {
        introduction: "Utiliser Figma en amont du développement Power BI permet de concevoir des interfaces plus intuitives, testables et cohérentes. Voici pourquoi et comment faire.",
        sections: [
          {
            title: "1. Créer des wireframes avant de développer",
            content: "► Bénéfices : valider les parcours, recueillir du feedback."
          },
          {
            title: "2. Utiliser un design system Power BI dans Figma",
            content: "► Objectif : standardiser les visuels, couleurs, typographies."
          },
          {
            title: "3. Tester l'interface avec les utilisateurs",
            content: "► Méthode : prototypage interactif, interviews."
          },
          {
            title: "4. Faciliter la collaboration entre UX et développeurs",
            content: "► Figma permet un langage commun, des specs précises."
          },
          {
            title: "5. Gagner du temps et améliorer l'adoption",
            content: "► Le résultat est un dashboard cohérent, clair, adopté plus rapidement."
          }
        ],
        conseils: [
          "Intégrez Figma très tôt dans vos projets Power BI.",
          "Formez vos développeurs à la lecture de maquettes Figma.",
          "Créez un design kit spécifique aux contraintes Power BI."
        ],
        points_retenir: [
          "Figma + Power BI = meilleure UX, meilleure adoption.",
          "Le prototypage améliore qualité et efficacité.",
          "Anticiper l'expérience utilisateur fait gagner du temps au final."
        ]
      },
      en: {
        introduction: "Using Figma upstream of Power BI development allows for more intuitive, testable and consistent interfaces. Here's why and how to do it.",
        sections: [
          {
            title: "1. Create wireframes before developing",
            content: "► Benefits: validate journeys, gather feedback."
          },
          {
            title: "2. Use a Power BI design system in Figma",
            content: "► Objective: standardize visuals, colors, typography."
          },
          {
            title: "3. Test the interface with users",
            content: "► Method: interactive prototyping, interviews."
          },
          {
            title: "4. Facilitate collaboration between UX and developers",
            content: "► Figma enables a common language, precise specs."
          },
          {
            title: "5. Save time and improve adoption",
            content: "► The result is a coherent, clear dashboard, adopted more quickly."
          }
        ],
        conseils: [
          "Integrate Figma very early in your Power BI projects.",
          "Train your developers to read Figma mockups.",
          "Create a design kit specific to Power BI constraints."
        ],
        points_retenir: [
          "Figma + Power BI = better UX, better adoption.",
          "Prototyping improves quality and efficiency.",
          "Anticipating user experience saves time in the end."
        ]
      }
    }
  }
];