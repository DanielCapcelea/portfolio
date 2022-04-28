import React from 'react';
import './Header.scss';
import {motion} from "framer-motion";
import {images} from '../../constants';
import {AppWrap} from "../../wrapper";
import {Typewriter} from "react-simple-typewriter";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div className='app__header app__flex'>
            <motion.div
                whileInView={{x: [-150, 0], opacity: [0, 1]}}
                transition={{duration: 0.7}}
                className='app__header-info'
            >
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span> 👋 </span>
                        <div style={{marginLeft: 20}}>
                            <p className='p-text'>
                                Hello, I am
                            </p>
                            <h1 className='head-text'>
                                Daniel
                            </h1>
                        </div>
                    </div>

                    <div className='tag-cmp app-flex'>
                        <span>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={150}
                                deleteSpeed={100}
                                delaySpeed={3000}
                                words={['Front-End', 'Web Developer']}
                            />
                        </span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1, delayChildren: 0.5}}
                className='app__header-img'
            >
                <img src={images.profile} alt='profile_bg'/>

                <motion.img
                    whileInView={{scale: [0, 1]}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className='overlay_circle'
                    src={images.circle}
                    alt='profile_circle'
                />
            </motion.div>

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >
                {[images.javascript, images.react, images.html, images.css].map((circle, index) =>
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt='circle'/>
                    </div>
                )}
            </motion.div>

        </div>
    );
};

export default AppWrap(Header, 'home');
