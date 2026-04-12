import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/40 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-[#005ff0] text-foreground hover:bg-[#E7edf5] hover:text-[#151730] shadow-[0_0_18px_rgba(0,95,240,0.35)] hover:shadow-[0_0_28px_rgba(0,95,240,0.5)]',
      secondary: 'bg-surface-light text-foreground hover:bg-surface border border-foreground/10',
      outline: 'border border-primary-500/35 text-primary-200 hover:bg-primary-500/10',
      ghost: 'text-foreground/70 hover:text-foreground hover:bg-foreground/5',
    };
    
    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-sm',
      lg: 'h-14 px-8 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
