import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import './Skills.scss';
import {BsInfoCircle} from "react-icons/bs";

const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            setExperiences(data);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                <div className="app__skills-exp">

                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >

                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>

                            <motion.div className="app__skills-exp-works">

                                {experience.works.map((work, index) => (
                                    <div key={work.name}>
                                        <motion.div
                                            whileInView={{opacity: [0, 1]}}
                                            transition={{duration: 0.5}}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>

                                            <div
                                                style={{display: 'flex'}}>
                                                <p className="p-text">
                                                    {work.company}
                                                </p>
                                                <span style={{padding: '5px'}}>
                                                 <BsInfoCircle/>
                                                </span>
                                            </div>
                                            <p className="p-text">
                                                {work.link}
                                            </p>
                                        </motion.div>
                                        <ReactTooltip
                                            key={index}
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.8}}
                            className="app__skills-item app__flex"
                            key={skill.name}
                            drag={true}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        >
                            <div className="app__flex">
                                <img style={{pointerEvents: "none"}} src={urlFor(skill.icon)} alt={skill.name}/>
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg',
);