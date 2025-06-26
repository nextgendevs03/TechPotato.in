import React from 'react';
import { Users, Award, Clock, Phone } from 'lucide-react';

const About: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1555DESIGN?text=Hi! I\'d like to know more about Aura Design Hub.', '_blank');
  };

  const features = [
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Expert Team",
      description: "Our certified interior designers bring years of experience and creativity to every project."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Award Winning",
      description: "Recognized for excellence in residential and commercial interior design across the region."
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-600" />,
      title: "Timely Delivery",
      description: "We respect your time and deliver projects on schedule without compromising on quality."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-amber-600">Aura Design Hub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating extraordinary spaces that inspire and transform lives for over 15 years
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Interior designer at work"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Spaces That Tell Your Story
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Aura Design Hub, we believe that great design goes beyond aesthetics. We create spaces 
              that reflect your personality, enhance your lifestyle, and inspire you every day. Our 
              holistic approach combines functionality with beauty to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From luxury residences to dynamic commercial spaces, we bring passion, expertise, and 
              attention to detail to every project. Our team works closely with you to understand 
              your vision and bring it to life beyond your expectations.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-colors duration-200"
            >
              <Phone size={20} />
              <span>Chat About Your Project</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;