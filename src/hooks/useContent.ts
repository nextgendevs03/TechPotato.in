import siteContent from '../content/siteContent.json';
import type {
  SiteContent,
  HeroContent,
  AboutContent,
  Service,
  Project,
  Testimonial,
  Stat,
  BlogPost,
  Partner,
  Client,
  ContactInfo,
  SocialLinks,
  FAQ,
  Careers,
  FooterContent,
  Company,
} from '../types/content';

// Type assertion for the imported JSON
const content = siteContent as SiteContent;

// Main hook to access all content
export const useContent = (): SiteContent => content;

// Individual section hooks for cleaner imports
export const useCompany = (): Company => content.company;
export const useHero = (): HeroContent => content.hero;
export const useAbout = (): AboutContent => content.about;
export const useServices = (): Service[] => content.services;
export const usePortfolio = (): Project[] => content.portfolio;
export const useTestimonials = (): Testimonial[] => content.testimonials;
export const useTestimonialStats = (): Stat[] => content.testimonialStats;
export const useBlog = (): BlogPost[] => content.blog;
export const usePartners = (): Partner[] => content.partners;
export const useClients = (): Client[] => content.clients;
export const useContact = (): ContactInfo => content.contact;
export const useSocial = (): SocialLinks => content.social;
export const useFAQ = (): FAQ[] => content.faq;
export const useCareers = (): Careers => content.careers;
export const useFooter = (): FooterContent => content.footer;

// Utility function to get a service by title
export const getServiceByTitle = (title: string): Service | undefined =>
  content.services.find((s) => s.title === title);

// Utility function to get featured blog post
export const getFeaturedPost = (): BlogPost | undefined =>
  content.blog.find((post) => post.featured);

// Utility function to get blog posts by category
export const getBlogByCategory = (category: string): BlogPost[] =>
  content.blog.filter((post) => post.category === category);

// Default export
export default useContent;

