import { Code, Smartphone, Cloud, Shield, BarChart, Cog, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business needs and requirements.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration'],
      color: 'primary',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      color: 'secondary',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['AWS Solutions', 'Azure Integration', 'Cloud Migration', 'DevOps Services'],
      color: 'accent',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets and sensitive data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment'],
      color: 'primary',
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Reporting'],
      color: 'secondary',
    },
    {
      icon: Cog,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies to modernize your business operations.',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy', 'Change Management'],
      color: 'accent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          iconBg: 'bg-primary/10',
          iconText: 'text-primary',
          border: 'border-primary/20 hover:border-primary/50',
          glow: 'hover:shadow-glow',
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
          glow: 'hover:shadow-glow',
          dot: 'bg-primary',
        };
    }
  };

  return (
    <section id="services" className="py-24 gradient-bg-services relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/3 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/3 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass border border-secondary/30 text-secondary text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group rounded-2xl p-8 glass border transition-all duration-500 ${colors.border} ${colors.glow}`}
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${
                      service.color === 'primary'
                        ? 'rgba(0, 240, 255, 0.1)'
                        : service.color === 'secondary'
                        ? 'rgba(168, 85, 247, 0.1)'
                        : 'rgba(249, 115, 22, 0.1)'
                    } 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colors.iconBg}`}
                  >
                    <service.icon className={`w-8 h-8 ${colors.iconText}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 }}
                        className="text-text-secondary text-sm flex items-center gap-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${colors.iconText} hover:gap-3`}
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent p-px rounded-2xl">
            <div className="w-full h-full bg-surface rounded-2xl" />
          </div>

          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss how our expert services can help you achieve your technology goals and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-electric"
              >
                <span>Get Free Consultation</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                <span>View Case Studies</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
    </section>
  );
};

export default Services;
