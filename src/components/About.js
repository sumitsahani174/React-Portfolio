import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  useTheme, 
  useMediaQuery,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
  Fade,
  Slide
} from '@mui/material';
import { 
  Code as CodeIcon,
  Cloud as CloudIcon,
  Speed as SpeedIcon,
  Group as GroupIcon 
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const skills = [
    { label: '.NET Core', color: 'primary' },
    { label: 'Node JS', color: 'primary' },
    { label: 'Redis Cache', color: 'secondary' },
    { label: 'React.js', color: 'secondary' },
    { label: 'Healthcare', color: 'success' },
    { label: 'Insurance', color: 'info' },
    { label: 'System Design ', color: 'warning' },
    { label: 'Agile', color: 'error' }
  ];

  const highlights = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: '6+ Years',
      subtitle: 'Development Experience'
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      title: 'Cloud-Native',
      subtitle: 'Architecture Expert'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Scalable',
      subtitle: 'Applications'
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: 'Agile',
      subtitle: 'Methodologies'
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, ${theme.palette.secondary.main}08 100%)`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 87, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 87, 120, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant={isSmallScreen ? 'h3' : 'h2'}
              component="h2"
              sx={{
                fontWeight: 800,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                position: 'relative'
              }}
            >
              About Me
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
                mx: 'auto',
                mb: 4
              }}
            />
          </Box>
        </Fade>

        <Slide in direction="up" timeout={1200}>
          <Card
            elevation={0}
            sx={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              border: `1px solid ${theme.palette.divider}20`,
              mb: 6,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: theme.shadows[20]
              }
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Avatar
                  sx={{
                    width: { xs: 80, md: 100 },
                    height: { xs: 80, md: 100 },
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    fontSize: { xs: 32, md: 40 },
                    fontWeight: 'bold',
                    mb: { xs: 2, sm: 0 },
                    mr: { sm: 3 }
                  }}
                >
                  SD
                </Avatar>
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      mb: 1
                    }}
                  >
                    Sumit Sahani
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 500
                    }}
                  >
                    Senior Full-Stack Developer
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  mb: 4,
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                I am Sumit Sahani, a versatile Full Stack Developer with 6+ years of experience, specializing in .NET Core, Node.js, and React.js for building robust, scalable web applications and RESTful APIs. I have a proven track record in delivering solutions across healthcare and insurance domains, with strong knowledge of microservices architecture, cloud-native development, and Agile methodologies. I am highly adaptable and open to learning new technologies, with a passion for solving complex problems and taking on new challenges in dynamic environments. I am committed to writing clean, maintainable code and delivering high-quality products that drive business value.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                    textAlign: { xs: 'center', sm: 'left' }
                  }}
                >
                  Core Technologies & Domains
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  sx={{
                    gap: 1,
                    justifyContent: { xs: 'center', sm: 'flex-start' }
                  }}
                >
                  {skills.map((skill, index) => (
                    <Chip
                      key={skill.label}
                      label={skill.label}
                      color={skill.color}
                      variant="outlined"
                      sx={{
                        fontWeight: 500,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: theme.shadows[4]
                        },
                        animationDelay: `${index * 100}ms`
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Slide>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: { xs: 2, md: 3 },
            mt: 4
          }}
        >
          {highlights.map((highlight, index) => (
            <Slide
              key={highlight.title}
              in
              direction="up"
              timeout={1000 + index * 200}
            >
              <Card
                elevation={0}
                sx={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}20`,
                  textAlign: 'center',
                  p: { xs: 2, md: 3 },
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    boxShadow: theme.shadows[10]
                  }
                }}
              >
                <Box
                  sx={{
                    color: theme.palette.primary.main,
                    mb: 1,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  {highlight.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    mb: 0.5,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}
                >
                  {highlight.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '0.8rem', md: '0.875rem' }
                  }}
                >
                  {highlight.subtitle}
                </Typography>
              </Card>
            </Slide>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
