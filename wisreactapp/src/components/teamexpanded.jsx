import React from 'react';
import { Navigation2 } from "./navigation2";
import { useEffect } from "react";
import { Footer } from "./footer";

const teamMembers = [
  {
    name: 'Bobo Soong',
    photo: 'img/team/Bobo 3.JPG', // Add an image file in the 'public' folder
    bio: 'I wanted to join a supportive community that offers opportunities for networking, advocacy, and personal and professional growth.',
  },
  
  {
    name: 'Cristina White',
    photo: 'img/team/Cristina.jpg',
    bio: 'To be part of and contribute to an incredible organization that provides community and support for students.'
  },

  {
    name: 'Emaan Rana',
    photo: 'img/team/Emaan .JPG',
    bio: 'To join a team of women who support one another while giving back to other students who needed the same guidance I did in my first year.'
  },

  {
    name: 'Sophia Yuan',
    photo: 'img/team/Copy of Sophia 3.JPG',
    bio: "To join a community of like minded women in science and support and uplift each other."
  },

  {
    name: 'Karolin Volodko',
    photo: 'img/team/Karolin 2.JPG',
    bio: 'To provide an open, inclusive, and empowering community for the Western community.'
  },

  {
    name: 'Harleen Multani',
    photo: 'img/team/Harleen 1.JPG',
    bio: 'To help create a supportive community that empowers women in STEM.'
  },

  {
    name: 'Kate La',
    photo: 'img/team/Kate.JPG',
    bio: 'I joined WiS because of the incredibly supportive community I found here and to be able to help empower and meet other women in the fields of science!'
  },

  {
    name: 'Diana Abdolmaleki',
    photo: 'img/team/Diana.jpg',
    bio: 'To help dismantle stereotypes about women and femininity and encourage others to challenge these outdated perceptions.'
  },

  {
    name: 'Trinity Yan',
    photo: 'img/team/Trinity 4.JPG',
    bio: "I joined WiS to meet new people and be a part of the supportive, welcoming, and encouraging community!"
  },

  {
    name: 'Brielle Hall',
    photo: 'img/team/Brielle 1.jpg',
    bio: 'I joined WiS to make an impact on girls studying science at Western and provide meaningful and fun events.'
  },

  {
    name: 'Julie Le',
    photo: 'img/team/Julie 3.JPG',
    bio: 'I joined Women in Science because of the incredible friendships, community, and support it provided me, and now I want to give back by fostering that same experience for others.'
  },

  {
    name: 'Bahar Mohammadi',
    photo: 'img/team/Bahar 1.jpg',
    bio: "I joined WiS to not only connect with others who share my passion for Science but also to build friendships with people who inspire and support one another."
  },

  {
    name: 'Lily Zhu',
    photo: 'img/team/Lily.jpg',
    bio: "I joined WiS to motivate myself with my goals and inspire others!"
  },

  {
    name: "Melinda Gao",
    photo: 'img/team/Melinda 2.JPG',
    bio: "I joined WIS to help create a supportive community where women can connect and empower each other."
  },

  {
    name: "Christina Paraskevopoulos",
    photo: 'img/team/Christina 2.JPG',
    bio: "Insert bio here."
  }

];

function MeetTheTeam() {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, [] );
  return (
    <>
    <Navigation2 />
    <div id='team' className='text-center'>
    <div className='container'>
    <div className='section-title'>
      <h2>Meet the Team</h2>
      </div>
      <div className="meet-the-team-two">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-containers">
            <img className="team-member-imgs" src={process.env.PUBLIC_URL + '/' + member.photo} alt={member.name} />
            <div className="member-infos">
            <h2 className="team-member-name">{member.name}</h2>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
    </div>
    </div>
    </div>
    <Footer />
    </>
  );
}

export default MeetTheTeam;