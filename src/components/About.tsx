import { Target, Users, Award, Zap, CheckCircle, Linkedin, Instagram, LucideIcon } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAbout } from '../hooks/useContent';
import AnimatedCounter from './AnimatedCounter';

// Icon mapping for JSON content
const iconMap: Record<string, LucideIcon> = {
  Target, Users, Award,
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const aboutContent = useAbout();

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

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8, transition: { duration: 0.3 } },
  };

  const getIcon = (iconName: string): LucideIcon => {
    return iconMap[iconName] || Target;
  };

  const founder = aboutContent.team[0];

  return (
    <section id="about" className="py-20 gradient-bg-1 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 rounded-full glass border border-primary/30 text-primary text-xs font-medium mb-4">
            {aboutContent.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {aboutContent.title} <span className="gradient-text">{aboutContent.titleGradient}</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm">
            {aboutContent.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Story Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              {aboutContent.story.title} <span className="text-primary">{aboutContent.story.titleHighlight}</span>
            </h3>
            {aboutContent.story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-text-secondary mb-4 leading-relaxed text-sm">
                {paragraph}
              </p>
            ))}

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {aboutContent.highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-xs text-text-secondary"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-electric text-sm px-6 py-2.5"
            >
              <span>Work With Us</span>
            </motion.button>
          </motion.div>

          {/* Founder Card + Stats */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-xl overflow-hidden">
              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-px">
                <div className="w-full h-full bg-surface rounded-xl" />
              </div>
              
              <div className="relative p-6">
                {/* Founder Card */}
                {founder && (
                  <div className="text-center mb-6">
                    <h4 className="text-sm font-display font-bold text-white mb-4">Meet the Founder</h4>
                    
                    {/* Profile Image */}
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center overflow-hidden mb-3 ring-2 ring-primary/20">
                      {founder.image && !founder.image.includes('placeholder') ? (
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <span className="text-2xl font-display font-bold text-white">
                          {founder.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>

                    {/* Name & Role */}
                    <h5 className="text-lg font-bold text-white mb-0.5">
                      {founder.name}
                    </h5>
                    <p className="text-primary text-xs font-semibold mb-2">
                      {founder.role}
                    </p>
                    <p className="text-text-secondary text-xs mb-3 max-w-xs mx-auto">
                      {founder.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-2 justify-center">
                      {founder.linkedin && (
                        <a 
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg glass border border-white/10 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all text-text-secondary"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {founder.instagram && (
                        <a 
                          href={founder.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg glass border border-white/10 hover:border-[#E4405F] hover:text-[#E4405F] transition-all text-text-secondary"
                        >
                          <Instagram size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {aboutContent.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      className={`glass rounded-lg p-3 text-center border ${
                        stat.color === 'primary' ? 'border-primary/20' : 'border-secondary/20'
                      }`}
                    >
                      <div className={`text-2xl font-display font-bold mb-0.5 ${
                        stat.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`}>
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={2000}
                        />
                      </div>
                      <div className="text-xs text-text-secondary">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-3 -right-3 glass rounded-lg p-2.5 border border-accent/30"
            >
              <Zap className="w-5 h-5 text-accent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Values Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aboutContent.values.map((item, index) => {
            const IconComponent = getIcon(item.icon);
            return (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className={`relative rounded-xl p-5 glass border transition-all duration-300 ${
                  item.color === 'primary'
                    ? 'border-primary/20 hover:border-primary/50 hover:shadow-glow-sm'
                    : item.color === 'secondary'
                    ? 'border-secondary/20 hover:border-secondary/50 hover:shadow-glow-purple'
                    : 'border-accent/20 hover:border-accent/50 hover:shadow-glow-orange'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    item.color === 'primary'
                      ? 'bg-primary/10'
                      : item.color === 'secondary'
                      ? 'bg-secondary/10'
                      : 'bg-accent/10'
                  }`}
                >
                  <IconComponent
                    className={`w-5 h-5 ${
                      item.color === 'primary'
                        ? 'text-primary'
                        : item.color === 'secondary'
                        ? 'text-secondary'
                        : 'text-accent'
                    }`}
                  />
                </div>
                <h4 className="text-base font-display font-bold text-white mb-2">{item.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default About;
