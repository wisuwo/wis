import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import ScrollLink for smooth scrolling and scroll utility for scrolling to top
import { Link } from 'react-router-dom'; // Import Link for routing between pages

/* 
The Navigation2 component serves as the navigation bar for separate pages (not the Home page). 
This avoids conflicts with scroll links used for navigating sections of the Home page.
Features:
1. A "Back" button to return to the previous page or section.
2. A static brand title for consistent branding across pages.
*/

export const Navigation2 = (props) => {
  // Function to scroll to the top of the page (if needed in future scenarios)
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Function to navigate back to the previous page in the browser's history
  const goBack = () => {
    window.history.back();
  };

  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark'> {/* Fixed-top for a sticky navbar, navbar-dark for dark theme */}
      <div className='container'> {/* Container for responsive alignment */}
        {/* Back button to navigate to the previous page */}
        <div className="back">
          <button className="btn back-btn" onClick={goBack}> {/* Trigger goBack function on click */}
            <img 
              src="/img/icons/back-arrow-white.png" 
              alt="Back" /* Alt text for accessibility */
            />
          </button>
        </div>
        
        {/* Brand title */}
        <h1 
          className='navbar-brand' 
          style={{ margin: 0 }} /* Inline styling to remove default margin for cleaner layout */
        >
          Women in Science
        </h1>
      </div>
    </nav>
  );
};
