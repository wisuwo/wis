import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { Navigation2 } from "./navigation2";
import 'react-image-gallery/styles/css/image-gallery.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentIndex]} alt="carousel slide" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

const App = () => {
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
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_1492.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_1492.jpg',
      description: 'AGM 1',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_2349.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_2349.jpg',
      description: 'AGM 2',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_4958.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_4958.jpg',
      description: 'AGM 3',
    },

    {
      original: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_5063.jpg',
      thumbnail: process.env.PUBLIC_URL + '/' + 'img/gallery/IMG_5063.jpg',
      description: 'AGM 4',
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

  const customStyles = `
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
      
        <div className="App">
          <ImageGallery items={images} />
        </div>
      
    </>
  );
};

export default App;