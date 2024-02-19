import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

export const Navigation2 = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark'>
      <div className='container'>
        <Link className='navbar-brand page-scroll' to='/' onClick={scrollToTop}>
          Women in Science
        </Link>
      </div>
    </nav>
  );
};
