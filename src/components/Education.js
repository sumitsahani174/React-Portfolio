import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Fade,
  useTheme,
  Divider,
  Stack,
  Chip
} from '@mui/material';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, Star } from 'lucide-react';

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
      year: '2015 – 2018',
      level: 'Bachelor\'s Degree',
      icon: GraduationCap,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      accentColor: '#667eea'
    },
    {
      degree: 'HSC - Science Stream',
      institution: 'V.G. Vaze College, Mumbai',
      year: '2013 – 2015',
      level: 'Higher Secondary',
      icon: BookOpen,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accentColor: '#f093fb'
    },
    {
      degree: 'SSC',
      institution: 'Sacred Heart High School, Mumbai',
      year: '2013',
      level: 'Secondary School',
      icon: Award,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      accentColor: '#4facfe'
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[50]} 50%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg">
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <Star size={24} style={{ color: theme.palette.primary.main, marginRight: 8 }} />
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                Education Journey
              </Typography>
              <Star size={24} style={{ color: theme.palette.secondary.main, marginLeft: 8 }} />
            </Box>
            <Divider
              sx={{
                width: 120,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
                mx: 'auto',
                my: 3
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              Academic Qualifications & Learning Milestones That Shaped My Professional Journey
            </Typography>
          </Box>
        </Fade>

        <Stack spacing={5}>
          {educationList.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Fade key={index} in={isVisible} timeout={1200 + index * 200}>
                <Paper
                  elevation={12}
                  sx={{
                    p: { xs: 3, md: 5 },
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: { xs: 2, md: 4 },
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 6,
                    border: `1px solid ${theme.palette.divider}20`,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[20],
                      '& .education-icon': {
                        transform: 'rotate(10deg) scale(1.1)',
                        background: edu.gradient
                      },
                      '& .education-content': {
                        transform: 'translateX(8px)'
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: edu.gradient,
                      borderRadius: '6px 6px 0 0'
                    }
                  }}
                >
                  <Box
                    className="education-icon"
                    sx={{
                      width: { xs: 60, md: 80 },
                      height: { xs: 60, md: 80 },
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${edu.accentColor}20, ${edu.accentColor}10)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: `2px solid ${edu.accentColor}30`,
                      flexShrink: 0
                    }}
                  >
                    <IconComponent size={32} color={edu.accentColor} />
                  </Box>

                  <Box className="education-content" sx={{ flex: 1, transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, flexWrap: 'wrap' }}>
                      <Typography
                        variant="h5"
                        sx={{ 
                          fontWeight: 700, 
                          color: theme.palette.text.primary,
                          fontSize: { xs: '1.1rem', md: '1.5rem' }
                        }}
                      >
                        {edu.degree}
                      </Typography>
                      <Chip
                        label={edu.level}
                        size="small"
                        sx={{
                          background: edu.gradient,
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.75rem'
                        }}
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <MapPin size={16} color={theme.palette.text.secondary} />
                      <Typography
                        variant="subtitle1"
                        sx={{ 
                          color: theme.palette.text.secondary, 
                          fontWeight: 500,
                          fontSize: { xs: '0.9rem', md: '1rem' }
                        }}
                      >
                        {edu.institution}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Calendar size={16} color={theme.palette.text.disabled} />
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: theme.palette.text.disabled,
                          fontWeight: 500,
                          fontSize: { xs: '0.8rem', md: '0.875rem' }
                        }}
                      >
                        {edu.year}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Fade>
            );
          })}
        </Stack>

        <Fade in={isVisible} timeout={2000}>
          <Box
            sx={{
              textAlign: 'center',
              mt: 8,
              p: 4,
              background: 'rgba(255,255,255,0.6)',
              borderRadius: 4,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.divider}20`
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                mb: 1
              }}
            >
              🎯 Continuous Learning Journey
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 500,
                mx: 'auto'
              }}
            >
              Each milestone represents dedication, growth, and the foundation for professional excellence in technology.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Education;