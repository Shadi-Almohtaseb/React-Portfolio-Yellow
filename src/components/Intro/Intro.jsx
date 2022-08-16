import React, { useRef, useEffect, useContext } from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
//import FloatinDiv from "../FloatingDiv/FloatingDiv";

import { motion } from "framer-motion";
//import { Link } from "react-scroll";
import { themeContext } from '../../Context/Context';


import { init } from 'ityped';
const transition = { duration: 2, type: 'spring' };

const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { showCursor: true, backDelay: 650, backSpeed: 60, strings: ['Web Develober', 'Designer', 'Content Creator'] })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hi There,</span>
                    <span ><span className='im' style={{ color: darkMode ? 'white' : '' }}>Im</span> Shadi Almohtaseb</span>
                    <h1 style={{ color: darkMode ? 'white' : '' }}>Freelancer, <span ref={textRef} className='typing'></span></h1>
                </div>
                <button className='i-button button'>Hire Me</button>
                <div className="i-icons">
                    <img src={Github} alt="Github" />
                    <img src={LinkedIn} alt="LinkedIn" />
                    <img src={Instagram} alt="Instagram" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={boy} alt="boy" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt="glassesimoji" />
                <motion.div
                    initial={{ left: '-24%' }}
                    whileInView={{ left: '70%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '62%' }}
                    className="floatingDiv"
                    >
                    <FloatingDiv image={crown} text1={'Web'} text2={'Develober'} />
                </motion.div>
                <motion.div
                    initial={{ left: '50%' }}
                    whileInView={{ left: '3.3%' }}
                    transition={transition}
                    style={{ top: '23.4rem', left: '3.3%' }}
                    className="floatingDiv"
                    >
                    <FloatingDiv image={thumbup} text1={'Best Design'} text2={'Shadi'} />
                </motion.div>
                <div className='blur' style={{ background: 'rgb(238 210 255)' }}></div>
                <div className='blur' style={{ background: '#ff3', top: '17rem', left: '-9rem', width: '21rem', height: '11rem' }}></div>
                <div className='blur' style={{ background: 'rgb(150, 220, 230)', top: '0', left: '-9rem', width: '21rem', height: '11rem' }}></div>
            </div>
        </div>
    )
}

export default Intro
