import { Code, Smartphone, Brain, Rocket, Palette, Wrench, ArrowRight, LucideIcon } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useServices } from '../hooks/useContent';
import type { Service } from '../types/content';
import ServiceModal from './ServiceModal';

const iconMap: Record<string, LucideIcon> = {
  Code, Smartphone, Brain, Rocket, Palette, Wrench,
};

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = useServices();

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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          iconBg: 'bg-primary/10',
          iconText: 'text-primary',
          border: 'border-primary/20 hover:border-primary/50',
          glow: 'hover:shadow-glow-sm',
          dot: 'bg-primary',
        };
      case 'secondary':
        return {
          iconBg: 'bg-secondary/10',
          iconText: 'text-secondary',
          border: 'border-secondary/20 hover:border-secondary/50',
          glow: 'hover:shadow-glow-purple',
          dot: 'bg-secondary',
        };
      case 'accent':
        return {
          iconBg: 'bg-accent/10',
          iconText: 'text-accent',
          border: 'border-accent/20 hover:border-accent/50',
          glow: 'hover:shadow-glow-orange',
          dot: 'bg-accent',
        };
      default:
        return {
          iconBg: 'bg-primary/10',
          iconText: 'text-primary',
          border: 'border-primary/20 hover:border-primary/50',
          glow: 'hover:shadow-glow-sm',
          dot: 'bg-primary',
        };
    }
  };

  const getIcon = (iconName: string): LucideIcon => iconMap[iconName] || Code;

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="services" className="py-20 gradient-bg-services relative overflow-hidden" ref={sectionRef}>
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-15" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <span className="inline-block px-3 py-1.5 rounded-full glass border border-secondary/30 text-secondary text-xs font-medium mb-4">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-text-secondary text-sm max-w-xl mx-auto">
              From AI-powered apps to MVPs — we build digital products that help you grow.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {services.map((service: Service, index: number) => {
              const colors = getColorClasses(service.color);
              const IconComponent = getIcon(service.icon);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative group rounded-xl p-5 glass border transition-all duration-300 ${colors.border} ${colors.glow}`}
                >
                  {/* Hover Gradient */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${
                        service.color === 'primary'
                          ? 'rgba(0, 240, 255, 0.08)'
                          : service.color === 'secondary'
                          ? 'rgba(168, 85, 247, 0.08)'
                          : 'rgba(249, 115, 22, 0.08)'
                      } 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${colors.iconBg}`}
                    >
                      <IconComponent className={`w-5 h-5 ${colors.iconText}`} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-xs mb-3 leading-relaxed line-clamp-2">{service.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {service.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                        <span
                          key={featureIndex}
                          className="text-[10px] text-text-muted flex items-center gap-1"
                        >
                          <div className={`w-1 h-1 rounded-full ${colors.dot}`} />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA - Opens Modal */}
                    <button
                      onClick={() => handleLearnMore(service)}
                      className={`flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 ${colors.iconText} hover:gap-2`}
                    >
                      Learn More
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-xl p-6 border border-white/10 text-center">
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Have a Project in Mind?
              </h3>
              <p className="text-text-secondary text-sm mb-4 max-w-xl mx-auto">
                Free consultation. Honest advice — even if we're not the right fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-electric text-sm px-5 py-2.5"
                >
                  <span>Get Free Consultation</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline text-sm px-5 py-2.5"
                >
                  <span>View Our Work</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      </section>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Services;
