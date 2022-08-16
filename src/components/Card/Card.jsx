import React, { useContext } from 'react';
import './Card.css';
import { themeContext } from '../../Context/Context';


const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='card' style={{background: darkMode ? '#1b1b1d' : ''}}>
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='c-button'>Show More</button>
    </div>
  )
}

export default Card
