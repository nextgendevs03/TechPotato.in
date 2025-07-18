import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

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

  return (
    <footer className="bg-[#FAF3E0] text-[#3B2F2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#D2691E] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TP</span>
              </div>
              <span className="text-xl font-bold">Tech Potato Softwares</span>
            </div>
            <p className="text-[#3B2F2F]/80 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions, custom software development, and digital transformation strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#A0522D] hover:bg-[#8B4513] p-3 rounded-lg transition-colors duration-200">
                <Facebook size={20} color="white" />
              </a>
              <a href="#" className="bg-[#A0522D] hover:bg-[#8B4513] p-3 rounded-lg transition-colors duration-200">
                <Twitter size={20} color="white" />
              </a>
              <a href="#" className="bg-[#A0522D] hover:bg-[#8B4513] p-3 rounded-lg transition-colors duration-200">
                <Linkedin size={20} color="white" />
              </a>
              <a href="#" className="bg-[#A0522D] hover:bg-[#8B4513] p-3 rounded-lg transition-colors duration-200">
                <Instagram size={20} color="white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Blog', id: 'blog' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#3B2F2F]/80 hover:text-[#3B2F2F] transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Custom Software Development',
                'Mobile App Development',
                'Cloud Solutions',
                'Cybersecurity Services',
                'Data Analytics',
                'Digital Transformation'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-[#3B2F2F]/80 hover:text-[#3B2F2F] transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#D2691E]" size={20} />
                <div>
                  <div className="text-[#3B2F2F]/80">123 Tech Street</div>
                  <div className="text-[#3B2F2F]/80">Digital City, TC 12345</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-[#D2691E]" size={20} />
                <div>
                  <a href="tel:+15551234567" className="text-[#3B2F2F]/80 hover:text-[#3B2F2F] transition-colors duration-200">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#D2691E]" size={20} />
                <div>
                  <a href="mailto:hello@techpotato.com" className="text-[#3B2F2F]/80 hover:text-[#3B2F2F] transition-colors duration-200">
                    hello@techpotato.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-[#A0522D] pt-12 mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-[#3B2F2F]/80 mb-6">Subscribe to our newsletter for the latest tech insights and company updates.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-[#FFF7ED] border border-[#A0522D] text-[#3B2F2F] focus:outline-none focus:ring-2 focus:ring-[#D2691E]"
              />
              <button className="bg-[#A0522D] hover:bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#A0522D] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#3B2F2F]/60 text-sm mb-4 md:mb-0">
              © 2024 Tech Potato Softwares. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-[#3B2F2F]/60 hover:text-[#3B2F2F] text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-[#3B2F2F]/60 hover:text-[#3B2F2F] text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-[#3B2F2F]/60 hover:text-[#3B2F2F] text-sm transition-colors duration-200">
                Cookie Policy
              </a>
              <button
                onClick={scrollToTop}
                className="bg-[#A0522D] hover:bg-[#8B4513] text-white p-2 rounded-lg transition-colors duration-200"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;