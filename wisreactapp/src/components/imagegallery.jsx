/* import statements */

import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { Navigation2 } from "./navigation2";
import 'react-image-gallery/styles/css/image-gallery.css';

/* carousel component for custom image navigation */
const Carousel = ({ images }) => {

  /* tracks current image index */
  const [currentIndex, setCurrentIndex] = useState(0);

  /* function to go to next image */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      /* if at the last image, loop back to the first image; otherwise, go to the next image */
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  /* function to go to the previous image */
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      /* if at the first image, loop to the last image; otherwise, go to the previous image */
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {/* Button to navigate to the previous image */}
      <button onClick={prevSlide}>Previous</button>
      {/* Display the current image */}
      <img 
        src={images[currentIndex].original} 
        alt={images[currentIndex].description} 
      />

      {/* Button to navigate to the next image */}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};


/* main app component */
const App = () => {
  /* array of image objects with their file paths, thumbnails, and descriptions */
  const images = [
    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_5895.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_5895.jpg',
      description: 'Paint Night 1',
    },
    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_1839.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_1839.jpg',
      description: 'Paint Night 2',
    },
    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_5879.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_5879.jpg',
      description: 'Paint Night 3',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_2258.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_2258.jpg',
      description: 'STEMPOSIUM 1',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_1.jpeg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_1.jpeg',
      description: 'STEMPOSIUM 2',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_2.jpeg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_2.jpeg',
      description: 'STEMPOSIUM 3',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_6803.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_6803.jpg',
      description: 'STEMPOSIUM 4',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_7527.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_7527.jpg',
      description: 'STEMPOSIUM 5',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_7539.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_7539.jpg',
      description: 'STEMPOSIUM 6',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5218.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5218.jpg',
      description: 'AGM 1',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5220.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5220.jpg',
      description: 'AGM 2',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5222.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5222.jpg',
      description: 'AGM 3',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5225.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5225.jpg',
      description: 'AGM 4',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5232.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5232.jpg',
      description: 'AGM 5',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5233.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5233.jpg',
      description: 'AGM 6',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5234.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5234.jpg',
      description: 'AGM 7',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5235.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5235.jpg',
      description: 'AGM 8',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5236.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5236.jpg',
      description: 'AGM 9',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5237.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5237.jpg',
      description: 'AGM 10',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5238.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5238.jpg',
      description: 'AGM 11',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5213.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5213.jpg',
      description: 'AGM 12',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5215.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/DSCN5215.jpg',
      description: 'AGM 13',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_3.jpeg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_3.jpeg',
      description: 'Sisters in Science Mixer 1',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_4.jpeg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_4.jpeg',
      description: 'Sisters in Science Mixer 2',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_5.jpeg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_5.jpeg',
      description: 'Sisters in Science Mixer 3',
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
  const imageUrls = images.map(image => image.original);

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