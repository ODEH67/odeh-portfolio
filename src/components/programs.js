// import myPhoto from '../img/javascript.png';
import '../cssFiles/Programs.css';


export default function Programs() {


    return (
        <section className="expertise-section">
            <div className="expertise-dev">
                <h1 className="expertise-text-h1">About Me</h1>
                <ul class="expertise-menu">
                    <div id="expertise-row-1">
                        <li id="expertise-table-1">
                            <img src="./photoshop/design-assets/png/screen.png" alt="SCREEN"/>
                            <h4>WEB DESGIN & DEVELOPMENT</h4>
                            <p>This Website was made by Odeh Lorem, ipsum dolor sit amet consectetur elit. sequi This Website was made by Odeh</p>
                        </li>
                        <li id="expertise-table-2">
                            <img src="./photoshop/design-assets/png/pen.png" alt="PEN"/>
                            <h4>BRANDING IDENTITY</h4>
                            <p>This Website was made by Odeh Lorem, ipsum dolor sit amet consectetur elit. sequi This Website was made by Odeh</p>
                        </li>
                        <li id="expertise-table-3">
                            <img src="./photoshop/design-assets/png/mobile.png" alt="MOBILE"/>
                            <h4>MOBILE APP</h4>
                            <p>This Website was made by Odeh Lorem, ipsum dolor sit amet consectetur elit. sequi This Website was made by Odeh</p>
                        </li>
                    </div>
                    <div id="expertise-row-2">
                        <li id="expertise-table-4">
                            <img src="./photoshop/design-assets/png/graph.png" alt="GRAPH"/>
                            <h4>SEARCH ENGINE OPTIMIZATION</h4>
                            <p>This Website was made by Odeh Lorem, ipsum dolor sit amet consectetur elit. sequi This Website was made by Odeh</p>
                        </li>
                        <li id="expertise-table-5">
                            <img src="./photoshop/design-assets/png/gameboy.png" alt="GAMEBOY"/>
                            <h4>GAME DEVELOPMENT</h4>
                            <p>This Website was made by Odeh Lorem, ipsum dolor sit amet consectetur elit. sequi This Website was made by Odeh</p>
                        </li>
                        <li id="expertise-table-6">
                            <img src="./photoshop/design-assets/png/heart.png" alt="HEART"/>
                            <h4>MADE WITH LOVE</h4>
                            <p>This Website was made by Odeh Lorem, ipsum dolor sit amet consectetur elit. sequi This Website was made by Odeh</p>
                        </li>
                    </div>
                </ul>
            </div>
            {/* <img className='Programs-photo' src={myPhoto} alt='none'/> */}
        </section>
    );
}