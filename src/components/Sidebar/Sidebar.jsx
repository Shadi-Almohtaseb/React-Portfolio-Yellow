import React from 'react';
import './Sidebar.css';

const Sidebar = ({ menuOpen , setMenuOpen }) => {
  return (
    <div className={'hamburguer ' + (menuOpen && 'active')} onClick={() => setMenuOpen(!menuOpen)}>
      <span className='line1 line'></span>
      <span className="line2 line"></span>
      <span className="line3 line"></span>
    </div>
  )
}

export default Sidebar
