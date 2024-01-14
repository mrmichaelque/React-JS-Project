import React from 'react';

const Card = ({ title, location, employmentType, imageSrc }) => {
  return (
    <div className="CSS-Card" style={{ marginBottom: '20px', padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
      <h6>{title}</h6>
      <img src={imageSrc} className="EmployerLogo" alt="Job Image" />
      <h4>{location}</h4>
      <h3>{employmentType}</h3>
    </div>
  );
};

export default Card