import React, { Fragment, useEffect, useState } from 'react';
import Loading from './components/Common/Loading';
import { Background } from './components/Common/PageElement';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import About from './sections/About';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Works from './sections/Works';
import { MenuProvider } from "./state";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <Fragment>
      {loading ?
        <Loading loading={loading} />
        :
        <>
          <GlobalStyle />
          <MenuProvider>
            <Navbar />
          </MenuProvider>
          <Hero />
          <About />
          <Experience />
          <Works />
          <Footer />
          <Background />
        </>
      }
    </Fragment>
  );
}

export default App;
