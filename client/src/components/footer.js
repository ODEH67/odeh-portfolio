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
                    <NavLink to="" >FB</NavLink> | 
                    <NavLink to="" >X</NavLink> | 
                    <NavLink to="" target="_blank">Instagram</NavLink> | 
                    <NavLink to="">Tiktok</NavLink> | 
                    <NavLink to="" target="_blank">LinkedIn</NavLink> |
                </span>*/}
            </div>
        </section>
)
}