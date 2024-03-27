import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Navigation2 } from "./components/navigation2";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import Calendar from "./components/calendar";
import MeetTheTeam from "./components/teamexpanded";
import ImageGallery from "./components/imagegallery";
import { Merch } from "./components/merch";
import { Join } from "./components/join";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [startFadeOut, setStartFadeOut] = useState(false);

  useEffect(() => {

    const fadeOutTimer = setTimeout(() => {
      setStartFadeOut(true);
    }, 1000);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    setLandingPageData(JsonData);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className={`loading-screen ${startFadeOut ? 'fade-out' : ''}`}>
        <img src="img/icons/favicon.ico.png" className="loading-icon"></img>
      </div>
    );
  }

  return (
    <Router>
      <div className="fade-in">
        <Routes>
          <Route path="/" element={<HomePage landingPageData={landingPageData} />} />
          <Route path="/team" element={<MeetTheTeam landingPageData={landingPageData} />} />
          <Route path="/contact" element={<Contact landingPageData={landingPageData} />} />
          <Route path="/calendar" element={<CalendarPage landingPageData={landingPageData} />} />
          <Route path="/imagegallery" element={<ImageGallery landingPageData={landingPageData} />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomePage = ({ landingPageData }) => (
  <>
    <Navigation />
    <Header data={landingPageData.Header} />
    <About data={landingPageData.About} />
    <Team data={landingPageData.Team} />
    <Gallery data={landingPageData.Gallery} />
    <Merch data={landingPageData.Merch} />
    <Join data={landingPageData.Join} />
    <Footer data={landingPageData.Footer} />
  </>
);

const CalendarPage = ({ landingPageData }) => {
  const [trigger, setTrigger] = useState(true);

  return (
    <>
      <Navigation2 />
      <Calendar data={landingPageData.Calendar} trigger={trigger} setTrigger={setTrigger} />
      <Footer data={landingPageData.Footer} />
    </>
  );
};


export default App;
