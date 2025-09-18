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
    <div id="mentorship" className="text-center">
      <Navigation2 />

      <div className="container">
        <div className="section-title">
          <br />
          <br />
          <h2>Mentorship Programs</h2>
          <p>
            The Women in Science club at Western University runs 3 different
            mentorship programs. These programs pair students with experienced
            mentors in various STEM fields, offering guidance, support, and
            career advice. It’s a great chance to build meaningful connections,
            get insight into different career paths, and develop skills to help
            you succeed academically and professionally. In order to participate
            in our mentorship programs, you must register as a general member.
          </p>
        </div>

        <div className="program">
          <h3>Graduate Sisters in Science Mentorship Program</h3>
          <p>
            Join the Graduate Sisters in Science Mentorship Program and partner
            with a graduate student mentor who will help guide you through the
            ups and downs of your academic path! You will also learn more about
            career and educational pathways as a graduate student, and gain
            advice on them as an undergraduate student. This program is open to
            undergraduate students at Western University in year 2, 3, 4, and
            5+! If interested, please fill out the application form at this link
            by Friday, September 26, 2025.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScffNUPaZONSvQ76_rNwhZDd1iuMsqV6XP7nWDOLzzayIgncg/viewform"
            className="btn btn-custom btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Here
          </a>
        </div>

        <div className="program">
          <h3>Sisters in Science Mentorship Program</h3>
          <p>
            Join the Sisters in Science Mentorship Program as a 1st or 2nd year
            undergraduate student to be paired with an upper year undergraduate
            student! You will be able to receive advice on academics, campus
            life, networking, and more through the mentorship program. You will
            also be able to attend professional development events through the
            WiS club as a mentee or a mentor. Applications will be opening soon,
            so follow @womeninscienceuwo on Instagram to keep an eye out for
            when those open!
          </p>
        </div>

        <div className="program">
          <h3>Little Sisters in Science Mentorship Program</h3>
          <p>
            Join the Little Sisters in Science program as a mentor to high
            school students looking to pursue STEM careers or university
            programs! As a mentor, you will be able to guide your mentee through
            university applications, attend professional development events at
            Western University together, and help uplift other women in science.
            This program is open to undergraduate students at Western University
            to be mentors, and high school students to be mentees. Applications
            will be opening soon, so follow @womeninscienceuwo on Instagram to
            keep an eye out for when those open!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mentorship;

