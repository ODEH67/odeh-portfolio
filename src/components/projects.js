import "../cssFiles/projects.css"

import Html from '../img/html.png';
import Css from '../img/css.png';
import JavaScript from '../img/JavaScript-Logo.png';
import Reacto from '../img/react.png';
import NodeJs from '../img/node.png';
import MongoDB from '../img/mongodb.png';
import Mongoose from '../img/mongoose.png';
import ExpressJs from '../img/express-logo.png';


export default function Projects() {


    return (
        <section className="projects-section">
            <div className="projects-dev">
                <h1 className="projects-text-h1">Projects</h1>
                {/* <p id="projects-text-p">quick description ahfgh fhsrtzj ssrthr srth rh sr rthftth tzhrthrhr rthrth  rt tjzhh hrththt</p> */}
                <ul className="projects-menu">
                    <div className="projects-row-1">
                        <li id="projects-table-1">
                            <div>
                                <img src={Html} alt="Html"/>
                                <h4>Creative-Agency</h4>
                            </div>
                            <p>This Website was made by Odeh Lorem,sequi This Website was made by Odeh</p>
                        </li>
                        <li id="projects-table-2">
                            <div>
                                <img src={Css} alt="Css"/>
                                <h4>Cook-Book-HTML</h4>
                            </div>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                        <li id="projects-table-3">
                            <div>
                                <img src={JavaScript} alt="JavaScript"/>
                                <h4>ToDo_List</h4>
                            </div>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                        <li id="projects-table-4">
                            <div>
                                <img src={Reacto} alt="React"/>
                                <h4>React</h4>
                            </div>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                    </div>
                    <div className="projects-row-2">
                        <li id="projects-table-5">
                            <div>
                                <img src={NodeJs} alt="NodeJs"/>
                                <h4>ToDo_List_React</h4>
                            </div>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                        <li id="projects-table-6">
                            <div>
                                <img src={MongoDB} alt="MongoDB"/>
                                <h4>Cyber-rePort</h4>
                            </div>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                        <li id="projects-table-7">
                            <div>
                                <img src={Mongoose} alt="Mongoose"/>
                                <h4>Cook-Book-React</h4>
                            </div>
                            <p>This Website was made by Odeh Lorem,sequi This Website was made by Odeh</p>
                        </li>
                        <li id="projects-table-8">
                            <div>
                                <img src={ExpressJs} alt="expressJs"/>
                                <h4>Express.Js</h4>
                            </div>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                    </div>
                </ul>
            </div>
        </section>
    );
}