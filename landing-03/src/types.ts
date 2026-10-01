export type Language = 'en' | 'fr';

export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  fullDescription?: string;
  client: string;
  location: string;
  year: string;
  linkText?: string;
  accentColor?: string;
  type: 'laptop' | 'mobile';
  mockupContent: {
    siteTitle: string;
    headline: string;
    subtitle?: string;
    stats?: { label: string; value: string }[];
    tagline?: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  iconType: 'ribbon' | 'hemisphere' | 'starburst' | 'clover';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  role?: string;
  logoText?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
