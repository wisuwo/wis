import React, { useState } from 'react';
import { Image } from "./image";

export const Merch = (props) => {
  return (
    <div id='merch' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Merchandise</h2>
          <p>
           Come purchase some of our exclusive WiS merchandise!<br />
           Select a piece of merch to be redirected to our purchase form.
          </p>
        </div>
        <div className='row'>
          <div className='merch-item'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-5 col-md-4 col-lg-3'>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdaLegZ3wQALxAeX7pEadiVRX5OzURmX0hh_7Oj0-UmodaSbw/viewform" target="_blank">
                    <Image title={d.title} smallImage={d.smallImage} />
                  </a>
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}

// ideas:

// idea 1:
// add photos and link to google form 

// idea 2: 
// add photos and put merch contact name into the sub paragraph
