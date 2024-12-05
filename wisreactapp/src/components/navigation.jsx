import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // ScrollLink for smooth scrolling to sections on the home page
import { Link } from 'react-router-dom'; // Link for navigation to other pages

/* 
The Navigation component creates the navigation bar for the Home page. 
It includes:
1. Scroll links to different sections of the Home page.
2. Navigation links to other pages (e.g., Calendar, Photo Gallery, Contact).
3. A responsive layout with a collapsible menu for smaller screens.
*/

export const Navigation = (props) => {
  // Scroll to the top of the page
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark'>
      <div className='container'>
        {/* Brand link to the Home page */}
        <Link className='navbar-brand page-scroll' to='/' onClick={scrollToTop}>
          Women in Science
        </Link>

        {/* Toggle button for responsive navbar */}
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Navigation links */}
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            {/* Scroll link to the About section */}
            <li className='nav-item'>
              <ScrollLink
                className='nav-link page-scroll'
                to='about'
                spy={true} // Activates link highlighting when the section is in view
                smooth={true} // Enables smooth scrolling
                offset={-40} // Adjusts scrolling position to account for the navbar height
                duration={800} // Sets scrolling animation duration (in ms)
              >
                About
              </ScrollLink>
            </li>

            {/* Scroll link to the Team section */}
            <li className='nav-item'>
              <ScrollLink
                className='nav-link page-scroll'
                to='team'
                spy={true}
                smooth={true}
                offset={-40}
                duration={800}
              >
                Team
              </ScrollLink>
            </li>

            {/* Scroll link to the Events section */}
            <li className='nav-item'>
              <ScrollLink
                className='nav-link page-scroll'
                to='events'
                spy={true}
                smooth={true}
                offset={-40}
                duration={800}
              >
                Events
              </ScrollLink>
            </li>

            {/* Link to the Calendar page */}
            <li className='nav-item'>
              <Link className='nav-link' to='/calendar'>
                Calendar
              </Link>
            </li>

            {/* Link to the Photo Gallery page */}
            <li className='nav-item'>
              <Link className='nav-link' to='/imagegallery'>
                Photo Gallery
              </Link>
            </li>

            {/* Scroll link to the Join section */}
            <li className='nav-item'>
              <ScrollLink
                className='nav-link page-scroll'
                to='join'
                spy={true}
                smooth={true}
                offset={-40}
                duration={800}
              >
                Join
              </ScrollLink>
            </li>

            {/* Link to the Contact page */}
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
