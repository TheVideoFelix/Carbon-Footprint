import React from 'react';
import {tv} from "tailwind-variants";

const containerStyles = tv({
    base: 'max-w-[1100px] w-11/12 mx-auto'
});

interface ContainerProps extends React.ComponentProps<'div'> {
    maxWidth?: number | string;
}

const Container = ({ className, children, maxWidth, style, ...props } : ContainerProps) => {
    return (
        <div
            className={containerStyles({ className })}
            style={{maxWidth, ...style}}
            {...props}>
            {children}
        </div>
    );
};

export default Container;