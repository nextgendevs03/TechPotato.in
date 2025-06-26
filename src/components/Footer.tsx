import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1555DESIGN?text=Hi! I found you through your website.', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      url: 'https://facebook.com/auradesignhub',
      label: 'Facebook'
    },
    {
      icon: <Instagram size={20} />,
      url: 'https://instagram.com/auradesignhub',
      label: 'Instagram'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/company/auradesignhub',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter size={20} />,
      url: 'https://twitter.com/auradesignhub',
      label: 'Twitter'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-amber-400">Aura</span> Design Hub
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating extraordinary spaces that inspire and transform lives for over 15 years. 
              We specialize in luxury residential and commercial interior design solutions.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-gray-300">+1 (555) DESIGN</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-gray-300">hello@auradesignhub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-amber-400" />
                <span className="text-gray-300">123 Design Street, Creative City, CA 90210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Design</li>
              <li>Commercial Design</li>
              <li>Design Consultation</li>
              <li>Space Planning</li>
              <li>Home Renovation</li>
              <li>Custom Furniture</li>
            </ul>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-300">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-colors duration-200"
            >
              <Phone size={18} />
              <span>WhatsApp Us Now</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Aura Design Hub. All rights reserved. | 
            <span className="hover:text-amber-400 cursor-pointer"> Privacy Policy</span> | 
            <span className="hover:text-amber-400 cursor-pointer"> Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;