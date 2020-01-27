import React from 'react';
import logo from './logo.svg';
import './App.css';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Stats from './components/Stats';
import Services from './components/Services';
import Cta from './components/Cta';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from './components/About';
import Intro from './components/Intro';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Cta />
      <Services />
      <Stats />
      <Contact />
      <Footer />
      <Preloader />
    </div>
  );
}

export default App;
