import { cn } from '@/src/utils/misc';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

export const buttonVariants = cva(
  'active:scale-95 rounded inline-flex items-center justify-center text-sm font-medium transition-color focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-company-color-primary hover:bg-company-color-secondary text-white p-1',
        link: 'hover:underline underline-offset-4',
      },
      size: {
        default: 'text-lg ',
        small: 'text-xs',
        large: 'text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? 'Loading' : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
