import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./Sections/About/ani1.json')
    })
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
