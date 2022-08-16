import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';

//
//n-wrapper
const Navbar = ({ menuOpen , setMenuOpen }) => {
  return (
      <div className={'n-wrapper ' + (menuOpen && 'active')}>
        <div className="n-left">
            <div className="n-name">React.<span className='js'>Js</span></div>
            <Toggle />
        </div>
        <div className="n-right">
            {/* <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div> */}
            <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
      </div>
  )
}

export default Navbar
