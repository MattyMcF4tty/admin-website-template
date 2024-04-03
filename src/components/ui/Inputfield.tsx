import { cn } from '@/src/lib/utils/misc'
import { VariantProps, cva } from 'class-variance-authority'
import React, { InputHTMLAttributes, forwardRef } from 'react'

export const InputfieldVariants = cva('rounded-sm outline-none border-b border-black focus:bg-gray-100', {
    variants: {
        variant: {
            default: '',
        },
    },
    defaultVariants: {
        variant: 'default',
    }
})

interface InputfieldProps 
    extends InputHTMLAttributes<HTMLInputElement>, 
        VariantProps<typeof InputfieldVariants> {
    isLoading?: boolean
}

const Inputfield = forwardRef<HTMLInputElement, InputfieldProps>(({
    className, children, variant, isLoading, size, ...props}, ref) => {
    return (
        <input 
        className={cn(InputfieldVariants({ variant, className }))}
        ref={ref}
        {...props}
        />
    )
})

Inputfield.displayName = 'Inputfield';

export default Inputfield