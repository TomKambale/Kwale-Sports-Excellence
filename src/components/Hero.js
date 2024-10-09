import React, { useState, useEffect } from 'react';

const Slideshow = ({ slides, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Set up the slideshow interval to move to the next slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, interval);

    // Clear the interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentSlide, slides.length, interval]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        >
          <img src={slide.image} alt={slide.title} />
          <h2>{slide.title}</h2>
          <p>{slide.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  const heroSlides = [
    {
      image: '/assets/outing.webp',
      title: 'Welcome to Our Website',
      subtitle: 'Discover amazing things with us',
    },
    {
      image: '/path/to/image2.jpg',
      title: 'Explore Our Services',
      subtitle: 'We offer the best solutions for you',
    },
    {
      image: '/path/to/image3.jpg',
      title: 'Join Our Community',
      subtitle: 'Be part of something great',
    },
  ];

  return (
    <div>
      <Slideshow slides={heroSlides} interval={5000} />
      {/* Rest of your app content */}
    </div>
  );
};
export default Hero;