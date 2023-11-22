import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Features } from "./components/features";
import { Merch } from "./components/merch";
import { Join } from "./components/join";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Gallery data={landingPageData.Gallery}/>
      <Features data={landingPageData.Features} />
      <Merch data={landingPageData.Merch} />
      <Join data={landingPageData.Join} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
