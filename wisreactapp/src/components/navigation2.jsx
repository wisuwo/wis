import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

/* 
Here is the second Navigation component for separate pages. This navigation bar
is used to avoid conflict with scroll links when viewing separate pages. It consists
of a simple back button which will take you back to the section of the home
page you were viewing previously.
*/ 

export const Navigation2 = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const goBack = () => {
    window.history.back();
  }

  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark'>
      <div className='container'>
        <div className="back">
          <button className="btn back-btn" onClick={goBack}>
            <img src="img/icons/back-arrow-white.png"></img>
          </button>
        </div>
        <h1 className='navbar-brand' style={{margin: 0}}>
          Women in Science
        </h1>
      </div>
    </nav>
  );
};