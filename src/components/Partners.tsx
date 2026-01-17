import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { usePartners } from '../hooks/useContent';

const Partners = () => {
  const partners = usePartners();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section 
      ref={sectionRef}
      className="py-16 relative overflow-hidden bg-background"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-text-muted text-sm font-medium uppercase tracking-wider">
            Technologies We Work With
          </span>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade on left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Gradient fade on right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling marquee */}
        <div className="flex overflow-hidden group">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex animate-marquee group-hover:[animation-play-state:paused]"
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="w-24 h-28 md:w-28 md:h-32 flex flex-col items-center justify-center p-4 rounded-xl glass border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-2 opacity-90 hover:opacity-100 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-white text-center">
                    {partner.name}
                  </span>
                  {partner.subtitle && (
                    <span className="text-[10px] md:text-xs text-text-muted mt-0.5">
                      {partner.subtitle}
                    </span>
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Duplicate for seamless loop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex animate-marquee group-hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-duplicate-${index}`}
                className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="w-24 h-28 md:w-28 md:h-32 flex flex-col items-center justify-center p-4 rounded-xl glass border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-2 opacity-90 hover:opacity-100 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-white text-center">
                    {partner.name}
                  </span>
                  {partner.subtitle && (
                    <span className="text-[10px] md:text-xs text-text-muted mt-0.5">
                      {partner.subtitle}
                    </span>
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Partners;
