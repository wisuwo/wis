import React from 'react';
import { Link } from 'react-router-dom';

/* 
The Footer component is displayed on every page of the website. 
It provides a simple text crediting the Women in Science team for creating the website 
and includes a link to a feedback form.
*/

export const Footer = (props) => {
    return (
        <div id='footer'>
            <div className='container text-center'>
                <p>
                    {/* Credits to the Women in Science team */}
                    &copy; 2026 Created with Love by Women In Science at Western University. 
                    {' '}
                    {/* Link to the feedback form */}
                    Have any feedback? Let us know{' '}
                    <a 
                        href="https://forms.gle/qzJPGLW3aRCDWGNV9" 
                        target="_blank" 
                        rel="noopener noreferrer" // Ensures safe external linking
                    >
                        here
                    </a>.<br></br>
                    Contact us {' '}
                    <Link to="/contact">
                        here
                    </Link>.
                </p>
            </div>
        </div>
    );
};
