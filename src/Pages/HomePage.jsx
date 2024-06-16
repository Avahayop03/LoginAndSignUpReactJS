import React, { useRef } from 'react';
import { AppBar, Toolbar, Button, Container, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import hospitalImage from '../Pages/wow.png';  
import teamImage from '../Pages/Avah Ayop.png';    

const Home = () => {
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);
  const teamRef = useRef(null);
  const loginRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button color="inherit" onClick={() => handleScroll(loginRef)}>Login</Button>
            <Button color="inherit" onClick={() => handleScroll(loginRef)}>Sign-Up</Button>
            <Button color="inherit" onClick={() => handleScroll(aboutUsRef)}>About Us</Button>
            <Button color="inherit" onClick={() => handleScroll(teamRef)}>Team</Button>
            <Button color="inherit" onClick={() => handleScroll(contactUsRef)}>Contact Us</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 2,
        }}
      >
        <Box
          component="img"
          sx={{
            height: 400,
            width: '50%',
            maxWidth: { xs: 300, md: 600 },
          }}
          alt="Hospital Image"
          src={hospitalImage}
        />
      </Box>

      <Container maxWidth="sm" style={{ height: '10vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Welcome to Wellmeadows Hospital
        </Typography>
        <Typography variant="body1" align="center">
          Where we can assist your healthcare.
        </Typography>
      </Container>
      <Container ref={aboutUsRef} maxWidth="sm" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom>
          About us:
        </Typography>
        <Typography variant="body1" align="center">
          Welcome to Wellmeadows Hospital
        </Typography>
        <Typography variant="body1" align="center">
          Wellmeadows Hospital has been a cornerstone
          of healthcare in our community for over 50 years. 
          Our mission is to provide exceptional medical care with compassion, 
          respect, and a commitment to excellence. We believe in treating 
          every patient as a unique individual, ensuring their physical, 
          emotional, and spiritual needs are met.
        </Typography>
      </Container>
      <Container ref={contactUsRef} maxWidth="sm" style={{ height: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact us at:
        </Typography>
        <Typography variant="body1" align="center">
            09-xxx-xxx-xxx
        </Typography>
      </Container>
      <Container ref={teamRef} maxWidth="sm" style={{ height: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Team:
        </Typography>
        <Box
          component="img"
          sx={{
            height: 800,
            width: '1200%',
            maxWidth: { xs: 300, md: 600 },
          }}
          alt="Team Image"
          src={teamImage}
        />
      </Container>
      <Container ref={loginRef} maxWidth="sm" style={{ height: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login or Sign-Up?
        </Typography>
        <Button component={Link} to="/login" variant="contained" color="primary" sx={{ mt: 2 }}>
          Login
        </Button>
        <Button component={Link} to="/signup" variant="contained" color="secondary" sx={{ mt: 2 }}>
          Sign-Up
        </Button>
      </Container>
    </>
  );
};

export default Home;
