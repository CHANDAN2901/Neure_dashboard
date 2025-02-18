import React from 'react';
import './index.css';

const PresentationSlide = ({ title, date, backgroundImage, location }) => {
  return (
    <div className="slide">
      <div className="content">
        <h1>{title}</h1>
        <div><p>{location} | {date}</p></div>
      </div>
      <div className="background">
        {backgroundImage && (
          <div 
            className="background-image" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
      </div>
    </div>
  );
};

export default PresentationSlide;