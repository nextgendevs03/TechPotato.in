import { Mail, Phone, MapPin, ArrowUp, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    'Custom Software Development',
    'Mobile App Development',
    'Cloud Solutions',
    'Cybersecurity Services',
    'Data Analytics',
    'Digital Transformation',
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-white' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-[#E4405F]' },
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
              Transforming businesses through innovative technology solutions, custom software development, 
              and digital transformation strategies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
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
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
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
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm link-glow text-left"
                  >
                    {service}
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
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-text-secondary hover:text-primary transition-colors group"
              >
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-sm">123 Tech Street</div>
                  <div className="text-sm">Digital City, TC 12345</div>
                </div>
              </a>

              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
              >
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>

              <a
                href="mailto:hello@techpotato.in"
                className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
              >
                <Mail className="text-primary flex-shrink-0" size={18} />
                <span className="text-sm">hello@techpotato.in</span>
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
              © {new Date().getFullYear()} TechPotato Softwares LLP. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-text-muted hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-text-muted hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-text-muted hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
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
