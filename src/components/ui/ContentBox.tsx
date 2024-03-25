import { cn } from '@/src/lib/utils/misc'
import { VariantProps, cva } from 'class-variance-authority'
import React, { HTMLAttributes, forwardRef } from 'react'

export const contentBoxVariants = cva('bg-white p-2 rounded-md shadow-md', {
    variants: {
        variant: {
            default: '',
        },
        size: {
            default: '',
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
})

interface CanvasProps 
    extends HTMLAttributes<HTMLDivElement>, 
        VariantProps<typeof contentBoxVariants> {
    isLoading?: boolean
}

const ContentBox = forwardRef<HTMLDivElement, CanvasProps>(({
    className, children, variant, isLoading, size, ...props}, ref) => {
    return (
        <div 
        className={cn(contentBoxVariants({ variant, size, className }))}
        ref={ref}
        {...props}>
            {children}
        </div>
    )
})

ContentBox.displayName = 'ContentBox';

export default ContentBox