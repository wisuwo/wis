
// This JSX file is for the team information in the additional page outside of the homepage

import React, { useEffect } from 'react';
import { Navigation2 } from "./navigation2";
import { Footer } from "./footer";

// Includes information for each executive member
const teamMembers = [
  // Co-Presidents
  {
    name: 'Emma Turgeon',
    photo: 'img/team/Emma.jpg',
    bio: 'I joined WiS to support the vibrant community of women in the science field and to help foster meaningful connections that allow us to grow together.',
    bagItem: 'I always have the Ole Henrikson lip balm in my bag😊'
  },
  
  {
  name: 'Chloe Ng',
  photo: 'img/team/Chloe.jpeg',
  bio: "I joined WiS because of its friendly and supportive environment. I love hearing the inspiring and diverse perspectives of people in the scientific field.",
  bagItem: 'A claw clip!!'
  },
  {
    name: 'Rory Paraskevopoulos',
    photo: 'img/team/Rory.jpeg',
    bio: "I joined WiS to be part of a welcoming, empowering community for women in science, and to have inspiring role models to look up too!",
    bagItem: ''
  },

  // VP Technology
  {
    name: 'Ramandeep Saini',
    photo: 'img/team/Ramandeep.JPG',
    bio: 'I joined WiS to improve my technical skills on the technology team and to help build a community of women in science!',
    bagItem: 'My laptop!'
  },

  // VP Advocacy
  {
  name: 'Ananya Chopra',
  photo: 'img/team/ananya.JPG',
  bio: 'I joined Women in Science because, as a woman in computer science, I wanted to help build a community where women in STEM feel supported, visible, and empowered to advocate for each other.',
  bagItem: 'Lip gloss & perfume!'
  },

  {
    name: 'Shaen Goodall',
    photo: 'img/team/Shaen.JPG',
    bio: "I joined WiS to help create a space where like-minded women in science could feel comfortable, make friends, and help each other succeed!",
    bagItem: '10 foot charging cable!'
  },

  // VP Sponsorship
  {
    name: 'Bella Jiang',
    photo: 'img/team/bella.jpg',
    bio: 'I joined WiS because I wanted to use the opportunity I’ve been fortunate to have in science to open doors for others, and through sponsorship, connect with people and businesses who can help make science more accessible and give others the chance to discover their own potential.',
    bagItem: 'Excel bubblemint gum pack!'
  },

  // VP Communications
  {
    name: 'Kaitlyn Welker',
    photo: 'img/team/kaitlyn.jpg',
    bio: 'I joined WiS to be involved in an organization that not only celebrates women in science but actively works to make Western more welcoming, accessible, and inspiring for the next generation!',
    bagItem: 'Chapstick & a Snack!'
  },
  {
    name: 'Eugenia Zhang',
    photo: 'img/team/eugin.JPG',
    bio: '',
    bagItem: 'Tissues for the allergies 🤧'
  },

  // VP Internals
  {
    name: 'Alexandra Savelli',
    photo: 'img/team/Alexandra.JPG',
    bio: 'I joined WiS because I connected with the club’s values and wanted to be a part of a supportive community of women here at Western!',
    bagItem: 'Bubble Mint gum and lip gloss!'
  },
  {
    name: 'Kate La',
    photo: 'img/team/Kate_La.JPG',
    bio: 'I joined WiS to meet and connect with other amazing like-minded women in science!',
    bagItem: 'Tide Pen and Tums!'
  },

  // VP Mentorship
  {
    name: 'Jaidyn Oresti',
    photo: 'img/team/jaidyn.jpg',
    bio: "Having been inspired by many female role models in STEM throughout my life, I was particularly drawn to WiS's mentorship program and the opportunity to empower the next generation of women in STEM, both in university and beyond.",
    bagItem: 'A pack of mint gum'
  },
  {
    name: 'Josie-Ella Di Maria',
    photo: 'img/team/josie.jpg',
    bio: 'I joined Women in Science because I value creating supportive environments where women can connect, access mentorship, and feel empowered to pursue both their academic and professional goals in STEM.',
    bagItem: 'Summer Fridays Vanilla Lip Butter Balm'
  },

  // VP Externals
  {
    name: 'Amanda Luca',
    photo: 'img/team/amanda.jpg',
    bio: 'I joined WiS because of the amazing community of supportive women in science!',
    bagItem: 'Noise cancelling headphones!'
  },
  {
    name: 'Durgalakshmi Arivazhagan',
    photo: 'img/team/Durgalakshmi .jpeg',
    bio: 'I joined Women in Science because I believe that when women uplift one another, we create more than just opportunities, we build a future where every woman feels empowered to challenge boundaries, embrace her potential, and leave her own mark on the world of science.',
    bagItem: 'My Canon Digital Camera!!!'
  },

  // VP Finance
  {
    name: 'Harleen Multani',
    photo: 'img/team/Harleen.JPG',
    bio: 'I joined WiS because I’m passionate about creating opportunities for women in science to share experiences, resources, and inspiration',
    bagItem: 'Airpods'
  },

  // VP Outreach
  {
    name: 'Aliah Seegobin',
    photo: 'img/team/Aliah.JPG',
    bio: 'I wanted to join a community of likeminded women and share my experience in biopharmaceuticals!',
    bagItem: 'Tide to Go Pen!'
  },

  {
  name: 'Kate Gagnon',
  photo: 'img/team/Kate_ga.JPG',
  bio: 'I wanted to join WiS to be part of a supportive community, learn more about opportunities in science, and build connections!',
  bagItem: 'Excel Gum!'
}

];

// Ensures the user starts at the top of the page
function MeetTheTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Returns the formatted page
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
                <img
                  className="team-member-imgs"
                  src={process.env.PUBLIC_URL + '/' + member.photo}
                  alt={`Photo of ${member.name}`}
                  title={`Photo of ${member.name}`}
                />

                {/* Display team member's name, bio, and bag item */}
                <div className="member-infos">
                  <h2 className="team-member-name">{member.name}</h2>

                  {member.bio && (
                    <p>{member.bio}</p>
                  )}

                  {member.bagItem && (
                    <p className="fav-movie">
                      <strong>What item’s always in your bag?</strong> {member.bagItem}
                    </p>
                  )}
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

