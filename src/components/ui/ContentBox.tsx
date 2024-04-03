import { cn } from '@/src/lib/utils/misc'
import { VariantProps, cva } from 'class-variance-authority'
import React, { HTMLAttributes, forwardRef } from 'react'

export const contentBoxVariants = cva('bg-white rounded-md shadow-md', {
    variants: {
        variant: {
            default: '',
        },
        size: {
            default: '',
        },
        padding: {
            default: '',
            small: 'p-2',
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
        padding: 'default'
    }
})

interface ContentBoxProps 
    extends HTMLAttributes<HTMLDivElement>, 
        VariantProps<typeof contentBoxVariants> {
    isLoading?: boolean
}

const ContentBox = forwardRef<HTMLDivElement, ContentBoxProps>(({
    className, children, variant, isLoading, size, padding, ...props}, ref) => {
    return (
        <div 
        className={cn(contentBoxVariants({ variant, size, padding, className }))}
        ref={ref}
        {...props}>
            {children}
        </div>
    )
})

ContentBox.displayName = 'ContentBox';

export default ContentBox