import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {FiFacebook} from "react-icons/fi";
import {FiGithub} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <FiFacebook/>
            </div>
            <div>
                <FiGithub/>
            </div>
            <div>
                < FiLinkedin/>
            </div>
        </div>
    );
};

export default SocialMedia;
