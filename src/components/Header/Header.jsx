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
                initial={{
                    x: '150vw',
                    transition: {type: 'spring', duration: 2},

                }}
                animate={{
                    x: 0,
                    scale: [0, 1],
                    transition: {type: 'spring', duration: 1},
                }}
                className='app__header-img'
            >
                <img src={images.profile} alt='profile_bg'/>

            </motion.div>

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >
                {[images.javascript, images.react, images.html, images.css].map((circle, index) =>
                    <motion.div
                        className='app__flex'
                        key={`circle-${index}`}
                        whileTap={{scale: 0.8}}
                        drag={true}
                        dragConstraints={{left: -50, right: 50, top: -100, bottom: 100}}
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0, transition: {duration: 1}}}
                    >
                        <img style={{pointerEvents: "none"}} src={circle} alt='circle'/>
                    </motion.div>
                )}
            </motion.div>

        </div>
    );
};

export default AppWrap(Header, 'home');
