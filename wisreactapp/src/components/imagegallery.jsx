/* import statements */

import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Navigation2 } from "./navigation2";
import 'react-image-gallery/styles/css/image-gallery.css';

/* main app component */
const App = () => {
  /* array of image objects with their file paths, thumbnails, and descriptions */
  const images = [
        {
      original: `${process.env.PUBLIC_URL}/img/gallery/AGM2025 1.jpeg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/AGM2025 1.jpeg`,
      description: 'ANNUAL GENERAL MEETING',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/AGM2025 2.jpeg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/AGM2025 2.jpeg`,
      description: 'ANNUAL GENERAL MEETING',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/cocoanight1.jpeg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/cocoanight1.jpeg`,
      description: 'COCOA & CRAM',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/cocoanight2.jpeg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/cocoanight2.jpeg`,
      description: 'COCOA & CRAM',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/mentorshipkickoff1.jpeg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/mentorshipkickoff1.jpeg`,
      description: 'SISTERS IN SCIENCE MENTORSHIP KICKOFF',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/mentorshipkickoff2.jpeg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/mentorshipkickoff2.jpeg`,
      description: 'SISTERS IN SCIENCE MENTORSHIP KICKOFF',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/paintnight1.jpeg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/paintnight1.jpeg`,
      description: 'PAINT & SLIME NIGHT',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/paintnight2.jpeg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/paintnight2.jpeg`,
      description: 'PAINT & SLIME NIGHT',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-1.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-1.jpg`,
      description: 'STEMPOSIUM 2025',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-2.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-2.jpg`,
      description: 'STEMPOSIUM 2025',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/ornament-1.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/ornament-1.jpg`,
      description: 'ORNAMENT DECORATING',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/ornament-2.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/ornament-2.jpg`,
      description: 'ORNAMENT DECORATING',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/upaw-1.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/upaw-1.jpg`,
      description: 'UPAW X WIS WOMENS PANEL',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/upaw-2.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/upaw-2.jpg`,
      description: 'UPAW X WIS WOMENS PANEL',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/journey-1.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/journey-1.jpg`,
      description: 'MY JOURNEY PANEL',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/journey-2.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/journey-2.jpg`,
      description: 'MY JOURNEY PANEL',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/yoga-1.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/yoga-1.jpg`,
      description: 'YOGA NIGHT',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/yoga-2.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/yoga-2.jpg`,
      description: 'YOGA NIGHT',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/agm-24-1.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/agm-24-1.jpg`,
      description: 'AGM 2024/2025',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/agm-24-2.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/agm-24-2.jpg`,
      description: 'AGM 2024/2025',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/paint-1.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/paint-1.jpg`,
      description: 'PAINT NIGHT',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/paint-2.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/paint-2.jpg`,
      description: 'PAINT NIGHT',
    },
  ];

 /* custom styles for the app and image gallery */
 const customStyles = `
    .App {
      background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-gallery {
      width: 80%; /* Adjust width as needed */
      margin: auto;
    }

    .image-gallery-slide img,
    .image-gallery-thumbnail img {
      animation: none !important;
      transform: none !important;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <Navigation2 />
      
         {/* Render the app container with the image gallery */}
        <div className="App">
          <ImageGallery items={images} />
        </div>
      
    </>
  );
};


export default App;






