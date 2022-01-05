import React, { Fragment } from 'react';
import Banner from './components/Banner';
import { Background } from './components/Common/PageElement';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import GlobalStyle from './globalStyles';
import About from './sections/About';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Works from './sections/Works';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Banner text="🚧 Website is still under construction! Sorry! 🚧" />
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
