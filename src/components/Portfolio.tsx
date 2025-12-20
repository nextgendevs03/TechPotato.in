import { useState, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: ['40% increase in sales', '60% faster checkout', '99.9% uptime'],
      color: 'primary',
    },
    {
      title: 'Healthcare Management System',
      category: 'Healthcare',
      description: 'Complete hospital management system with patient records, appointment scheduling, and billing integration.',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Java', 'PostgreSQL', 'Docker'],
      results: ['50% reduced paperwork', 'Improved patient care', 'HIPAA compliant'],
      color: 'secondary',
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'FinTech',
      description: 'Real-time financial data visualization and analytics platform for investment firms and trading companies.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'Redis', 'AWS'],
      results: ['Real-time insights', '30% faster decisions', 'Automated reporting'],
      color: 'accent',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication and advanced transaction features.',
      image: 'https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Blockchain', 'ML'],
      results: ['2M+ downloads', 'Bank-grade security', '4.8 app store rating'],
      color: 'primary',
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
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

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10 border-primary/30';
      case 'secondary':
        return 'text-secondary bg-secondary/10 border-secondary/30';
      case 'accent':
        return 'text-accent bg-accent/10 border-accent/30';
      default:
        return 'text-primary bg-primary/10 border-primary/30';
    }
  };

  return (
    <section id="portfolio" className="py-24 gradient-bg-portfolio relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass border border-accent/30 text-accent text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Featured Project Carousel */}
        <motion.div variants={itemVariants} className="relative mb-16">
          <div className="glass rounded-2xl p-4 md:p-8 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${getColorClass(
                      projects[currentProject].color
                    )}`}
                  >
                    {projects[currentProject].category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {projects[currentProject].description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 rounded-full text-sm glass border border-white/10 text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {projects[currentProject].results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2 text-text-secondary">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-electric flex items-center gap-2"
                  >
                    <span>View Case Study</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2 relative group">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-72 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-4 -right-4 glass rounded-xl p-3 border border-primary/30"
                  >
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-gradient-to-r from-primary to-secondary'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevProject}
                className="p-3 rounded-full glass border border-white/10 text-white hover:border-primary/50 transition-colors"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextProject}
                className="p-3 rounded-full glass border border-white/10 text-white hover:border-primary/50 transition-colors"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              onClick={() => setCurrentProject(index)}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                currentProject === index ? 'ring-2 ring-primary' : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${getColorClass(
                    project.color
                  )}`}
                >
                  {project.category}
                </span>
                <h4 className="text-white font-semibold">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-8 text-center border border-white/10"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-electric"
          >
            <span>Start Your Project</span>
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default Portfolio;
