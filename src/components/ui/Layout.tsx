import React from 'react';
import { cn } from './Button';
import { motion, HTMLMotionProps } from 'framer-motion';

export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
        {...props}
      />
    );
  }
);
Container.displayName = 'Container';

export const Section = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-24 md:py-32 relative overflow-hidden', className)}
        {...props}
      />
    );
  }
);
Section.displayName = 'Section';

// Animation variants for Framer Motion
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export const Reveal = ({ children, className, delay = 0, ...props }: RevealProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } 
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
