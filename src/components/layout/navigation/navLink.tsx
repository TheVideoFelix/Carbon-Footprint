import React from 'react';
import Link from "next/link";
import {tv, type VariantProps} from "tailwind-variants";


const navLinkVariants = tv({
    base: `relative after:transition-all after:duration-150
        after:ease-in-out hover:after:content-[''] hover:after:absolute
        hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-[-2px] hover:after:h-1
        hover:after:bg-amber-50 hover:after:w-3/4 after:w-0`,

});

export interface INavLink {
    href: string;
    label: string;
    primary?: boolean;
}


interface NavLinkProps extends INavLink, VariantProps<typeof navLinkVariants> {}

const NavLink = ({href, label}: NavLinkProps) => {
    return (
        <Link href={href} className={navLinkVariants()}>
            {label}
        </Link>
    );
};

export default NavLink;