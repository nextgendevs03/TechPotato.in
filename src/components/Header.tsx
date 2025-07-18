import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-tp-light/95 backdrop-blur-sm shadow-md shadow-tp-muted'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-tp-btn rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TP</span>
            </div>
            <span className="text-xl font-bold text-tp-text">
              Tech Potato Softwares
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {[
              'home',
              'about',
              'services',
              'portfolio',
              'testimonials',
              'blog',
              'contact',
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-tp-text hover:text-tp-accent transition-colors duration-200 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">{/* WhatsApp button (optional) */}</div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-tp-light shadow-md rounded-b-lg">
            <nav className="flex flex-col space-y-4 p-4">
              {[
                'home',
                'about',
                'services',
                'portfolio',
                'testimonials',
                'blog',
                'contact',
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-tp-text hover:text-tp-accent transition-colors duration-200 capitalize font-medium text-left"
                >
                  {item}
                </button>
              ))}
              {/* WhatsApp button (optional) */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;