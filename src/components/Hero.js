import React from 'react';
import HeroSection from './HeroSection';

const App = () => {
  const heroSlides = [
    {
      image: '/path/to/image1.jpg',
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
      <HeroSection slides={heroSlides} interval={5000} />
      {/* Rest of your app content */}
    </div>
  );
};

export default Hero;