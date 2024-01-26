import '../cssFiles/NavBar.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Logo from "../img/logo.png";
import {TbMessage} from "react-icons/tb";
import {TiThMenu} from "react-icons/ti";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';


export default function NavBar() {

  const [selectedNavText, setSelectedNavText] = useState("");
  // const [isProjectsActive, setIsProjectsActive] = useState(false);
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
              <Link
                className="NavText" 
                // className={`NavText${selectedNavText === 'Home' ? ' selected' : ''}`} 
                // onClick={() => setSelectedNavText('Home')}
                to="Home"
                activeClass="selected"
                spy={true}
                smooth={true}
                duration={600}
                onSetActive={() => setSelectedNavText("")}
                >
                  Home
              </Link>
            </li>
            <li>
              <Link
                className="NavText" 
                // className={`NavText${selectedNavText === 'About' ? ' selected' : ''}`} 
                // onClick={() => setSelectedNavText('About')} 
                to="About"
                activeClass="selected"
                spy={true}
                smooth={true}
                duration={600}
                onSetActive={() => setSelectedNavText("")}
                >
                  About
              </Link>
            </li>
            <li>
              <Link
                // className="NavText" 
                // className={`NavText${isProjectsActive === true ? ' selected' : ''}`}
                className={`NavText${selectedNavText === 'Projects' ? ' selected' : ''}`} 
                // onClick={() => setSelectedNavText('Projects')} 
                to="Projects"
                // activeClass="selected"
                spy={true}
                smooth={true}
                duration={700}
                onSetActive={() => setSelectedNavText("Projects")}
                onSetInactive={() => setSelectedNavText("")}
                >
                  Projects
              </Link>
            </li>
            <li>
              <NavLink 
                className="NavText"
                // className={`NavText${selectedNavText === 'Lebenslauf' ? ' selected' : ''}`} 
                // onClick={() => setSelectedNavText('Lebenslauf')}
                to={"https://drive.google.com/file/d/1mB89NfKLp53L2fu5W-bc1x6SDpqKJ_ay/view?usp=sharing"}
                target="_blank"
                rel="noopener noreferrer"
                >C.V
                <FaExternalLinkAlt style={{fontSize: "13px", marginLeft: '8px'}}/>
              </NavLink>
            </li>
            <li >
            <Link
                to="Contact"
                activeClass="selected"
                spy={true}
                smooth={true}
                duration={800}
                onSetActive={() => setSelectedNavText("")}
                >
              <span className="contactBtn2">
                Contact
              </span>
              </Link>
            </li>
          </ul>
          <Link 
                className="contactBtn"
                to="Contact"
                activeClass="selected"
                spy={true}
                smooth={true}
                duration={800}
                onSetActive={() => setSelectedNavText("")}
                >
            <TbMessage style={{fontSize: "20px"}}/>
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}
