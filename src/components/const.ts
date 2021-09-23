import type { Client, FooterEntry, NavIems, News, Product, Service } from 'src/types';

export const products: Product[] = [
  {
    name: 'OBM',
    description: 'La messagerie collaborative 100% libre.',
    image: 'obm.png'
  },
  {
    name: 'Twake',
    description:
      "Une plateforme de collaboration open source sécurisée pour améliorer l'efficacité organisationnelle",
    image: 'twake.png'
  },
  {
    name: 'Linshare',
    description:
      "Le partage sécurisé de fichiers volumineux dans votre cloud privé et vers l'extérieur.",
    image: 'linshare.png'
  },
  {
    name: 'Linto',
    description: 'Votre propre solution vocale intégrée',
    image: 'linto.png'
  },
  {
    name: 'LinID',
    description: 'La suite logicielle de gestion et de fédération des identités.',
    image: 'linid.png'
  },
  {
    name: 'Petals',
    description: "L'ESB nouvelle génération pour construire les nouveaux Services Numériques WOA.",
    image: 'petals.png'
  },
  {
    name: 'LinPki',
    description:
      'Logiciel permettant la gestion et le déploiement de certificats électroniques au sein de votre SI',
    image: 'linpki.png'
  },
  {
    name: 'OpenPaaS',
    description:
      'OpenPaaS inaugure de nouvelles pratiques de travail en équipe en combinant la flexibilité du PaaS et des applications de collaboration nouvelle génération.',
    image: 'openpaas.png'
  }
];

export const news: News[] = [
  {
    title: 'Top 6 des outils pour travailler de façon désynchronisée',
    description:
      "L'équipe Linagora vous propose les 6 outils les plus utilisés pour travailler de façon désynchronisée.",
    image:
      'https://images.weserv.nl/?url=https://www.linagora.com/assets/images/postBlog/Blog-Post-008-Hero-Image.jpg&w=400&h=250&fit=cover&a=entropy&fit=top&output=webp',
    url:
      'https://www.linagora.com/blog/top-6-des-outils-pour-travailler-de-fa%C3%A7on-desynchronis%C3%A9e'
  },
  {
    title:
      "Comment les outils de collaboration en ligne améliorent-ils l'efficacité et la productivité des équipes ?",
    description:
      'Ce blog examinera le paysage actuel du travail et la manière dont les entreprises pourraient utiliser les technologies disponibles pour...',
    image:
      'https://images.weserv.nl/?url=https://www.linagora.com/assets/images/postBlog/Blog-Post-007-Hero-Image.jpg&w=400&h=250&fit=cover&a=entropy&fit=top&output=webp',
    url:
      'https://linagora.com/fr/actualites/2021/07/26/comment-la-collaboration-en-ligne-ameliore-la-productivite-et-l-efficacite/'
  },
  {
    title: 'Twake - 5 fonctionnalités qui améliorent la productivité',
    description:
      "Twake, comme d'autres messageries d'équipe, vous aide à travailler à distance sans perdre en efficacité.",
    image:
      'https://images.weserv.nl/?url=https://www.linagora.com/assets/images/postBlog/Blog-Post-006-Hero-Image.jpg&w=400&h=250&fit=cover&a=entropy&fit=top&output=webp',
    url:
      'https://linagora.com/fr/actualites/2021/07/19/twake-5-fonctionnalites-qui-ameliorent-la-productivite/'
  },
  {
    title:
      'Twake Q2.505 : De nouvelles chaînes améliorées, des fonctions de sécurité améliorées et bien plus encore !',
    description:
      'We are delighted to unveil Twake v2021.Q2.505, which includes a slew of amazing new features and enhancements.',
    image:
      'https://images.weserv.nl/?url=https://www.linagora.com/assets/images/postBlog/Blog-Post-003-Hero-Image.png&w=400&h=250&fit=cover&a=entropy&fit=top&output=webp',
    url: 'https://linagora.com/fr/actualites/2021/06/22/twake-q2-505-product-update-fr/'
  },
  {
    title: 'Linagora passe de la CLA à la DCO',
    description:
      'LINAGORA passe de CLA à DCO pour encourager davantage de contributions de la communauté open-source.',
    image:
      'https://images.weserv.nl/?url=https://www.linagora.com/assets/images/postBlog/Blog-Post-005-Hero-Image.jpg&w=400&h=250&fit=cover&a=entropy&fit=top&output=webp',
    url: 'https://linagora.com/fr/actualites/2021/07/08/linagora-passe-de-cla-to-dco/'
  }
];

export const services: Service[] = [
  {
    name: 'Support',
    description:
      'Une offre de support industriel innovante pour plus de 400 logiciels libres parmi les plus utilisés au monde, dans de nombreux domaines: bureautique, CMS, OS, ...',
    image: 'ossa.png'
  },
  {
    name: 'Conseil',
    description:
      "Pour vous aider à réussir la transition vers le libre et mettre en place la meilleure stratégie d'usage possible des logiciels libres pour votre organisation.",
    image: 'conseil.png'
  },
  {
    name: 'Accompagnement',
    description:
      'Développement sur mesure, intégration ainsi que formation sur plus de 100 logiciels libres.',
    image: 'services.png'
  },
  {
    name: 'Studio web',
    description: 'Notre expertise web Open Source, notamment sur les CMS Drupal et WordPress.',
    image: 'studio.png'
  }
];

export const clients: Client[] = [
  {
    name: 'ministère de la justice',
    image: 'ministere-justice.png'
  },
  {
    name: 'CNI',
    image: 'cni.png'
  },
  {
    name: 'orange',
    image: 'orange.png'
  },
  {
    name: 'Société Générale',
    image: 'societe-generale.png'
  }
];

export const footerElements: FooterEntry[] = [
  {
    title: 'liens',
    items: [
      {
        title: 'FAQ',
        url: 'https://www.linagora.com/fr/faq'
      },
      {
        title: 'Aide',
        url: 'https://www.linagora.com/fr/help'
      },
      {
        title: 'Support',
        url: 'https://www.linagora.com/fr/support'
      }
    ]
  },
  {
    title: 'COMMUNAUTÉ',
    items: [
      {
        title: 'Comment contribuer?',
        url: 'https://www.linagora.com/fr/communaute/comment-contribuer/'
      },
      {
        title: 'Code de conduite',
        url: 'https://www.linagora.com/fr/communaute/code-de-conduite/'
      }
    ]
  },
  {
    title: 'Suivez LINAGORA',
    items: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/LinagoraTunisie'
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/showcase/linagora-tunisie/'
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/LinagoraTunisie'
      },
      {
        title: 'GitHub',
        url: 'https://github.com/linagora'
      }
    ]
  },
  {
    title: 'company',
    items: [
      {
        title: 'Blog',
        url: 'https://www.linagora.com/fr/actualites/'
      },
      {
        title: 'A-Propos',
        url: 'https://www.linagora.com/fr/a-propos/notre-mission/'
      },
      {
        title: 'Contact',
        url: 'https://www.linagora.com/fr/contact/'
      }
    ]
  }
];

export const navLinks: NavIems = [
  {
    title: 'Produits',
    href: '#products'
  },
  {
    title: 'Actualité',
    href: '#news'
  },
  {
    title: 'Services',
    href: '#services'
  },
  {
    title: 'Pourquoi le logiciel libre ?',
    href: '#opensource'
  },
  {
    title: 'nous contacter',
    href: '#contact'
  }
];
