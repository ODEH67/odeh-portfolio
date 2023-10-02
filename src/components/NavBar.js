import '../cssFiles/NavBar.css';
import { NavLink } from 'react-router-dom';
import Logo from "../img/logo.png";
import {TbMessage} from "react-icons/tb";
import {TiThMenu} from "react-icons/ti";
import { useState, useEffect, useRef } from 'react';

export default function NavBar() {

  const [selectedNavText, setSelectedNavText] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div className="Page">
      <header className="header">
        <nav className="navBar">
          <img className='NavBar-logo' src={Logo} alt='none'/>
          <span className={`menu-icon${isMenuOpen ? ' menu-icon-colored' : ''}`} onClick={toggleMenu} ref={menuRef}>
            <TiThMenu/>
          </span>
          {/* <ul className='NavMiddle'> */}
          <ul className={`NavMiddle${isMenuOpen ? ' active' : ''}`}>
            <li>
              <NavLink 
                className={`NavText${selectedNavText === 'Home' ? ' selected' : ''}`} 
                onClick={() => setSelectedNavText('Home')} 
                to="/">
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={`NavText${selectedNavText === 'About' ? ' selected' : ''}`} 
                onClick={() => setSelectedNavText('About')} 
                to="/contact">
                  About
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={`NavText${selectedNavText === 'Projects' ? ' selected' : ''}`} 
                onClick={() => setSelectedNavText('Projects')} 
                to="/contact">
                  Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={`NavText${selectedNavText === 'Portfolio' ? ' selected' : ''}`} 
                onClick={() => setSelectedNavText('Portfolio')} 
                to="/contact">
                  Portfolio
              </NavLink>
            </li>
            <li >
              <span className='contactBtn2'>
                Contact Me
              </span>
            </li>
          </ul>
          <button className='contactBtn'>
            <TbMessage style={{fontSize: "18px"}}/>
            Contact Me
          </button>
        </nav>
      </header>
    </div>
  );
}
