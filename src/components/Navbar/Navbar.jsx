import React, {useState} from 'react';
import {HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import {images} from '../../constants';
import {GiHamburgerMenu} from "react-icons/gi";

import './Navbar.scss';

const menuItems = ['home', 'about', 'work', 'skills', 'contact'];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a
                    href={`#home`}
                >
                    <img src={images.logo1} alt="logo"/>
                </a>
            </div>
            <ul className="app__navbar-links">
                {menuItems.map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <a className='links' href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <GiHamburgerMenu onClick={() => setToggle(true)}/>

                {toggle && (
                    <motion.div
                        whileInView={{y: [-1000, 0]}}
                        transition={{duration: 0.85, ease: 'easeInOut'}}
                    >
                        <HiX className='closeIcon' onClick={() => setToggle(false)}/>
                        <ul>
                            {menuItems.map((item) => (
                                <li key={item}>
                                    <a className='links' href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;