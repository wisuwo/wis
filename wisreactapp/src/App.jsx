import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Navigation2 } from "./components/navigation2";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import Calendar from "./components/calendar";
import MeetTheTeam from "./components/teamexpanded";
import ImageGallery from "./components/imagegallery";
import { Join } from "./components/join";
import { Newsletter2 } from "./components/newsletter2";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

/* 
Here is the App component which serves as the main component for the website.
Here, all the components are imported and rendered in the correct order. The
App component is responsible for rendering the correct components based on the
current route. The App component also contains the logic for the loading screen
that is displayed when the website is first loaded or refreshed.

If you want to add a new section or separate page to the website, you should first
create a new component for that section or page. Then, you can import the new
component here and add a new Route element to render the new page.
*/ 

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
        <img src="img/icons/favicon.ico.png" className="loading-icon" alt="Loading symbol of a group of three molecules." title="Loading symbol of a group of three molecules."></img>
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
    <Join data={landingPageData.Join} />
    <Newsletter2 data={landingPageData.Newsletter2} />
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