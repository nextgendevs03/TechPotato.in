import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useClients } from '../hooks/useContent';

const Clients = () => {
  const clients = useClients();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section 
      ref={sectionRef}
      className="py-16 relative overflow-hidden gradient-bg-1"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-secondary/30 text-secondary text-sm font-medium mb-4">
            Trusted By
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
            Brands We've <span className="gradient-text">Worked With</span>
          </h3>
        </motion.div>
      </div>

      {/* Marquee container - scrolling in reverse direction */}
      <div className="relative">
        {/* Gradient fade on left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        
        {/* Gradient fade on right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

        {/* Scrolling marquee - reverse direction */}
        <div className="flex overflow-hidden group">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-6 md:mx-10"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl glass border border-white/5 hover:border-secondary/30 transition-all duration-300 min-w-[160px] md:min-w-[200px]"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback to initials if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback initials */}
                    <div className="hidden w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-display font-bold text-white">
                        {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-white text-center">
                    {client.name}
                  </span>
                  <span className="text-xs text-text-muted mt-1">
                    {client.industry}
                  </span>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Duplicate for seamless loop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-duplicate-${index}`}
                className="flex-shrink-0 mx-6 md:mx-10"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl glass border border-white/5 hover:border-secondary/30 transition-all duration-300 min-w-[160px] md:min-w-[200px]"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-display font-bold text-white">
                        {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-white text-center">
                    {client.name}
                  </span>
                  <span className="text-xs text-text-muted mt-1">
                    {client.industry}
                  </span>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
    </section>
  );
};

export default Clients;

