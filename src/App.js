import React, { Fragment } from 'react';
import GlobalStyle from './globalStyles';
import NavBar from './components/Navbar';
import { Background } from './components/common/PageElement';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Works from './sections/Works';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Banner text="🚧 Website is still under construction! Sorry! 🚧"/>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Works />
      <Footer />
      <Background />
    </Fragment>
  );
}

export default App;
