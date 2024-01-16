import React from 'react';

// TextBox component
const TextBox = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}
    />
  );
};

// Container component
const Container = ({ children }) => {
  return (
    <div style={{ padding: '1rem', margin: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
      {children}
    </div>
  );
};

// ImageHolder component
const ImageHolder = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} style={{ width, height, borderRadius: '4px' }} />;
};

// Div component (generic container)
const Div = ({ children, style }) => {
  return <div style={style}>{children}</div>;
};

// Example usage in an App component
const App = () => {
  return (
    <Container>
      <h1>Your React App</h1>
      <Container>
        <TextBox value="" onChange={() => {}} placeholder="Type here" />
      </Container>
      <Container>
        <ImageHolder src="path/to/your/image.jpg" alt="Image Alt Text" width="200px" height="150px" />
      </Container>
      <Div style={{ background: '#eee', padding: '1rem' }}>
        <p>This is a generic div container with custom styling.</p>
      </Div>
    </Container>
  );
};

export default App;
