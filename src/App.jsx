import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./utils/Loading/Spinner";
import Navbar from "./layout/Navbar";
import HeroSection from "./pages/home/HeroSection/HeroSection";
import WhatWeDo from "./pages/home/WhatWeDo/WhatWeDo";
import OurServices from "./pages/home/OurService/OurService";
import AboutUs from "./pages/home/AboutUs/AboutUs";
import LogoSlider from "./pages/home/LogoSlider/LogoSlider";
import BigImage from "./pages/home/BigImage/BigImage";
import Contact from "./pages/home/Contact/Contact";
import ContactAddress from "./pages/home/ContactAddress/ContactAddress";
import Footer from "./layout/Footer";

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);

  return (
    <>
      {
        loading
          ?
          <div className="flex justify-center items-center w-screen h-screen">
            <Spinner />
          </div>
          :
          <>
              <Navbar />
              <main className="lg:px-24">
                <HeroSection />
                <WhatWeDo />
                <OurServices />
                <AboutUs />
                <LogoSlider />
                <BigImage />
                <Contact />
                <ContactAddress />
              </main>
              <Footer />
          </>
      }
    </>
  )
}

export default App
