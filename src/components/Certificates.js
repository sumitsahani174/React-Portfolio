import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const certificateData = [
  {
    title: 'AWS Certified Developer',
    image: '/images/certificates/aws-developer.jpg'
  },
  {
    title: 'Google Cloud Associate',
    image: '/images/certificates/gcp-associate.jpg'
  }
];

const awardData = [
  {
    title: 'Employee of the Month',
    image: '/images/awards/employee-month.jpg'
  },
  {
    title: 'Hackathon Winner',
    image: '/images/awards/hackathon.jpg'
  }
];

const CertificatesAndAwards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom align="center">
        Certificates & Awards
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Certificates</Typography>
          <Grid container spacing={2}>
            {certificateData.map((cert, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card elevation={3}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={cert.image}
                    alt={cert.title}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" align="center">
                      {cert.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Awards</Typography>
          <Grid container spacing={2}>
            {awardData.map((award, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card elevation={3}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={award.image}
                    alt={award.title}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" align="center">
                      {award.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CertificatesAndAwards;
