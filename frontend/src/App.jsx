import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Carousel from "./components/FeedbackCarousel.jsx";
import Offerings from "./components/Offerings";
import Workshops from "./pages/Workshop";
import TerapieYoga from "./pages/TerapieYoga";
import Retreats from "./pages/Reatreats";
import KundaliniTantra from "./pages/KundaliniTantra";
import Courses from "./pages/Courses";
import AkashicReadings from "./pages/AkashicReadings";
import Carousel2 from "./components/Carousel2.jsx";
import Events from "./components/Events.jsx";
import Navbar from "./components/Navbar.jsx";
import CalatoriiSamanice from "./pages/CalatoriiSamanice.jsx";
import Clase from "./pages/Clase.jsx";
import SpiritualCoaching from "./pages/SpiritualCoaching.jsx";
import Medicine from "./pages/Medicine.jsx";
import MailchimpForm from "./components/MailchimpForm.jsx";
import Contact from "./components/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation only once when scrolling down
    });
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Rute publice */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/mailchimp" element={<MailchimpForm />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/events" element={<Events />} />

          {/* pages */}
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/terapieYoga" element={<TerapieYoga />} />
          <Route path="/retreats" element={<Retreats />} />
          <Route path="/KundaliniTantra" element={<KundaliniTantra />} />
          <Route path="/cursuri" element={<Courses />} />
          <Route path="/akashicReadings" element={<AkashicReadings />} />
          <Route path="/Calatorii-samanice" element={<CalatoriiSamanice />} />
          <Route path="/clase" element={<Clase />} />
          <Route path="/spiritual-coaching" element={<SpiritualCoaching />} />
          <Route path="/medicine-for-mind" element={<Medicine />} />

          {/* pages */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
