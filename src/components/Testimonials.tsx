import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTestimonials, useTestimonialStats } from '../hooks/useContent';
import AnimatedCounter from './AnimatedCounter';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const testimonials = useTestimonials();
  const stats = useTestimonialStats();

  useEffect(() => {
    if (testimonials.length === 0) return;
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 gradient-bg-testimonials relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full glass border border-primary/30 text-primary text-xs font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto">
            Real feedback from real clients we've had the privilege to work with.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div variants={itemVariants} className="relative mb-10">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-xl p-6 border border-white/10 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Quote className="w-4 h-4 text-background" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4 pt-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base md:text-lg text-white text-center leading-relaxed mb-5 font-display">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/50">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentTestimonial].name)}&background=6366f1&color=fff`;
                      }}
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white text-sm">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-text-secondary text-xs">
                      {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-2 rounded-full glass border border-white/10 text-white hover:border-primary/50 transition-colors"
              >
                <ChevronLeft size={16} />
              </motion.button>

              <div className="flex gap-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-primary to-secondary w-5'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-2 rounded-full glass border border-white/10 text-white hover:border-primary/50 transition-colors"
              >
                <ChevronRight size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="glass rounded-xl p-5 border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="text-center"
              >
                <div
                  className={`text-2xl md:text-3xl font-display font-bold mb-1 ${
                    stat.color === 'primary'
                      ? 'text-primary text-glow'
                      : stat.color === 'secondary'
                      ? 'text-secondary text-glow-purple'
                      : 'text-accent text-glow-orange'
                  }`}
                >
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    displayValue={stat.displayValue}
                    duration={2000}
                  />
                </div>
                <div className="text-text-secondary text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
    </section>
  );
};

export default Testimonials;
