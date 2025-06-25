import React from 'react';
import {tv} from "tailwind-variants";

const containerStyles = tv({
    base: 'max-w-[1100px] w-11/12 mx-auto'
});

interface ContainerProps extends React.ComponentProps<'div'> {}

const Container = ({ className, children, ...props } : ContainerProps) => {
    return (
        <div className={containerStyles({ className })} {...props}>
            {children}
        </div>
    );
};

export default Container;