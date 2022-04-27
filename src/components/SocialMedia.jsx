import React from 'react';
import {FiFacebook} from "react-icons/fi";
import {FiGithub} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href="https://www.facebook.com/daniel.capcelea" target='_blank' rel='noreferrer'>
                <FiFacebook/>
            </a>
            <a href="https://github.com/DanielCapcelea" target='_blank' rel='noreferrer'>
                <FiGithub/>
            </a>
            <a href="https://www.linkedin.com/in/daniel-capcelea-078a3120b" target='_blank' rel='noreferrer'>
                < FiLinkedin/>
            </a>
        </div>
    );
};

export default SocialMedia;
