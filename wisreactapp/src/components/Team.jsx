// this jsx file is for the initial team information that appears on the homepage
import React from 'react';
import { Link } from "react-router-dom";

// includes information of each executive member for team section
export const Team = (props) => {
  const images = [
    {
      // first three are co presidents 
      src: process.env.PUBLIC_URL + '/img/team/Bobo.JPG', //Done
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Bobo Soong \nRole: Co-President\nProgram: 5th year, Health Science and Biology",
    },
    
    {
      src: process.env.PUBLIC_URL + '/img/team/Julie.JPG', //Done
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Julie Le \nRole: Co-President\nProgram: 4th year, Honour Specialization in Genetics",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Bahar.jpg', //Done
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Bahar M \nRole: Co-President\nProgram: 4th year, Honours Specialization in Biology",
    },
    // other VPs
    {
      src: process.env.PUBLIC_URL + '/img/team/Copy of Sophia 3.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Sophia Yuan \nRole: VP Technology\nProgram: 3rd year, HBA1 and Computer Science",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Karolin 2.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Karolin Volodko \nRole: VP Ethics and Advocacy\nProgram: 4th year, Honours Biochemistry and Genetics",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Harleen 1.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Harleen Multani \nRole: VP Design\nProgram: 4th year, Honours in Biology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Kate.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Kate La \nRole: VP Communications\nProgram: 2nd Year Medical Sciences",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Diana.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Diana Abdolmaleki \nRole: VP Communications\nProgram: 4th year, Medical Sciences with Honours Specialization in Microbiology & Immunology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Trinity 4.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Trinity Yan \nRole: VP Internals\nProgram: 3rd Year, Honours Specialization in Physiology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Brielle 1.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Brielle Hall \nRole: VP Internals\nProgram: 3rd year, Dual degree interdisciplinary medical sciences and HBA at Ivey",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Julie 3.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Julie Le \nRole: VP Mentorship\nProgram: 3rd Year, Honors Specialization Genetics",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Bahar 1.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Bahar Mohammadi \nRole: VP Mentorship\nProgram: 3rd Year, HSP Biology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Lily.jpg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Lily Zhu \nRole: VP Externals\nProgram: 4th Year, IMS",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Melinda 2.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Melinda Gao \nRole: VP Externals\nProgram: 3rd year general sciences, double majoring in biology and environmental science",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Christina 2.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Christina Paraskevopoulos \nRole: VP Finance and Admin\nProgram: 5th year, Dual Degree in Ivey HBA & HSP Genetics",
    }

  ];

// renders team section
return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Meet the Team</h2>
          <p>
            Our amazing team of students seeking to eliminate gender disparity in science, technology, engineering, and mathematics!
          </p>
          {/*includes button to another page with more information about the team members*/}
          <div className='calendar-link'>
          <Link to="/team"><button className="btn btn-custom btn-lg">Learn More</button></Link>
          </div>
        </div>

        {/* formats team member photos and captions */}
        <div className="team-members-container">
          {images.map((image, index) => (
            <div key={index} className="team-member">
              <img src={image.src} width={image.width} alt={`Photo of ${image.caption.split('\n')[0].replace('Name: ', '').trim()}, ${image.caption.split('\n')[1].replace('Role: ', '').trim()}`} />
              <p className="caption" dangerouslySetInnerHTML={{ __html: image.caption.replace(/\n/g, '<br>') }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
