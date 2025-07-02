'use client';
import React from 'react';
import {tv, VariantProps} from "tailwind-variants";

const buttonVariants = tv({
    base: `
        inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base
        ring-offset-amber-50 transition-all duration-200 focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-lime-950 focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50 cursor-pointer
    `,
    variants: {
        variant: {
            box: `
                border-1 border-lime-900 bg-bg-transparent text-lime-900
                hover:bg-lime-900 hover:text-amber-50 
            `,
            text: `
                relative after:transition-all after:duration-150 text-lime-900
                after:ease-in-out hover:after:content-[''] hover:after:absolute
                hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-[-2px] hover:after:h-1
                hover:after:bg-lime-900 hover:after:w-3/4 after:w-0
            `,
        },
        size: {
            full: 'w-full p-3 text-2xl',
            icon: 'h-16 w-16 text-3xl',
            none:''
        },
        active: {
            true: '',
        }
    },
    compoundVariants: [
        {
            variant: 'text',
            active: true,
            className: `hover:text-lime-700 hover:after:bg-lime-700 font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-1 after:bg-lime-900 after:w-3/4`
        },
        {
            variant: 'box',
            active: true,
            className: 'bg-lime-900 text-amber-50 hover:bg-transparent hover:text-lime-900'
        }
    ],
    defaultVariants: {
        variant: 'text',
        size: 'none',
        active: false
    }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, active, ...props }, ref) => {
    return (
        <button
            className={buttonVariants({ variant, size, active, className })}
            ref={ref}
            {...props}
        >
                {props.children}
        </button>
    );
    }
);

export default Button;