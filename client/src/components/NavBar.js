import '../cssFiles/NavBar.css';
import '../cssFiles/toggleButton.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Logo from "../img/logo.png";
import {TbMessage} from "react-icons/tb";
import {TiThMenu} from "react-icons/ti";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js';
import Toggle from "./toggleButton";



export default function NavBar() {

  const [selectedNavText, setSelectedNavText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [IsToggled, setIsToggled] = useState(true);
  // const [isProjectsActive, setIsProjectsActive] = useState(false);

  const menuRef = useRef(null);
  
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSwitch = () => {
    setIsToggled(!IsToggled);
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
                  {t('navbar.home')}
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
                  {t('navbar.about')}
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
                  {t('navbar.projects')}
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
                >
                {t('navbar.cv')}
                <FaExternalLinkAlt id="link-icon" style={{fontSize: "13px", marginLeft: '8px'}}/>
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
                {t('navbar.contact')}
              </span>
              </Link>
            </li>
            <span className="ToggleButton2">
            <Toggle isToggled={IsToggled} toggleSwitch={toggleSwitch} i18n={i18n}/>
            </span>
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
            {t('navbar.contact')}
          </Link>
          <span className="ToggleButton">
            <Toggle isToggled={IsToggled} toggleSwitch={toggleSwitch} i18n={i18n}/>
            </span>
        </nav>
      </header>
    </div>
  );
}
