import Html from '../img/html.png';
import Css from '../img/css.png';
import JavaScript from '../img/JavaScript-Logo.png';
import Reacto from '../img/react.png';
import NodeJs from '../img/node.png';
import MongoDB from '../img/mongodb.png';
import Mongoose from '../img/mongoose.png';
import ExpressJs from '../img/express-logo.png';
import '../cssFiles/Programs.css';


export default function Programs() {


    return (
        <section className="expertise-section">
            <div className="expertise-dev">
                <h1 className="expertise-text-h1">About Me</h1>
                <p id="expertise-text-p">quick description ahfgh fhsrtzj ssrthr srth rh sr rthftth tzhrthrhr rthrth  rt tjzhh hrththt</p>
                <ul class="expertise-menu">
                    <div id="expertise-row-1">
                        <li id="expertise-table-1">
                            <img src={Html} alt="Html"/>
                            <h4>HTML</h4>
                            <p>This Website was made by Odeh Lorem,sequi This Website was made by Odeh</p>
                        </li>
                        <li id="expertise-table-2">
                            <img src={Css} alt="Css"/>
                            <h4>CSS</h4>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                        <li id="expertise-table-3">
                            <img src={JavaScript} alt="JavaScript"/>
                            <h4>JavaScript</h4>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                        <li id="expertise-table-4">
                            <img src={Reacto} alt="React"/>
                            <h4>React</h4>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                    </div>
                    <div id="expertise-row-2">
                        <li id="expertise-table-5">
                            <img src={NodeJs} alt="NodeJs"/>
                            <h4>NodeJs</h4>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                        <li id="expertise-table-6">
                            <img src={MongoDB} alt="MongoDB"/>
                            <h4>MongoDB</h4>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                        <li id="expertise-table-7">
                            <img src={Mongoose} alt="Mongoose"/>
                            <h4>Mongoose</h4>
                            <p>This Website was made by Odeh Lorem,sequi This Website was made by Odeh</p>
                        </li>
                        <li id="expertise-table-8">
                            <img src={ExpressJs} alt="expressJs"/>
                            <h4>Express.Js</h4>
                            <p>This Website was made by Odeh Lorem, sequi This Website was made by Odeh</p>
                        </li>
                    </div>
                </ul>
            </div>
            {/* <img className='Programs-photo' src={myPhoto} alt='none'/> */}
        </section>
    );
}