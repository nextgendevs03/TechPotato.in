import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Tech Potato Softwares transformed our entire business operations. Their custom software solution increased our efficiency by 60% and the team was incredibly professional throughout the project.',
      company: 'TechStart Inc.'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, FinanceFlow',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Outstanding work on our financial analytics platform. The team delivered beyond our expectations with cutting-edge features and rock-solid security. Highly recommended!',
      company: 'FinanceFlow'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, HealthTech Solutions',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The healthcare management system they built for us is phenomenal. Patient satisfaction increased by 40% and our staff productivity improved significantly. Excellent partnership!',
      company: 'HealthTech Solutions'
    },
    {
      name: 'David Park',
      position: 'Operations Manager, RetailMax',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Their e-commerce solution helped us scale from a small business to processing thousands of orders daily. The platform is robust, user-friendly, and perfectly suited our needs.',
      company: 'RetailMax'
    },
    {
      name: 'Lisa Thompson',
      position: 'VP Technology, EduLearn',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Working with Tech Potato Softwares was a game-changer for our educational platform. Their innovative approach and attention to detail resulted in a product that exceeded all expectations.',
      company: 'EduLearn'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#FAF3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B2F2F] mb-6">What Our Clients Say</h2>
          <p className="text-xl text-[#5e4b3a] max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative mb-16">
          <div className="bg-[#FFF7ED] rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={24} />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-[#3B2F2F] leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center">
                <div className="font-bold text-[#3B2F2F] text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-[#5e4b3a]">{testimonials[currentTestimonial].position}</div>
                <div className="text-[#D2691E] text-sm font-semibold">{testimonials[currentTestimonial].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#eaddc8] text-[#3B2F2F] p-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#eaddc8] text-[#3B2F2F] p-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-[#D2691E]' : 'bg-[#d1bfa3]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-[#FFF7ED] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={16} />
                ))}
              </div>
              <p className="text-[#5e4b3a] mb-6 leading-relaxed">"{testimonial.text.slice(0, 150)}..."</p>
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[#3B2F2F]">{testimonial.name}</div>
                  <div className="text-[#7c6651] text-sm">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-[#FFF7ED] rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#D2691E] mb-2">98%</div>
              <div className="text-[#5e4b3a]">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#A0522D] mb-2">200+</div>
              <div className="text-[#5e4b3a]">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#8B4513] mb-2">50+</div>
              <div className="text-[#5e4b3a]">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#3B2F2F] mb-2">24/7</div>
              <div className="text-[#5e4b3a]">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#A0522D] text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-[#FFF7ED] mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#A0522D] hover:bg-[#8B4513] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Your Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
