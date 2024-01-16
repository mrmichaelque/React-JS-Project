import React from 'react';
import TextBox from './TextBox'; // Assuming you have a TextBox component
import ImageHolder from './ImageHolder'; // Assuming you have an ImageHolder component
import Div from './Components/Div'; // Assuming you have a Div component

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

export default App