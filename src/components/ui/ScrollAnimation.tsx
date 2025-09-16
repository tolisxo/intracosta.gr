import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInDown' | 'scaleIn' | 'slideInUp' | 'stagger';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

const animations: Record<string, Variants> = {
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  fadeInLeft: {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  fadeInRight: {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  fadeInDown: {
    hidden: { 
      opacity: 0, 
      y: -60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  slideInUp: {
    hidden: { 
      opacity: 0, 
      y: 100,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
};

const childVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = '',
  staggerChildren = false,
  staggerDelay = 0.1
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    delay
  });

  const selectedAnimation = animations[animation];
  const finalVariants = staggerChildren ? {
    ...selectedAnimation,
    visible: {
      ...selectedAnimation.visible,
      transition: {
        ...selectedAnimation.visible?.transition,
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  } : selectedAnimation;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerChildren ? finalVariants : selectedAnimation}
      className={className}
    >
      {staggerChildren ? (
        <motion.div variants={childVariants}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default ScrollAnimation;
