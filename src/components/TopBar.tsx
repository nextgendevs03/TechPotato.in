import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

// X (formerly Twitter) Icon Component
const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { useContact, useSocial, useCompany } from '../hooks/useContent';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const contact = useContact();
  const social = useSocial();
  const company = useCompany();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: XIcon, href: social.x, label: 'X', color: 'hover:text-white' },
    { icon: Linkedin, href: social.linkedin, label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
    { icon: Facebook, href: social.facebook, label: 'Facebook', color: 'hover:text-[#1877F2]' },
    { icon: Instagram, href: social.instagram, label: 'Instagram', color: 'hover:text-[#E4405F]' },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-white/5 backdrop-blur-sm transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 gap-2 sm:gap-0">
          {/* Left side - Contact Info */}
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
            <a 
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors"
            >
              <Mail size={14} className="text-primary" />
              <span className="hidden sm:inline">{contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            
            <a 
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors"
            >
              <Phone size={14} className="text-primary" />
              <span className="hidden md:inline">{contact.phone}</span>
              <span className="md:hidden">Call</span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-text-secondary">
              <MapPin size={14} className="text-primary" />
              <span>{company.location}</span>
            </div>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-text-muted text-xs hidden md:inline">Follow us:</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-md text-text-muted transition-all duration-200 hover:bg-white/5 ${item.color}`}
                  aria-label={item.label}
                >
                  <item.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

