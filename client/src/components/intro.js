import myPhoto from '../img/myPhoto.og1rahmen.png';
import '../cssFiles/intro.css';
import { useTranslation } from 'react-i18next';



export default function Intro() {

    const { t } = useTranslation();

    return (
        <section className="intro-section" id='Home'>
            <div className="intro-text-dev">
                <h4>{t('intro.hello')},</h4>
                <h1>{t('intro.name')} <span id='span-special-color'>Odeh</span></h1>
                <h1>Web &lt;Dev&gt;</h1>
                <p></p>
            </div>
            <img className='intro-photo' src={myPhoto} alt='none'/>
        </section>
    );
}