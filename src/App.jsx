import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from './ButtonGroup.jsx';
import AppStyle from './App.css';
import TextBox from './TextBox'; // Assuming you have a TextBox component
import ImageHolder from './ImageHolder'; // Assuming you have an ImageHolder component

const App = () => (
  <div className="App">
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Container>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} sm={6}>
              <div>
                <Typography variant="h4">THE WORK WITHIN QUEUE <span className="heart">♥️</span></Typography>
                <Typography>A Webfolio by Michael Que</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src="Octocat.png" className="App-logo" alt="logo" />
            </Grid>
            <Grid item xs={12}>
              <Typography>Project and Program Management</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextBox value="" onChange={() => {}} placeholder="Type here" style={inputStyle} />
            </Grid>
            <Grid item xs={12}>
              <ImageHolder src="path/to/your/image.jpg" alt="Image Alt Text" width="100%" height="auto" />
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup buttons={["Profile", "Project"]} />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  </div>
);


const inputStyle = {
  padding: '0.5rem',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
};

export default App;