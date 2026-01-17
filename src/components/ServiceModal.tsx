import { X, ArrowRight, CheckCircle, LucideIcon, Code, Smartphone, Brain, Rocket, Palette, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Service } from '../types/content';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Code, Smartphone, Brain, Rocket, Palette, Wrench,
};

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  if (!service) return null;

  const IconComponent = iconMap[service.icon] || Code;

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/30', gradient: 'from-primary to-cyan-400' };
      case 'secondary':
        return { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/30', gradient: 'from-secondary to-purple-400' };
      case 'accent':
        return { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/30', gradient: 'from-accent to-orange-400' };
      default:
        return { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/30', gradient: 'from-primary to-cyan-400' };
    }
  };

  const colors = getColorClasses(service.color);

  // Extended service benefits
  const benefits: Record<string, string[]> = {
    'Web Applications': ['Scalable architecture', 'SEO optimized', 'Mobile responsive', 'Fast loading'],
    'Mobile Apps': ['Native performance', 'Cross-platform', 'Offline capable', 'Push notifications'],
    'AI Integration': ['Smart automation', 'Natural language', 'Personalization', 'Cost reduction'],
    'MVP Development': ['Fast delivery', 'Investor-ready', 'User validated', 'Scalable base'],
    'UI/UX Design': ['Higher conversion', 'Better engagement', 'Brand consistent', 'User focused'],
    'Maintenance & Support': ['99.9% uptime', 'Security updates', 'Performance tuned', 'Priority support'],
  };

  const serviceBenefits = benefits[service.title] || benefits['Web Applications'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-md glass rounded-2xl border border-white/10 overflow-hidden"
            >
              {/* Header */}
              <div className={`relative p-5 ${colors.bg}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.bg} border ${colors.border}`}>
                    <IconComponent className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-display font-bold text-white pr-8">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary text-sm mt-1 line-clamp-2">{service.description}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-text-secondary" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Features */}
                <div>
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">What's Included</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Key Benefits</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle className={`w-3.5 h-3.5 ${colors.text} flex-shrink-0`} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="glass rounded-lg p-3 border border-white/5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">Typical timeline</span>
                    <span className={`font-semibold ${colors.text}`}>4-12 weeks</span>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-5 border-t border-white/10 bg-surface/50">
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="flex-1 btn-outline py-2.5 text-sm"
                  >
                    <span>Close</span>
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onClose();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 btn-electric flex items-center justify-center gap-2 py-2.5 text-sm"
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
