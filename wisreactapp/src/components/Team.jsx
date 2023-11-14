import React, { useState } from 'react';

export const Team = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          <p>
            Our amazing team of students seeking to eliminate gender disparity in science, technology, engineering, and mathematics!
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className={`col-md-3 col-sm-6 team ${hoveredIndex === i ? 'hovered' : ''}`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className='thumbnail'>
                    <div className={`flip-card ${hoveredIndex === i ? 'hovered' : ''}`}>
                      <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                          <img src={d.img} alt='...' className='team-img' />
                        </div>
                        <div className='flip-card-back'>
                          <img src={d.img} alt='...' className='team-img-back' />
                          <div class="overlay-text">
                            <div class="scroll">
                              <p>{d.year}</p>
                              <p>{d.why}</p>
                              <p>{d.goal}</p>
                              <p>{d.fact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};
