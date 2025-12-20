import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'TechPotato Softwares transformed our entire business operations. Their custom software solution increased our efficiency by 60% and the team was incredibly professional throughout the project.',
      company: 'TechStart Inc.',
    },
    {
      name: 'Michael Chen',
      position: 'CTO, FinanceFlow',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Outstanding work on our financial analytics platform. The team delivered beyond our expectations with cutting-edge features and rock-solid security. Highly recommended!',
      company: 'FinanceFlow',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, HealthTech Solutions',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The healthcare management system they built for us is phenomenal. Patient satisfaction increased by 40% and our staff productivity improved significantly. Excellent partnership!',
      company: 'HealthTech Solutions',
    },
    {
      name: 'David Park',
      position: 'Operations Manager, RetailMax',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Their e-commerce solution helped us scale from a small business to processing thousands of orders daily. The platform is robust, user-friendly, and perfectly suited our needs.',
      company: 'RetailMax',
    },
    {
      name: 'Lisa Thompson',
      position: 'VP Technology, EduLearn',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Working with TechPotato was a game-changer for our educational platform. Their innovative approach and attention to detail resulted in a product that exceeded all expectations.',
      company: 'EduLearn',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const stats = [
    { value: '98%', label: 'Client Satisfaction', color: 'primary' },
    { value: '10+', label: 'Projects Completed', color: 'secondary' },
    { value: '10+', label: 'Happy Clients', color: 'accent' },
    { value: '24/7', label: 'Support Available', color: 'primary' },
  ];

  return (
    <section id="testimonials" className="py-24 gradient-bg-testimonials relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [-30, 30, -30] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ y: [30, -30, 30] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass border border-primary/30 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div variants={itemVariants} className="relative mb-16">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-8 md:p-12 border border-white/10 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Quote className="w-6 h-6 text-background" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6 pt-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white text-center leading-relaxed mb-8 font-display">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/50"
                  />
                  <div className="text-left">
                    <div className="font-bold text-white text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-text-secondary">
                      {testimonials[currentTestimonial].position}
                    </div>
                    <div className="text-primary text-sm font-semibold">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 rounded-full glass border border-white/10 text-white hover:border-primary/50 transition-colors"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-primary to-secondary w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 rounded-full glass border border-white/10 text-white hover:border-primary/50 transition-colors"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mini Testimonials Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="glass rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-3">
                "{testimonial.text.slice(0, 120)}..."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-text-muted text-xs">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-8 border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div
                  className={`text-4xl font-display font-bold mb-2 ${
                    stat.color === 'primary'
                      ? 'text-primary text-glow'
                      : stat.color === 'secondary'
                      ? 'text-secondary text-glow-purple'
                      : 'text-accent text-glow-orange'
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-90" />
            <div className="relative p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-background mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-background/80 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help you achieve similar results for your business.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Get Your Free Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
    </section>
  );
};

export default Testimonials;
