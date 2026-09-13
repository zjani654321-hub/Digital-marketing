export type NavigationPage = 
  | 'home'
  | 'guides'
  | 'guide-detail'
  | 'tools'
  | 'seo-tools'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'disclaimer'
  | 'cookies'
  | 'sitemap';

export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Fundamentals' | 'SEO' | 'Social Media' | 'Advertising' | 'Content & Email' | 'Growth & Strategy';
  readTime: string;
  excerpt: string;
  publishedDate: string;
  updatedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tableOfContents: { id: string; title: string }[];
  contentSections: {
    id: string;
    heading: string;
    subheading?: string;
    paragraphs: string[];
    bulletPoints?: string[];
    proTip?: string;
    exampleBox?: {
      title: string;
      description: string;
      codeOrResult?: string;
    };
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ToolItem {
  id: string;
  name: string;
  category: 'Social' | 'Copywriting' | 'SEO' | 'Brand & Strategy' | 'Text Analysis';
  description: string;
  badge?: string;
}

export interface SEOCheckResult {
  score: number;
  status: 'excellent' | 'good' | 'warning' | 'error';
  message: string;
}
