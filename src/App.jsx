import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from './ButtonGroup.jsx';
import AppStyle from "./App.css"

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Typography variant="h6" component="div">
                THE WORK WITHIN QUEUE <span className="heart">♥️</span>
              </Typography>
              <Typography>A Webfolio by Michael Que</Typography>
            </div>
            <img src="Octocat.png" className="App-logo" alt="logo" />
            <div>
              <Typography>Project and Program Management</Typography>
              <ButtonGroup 
                buttons={["Profile", "Project",
                style ref="/.components/.ButtonGroup.css"}] />
              </ButtonGroup>
          </Container>
        </Toolbar>
      </AppBar>
      <Container>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </Container>
    </div>
  );
}
export default App
