import { Mail, Phone, MapPin, ArrowUp, Linkedin, Instagram, Facebook } from 'lucide-react';

// X (formerly Twitter) Icon Component
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useFooter, useContact, useSocial, useServices, useCompany } from '../hooks/useContent';

const Footer = () => {
  const footerContent = useFooter();
  const contactInfo = useContact();
  const socialLinks = useSocial();
  const services = useServices();
  const company = useCompany();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialIcons = [
    { icon: XIcon, href: socialLinks.x, label: 'X', color: 'hover:text-white' },
    { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
    { icon: Facebook, href: socialLinks.facebook, label: 'Facebook', color: 'hover:text-[#1877F2]' },
    { icon: Instagram, href: socialLinks.instagram, label: 'Instagram', color: 'hover:text-[#E4405F]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="gradient-bg-footer relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Logo size={48} animated={false} className="mb-6" />
            <p className="text-text-secondary mb-6 leading-relaxed">
              {footerContent.description}
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-text-muted transition-all duration-300 ${social.color} hover:border-primary/50`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-display font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerContent.quickLinks.map((link) => (
                <li key={link.id || link.name}>
                  <button
                    onClick={() => link.id && scrollToSection(link.id)}
                    className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm link-glow"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-display font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm link-glow text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-display font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-text-secondary hover:text-primary transition-colors group"
              >
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-sm">{contactInfo.address}</div>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
              >
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
              >
                <Mail className="text-primary flex-shrink-0" size={18} />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 border border-white/10 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-text-secondary text-sm">
                Subscribe to our newsletter for the latest tech insights and company updates.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary/50 text-white placeholder-text-muted text-sm min-w-[250px]"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-electric text-sm whitespace-nowrap"
              >
                <span>Subscribe</span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-text-muted text-sm">
              © {new Date().getFullYear()} {company.legalName}. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              {footerContent.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href || '#'} 
                  className="text-text-muted hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-background shadow-glow"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
};

export default Footer;
