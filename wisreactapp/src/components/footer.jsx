
import React from 'react';

/* 
Here is the Footer component, displayed on each page of the website. It consists of a
simple text crediting the Women in Science team for creating the website.
*/ 

export const Footer = (props) => {
    return (
        <div id='footer'>
            <div className='container text-center'>
                <p>
                    &copy; 2024 Created with Love by Women In Science at Western University.
                </p>
            </div>
        </div>
    );
}

