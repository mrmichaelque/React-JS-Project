import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 10000); // Advance every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div style={carouselStyle}>
      <button style={navButtonStyle} onClick={prevImage}>
        Prev
      </button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={imageStyle} />
      <button style={navButtonStyle} onClick={nextImage}>
        Next
      </button>
    </div>
  );
};

const carouselStyle = {
  position: 'relative',
  inline-size: '100%',
  maxWidth: '600px',
  margin: 'auto',
};

const navButtonStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '0.5rem',
  fontSize: '1rem',
  cursor: 'pointer',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const App = () => {
  const images = [
    'https://placekitten.com/600/300',
    'https://placekitten.com/601/300',
    'https://placekitten.com/602/300',
    'https://placekitten.com/603/300',
    'https://placekitten.com/604/300',
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};

export default App