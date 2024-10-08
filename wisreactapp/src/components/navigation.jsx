import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

export const Navigation = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark'>
      <div className='container'>
        <Link className='navbar-brand page-scroll' to='/' onClick={scrollToTop}>
          Women in Science
        </Link>

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

        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <ScrollLink
                className='nav-link page-scroll'
                to='about'
                spy={true}
                smooth={true}
                offset={-40}
                duration={800}
              >
                About
              </ScrollLink>
            </li>
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

            {/* New Calendar Link */}
            <li className='nav-item'>
              <Link className='nav-link' to='/calendar'>
                Calendar
              </Link>
            </li>

            {/* New Photo Gallery Link */}
            <li className='nav-item'>
              <Link className='nav-link' to='/imagegallery'>
                Photo Gallery
              </Link>
            </li>

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
            <li className='nav-item'>
              <ScrollLink
                className='nav-link page-scroll'
                to='join'
                spy={true}
                smooth={true}
                offset={-40}
                duration={800}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
