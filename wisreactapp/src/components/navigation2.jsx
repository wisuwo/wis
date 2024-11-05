import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

export const Navigation2 = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const goBack = () => {
    window.history.back();
  }

  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark'>
      <div className="back">
        <button className="btn back-btn" onClick={goBack}>
          <img src="img/icons/back-arrow-white.png"></img>
        </button>
      </div>
      <div className='container'>
        <h1 className='navbar-brand' style={{margin: 0}}>
          Women in Science
        </h1>
      </div>
    </nav>
  );
};