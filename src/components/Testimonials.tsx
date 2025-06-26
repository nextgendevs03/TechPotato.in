import React from 'react';
import { Star, Quote, Phone } from 'lucide-react';

const Testimonials: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1555DESIGN?text=Hi! I read your testimonials and I\'m interested in your services.', '_blank');
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Aura Design Hub transformed our living space beyond our wildest dreams. Their attention to detail and creative vision made our house feel like a true home. The team was professional, responsive, and delivered on time."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The commercial design for our office space has completely changed how our team works and feels about coming to the office. Productivity is up, and clients are impressed with the professional atmosphere."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The restaurant interior design created by Aura Design Hub has become a talking point for our customers. The ambiance perfectly matches our brand, and we've seen increased customer satisfaction and return visits."
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Property Developer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Working with Aura Design Hub on multiple properties has been exceptional. Their designs help our properties sell faster and at premium prices. They understand market trends and buyer preferences perfectly."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-amber-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-600/20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-amber-50 p-8 rounded-lg inline-block">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-2">4.9/5</span>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Average rating from 200+ satisfied clients
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 transition-colors duration-200"
            >
              <Phone size={20} />
              <span>Join Our Happy Clients</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;