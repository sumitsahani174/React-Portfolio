import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const awards = [
  {
    title: 'Employee of the Month',
    image: '/awards/employee.jpg',
    description: 'Recognized for outstanding contributions and innovation'
  },
  {
    title: 'Hackathon Winner',
    image: '/awards/hackathon.jpg',
    description: 'Winner of company-wide tech innovation challenge'
  }
];

const Awards = () => {
  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>Awards</Typography>
      <Grid container spacing={3}>
        {awards.map((award, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={award.image}
                alt={award.title}
              />
              <CardContent>
                <Typography variant="h6">{award.title}</Typography>
                <Typography variant="body2" color="text.secondary">{award.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Awards;
