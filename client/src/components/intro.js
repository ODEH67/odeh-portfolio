import myPhoto from '../img/myPhoto.og1rahmen.png';
import '../cssFiles/intro.css';



export default function Intro() {

    return (
        <section className="intro-section" id='Home'>
            <div className="intro-text-dev">
                <h4>Hello,</h4>
                <h1>I'm <span id='span-special-color'>Odeh</span></h1>
                <h1>Web &lt;Dev&gt;</h1>
                <p></p>
            </div>
            <img className='intro-photo' src={myPhoto} alt='none'/>
        </section>
    );
}