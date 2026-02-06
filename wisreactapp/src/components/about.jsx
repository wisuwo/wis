import React from 'react';
import { Link } from 'react-router-dom';

export const About = ({ data }) => {
  const makeFirstWordBold = (str) => {
    const [firstWord, ...rest] = str.trim().split(' ');
    return rest.length > 0 ? (
      <span>
        <strong>{firstWord}</strong> {rest.join(' ')}
      </span>
    ) : (
      <strong>{firstWord}</strong>
    );
  };

  const itemStyle = {
    display: 'grid',
    gridTemplateColumns: '20px 1fr', // icon | text
    columnGap: '8px',
    marginBottom: '10px',
    alignItems: 'start',
  };

  const iconStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#007BFF',
  };

  const textStyle = {
    lineHeight: '1.5',
    textAlign: 'left', // 🔥 THIS IS THE KEY
  };

  const renderColumn = (items) =>
    items.map((item, index) => (
      <div key={index} style={itemStyle}>
        <span style={iconStyle}>⭐</span>
        <span style={textStyle}>
          {makeFirstWordBold(item)}
        </span>
      </div>
    ));

  return (
    <div id="about">
      <div className="container">
        <h2>About Us</h2>

        <img
          src="/img/Website_Group_Photo.JPG"
          className="img-responsive"
          alt="Group photo of the WIS executive team."
        />

        <p style={{ textAlign: 'left' }}>
          {data?.paragraph || 'loading...'}
        </p>

        <h3>Mission Statement</h3>

        <div className="about-text">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              {data ? renderColumn(data.Why) : 'loading...'}
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              {data ? renderColumn(data.Why2) : 'loading...'}
            </div>
          </div>
        </div>

        <div className="calendar-link">
          <Link to="/blog">
            <button className="btn btn-custom btn-lg">Blog</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
