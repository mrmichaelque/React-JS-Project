import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="fluid-container" style=
    {{ 
    padding: '1rem', 
    margin: '1rem', 
    border: '1px solid #ccc', 
    borderRadius: '4px', 
    transition: 
    'background-color 0.3s'
    }}>
      {children}
    </div>
  );
};

export default Container;
