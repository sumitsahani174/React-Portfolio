import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Fade,
  useTheme,
  Divider,
  Stack
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const educationList = [
    {
      degree: 'B.Sc. in Information Technology',
      institution: "Chetana's Institute of Management & Research, Mumbai",
      year: '2015 – 2018'
    },
    {
      degree: 'HSC - Science Stream',
      institution: 'V.G. Vaze College, Mumbai',
      year: '2013 – 2015'
    },
    {
      degree: 'SSC',
      institution: 'Sacred Heart High School, Mumbai',
      year: '2013'
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.grey[50]})`,
        position: 'relative'
      }}
    >
      <Container maxWidth="md">
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Education
            </Typography>
            <Divider
              sx={{
                width: 80,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
                mx: 'auto',
                my: 2
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400
              }}
            >
              Academic Qualifications & Learning Milestones
            </Typography>
          </Box>
        </Fade>

        <Fade in={isVisible} timeout={1200}>
          <Stack spacing={4}>
            {educationList.map((edu, index) => (
              <Paper
                key={index}
                elevation={6}
                sx={{
                  p: 4,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 3,
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: `1px solid ${theme.palette.divider}30`
                }}
              >
                <SchoolIcon
                  sx={{
                    fontSize: 40,
                    color: theme.palette.primary.main,
                    mt: 0.5
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: theme.palette.text.primary }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.text.secondary, mt: 0.5 }}
                  >
                    {edu.institution}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: theme.palette.text.disabled }}
                  >
                    {edu.year}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Fade>
      </Container>
    </Box>
  );
};

export default Education;
