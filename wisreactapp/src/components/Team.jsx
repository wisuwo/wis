
import React from 'react';
import { Link } from "react-router-dom";

// Includes information of each executive member for the homepage team section
export const Team = (props) => {
  const images = [
    // Co-Presidents
    {
      src: process.env.PUBLIC_URL + '/img/team/Emma.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Emma Turgeon \nRole: Co-President\nProgram: 4th year",
    },
    {
      src: process.env.PUBLIC_URL + '/img/team/Chloe.jpeg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Chloe Ng \nRole: Co-President\nProgram: 4th year",
    },
    {
      src: process.env.PUBLIC_URL + '/img/team/Rory.jpeg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Rory Paraskevopoulos\nRole: Co-President\nProgram: 4th year",
    },

    // VP Technology
    {
      src: process.env.PUBLIC_URL + '/img/team/Ramandeep.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Ramandeep Saini \nRole: VP Technology\nProgram: 4th year, Computer Science",
    },

    // VP Advocacy
    {
      src: process.env.PUBLIC_URL + '/img/team/ananya.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Ananya Chopra \nRole: Co-VP Advocacy\nProgram: 3rd year",
    },
    {
      src: process.env.PUBLIC_URL + '/img/team/Shaen.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Shaen Goodall \nRole: Co-VP Advocacy\nProgram: 4th year",
    },

    // VP Sponsorship
    {
      src: process.env.PUBLIC_URL + '/img/team/bella.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Bella Jiang \nRole: VP Sponsorship\nProgram: 3rd year",
    },

    // VP Communications
    {
      src: process.env.PUBLIC_URL + '/img/team/kaitlyn.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Kaitlyn Welker \nRole: Co-VP Communications\nProgram: 4th year",
    },
    {
      src: process.env.PUBLIC_URL + '/img/team/eugin.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Eugenia Zhang \nRole: Co-VP Communications\nProgram: 3rd year",
    },

    // VP Internals
    {
      src: process.env.PUBLIC_URL + '/img/team/Alexandra.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Alexandra Savelli \nRole: Co-VP Internals\nProgram: 4th year",
    },
    {
      src: process.env.PUBLIC_URL + '/img/team/Kate_La.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Kate La \nRole: Co-VP Internals\nProgram: 4th year",
    },

    // VP Mentorship
    {
      src: process.env.PUBLIC_URL + '/img/team/jaidyn.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Jaidyn Oresti \nRole: Co-VP Mentorship\nProgram: 4th year",
    },
    {
      src: process.env.PUBLIC_URL + '/img/team/josie.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Josie-Ella Di Maria \nRole: Co-VP Mentorship\nProgram: 4th year",
    },

    // VP Externals
    {
      src: process.env.PUBLIC_URL + '/img/team/amanda.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Amanda Luca \nRole: Co-VP Externals\nProgram: 3rd year",
    },
    {
      src: process.env.PUBLIC_URL + '/img/team/Durgalakshmi .jpeg',
      width: 320,
      height: 174,
      isSelected: true,
      style: {
        width: '320px',
        height: '400px',
        objectFit: 'cover',
        objectPosition: 'center',
      },
      caption: "Name: Durgalakshmi Arivazhagan \nRole: Co-VP Externals\nProgram: 4th year",
    },

    // VP Finance
    {
      src: process.env.PUBLIC_URL + '/img/team/Harleen.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Harleen Multani \nRole: VP Finance\nProgram: Graduate",
    },

    // VP Outreach
    {
      src: process.env.PUBLIC_URL + '/img/team/Aliah.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Aliah Seegobin \nRole: Co-VP Outreach\nProgram: 5th year",
    },
    {
      src: process.env.PUBLIC_URL + '/img/team/Kate_ga.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Kate Gagnon \nRole: Co-VP Outreach\nProgram: 3rd year",
    },
  ];

  // Renders the team section
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Meet the Team</h2>
          <p>
            Our amazing team of students seeking to eliminate gender disparity
            in science, technology, engineering, and mathematics!
          </p>

          {/* Button linking to the full team page */}
          <div className="calendar-link">
            <Link to="/team">
              <button className="btn btn-custom btn-lg">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Displays team member photos and captions */}
        <div className="team-members-container">
          {images.map((image, index) => (
            <div key={index} className="team-member">
              <img
                src={image.src}
                width={image.width}
                height={image.height}
                style={image.style}
                alt={`Photo of ${
                  image.caption
                    .split('\n')[0]
                    .replace('Name: ', '')
                    .trim()
                }, ${
                  image.caption
                    .split('\n')[1]
                    .replace('Role: ', '')
                    .trim()
                }`}
              />

              <p
                className="caption"
                dangerouslySetInnerHTML={{
                  __html: image.caption.replace(/\n/g, '<br>'),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
