import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import page from '../../img/page.png';
import MYCV from './CV.pdf';
import { motion } from 'framer-motion';
const transition = { duration: 2, type: 'spring' };

const Services = () => {


    return (
        <div className='services' id='services'>
            <div className="s-left">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, labore reprehenderit inventore vel totam ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quisquam?</span>
                <a href={MYCV} download> <button className='button s-button'>Download CV</button></a>
                <div className='blur s-blur' style={{ background: '#ABF1FF94' }} ></div>
                <div className='s-my-page'>
                    <span className='p-title'>Hover to see the hole page</span>

                    <div className='page' style={{ backgroundImage: "url(" + page + ")" }}>
                    </div>


                </div>
            </div>
            <div className="s-right">
                <div className="cards">
                    <motion.div
                        initial={{ right: "15rem" }}
                        whileInView={{ left: "22rem" }}
                        transition={transition}
                        style={{ left: '20rem' }}>
                        <Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Sketch, Photoshop, web Design, Deploy web pages.'} />
                    </motion.div>
                    <motion.div
                        initial={{ left: "-14rem", top: "18rem" }}
                        whileInView={{ left: "-7rem" }}
                        transition={transition}
                        style={{ top: '13rem', left: '-7rem' }}>
                        <Card emoji={Glasses} heading={'Developer'} detail={'html, css, JavaScript, React.js, Tailwind, Syncfusion , Material UI. '} />
                    </motion.div>
                    <motion.div
                        initial={{ top: "19rem", left: "25rem" }}
                        whileInView={{ left: "15rem", top: '25rem' }}
                        transition={transition}
                    style={{ top: '25rem', left: '15rem' }}>
                        <Card emoji={Humble} heading={'UI / UX'} detail={'Its a dymmy data in this React.js project, Think You.'} />
                    </motion.div>
                    <div className='blur s-blur2' style={{ background: 'var(--purple)', left: '0rem', top: '38rem' }} ></div>
                </div>
            </div>
        </div>
    )
}

export default Services
