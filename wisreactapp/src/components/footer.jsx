
import React from 'react';

/* 
Here is the Footer component, displayed on each page of the website. It consists of a
simple text crediting the Women in Science team for creating the website, along with a link for feedback.
*/ 

export const Footer = (props) => {
    return (
        <div id='footer'>
            <div className='container text-center'>
                <p>
                    &copy; 2024 Created with Love by Women In Science at Western University. 
                    {' '}
                    Have any feedback? Let us know{' '}
                    <a href="https://forms.gle/qzJPGLW3aRCDWGNV9" target="_blank" rel="noopener noreferrer">
                        here
                    </a>.
                </p>
            </div>
        </div>
    );
}


