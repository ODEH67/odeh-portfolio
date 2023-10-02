import myPhoto from '../img/myPhoto.og1.png';
import '../cssFiles/intro.css';



export default function Intro() {

    return (
        <section className="intro-section">
            <div className="intro-text-dev">
                <h4>Hallo,</h4>
                <h1>Ich bin <span id='span-special-color'>Odeh</span></h1>
                <h1>Web &lt;Dev&gt;</h1>
                <p>whatever blbalbalbabla b lbab lab balbaalb rt blab<br/> er a sdfsd sdgs e labl b lab lalblabal  </p>
            </div>
            <img className='intro-photo' src={myPhoto} alt='none'/>
        </section>
    );
}