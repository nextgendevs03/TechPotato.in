import React from 'react';
import { Home, Building, Palette, Phone, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const handleWhatsAppClick = (service: string) => {
    window.open(`https://wa.me/1555DESIGN?text=Hi! I'm interested in your ${service} services.`, '_blank');
  };

  const services = [
    {
      icon: <Home className="w-12 h-12 text-amber-600" />,
      title: "Residential Design",
      description: "Transform your home into a personalized sanctuary with our comprehensive residential design services.",
      features: ["Living room design", "Bedroom styling", "Kitchen renovation", "Bathroom makeovers", "Full home design"],
      image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Building className="w-12 h-12 text-amber-600" />,
      title: "Commercial Design",
      description: "Create inspiring workspaces that boost productivity and reflect your brand identity.",
      features: ["Office design", "Retail spaces", "Restaurant interiors", "Hotel design", "Co-working spaces"],
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Palette className="w-12 h-12 text-amber-600" />,
      title: "Design Consultation",
      description: "Expert advice and guidance to help you make the right design decisions for your space.",
      features: ["Color consultation", "Space planning", "Furniture selection", "Lighting design", "Material sourcing"],
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive design solutions tailored to your unique needs and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <div className="p-8">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ArrowRight size={16} className="text-amber-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full flex items-center justify-center space-x-2 transition-colors duration-200"
                >
                  <Phone size={18} />
                  <span>Get Quote on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Looking for something specific? We offer custom design solutions for unique projects.
          </p>
          <button
            onClick={() => handleWhatsAppClick('Custom Design')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 transition-colors duration-200"
          >
            <span>Discuss Custom Project</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;