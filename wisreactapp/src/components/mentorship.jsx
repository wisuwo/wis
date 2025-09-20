import React, { useEffect } from "react";
import { Navigation2 } from "./navigation2";
import { Footer } from "./footer";

/* 
The Mentorship component displays information about
the three mentorship programs offered by the club.
*/
function Mentorship() {
  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="mentorship"
      style={{
        background: "linear-gradient(135deg, #eeb0cd 0%, #a67de0 50%, #7eb6ff 100%)", // 5% darker pastel
        minHeight: "100vh",
        paddingTop: "70px",
        paddingBottom: "50px",
        color: "#fff", // ALL TEXT WHITE
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      }}
      className="text-center"
    >
      <Navigation2 />

      <div className="container">
        <div className="section-title" style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "20px" }}>
            Mentorship Programs
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            The Women in Science club at Western University runs 3 different mentorship programs. 
            These programs pair students with experienced mentors in various STEM fields, offering guidance, support, and career advice. 
            It’s a great chance to build meaningful connections, get insight into different career paths, and develop skills to help you succeed academically and professionally. 
            In order to participate in our mentorship programs, you must register as a general member.
          </p>
        </div>

        {/* Graduate Program */}
        <div className="program" style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "15px" }}>
            Graduate Sisters in Science Mentorship Program
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "15px" }}>
            Join the Graduate Sisters in Science Mentorship Program and partner with a graduate student mentor who will help guide you through the ups and downs of your academic path! 
            You will also learn more about career and educational pathways as a graduate student, and gain advice on them as an undergraduate student. 
            This program is open to undergraduate students at Western University in year 2, 3, 4, and 5+! 
            If interested, please fill out the application form at this link by Friday, September 26, 2025.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScffNUPaZONSvQ76_rNwhZDd1iuMsqV6XP7nWDOLzzayIgncg/viewform"
            className="btn btn-custom btn-lg"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: "10px", marginBottom: "30px" }}
          >
            Apply Here
          </a>
        </div>

        {/* Sisters in Science */}
        <div className="program" style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "15px" }}>
            Sisters in Science Mentorship Program
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Join the Sisters in Science Mentorship Program as a 1st or 2nd year undergraduate student to be paired with an upper year undergraduate student! 
            You will be able to receive advice on academics, campus life, networking, and more through the mentorship program. 
            You will also be able to attend professional development events through the WiS club as a mentee or a mentor. 
            Applications will be opening soon, so follow @womeninscienceuwo on Instagram to keep an eye out for when those open!
          </p>
        </div>

        {/* Little Sisters */}
        <div className="program" style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "15px" }}>
            Little Sisters in Science Mentorship Program
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Join the Little Sisters in Science program as a mentor to high school students looking to pursue STEM careers or university programs! 
            As a mentor, you will be able to guide your mentee through university applications, attend professional development events at Western University together, and help uplift other women in science. 
            This program is open to undergraduate students at Western University to be mentors, and high school students to be mentees. 
            Applications will be opening soon, so follow @womeninscienceuwo on Instagram to keep an eye out for when those open!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mentorship;
