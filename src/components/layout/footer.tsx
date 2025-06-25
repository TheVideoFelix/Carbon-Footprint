import React from 'react';

const Footer = () => {
    return (
        <footer className="sticky bottom-0 left-0 w-full bg-lime-950 z-0 h-[350px] flex items-center justify-center text-amber-50">
            <div className="max-w-[1100px] w-11/12 mx-auto">
                <div className="flex justify-between w-full text-2xl">
                    <div className="text-9xl flex font-bold ">C.F.</div>
                    <div className="text-right">
                        <span className="font-bold">Navigation</span>
                        <ul className="mr-2">
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Region</a></li>
                            <li><a href="#">Your stats</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mt-10">
                    <div className="flex gap-5 font-light">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                    <span>Made by TheVideoFelix</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;