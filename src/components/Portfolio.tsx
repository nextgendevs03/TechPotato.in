import { useState, useRef } from 'react';
import { ExternalLink, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { usePortfolio } from '../hooks/useContent';
import type { Project } from '../types/content';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const projects = usePortfolio();

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

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return { badge: 'bg-primary/20 text-primary border-primary/30', dot: 'bg-primary' };
      case 'secondary':
        return { badge: 'bg-secondary/20 text-secondary border-secondary/30', dot: 'bg-secondary' };
      case 'accent':
        return { badge: 'bg-accent/20 text-accent border-accent/30', dot: 'bg-accent' };
      default:
        return { badge: 'bg-primary/20 text-primary border-primary/30', dot: 'bg-primary' };
    }
  };

  return (
    <section id="portfolio" className="py-20 gradient-bg-portfolio relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full glass border border-accent/30 text-accent text-xs font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto">
            Real projects. Real results. See what we've built for our clients.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {projects.map((project: Project, index: number) => {
            const colors = getColorClass(project.color);
            const isActive = activeProject === index;
            
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className={`group rounded-xl overflow-hidden glass border transition-all duration-300 cursor-pointer ${
                  isActive ? 'border-primary/50 shadow-glow-sm' : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveProject(isActive ? null : index)}
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-semibold border ${colors.badge}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-full glass text-[10px] font-medium text-white flex items-center gap-1">
                      <Clock size={10} />
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-display font-bold text-white text-sm mb-1.5 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 rounded text-[10px] glass text-text-muted border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-[10px] text-primary">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Results */}
                  <div className="space-y-1">
                    {project.results.slice(0, 2).map((result, rIndex) => (
                      <div key={rIndex} className="flex items-center gap-1.5 text-[11px]">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expanded Details */}
                {isActive && project.challenge && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 pb-4 border-t border-white/10 pt-3"
                  >
                    <div className="space-y-2">
                      <div>
                        <span className="text-[10px] font-semibold text-text-muted uppercase">Challenge</span>
                        <p className="text-text-secondary text-xs">{project.challenge}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-text-muted uppercase">Solution</span>
                        <p className="text-text-secondary text-xs">{project.solution}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-text-secondary text-sm mb-4">Have a similar project in mind?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-electric inline-flex items-center gap-2 text-sm px-6 py-2.5"
          >
            <span>Start Your Project</span>
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default Portfolio;
