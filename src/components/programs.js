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
        <section className="expertise-section" id='About'>
            <div className="expertise-dev">
                <h1 className="expertise-text-h1">About Me</h1>
                <p id="expertise-text-p">quick description ahfgh fhsrtzj ssrthr srth rh sr rthftth tzhrthrhr rthrth  rt tjzhh hrththt</p>
                <ul className="expertise-menu">
                    <div id="expertise-row-1">
                            <h4>Frontend :</h4>
                        <div className='expertise-dev-1'>
                            <li id="expertise-table-1">
                                <div className='expertise-img-div-1'>
                                    <img id='img1' src={Html} alt="Html"/>
                                </div>
                                <div className='expertise-img-div-1'>
                                    <img id='img2' src={Css} alt="Css"/>    
                                </div>
                            </li>
                            <li id="expertise-table-2">
                                <div className='expertise-img-div-2'>
                                    <img id='img3' src={JavaScript} alt="JavaScript"/>
                                </div>
                                <div className='expertise-img-div-2'>
                                    <img id='img4' src={Reacto} alt="React"/>
                                </div>
                            </li>
                        </div>
                    </div>
                    <div id="expertise-row-2">
                            <h4>Backend & DataBase :</h4>
                        <div className="expertise-dev-2">
                            <li id="expertise-table-3">
                                <div className='expertise-img-div-3'>
                                    <img id='img5' src={NodeJs} alt="NodeJs"/>
                                </div>
                                <div className='expertise-img-div-3'>
                                    <img id='img6' src={MongoDB} alt="MongoDB"/>
                                </div>
                            </li>
                            <li id="expertise-table-4">
                                <div className='expertise-img-div-4'>
                                    <img id='img7' src={Mongoose} alt="Mongoose"/>
                                </div>
                                <div className='expertise-img-div-4'>
                                    <img id='img8' src={ExpressJs} alt="expressJs"/>
                                </div>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
        </section>
    );
}