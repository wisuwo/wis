import React from 'react';

/* 
Here is the About component. It is displayed on the Home page and consists of a
brief description of the club, as well as a mission statement. It also displays a 
group photo of club executives.
*/ 

export const About = (props) => {
  // Function to make the first word of a string bold
  const makeFirstWordBold = (str) => {
    const words = str.split(' ');
    if (words.length > 1) {
      return (
        <span>
          <strong>{words[0]}</strong> {words.slice(1).join(' ')}
        </span>
      );
    }
    return <strong>{str}</strong>;
  };

  // this returns the about us section in format 
  return (
    <div id="about">
      <div className="container">
        {/* formats content of the about us section*/}
        <h2>About Us</h2>
        <img src="/img/Website_Group_Photo.JPG" className="img-responsive" alt="Group photo of the WIS executive team." title="Group photo of the WIS executive team." />
        <p>{props.data ? props.data.paragraph : "loading..."}</p>
        <h3>Mission Statement</h3>
        <div className="about-text">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => (
                      <li key={`${d}-${i}`}>{makeFirstWordBold(d)}</li>
                    ))
                  : "loading"}
              </ul>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <ul>
                {props.data
                  ? props.data.Why2.map((d, i) => (
                      <li key={`${d}-${i}`}>{makeFirstWordBold(d)}</li>
                    ))
                  : "loading"}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
