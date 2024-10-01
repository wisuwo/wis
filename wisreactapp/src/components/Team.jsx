import React from 'react';
import { Link } from "react-router-dom";

export const Team = (props) => {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/img/team/Bobo 3.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Bobo Soong \nJob: Co-President\nProgram: 4th year Biology and Pharmacology",
    },
    
    {
      src: process.env.PUBLIC_URL + '/img/team/Cristina.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Cristina White \nJob: Co-President\nProgram: 4th year, Medical Sciences honours specialization IMS",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Emaan .JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Emaan Rana \nJob: Co-President\nProgram: 4th year, Honours Specialization in Pathology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Copy of Sophia 3.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Sophia Yuan \nJob: VP Technology\nProgram: 3rd year, HBA1 and Computer Science",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Karolin 2.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Karolin Volodko \nJob: VP Ethics and Advocacy\nProgram: 4th year, Honours Biochemistry and Genetics",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Harleen 1.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Harleen Multani \nJob: VP Design\nProgram: 4th year, Honours in Biology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Kate.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Kate La \nJob: VP Communications\nProgram: 2nd Year Medical Sciences",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Diana.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Diana Abdolmaleki \nJob: VP Communications\nProgram: 4th year, Medical Sciences with Honours Specialization in Microbiology & Immunology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Trinity 4.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Trinity Yan \nJob: VP Internals\nProgram: 3rd Year, Honours Specialization in Physiology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Brielle 1.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Brielle Hall \nJob: VP Internals\nProgram: 3rd year, Dual degree interdisciplinary medical sciences and HBA at Ivey",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Julie 3.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Julie Le \nJob: VP Mentorship\nProgram: 3rd Year, Honors Specialization Genetics",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Bahar 1.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Bahar Mohammadi \nJob: VP Mentorship\nProgram: 3rd Year, HSP Biology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Lily.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Lily Zhu \nJob: VP Externals\nProgram: 4th Year, IMS",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Melinda 2.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Melinda Gao \nJob: VP Externals\nProgram: 3rd year general sciences, double majoring in biology and environmental science",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Christina 2.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Christina Paraskevopoulos \nJob: VP Finance and Admin\nProgram: Insert Here",
    }

  ];


return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Meet the 2023/24 Team</h2>
          <p>
            Our amazing team of students seeking to eliminate gender disparity in science, technology, engineering, and mathematics!
          </p>
          <div className='calendar-link'>
          <Link to="/team"><button className="btn btn-custom btn-lg">Learn More</button></Link>
          </div>
        </div>

        <div className="team-members-container">
          {images.map((image, index) => (
            <div key={index} className="team-member">
              <img src={image.src} width={image.width} alt={`Team Member ${index + 1}`} />
              <p className="caption" dangerouslySetInnerHTML={{ __html: image.caption.replace(/\n/g, '<br>') }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
