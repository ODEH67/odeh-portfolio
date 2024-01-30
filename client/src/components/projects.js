import "../cssFiles/projects.css"
import { NavLink } from 'react-router-dom';
import Agency from '../img/Agency.png';
import CookBook from '../img/cook-book.png';
import IP_ADress from '../img/IP-adress.png';
import List from '../img/Lista.png';
import TweeX from '../img/tweeX.png';
import Cyber from '../img/Cyber-rePort.png';

// import Html from '../img/JavaScript-Logo.png';
// import Css from '../img/css.png';
// import Js from '../img/JavaScript-Logo.png';
// import Reacti from '../img/react.png';
// import Ejs from '../img/express-logo.png';
// import Mongoose from '../img/mongoose.png';
// import Node from '../img/node.png';
// import Mongodb from '../img/mongodb.png';
// import LeafLet from '../img/LeafLet.png';

import { useTranslation } from 'react-i18next';


export default function Projects() {

    const { t } = useTranslation();

    return (
        <section className="projects-section" id="Projects">
            <div className="projects-dev">
                <h1 className="projects-text-h1">{t('projects.title')}</h1>
                {/* <p id="projects-text-p">quick description ahfgh fhsrtzj ssrthr srth rh sr rthftth tzhrthrhr rthrth  rt tjzhh hrththt</p> */}
                <ul className="projects-menu">
                    <div className="projects-row-1">
                        <li id="projects-table-1">
                            <NavLink
                                to={"https://odeh67.github.io/Creative-Agency/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img src={Agency} alt="Agency"/>
                                <h4>Creative Agency</h4>
                            </NavLink>
                            <p>{t('projects.agency')}</p>
                            <div className="projects-table-programs">
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                        </li>
                        <li id="projects-table-2">
                            <NavLink
                                to={"https://odeh67.github.io/IP-ADRESS-API/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img src={IP_ADress} alt="IP_ADress"/>
                                <h4>Where am I</h4>
                            </NavLink>
                            <p>{t('projects.ip')}</p>
                            <div className="projects-table-programs">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>LeafLet</span>
                                <span>API</span>
                            </div>
                        </li>
                        <li id="projects-table-3">
                            <NavLink
                                to={"https://cook-book-client.vercel.app/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img src={CookBook} alt="CookBook"/>
                                <h4>Coding Food</h4>
                            </NavLink>
                            <p>{t('projects.cook-book')}</p>
                            <div className="projects-table-programs">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>ExpressJS</span>
                                <span>NodeJS</span>
                                <span>Mongoose</span>
                                <span>MongoDB</span>
                                <span>Cloudinary</span>
                                <span>API</span>
                            </div>
                        </li>
                        {/* <li id="projects-table-4">
                            <div>
                                <img src={Reacto} alt="React"/>
                                <h4>React</h4>
                            </div>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li> */}
                    </div>
                    <div className="projects-row-2">
                        <li id="projects-table-5">
                            <NavLink
                                to={"https://mini-tweety.vercel.app/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img src={TweeX} alt="TweeX"/>
                                <h4>TweeX</h4>
                            </NavLink>
                            <p>{t('projects.tweetX')}</p>
                            <div className="projects-table-programs">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>API</span>
                            </div>
                        </li>
                        <li id="projects-table-6">
                            <NavLink
                                // to={""}
                                // target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img src={List} alt="List"/>
                                <h4>There is a LIST!</h4>
                            </NavLink>
                            <p>{t('projects.todo')}</p>
                            <div className="projects-table-programs">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                            </div>
                        </li>
                        <li id="projects-table-7">
                            <NavLink id="Contact"
                                to={"https://cyber-re-port.vercel.app/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img src={Cyber} alt="Cyber"/>
                                <h4>Cyber-rePort</h4>
                                </NavLink>
                            <p>{t('projects.cyber')}</p>
                            <div className="projects-table-programs">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>API</span>
                            </div>
                        </li>
                        {/* <li id="projects-table-8">
                            <div>
                                <img src={ExpressJs} alt="expressJs"/>
                                <h4>Express.Js</h4>
                            </div>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li> */}
                    </div>
                </ul>
            </div>
        </section>
    );
}