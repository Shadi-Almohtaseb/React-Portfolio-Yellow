import React, { useContext } from 'react';
import './FloatingDiv.css';

import { themeContext } from '../../Context/Context';


const FloatingDiv = ({ image, text1, text2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='flatingdiv' style={{ backgroundColor: darkMode ? 'var(--orange)' : '' }}>
      <img src={image} alt="img" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  )
}

export default FloatingDiv
