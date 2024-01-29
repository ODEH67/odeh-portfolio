import '../cssFiles/footer.css';
import {NavLink} from "react-router-dom"
import { useTranslation } from 'react-i18next';


export default function Footer() {

    const { t } = useTranslation();

return (
    <section className="footer-section">
        <hr className="footer-separator"/>
            <div className="footer-div">
            <span id='footer-head'>{t('footer')}</span>
            {/*     <span className="footer_NavLinks">
                    <NavLink to="https://news.ycombinator.com/newsguidelines.html" >FB</NavLink> | 
                    <NavLink to="https://news.ycombinator.com/newsfaq.html" >X</NavLink> | 
                    <NavLink to="https://github.com/HackerNews/API" target="_blank">Instagram</NavLink> | 
                    <NavLink to="https://news.ycombinator.com/security.html">Tiktok</NavLink> | 
                    <NavLink to="https://www.ycombinator.com/legal/" target="_blank">LinkedIn</NavLink> |
                </span>*/}
            </div>
        </section>
)
}