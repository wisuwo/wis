import React from 'react';
import { Navigation2 } from "./navigation2";
import { useEffect } from "react";
import { Footer } from "./footer";

const teamMembers = [
  {
    name: 'Addisyn Smith',
    photo: 'img/team/addisyn.png', // Add an image file in the 'public' folder
    bio: 'I joined WiS in order to meet like-minded individuals within Western’s community that were passionate about building a positive and supportive environment for women who are pursuing a higher education and careers in science. This year with sponsorship, we would like to collaborate with non-profits that align with our WiS pillars, powering meaningful connections within our community. Fun Fact: I billeted with a family to play on a jr. hockey team away from home during highschool.',
  },
  
  {
    name: 'Anusha Merchant',
    photo: 'img/team/anusha.png',
    bio: 'I wanted to learn more about possible pathways after graduation so I joined the Graduate Sisters in Science mentorship program as a mentee in my third year. My mentor was extremely helpful and made the program a very positive experience for me. This year, I want to help support others through mentorship who are in the same position that I was once in! To increase engagement in all streams of the WiS mentorship program and provide more networking opportunities for those involved. Fun Fact: I once recited the entire Alphabet backwards to help my team win a Minute-to-Win-It competition.'
  },

  {
    name: 'Bobo Soong',
    photo: 'img/team/bobo.png',
    bio: 'I wanted to join a team of like-minded people that could help me enjoy my time in university while helping me grow as an individual. My goal this year is to create a supportive network to help our members pursue their interest within the field of science. Fun Fact: I can speak 3 other languages.'
  },

  {
    name: 'Camryn Kabir-Bahk',
    photo: 'img/team/camryn.png',
    bio: "I wanted to surround myself with like-minded individuals who also wanted to create a welcoming and diverse environment for people with a passion for all things science! I'm hoping to strengthen the relationships and mentorship connections within our lovely Women in Science community and increase our presence on the Western Campus to involve more students. Fun Fact: I survived the Great War and managed to get Eras Tour tickets for Toronto… this will be my personality for the next year and a half."
  },

  {
    name: 'Cassidy Coderre',
    photo: 'img/team/cassidy.png',
    bio: 'I joined WiS as a mentor in my second year of university to give advice to those struggling in high school as I myself would have loved more support during that time and found a sense of community within WiS that I have loved ever since! My goal this year is to create a more impactful sense of community within the mentorship program and foster a sense of intergenerational mentoring. Fun Fact: I have two Pomeranians named Bella and Cocoa.'
  },

  {
    name: 'Claudia Drewitt',
    photo: 'img/team/claudia.png',
    bio: 'Initially I joined WiS through the Sisters in Science Mentorship Program as a mentee. It made an incredible impact in my life and I wanted to share that with others. My goal this year is to reach more Western individuals through our social media! Fun Fact: I have visited almost 20 countries!'
  },

  {
    name: 'Cristina White',
    photo: 'img/team/cristina.png',
    bio: 'WiS helped me so much through my first year with their mentorship and events! I joined so I could be a part of that and give those opportunities to others :) My goal this year is to bring more events to Western that work with the London community so everyone can get involved! Fun Fact: I love painting but I never have the time.'
  },

  {
    name: 'Diana Abdolmaleki',
    photo: 'img/team/diana.png',
    bio: 'I joined WIS to ensure that no one in the Western community feels underestimated within their field due to their gender identity. My goal this year is to spread awareness about the struggles many groups of people go through! Fun Fact: I can recite Shrek 2 by memory.'
  },

  {
    name: 'Emaan Rana',
    photo: 'img/team/emaan.png',
    bio: "I didn't have an initiative like WiS during high school so I decided to join in my first year to help learn more about this community and give back! I had an amazing time connecting with everyone and WiS truly made my transition to university much smoother. My goal this year is to host multiple events with local London organizations as we continue to foster interest in STEM for women of all ages. Fun Fact: I've road tripped to BC twice with my family and cant wait to go again"
  },

  {
    name: 'Emma Punkari',
    photo: 'img/team/emma.png',
    bio: 'I joined WIS to form more connections in the field with other like-minded individuals, and increase the strength and size of the support network in the women in science community at Western. My goal is to facilitate closer connections within WiS to foster a more connected community, as well as informing more people about the many different pathways for careers in science besides the common ones we hear about all the time. Fun Fact: I have been playing the violin since I was 4 years old!'
  },

  {
    name: 'Hannah Lye',
    photo: 'img/team/hannah.png',
    bio: 'As a general member I had benefited extremely from the professional development opportunities given, it made me want to get involved. My goal this year is to maximise attendance at events to reach a wider group of women! Fun Fact: I have an identical twin.'
  },

  {
    name: 'Karolin Volodko',
    photo: 'img/team/karolin.png',
    bio: "I joined WIS to be surrounded with like-minded individuals that are striving to further the Western community through collaboration, open-mindedness, and determination to create a welcoming club that focuses on creating a sense of community. My goal this year is to emphasize that regardless of gender identity, everyone has a place in WiS and will have the support to make their voices heard. Fun Fact: I've watched Kung Fu Panda more than 8 times because of my love for Pandas."
  },

  {
    name: 'Kayla TenHag',
    photo: 'img/team/kayla.png',
    bio: "Wis has given me so many unique opportunities! I now hope to help provide similar opportunities to other students :) My goal this year is to host exciting and meaningful events that are a welcoming space for everyone :) Fun Fact: I can dislocate my shoulder."
  },

  {
    name: "Kirsten Favreau",
    photo: 'img/team/kirsten.png',
    bio: "I joined WIS so I could be a part of a community committed to breaking down barriers for others and making STEM fields more inclusive :) My goal this year is to reach as many students as possible and form strong connections with other STEM clubs on campus. Fun Fact: I am a tap dancer."
  },

  {
    name: "Natasha Bruce",
    photo: 'img/team/natasha.png',
    bio: "I joined WiS because its friendly and supportive environment that helped me find research opportunities and overall made me a better student and leader. My goal is to provide Western students with invaluable experiences that are certain to assist them in achieving their future aspirations, all the while creating lasting memories and friendships. Fun Fact: I have rewatched Bobs Burgers 4 times."
  },

  {
    name: "Sadia Bahadoor",
    photo: "img/team/sadia.png",
    bio: "I joined WiS to feel a greater sense of community at Western. My goal for the year is to attend all of the WiS events at Western since theyre such a great way to meet people. Fun Fact: Im from the island of the Dodo bird!"
  },

  {
    name: "Samantha Romero",
    photo: "img/team/samantha.png",
    bio: "I joined WiS for the opportunity to be creative, to increase student engagement, and to gain a greater sense of community here at Western! This will be my 4th year on the WiS team and I’m so excited for another year of supporting women in science at Western! My goal for the year is to meet more women in science at Western! Fun Fact: Ive seen the Barbie movie 4 times in theatres! <3"
  },

  {
    name: "Sophia Yuan",
    photo: "img/team/sophia.png",
    bio: "I joined WiS because I want to help empower and connect with other like-minded individuals! My goal is to keep the website active and streamline updating processes. Fun Fact: I've seen Harry Potter and the Deathly Hallows pt2 more than 6 times!"
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