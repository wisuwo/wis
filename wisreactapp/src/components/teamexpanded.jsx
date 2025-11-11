// this jsx file is for the team information in the additional page outside of the homepage
import React from 'react';
import { Navigation2 } from "./navigation2";
import { useEffect } from "react";
import { Footer } from "./footer";

// includes team member information
const teamMembers = [
// Co-preidents
  {
    name: 'Julie Le',
    photo: 'img/team/Julie.JPG', 
    bio: 'I first joined WiS for the incredible mentorship opportunities, but I’ve stayed because of the amazing people I’ve met along the way.',
  },
  
  {
    name: 'Bobo Soong',
    photo: 'img/team/Bobo.JPG',
    bio: 'I joined WiS for the supportive community and amazing members!'
  },

  {
    name: 'Bahar M',
    photo: 'img/team/Bahar.jpg',
    bio: 'I joined WiS to meet people with similar interests, and have stayed because of the amazing friendships I’ve made over the years!'
  },

//VP comms
  {
    name: 'Shaen Goodall',
    photo: 'img/team/Shaen.JPG',
    bio: "I joined WiS to help create a space where like-minded women in science could feel comfortable, make friends, and help each other succeed!"
  },

  {
    name: 'Emma Turgeon',
    photo: 'img/team/Emma.jpg',
    bio: 'I joined WiS to support the vibrant community of women in the science field and to help foster meaningful connections that allow us to grow together.'
  },

  // VP Externals
  {
    name: 'Kate La',
    photo: 'img/team/Kate.JPG',
    bio: 'I joined WiS to meet and connect with other amazing like-minded women in science!'
  },

  {
    name: 'Melinda Gao',
    photo: 'img/team/Melinda.JPG',
    bio: 'I joined WiS to help create a welcoming environment where everyone can feel supported!'
  },

  // VP tech
  {
    name: 'Ramandeep',
    photo: 'img/team/Ramandeep.JPG',
    bio: 'I joined WiS to improve my technical skills on the technology team and to help build a community of women in science!'
  },

  //VP internals
  {
    name: 'Claudia Menezes',
    photo: 'img/team/Claudia.JPG',
    bio: "I joined WiS to connect with amazing women in science and build a welcoming community filled with exciting events!"
  },

  {
    name: 'Trinity Yan',
    photo: 'img/team/Trinity.JPG',
    bio: 'I joined WiS to support and grow alongside like-minded women, and to help build a welcoming community for everyone to join!'
  },

  // VP mentorship
  {
    name: 'Jessica Kay',
    photo: 'img/team/Jessica.PNG',
    bio: 'I joined  WiS to gain the mentorship I needed to grow, and I stay involved because I’m passionate about giving back, offering the same support to others that helped me along my journey.'
  },

  {
    name: 'Sarina Kosari',
    photo: 'img/team/Sarina.jpeg',
    bio: "I joined WiS as a mentor and fell in love with the empowerment the club brings to girls who want to pursue science, and now as Vice-President I am committed to expanding that impact on a larger scale!"
  },
// VP advocacy
  {
    name: 'Areti Koroneos',
    photo: 'img/team/Areti.jpeg',
    bio: "I joined WiS to connect and grow with a supportive community of women who share my goals, passions, and interests."
  },
// VP Outreach
  {
    name: "Chloe Ng",
    photo: 'img/team/Chloe.jpeg',
    bio: "I joined WiS because of its friendly and supportive environment. I love hearing the inspiring and diverse perspectives of people in the scientific field."
  },

  {
    name: "Rory Paraskevopoulos",
    photo: 'img/team/Rory.jpeg',
    bio: "I joined WiS to be part of a welcoming, empowering community for women in science, and to have inspiring role models to look up too!"
  },
// VP Finance 
  {
    name: "Harleen Multani",
    photo: 'img/team/Harleen.JPG',
    bio: "I joined WiS because I’m passionate about creating opportunities for women in science to share experiences, resources, and inspiration"
  },

// VP Sponsership
{
    name: "Brielle Hall",
    photo: 'img/team/Bri.JPG',
    bio: "I joined WiS to give girls at western a community where they can feel welcomed and supported. Bringing the events to WiS members gives me so much joy!"
  },
];

// Ensures the user starts at the top of the page
function MeetTheTeam() {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, [] );

  // returns the formatted page
  return (
    <>
    {/* Navigation bar at the top of the page */}
    <Navigation2 />

    {/* Main team section */}
    <div id='team' className='text-center'>
    <div className='container'>
    <div className='section-title'>
      <h2>Meet the Team</h2>
      </div>
      <div className="meet-the-team-two">

        {/* Loop through the teamMembers array to display each member */}
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-containers">

            {/* Display team member's photo */}
            <img className="team-member-imgs" src={process.env.PUBLIC_URL + '/' + member.photo} alt={`Photo of ${member.name}`} title={`Photo of ${member.name}`}  />
            
            {/* Display team member's name and bio */}
            <div className="member-infos">
            <h2 className="team-member-name">{member.name}</h2>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
    </div>
    </div>
    </div>

    {/* Footer at the bottom of the page */}
    <Footer />
    </>
  );
}


export default MeetTheTeam;

