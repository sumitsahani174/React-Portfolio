import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Link,
  Fade,
  useTheme,
  Divider,
  IconButton,
  Tooltip,
  Button,
  Grid,
  Card,
  CardContent,
  Chip
} from '@mui/material';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Globe, 
  MessageCircle, 
  Twitter, 
  Download,
  Star,
  Sparkles,
  Send,
  MapPin,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactItems = [
    {
      label: 'Email',
      value: 'sumitsahani174@gmail.com',
      icon: Mail,
      link: 'mailto:sumitsahani174@gmail.com',
      color: '#ea4335',
      gradient: 'linear-gradient(135deg, #ea4335, #fbbc05)',
      description: 'Drop me a line anytime'
    },
    {
      label: 'Phone',
      value: '+91-9004844180',
      icon: Phone,
      link: 'tel:+919004844180',
      color: '#34a853',
      gradient: 'linear-gradient(135deg, #34a853, #0f9d58)',
      description: 'Let\'s have a conversation'
    }
  ];

  const socialItems = [
    {
      label: 'LinkedIn',
      value: 'Professional Network',
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/sumit-sahani-100b1121b/',
      color: '#0077b5',
      gradient: 'linear-gradient(135deg, #0077b5, #00a0dc)'
    },
    {
      label: 'GitHub',
      value: 'Code Repository',
      icon: Github,
      link: 'https://github.com/sumitsahani174',
      color: '#333',
      gradient: 'linear-gradient(135deg, #333, #555)'
    },
    {
      label: 'Portfolio',
      value: 'My Digital Showcase',
      icon: Globe,
      link: 'https://sumitsahani174.github.io/React-Portfolio/',
      color: '#4285f4',
      gradient: 'linear-gradient(135deg, #4285f4, #34a853)'
    },
    {
      label: 'WhatsApp',
      value: 'Quick Chat',
      icon: MessageCircle,
      link: 'https://wa.me/919004844180',
      color: '#25d366',
      gradient: 'linear-gradient(135deg, #25d366, #128c7e)'
    }
  ];

  const LucideIcon = ({ IconComponent, color, size = 24, ...props }) => {
    if (!IconComponent) return null;
    
    return (
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color || theme.palette.primary.main,
          '& svg': {
            width: size,
            height: size,
          },
          ...props.sx
        }}
      >
        <IconComponent size={size} style={{ color: color || 'currentColor' }} />
      </Box>
    );
  };

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
          background: 'radial-gradient(circle at 30% 20%, rgba(74, 144, 226, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <LucideIcon 
                IconComponent={Sparkles} 
                color={theme.palette.primary.main}
                size={28}
                sx={{ mr: 2, animation: 'pulse 2s infinite' }}
              />
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Let's Connect
              </Typography>
              <LucideIcon 
                IconComponent={Star} 
                color={theme.palette.secondary.main}
                size={28}
                sx={{ ml: 2, animation: 'pulse 2s infinite 0.5s' }}
              />
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
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Ready to collaborate? Let's discuss opportunities and bring ideas to life together
            </Typography>
          </Box>
        </Fade>

        {/* Direct Contact Cards */}
        <Fade in={isVisible} timeout={1200}>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {contactItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    elevation={8}
                    onMouseEnter={() => setHoveredCard(`contact-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${theme.palette.divider}30`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: theme.shadows[16],
                        '& .contact-icon': {
                          transform: 'rotate(10deg) scale(1.1)',
                          background: item.gradient
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: item.gradient,
                        transform: hoveredCard === `contact-${index}` ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease'
                      }
                    }}
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      {/* Background decorative icon */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          opacity: 0.05,
                          transform: 'scale(2.5)',
                          '& svg': {
                            width: 32,
                            height: 32
                          }
                        }}
                      >
                        <IconComponent size={32} />
                      </Box>

                      <Box
                        className="contact-icon"
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: 4,
                          background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          border: `2px solid ${item.color}30`,
                          position: 'relative',
                          zIndex: 1,
                          '& svg': {
                            width: 36,
                            height: 36,
                            color: item.color
                          }
                        }}
                      >
                        <IconComponent size={36} style={{ color: item.color }} />
                      </Box>
                      
                      <Typography
                        variant="h6"
                        sx={{ 
                          fontWeight: 700, 
                          color: theme.palette.text.primary,
                          mb: 1,
                          position: 'relative',
                          zIndex: 1
                        }}
                      >
                        {item.label}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: theme.palette.text.secondary,
                          mb: 2,
                          fontStyle: 'italic',
                          position: 'relative',
                          zIndex: 1
                        }}
                      >
                        {item.description}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{ 
                          color: item.color,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          position: 'relative',
                          zIndex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1
                        }}
                      >
                        {item.value}
                        <LucideIcon IconComponent={ExternalLink} size={16} sx={{ opacity: 0.6 }} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Fade>

        {/* Social Media Section */}
        <Fade in={isVisible} timeout={1400}>
          <Paper
            elevation={12}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 6,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${theme.palette.divider}20`,
              mb: 4,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1
                }}
              >
                <LucideIcon IconComponent={Globe} size={24} />
                Find Me Online
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                Connect with me across different platforms
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
              {socialItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Tooltip title={`${item.label} - ${item.value}`} key={index} arrow>
                    <Card
                      elevation={4}
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => setHoveredCard(`social-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                      sx={{
                        width: { xs: 140, sm: 160 },
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 3,
                        textDecoration: 'none',
                        background: 'rgba(255,255,255,0.8)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: `2px solid ${item.color}20`,
                        '&:hover': {
                          transform: 'translateY(-5px) scale(1.05)',
                          background: `${item.color}10`,
                          borderColor: `${item.color}50`,
                          boxShadow: `0 10px 30px ${item.color}30`
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 3,
                          background: hoveredCard === `social-${index}` ? item.gradient : `${item.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          transition: 'all 0.3s ease',
                          '& svg': {
                            width: 28,
                            height: 28,
                            color: item.color
                          }
                        }}
                      >
                        <IconComponent size={28} style={{ color: item.color }} />
                      </Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ 
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          fontSize: '0.85rem',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Card>
                  </Tooltip>
                );
              })}
            </Box>
          </Paper>
        </Fade>

        {/* Resume Download Section */}
        <Fade in={isVisible} timeout={1600}>
          <Box sx={{ textAlign: 'center' }}>
            <Paper
              elevation={8}
              sx={{
                p: 4,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
                border: `1px solid ${theme.palette.primary.main}30`,
                backdropFilter: 'blur(10px)'
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1
                }}
              >
                <LucideIcon IconComponent={MapPin} size={20} />
                Ready to Work Together?
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                startIcon={<LucideIcon IconComponent={Download} size={20} />}
                endIcon={<LucideIcon IconComponent={Send} size={16} />}
                href={`${process.env.PUBLIC_URL}/Sumit-Sahani-Resume.pdf`}
                download="Sumit-Sahani-Resume.pdf"
                target="_blank"
                onClick={(e) => {
                  // Fallback in case the file doesn't exist
                  const link = document.createElement('a');
                  link.href = `${process.env.PUBLIC_URL || ''}/Sumit-Sahani-Resume.pdf`;
                  link.download = 'Sumit-Sahani-Resume.pdf';
                  link.target = '_blank';
                  
                  // Check if file exists before downloading
                  fetch(link.href)
                    .then(response => {
                      if (response.ok) {
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      } else {
                        // If PDF doesn't exist, show alert
                        alert('Resume file not found. Please make sure "Sumit-Sahani-Resume.pdf" is in the public folder.');
                      }
                    })
                    .catch(() => {
                      alert('Resume file not found. Please make sure "Sumit-Sahani-Resume.pdf" is in the public folder.');
                    });
                  
                  e.preventDefault();
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 35px ${theme.palette.primary.main}50`,
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                Download My Resume
              </Button>
              
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  mt: 2,
                  fontStyle: 'italic'
                }}
              >
                Let's discuss how we can create something amazing together!
              </Typography>
            </Paper>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Contact;