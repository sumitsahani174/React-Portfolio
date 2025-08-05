import React from 'react';
import { Container, Typography, Box, useTheme, useMediaQuery } from '@mui/material';

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="section"
      sx={{
        py: 6,
        backgroundColor: theme.palette.background.default,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant={isSmallScreen ? 'h4' : 'h3'}
          component="h2"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          sx={{ mt: 2, color: theme.palette.text.secondary, lineHeight: 1.7 }}
        >
          Senior Motivated Full-Stack Developer with 5+ years of experience in developing scalable web applications and APIs using .NET Core and React.js. Proven expertise in healthcare and insurance domains, cloud-native development, and Agile methodologies.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
