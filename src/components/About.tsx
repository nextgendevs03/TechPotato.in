import { Target, Users, Award, Zap, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of talented professionals with expertise in cutting-edge technologies and a passion for solving complex business challenges.',
      color: 'secondary',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Excellence, integrity, innovation, and client success are at the core of everything we do, ensuring exceptional results every time.',
      color: 'accent',
    },
  ];

  const highlights = [
    'Agile Development Methodology',
    'End-to-End Project Delivery',
    'Dedicated Project Managers',
    'Transparent Communication',
    'Post-Launch Support',
    'Competitive Pricing',
  ];

  return (
    <section id="about" className="py-24 gradient-bg-1 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass border border-primary/30 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            About <span className="gradient-text">TechPotato Softwares</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We are a forward-thinking IT company dedicated to transforming businesses through 
            innovative technology solutions and digital excellence.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-display font-bold text-white mb-6">
              Our <span className="text-primary">Story</span>
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between technology and business success, TechPotato Softwares 
              has been at the forefront of digital innovation. We combine technical expertise with business acumen 
              to deliver solutions that not only meet current needs but also prepare our clients for future challenges.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Our team of skilled developers, designers, and consultants work collaboratively to understand your 
              unique requirements and deliver customized solutions that drive measurable results.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-electric"
            >
              <span>Work With Us</span>
            </motion.button>
          </motion.div>

          {/* Visual Column */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-px">
                <div className="w-full h-full bg-surface rounded-2xl" />
              </div>
              
              <div className="relative p-8">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="TechPotato Team Collaboration"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-4 text-center border border-primary/20"
                  >
                    <div className="text-3xl font-display font-bold text-primary mb-1">200+</div>
                    <div className="text-sm text-text-secondary">Projects</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-4 text-center border border-secondary/20"
                  >
                    <div className="text-3xl font-display font-bold text-secondary mb-1">98%</div>
                    <div className="text-sm text-text-secondary">Success Rate</div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass rounded-xl p-4 border border-accent/30"
            >
              <Zap className="w-8 h-8 text-accent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Values Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className={`relative rounded-2xl p-8 glass border transition-all duration-300 ${
                item.color === 'primary'
                  ? 'border-primary/20 hover:border-primary/50 hover:shadow-glow-sm'
                  : item.color === 'secondary'
                  ? 'border-secondary/20 hover:border-secondary/50 hover:shadow-glow-purple'
                  : 'border-accent/20 hover:border-accent/50 hover:shadow-glow-orange'
              }`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  item.color === 'primary'
                    ? 'bg-primary/10'
                    : item.color === 'secondary'
                    ? 'bg-secondary/10'
                    : 'bg-accent/10'
                }`}
              >
                <item.icon
                  className={`w-8 h-8 ${
                    item.color === 'primary'
                      ? 'text-primary'
                      : item.color === 'secondary'
                      ? 'text-secondary'
                      : 'text-accent'
                  }`}
                />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-4">{item.title}</h4>
              <p className="text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default About;
