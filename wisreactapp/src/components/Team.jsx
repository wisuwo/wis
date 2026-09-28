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
    // VP comms
    {
      src: process.env.PUBLIC_URL + '/img/team/Emma.jpg', //done
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Emma Turgeon \nRole: Co-VP Communications\nProgram: 3rd year, Pathology & IMS",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Shaen.JPG', //done
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Shaen Goodall \nRole: Co-VP Communications\nProgram: 3rd year, Honours Double Major in Biology and Medical Sciences",
    },

    // VP externals
    {
      src: process.env.PUBLIC_URL + '/img/team/Kate.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Kate La \nRole: Co-VP Externals\nProgram: 3th year, Medical Cell Biology & IMS",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Melinda.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Melinda Gao \nRole: Co-VP Externals\nProgram: 4th Year General Science",
    },

    // VP internals 
    {
      src: process.env.PUBLIC_URL + '/img/team/Claudia.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Claudia Menezes \nRole: Co-VP Internals\nProgram: 3rd year, Honours Specialization in IMS + Major in Biochemistry",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Trinity.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Trinity Yan \nRole: Co-VP Internals\nProgram: 4th Year, Honours Specialization in IMS",
    },

    // VP Technology
    {
      src: process.env.PUBLIC_URL + '/img/team/Ramandeep.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Ramandeep Saini \nRole: VP Technology\nProgram: 3rd year, Computer Science",
    },

    // VP Advocacy
    {
      src: process.env.PUBLIC_URL + '/img/team/Areti.jpeg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Areti Koroneos \nRole: VP Advocacy\nProgram: 4th year, Honours Specialization in Biochemistry of Infection and Immunity",
    },

    // VPs Mentorship
    {
      src: process.env.PUBLIC_URL + '/img/team/Jessica.PNG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Jessica Kay \nRole: Co-VP Mentorship\nProgram: 4th Year, Honours Specialization in Health Science",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Sarina.jpeg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Sarina Kosari \nRole: Co-VP Mentorship\nProgram: 4th Year, Honours Specialization in Biology",
    },

    // VP outreach
    {
      src: process.env.PUBLIC_URL + '/img/team/Chloe.jpeg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Chloe Ng  \nRole: Co-VP Outreach\nProgram: 3rd Year, Honours Specialization in Biochemistry",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/Rory.jpeg',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Rory Paraskevopoulos\nRole: Co-VP Outreach\nProgram: 3rd year, Kinesiology",
    },

    //finance and admin
    {
      src: process.env.PUBLIC_URL + '/img/team/Harleen.JPG',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Harleen Multani \nRole: VP Finance and Admin\nProgram: 3rd year, CTF Nursing",
    },

    // sponsership
     {
      src: process.env.PUBLIC_URL + '/img/team/BrielleHall.jpeg', // blank picture
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Brielle Hall \nRole: VP Sponsorship\nProgram: 4th year, honours Spec in IMS and HBA at Ivey ",
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
