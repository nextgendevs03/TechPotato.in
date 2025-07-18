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
    <footer className="bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">TP</span>
              </div>
              <span className="text-xl font-bold text-white">Tech Potato Softwares</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Transforming businesses through cutting-edge digital solutions and innovation.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl shadow-md transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-xl shadow-md transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-900 p-3 rounded-xl shadow-md transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-xl shadow-md transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Blog', 'Contact'].map((name, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(name.toLowerCase().replace(/\s/g, ''))}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Custom Software Development',
                'Mobile App Development',
                'Cloud Solutions',
                'Cybersecurity Services',
                'Data Analytics',
                'Digital Transformation'
              ].map((service, idx) => (
                <li key={idx} className="hover:text-white transition">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <div>
                  <div>123 Tech Street</div>
                  <div>Digital City, TC 12345</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+15551234567" className="hover:text-white transition">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:hello@techpotato.com" className="hover:text-white transition">
                  hello@techpotato.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 border-t border-gray-800 pt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6 text-sm">
            Subscribe to get our latest insights and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">© 2024 Tech Potato Softwares. All rights reserved.</div>
          <div className="flex gap-5 items-center">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full text-white transition"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;