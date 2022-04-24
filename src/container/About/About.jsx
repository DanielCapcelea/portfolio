import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";
import './About.scss';
import {images} from '../../constants';

const abouts = [
    {title: 'Front-End Development', description: 'I am a Front-End Developer', imgUrl: images.about01},
    {title: 'Web Design', description: 'My passion is Web Design', imgUrl: images.about02},
    {title: 'UI/UX', description: 'I realise the importance of UI/UX', imgUrl: images.about03},
    {title: 'Web Animations', description: 'Very important skill', imgUrl: images.about04},
]

const About = () => {
    return (
        <>
            <h2 className='head-text'>
                I Know that <span>Good Development</span><br/> means <span>Good Business</span>
            </h2>

            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title}/>
                        <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
                        <h2 className='p-text' style={{marginTop: 10}}>{about.description}</h2>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default About;
