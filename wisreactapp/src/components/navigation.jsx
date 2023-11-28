import React from 'react';

export const Navigation = (props) => {
  return (
    <nav className='navbar navbar-expand-lg fixed-top'>
      <div className='container'>
        <a className='navbar-brand page-scroll' href='#page-top'>
          Women in Science
        </a>

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
              <a className='nav-link page-scroll' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link page-scroll' href='#team'>
                Team
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link page-scroll' href='#events'>
                Events
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link page-scroll' href='#schedule'>
                Schedule
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link page-scroll' href='#merch'>
                Merch
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link page-scroll' href='#join'>
                Join
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link page-scroll' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
