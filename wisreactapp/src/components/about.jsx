import React from 'react';

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

  return (
    <div id="about">
      <div className="container">
        <h2>About Us</h2>
        <img src="img/about.jpg" className="img-responsive" alt="Group photo of the WIS executive team." title="Group photo of the WIS executive team." />
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
