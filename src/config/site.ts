import type { SiteConfig } from '../types/index';

export const siteConfig: SiteConfig = {
  name: 'Glazing Design vidros esquadrias e espelhos.',
  description: 'A Glazing Design, o foco é na seleção e instalação do vidro de forma que atenda a requisitos específicos de conforto, eficiência energética e estética.',
  title: 'vidro para portas, janelas, cobertura, fachada e pele de vidro.',
  subtitle:
    'A Glazing Design é uma empresa especializada na concepção e instalação de projetos inteligentes e modernos. Vidro temperado, laminado, box, espelhos.',
  url: process.env.SITE_URL ?? 'https://glazingdesign.com.br/',
  ogImage: `${process.env.SITE_URL}/og.jpg`,
  links: {
    youtube: 'https://www.youtube.com/@glazingdesign',
    github: 'https://github.com/glazingdesign',
    linkedin: 'https://www.linkedin.com/in/glazingdesign/',
  },
  comments: `${process.env.NEXT_PUBLIC_DISQUS_SHORT_NAME}`,
};
