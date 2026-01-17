// Type definitions for site content

export interface Company {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  founded: string;
  location: string;
  workMode: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  displayValue?: string;
  label: string;
  color?: 'primary' | 'secondary' | 'accent';
}

export interface HeroContent {
  badge: string;
  headline: string;
  headlineGradient: string;
  subtitle: string;
  cta: {
    primary: string;
    secondary: string;
  };
  stats: Stat[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  bio: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

export interface AboutContent {
  badge: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  story: {
    title: string;
    titleHighlight: string;
    paragraphs: string[];
  };
  highlights: string[];
  stats: Stat[];
  values: Value[];
  team: TeamMember[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: 'primary' | 'secondary' | 'accent';
}

export interface Project {
  title: string;
  category: string;
  client?: string;
  duration?: string;
  description: string;
  image: string;
  technologies: string[];
  results: string[];
  challenge?: string;
  solution?: string;
  color: 'primary' | 'secondary' | 'accent';
}

// Alias for backward compatibility
export type PortfolioProject = Project;

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

export interface Partner {
  name: string;
  logo: string;
  subtitle?: string;
  url?: string;
}

export interface Client {
  name: string;
  logo: string;
  industry: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
  responseTime: string;
}

export interface SocialLinks {
  linkedin: string;
  x: string;
  facebook: string;
  instagram: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface JobOpening {
  title: string;
  type: string;
  experience: string;
}

export interface Careers {
  isHiring: boolean;
  headline: string;
  description: string;
  email: string;
  perks: string[];
  openings: JobOpening[];
}

export interface FooterLink {
  name: string;
  id?: string;
  href?: string;
}

export interface FooterContent {
  description: string;
  quickLinks: FooterLink[];
  legal: FooterLink[];
}

export interface SiteContent {
  company: Company;
  hero: HeroContent;
  about: AboutContent;
  services: Service[];
  portfolio: Project[];
  testimonials: Testimonial[];
  testimonialStats: Stat[];
  blog: BlogPost[];
  partners: Partner[];
  clients: Client[];
  contact: ContactInfo;
  social: SocialLinks;
  faq: FAQ[];
  careers: Careers;
  footer: FooterContent;
}

