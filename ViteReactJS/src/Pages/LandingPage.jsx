import React from "React"

const LandingPage = () => {
    return (
      <div style={{ backgroundImage: 'url(background-image.jpg)', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '2rem', borderRadius: '8px' }}>
          <Typography variant="h2" gutterBottom>
            Welcome to Projectify
          </Typography>
          <Typography variant="h5" paragraph>
            The ultimate project management app for teams and individuals.
          </Typography>
          <Typography variant="body1" paragraph>
            Effortlessly organize, track, and collaborate on your projects with Projectify. Whether you're a small team or a solo entrepreneur, our app has everything you need to stay on top of your work.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Container>
      </div>
    );
  };
  

export default LandingPage;
