import React, { useState } from 'react';
import { Phone, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1555DESIGN?text=Hi! I saw your portfolio and I\'m interested in your design services.', '_blank');
  };

  const categories = ['all', 'residential', 'commercial', 'consultation'];

  const projects = [
    {
      id: 1,
      title: "Modern Luxury Living Room",
      category: "residential",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Contemporary design with premium materials and elegant lighting"
    },
    {
      id: 2,
      title: "Executive Office Design",
      category: "commercial",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional workspace with modern aesthetics and functionality"
    },
    {
      id: 3,
      title: "Master Bedroom Suite",
      category: "residential",
      image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Serene and sophisticated bedroom design with custom furnishing"
    },
    {
      id: 4,
      title: "Restaurant Interior",
      category: "commercial",
      image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Warm and inviting dining space with ambient lighting"
    },
    {
      id: 5,
      title: "Kitchen Renovation",
      category: "residential",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern kitchen with sleek cabinets and premium appliances"
    },
    {
      id: 6,
      title: "Co-working Space",
      category: "commercial",
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Collaborative workspace design promoting creativity and productivity"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of beautifully designed spaces that showcase our expertise and creativity
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Like what you see? Let's create something amazing for your space too.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 transition-colors duration-200"
          >
            <Phone size={20} />
            <span>Start Your Project</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;