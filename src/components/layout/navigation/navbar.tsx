import React from 'react';
import NavLink, { INavLink } from "@/components/layout/navigation/navLink";

const links: INavLink[] = [
    { label: "How it works", href: "/#howItWorks"},
    { label: "Region", href: "/"},
    { label: "Your stats", href: "/dashboard"}
];

const Navbar = () => {
    return (
        <nav className="h-14  w-full flex items-center justify-around p-5 bg-lime-950 text-amber-50">
            <div className="text-3xl font-bold">Carbon</div>
            <ul className="flex gap-5 font-bold">
                {links.map((link, index) => (
                    <li className="" key={index}>
                        <NavLink href={link.href} label={link.label} primary={link.primary} />
                    </li>
                ))}

            </ul>
        </nav>
    );
};

export default Navbar;