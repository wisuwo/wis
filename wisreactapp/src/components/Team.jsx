import React from 'react';


export const Team = (props) => {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/img/team/addisyn.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Addisyn Smith \nJob: VP Sponsorship\nProgram: 4th year Medical Sciences, IMS and microbiology and immunology",
    },
    
    {
      src: process.env.PUBLIC_URL + '/img/team/anusha.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Anusha Merchant \nJob: VP Mentorship\nProgram: 4th year, Medical Sciences - HSP IMS",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/bobo.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Bobo Soong \nJob: VP Comms\nProgram: 3rd year, Biology and Pharmacology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/camryn.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Camryn Kabir-Bahk \nJob: Co-President\nProgram: 4th year HSP Epidemiology and Biostatistics",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/cassidy.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Cassidy Coderre \nJob: VP Mentorship\nProgram: 4th year, Medical Sciences with an Honours Spec in Biochemistry",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/claudia.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Claudia Drewitt \nJob: VP Comms\nProgram: 3rd year, Honours Spec. in IMS and Major in Physiology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/cristina.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Cristina White \nJob: VP External\nProgram: 3rd year, Honours Spec in IMS",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/diana.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Diana Abdolmaleki \nJob: VP Ethics and Advocacy\nProgram: 3rd year, Medical Sciences with Honours Specialization in Microbiology & Immunology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/emaan.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Emaan Rana \nJob: VP External\nProgram: 3rd year, Honours Spec in Pathology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/emma.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Emma Punkari \nJob: Co-President\nProgram: 4th year Honours Spec Biology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/hannah.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Hannah Lye \nJob: VP Internal\nProgram: 4th Year Synthetic Biology",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/karolin.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Karolin Volodko \nJob: VP Ethics and Advocacy\nProgram: 4th year Biochemistry and Genetics",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/kayla.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Kayla TenHag \nJob: VP Internal\nProgram: 3rd year, Hsp Path",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/kirsten.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Kirsten Favreau \nJob: VP Admin\nProgram: 4th year HBsc. Medical Cell Biology & English",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/natasha.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Natasha Bruce \nJob: Senior Advisor\nProgram: Double Major IMS and Biochemistry",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/sadia.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Sadia Bahadoor \nJob: VP Finance\nProgram: 4th year, Computer Science with a French minor",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/samantha.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Samantha Romero \nJob: VP Design\nProgram: 4th year, Computer Science w a Certificate in Digital Communications",
    },

    {
      src: process.env.PUBLIC_URL + '/img/team/sophia.png',
      width: 320,
      height: 174,
      isSelected: true,
      caption: "Name: Sophia Yuan \nJob: VP Technology\nProgram: 2nd year Comp Sci",
    },

  ];


return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Meet the Team</h2>
          <p>
            Our amazing team of students seeking to eliminate gender disparity in science, technology, engineering, and mathematics!
          </p>
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
