import React, {useRef, useState} from 'react';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import {AppWrap, MotionWrap} from '../../wrapper';
import {client} from '../../client';
import './Footer.scss';
import {SocialMedia} from "../index";

const Footer = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const {name, email, message} = formData;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_czjj2dc', 'template_vzlulfo', form.current, '2o47fO93cW4zADTKF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h2 className="head-text">Contact Me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <a href="mailto:danielcapcelea@gmail.com" className="p-text">danielcapcelea@gmail.com</a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <form className="app__footer-form app__flex" ref={form} onSubmit={sendEmail}>
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="name" value={name}
                               onChange={handleChangeInput}/>
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="email" value={email}
                               onChange={handleChangeInput}/>
                    </div>
                    <div>
                     <textarea
                         className="p-text"
                         placeholder="Your Message"
                         value={message}
                         name="message"
                         onChange={handleChangeInput}
                     />
                    </div>
                    <button type="submit" className="p-text"
                            onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                </form>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}

            <motion.div
                whileInView={{opacity: [-0.1, 1]}}
                transition={{duration: 2}}
                className='scroll-to-top'
            >
                <a href={`#home`}>
                    <BsFillArrowUpSquareFill/>
                </a>
            </motion.div>

            <div className='positioning-footer'>
                <SocialMedia/>
                <div className="copyright">
                    <p>Daniel ?? {(new Date().getFullYear())}</p>
                </div>
            </div>

        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
);