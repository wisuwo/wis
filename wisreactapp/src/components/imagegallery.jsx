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
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-3.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-3.jpg`,
      description: 'STEMPOSIUM 2025',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-4.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-4.jpg`,
      description: 'STEMPOSIUM 2025',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-5.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-5.jpg`,
      description: 'STEMPOSIUM 2025',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-6.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-6.jpg`,
      description: 'STEMPOSIUM 2025',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-7.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-7.jpg`,
      description: 'STEMPOSIUM 2025',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-8.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-25-8.jpg`,
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
      original: `${process.env.PUBLIC_URL}/img/gallery/ornament-3.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/ornament-3.jpg`,
      description: 'ORNAMENT DECORATING',
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
      original: `${process.env.PUBLIC_URL}/img/gallery/agm-24-3.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/agm-24-3.jpg`,
      description: 'AGM 2024/2025',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/agm-24-4.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/agm-24-4.jpg`,
      description: 'AGM 2024/2025',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/agm-24-5.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/agm-24-5.jpg`,
      description: 'AGM 2024/2025',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/agm-24-6.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/agm-24-6.jpg`,
      description: 'AGM 2024/2025',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/agm-24-7.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/agm-24-7.jpg`,
      description: 'AGM 2024/2025',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/paint-1.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/paint-1.jpg`,
      description: 'Paint Night 1',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/paint-2.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/paint-2.jpg`,
      description: 'Paint Night 2',
    },
    {
      original: `${process.env.PUBLIC_URL}/img/gallery/paint-3.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/paint-3.jpg`,
      description: 'Paint Night 3',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-1.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-1.jpg`,
      description: 'STEMPOSIUM 2024',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-2.jpeg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-2.jpeg`,
      description: 'STEMPOSIUM 2024',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-3.jpeg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-3.jpeg`,
      description: 'STEMPOSIUM 2024',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-4.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-4.jpg`,
      description: 'STEMPOSIUM 2024',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-5.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-5.jpg`,
      description: 'STEMPOSIUM 2024',
    },

    {
      original: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-6.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/img/gallery/stemposium-24-6.jpg`,
      description: 'STEMPOSIUM 2024',
    }
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