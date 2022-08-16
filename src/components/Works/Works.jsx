import React, { useContext } from 'react';
import './Works.css';

import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

import { themeContext } from '../../Context/Context';


import { motion } from "framer-motion";

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='works' id='works'>
            <div className="s-left">
                <span>My Works</span>
                <span>Brands & Clients</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing eit. Incidunt, labore reprehenderit inventore vel totam ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quisquam?</span>
                <button className='button s-button'>Hire Me</button>
                <div className='blur s-blur' style={{ background: '#ABF1FF94' }} ></div>
            </div>

            {/* Right Side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="Fiverr" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="Amazon" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="Shopify" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="Facebook" />
                    </div>
                    {/* background Circles */}
                    <motion.div
                        initial={{ left:'2rem' }}
                        whileInView={{ left:'-4rem' }}
                        viewport={{ margin: "-40px" }}
                        transition={{ duration: 3.5, type: "spring" }}
                        className="w-backCircle blueCircle" ></motion.div>
                    <div className="w-backCircle yellowCircle"></div>
                </motion.div>
            </div>
        </div>
    )
}

export default Works
