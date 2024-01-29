import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
// import Home from './pages/mainPage';
import Intro from './components/intro';
import Programs from './components/programs';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';


export default function App() {


  
  return (
      <div className="App">
        <Navbar />
        <Intro />
        <Programs />
        <Projects />
        <Contact />
        <Footer />
        {/* <Routes>*/}
          {/* <Route path="/" element={<Home />} /> */}
          {/*<Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
  );
}
