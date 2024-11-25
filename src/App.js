import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact'; 
import Footer from './components/Footer/Footer';


//import './App.scss'; // si le style est  global 
//   <Navbar/> <Home /> <About /> <Skills /> <Contact /> <Footer />
function App() {
  return (
    <div className="App">
      <Home />
      <About />
     
   
      </div>
  );
}

export default App;
