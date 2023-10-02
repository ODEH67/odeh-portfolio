import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
// import Home from './pages/mainPage';
import Contact from './pages/contact';
import Intro from './components/intro';
import Programs from './components/programs';

export default function App() {
  
  return (
      <div className="App">
        <Navbar />
        <Intro />
        <Programs />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}
