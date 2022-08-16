import React from 'react';

import './Portfolio.css';
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOCc from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";

const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="Sidebar" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="Ecommerce" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="MusicApp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOCc} alt="HOC" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio
