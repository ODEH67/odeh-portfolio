import '../cssFiles/footer.css';
import {NavLink} from "react-router-dom"

export default function Footer() {

return (
    <section className="footer-section">
        <hr className="footer-separator"/>
            <div className="footer-div">
            <NavLink href="https://www.ycombinator.com/apply/">Applications are open for YC Summer 2023</NavLink>
                <span className="footer_NavLinks">
                    <NavLink to="https://news.ycombinator.com/newsguidelines.html" >Guidelines</NavLink> | 
                    <NavLink to="https://news.ycombinator.com/newsfaq.html" >FAQ</NavLink> | 
                    {/* <NavLink to="#" >Lists</NavLink> |  */}
                    <NavLink to="https://github.com/HackerNews/API" target="_blank">API</NavLink> | 
                    <NavLink to="https://news.ycombinator.com/security.html">Security</NavLink> | 
                    <NavLink to="https://www.ycombinator.com/legal/" target="_blank">Legal</NavLink> | 
                    <NavLink to="https://www.ycombinator.com/apply/" target="_blank">Apply to YC</NavLink> | 
                    <NavLink to="mailto:hn@ycombinator.com" target="_blank">Contact</NavLink>
                </span>
            </div>
        </section>
)
}