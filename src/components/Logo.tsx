import { motion } from 'framer-motion';

interface LogoProps {
  size?: number;
  animated?: boolean;
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 48, animated = true, showText = true, className = '' }: LogoProps) => {
  const sparkVariants = {
    animate: {
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const glowVariants = {
    animate: {
      filter: [
        'drop-shadow(0 0 8px rgba(0, 240, 255, 0.5))',
        'drop-shadow(0 0 16px rgba(0, 240, 255, 0.8))',
        'drop-shadow(0 0 8px rgba(0, 240, 255, 0.5))',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const LogoSVG = (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={animated ? glowVariants : undefined}
      animate={animated ? 'animate' : undefined}
      className="flex-shrink-0"
    >
      <defs>
        {/* Gradient for the potato body */}
        <linearGradient id="potatoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#A67C00" />
          <stop offset="100%" stopColor="#6B4E0A" />
        </linearGradient>
        
        {/* Electric glow gradient */}
        <linearGradient id="electricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#00f0ff" />
        </linearGradient>
        
        {/* Inner glow for brain circuits */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Stronger glow for sparks */}
        <filter id="sparkGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Potato Body - Organic shape */}
      <path
        d="M50 12C30 12 15 25 12 42C9 59 15 75 30 82C40 87 60 87 70 82C85 75 91 59 88 42C85 25 70 12 50 12Z"
        fill="url(#potatoGradient)"
        stroke="#5C4A0A"
        strokeWidth="1.5"
      />

      {/* Brain Neural Circuit Pattern */}
      <g filter="url(#glow)">
        {/* Central brain stem */}
        <path
          d="M50 30 L50 55"
          stroke="url(#electricGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Left hemisphere circuits */}
        <path
          d="M50 35 Q35 35 28 45"
          stroke="url(#electricGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M50 45 Q38 45 30 55"
          stroke="url(#electricGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M28 45 Q25 52 30 55"
          stroke="url(#electricGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Right hemisphere circuits */}
        <path
          d="M50 35 Q65 35 72 45"
          stroke="url(#electricGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M50 45 Q62 45 70 55"
          stroke="url(#electricGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M72 45 Q75 52 70 55"
          stroke="url(#electricGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Neural nodes */}
        <circle cx="50" cy="30" r="3" fill="#00f0ff" />
        <circle cx="28" cy="45" r="2.5" fill="#a855f7" />
        <circle cx="72" cy="45" r="2.5" fill="#a855f7" />
        <circle cx="30" cy="55" r="2.5" fill="#00f0ff" />
        <circle cx="70" cy="55" r="2.5" fill="#00f0ff" />
        <circle cx="50" cy="55" r="3" fill="#f97316" />
        
        {/* Secondary smaller circuits */}
        <path
          d="M28 45 L22 42"
          stroke="#00f0ff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M72 45 L78 42"
          stroke="#00f0ff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M30 55 L25 60"
          stroke="#a855f7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M70 55 L75 60"
          stroke="#a855f7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Electric Sparks */}
      <g filter="url(#sparkGlow)">
        {/* Top spark */}
        <motion.path
          d="M50 8 L52 3 L48 6 L50 2"
          stroke="#00f0ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={animated ? sparkVariants : undefined}
          animate={animated ? 'animate' : undefined}
        />
        
        {/* Left spark */}
        <motion.path
          d="M15 35 L10 33 L13 37 L8 36"
          stroke="#a855f7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={animated ? sparkVariants : undefined}
          animate={animated ? 'animate' : undefined}
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* Right spark */}
        <motion.path
          d="M85 35 L90 33 L87 37 L92 36"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={animated ? sparkVariants : undefined}
          animate={animated ? 'animate' : undefined}
          style={{ animationDelay: '1s' }}
        />

        {/* Bottom left spark */}
        <motion.path
          d="M20 70 L15 72 L18 68 L14 70"
          stroke="#00f0ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={animated ? sparkVariants : undefined}
          animate={animated ? 'animate' : undefined}
          style={{ animationDelay: '1.5s' }}
        />

        {/* Bottom right spark */}
        <motion.path
          d="M80 70 L85 72 L82 68 L86 70"
          stroke="#a855f7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={animated ? sparkVariants : undefined}
          animate={animated ? 'animate' : undefined}
          style={{ animationDelay: '0.75s' }}
        />
      </g>

      {/* Potato eyes (small dots for character) */}
      <circle cx="38" cy="65" r="2" fill="#5C4A0A" opacity="0.5" />
      <circle cx="55" cy="68" r="1.5" fill="#5C4A0A" opacity="0.5" />
    </motion.svg>
  );

  if (!showText) {
    return <div className={className}>{LogoSVG}</div>;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {LogoSVG}
      <div className="flex flex-col">
        <span className="text-xl font-display font-bold text-white leading-tight">
          Tech<span className="gradient-text">Potato</span>
        </span>
        <span className="text-xs text-text-secondary font-sans tracking-wider uppercase">
          Softwares
        </span>
      </div>
    </div>
  );
};

// Simplified static logo for favicon/loading
export const LogoMark = ({ size = 32 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="potatoGradientStatic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B6914" />
        <stop offset="100%" stopColor="#6B4E0A" />
      </linearGradient>
      <linearGradient id="electricGradientStatic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f0ff" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path
      d="M50 12C30 12 15 25 12 42C9 59 15 75 30 82C40 87 60 87 70 82C85 75 91 59 88 42C85 25 70 12 50 12Z"
      fill="url(#potatoGradientStatic)"
    />
    <path
      d="M50 30 L50 55 M50 35 Q35 35 28 45 M50 45 Q38 45 30 55 M50 35 Q65 35 72 45 M50 45 Q62 45 70 55"
      stroke="url(#electricGradientStatic)"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default Logo;

