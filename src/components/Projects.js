import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  IconButton,
  Avatar,
  Divider,
  Stack
} from '@mui/material';
import {
  Shield,
  Users,
  TestTube,
  Cog,
  ExternalLink,
  Github,
  TrendingUp,
  Calendar,
  Code,
  Database,
  Cloud,
  Zap
} from 'lucide-react';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Fire Insurance System",
      company: "HDFC ERGO",
      description: "Comprehensive fire insurance management system built with microservices architecture. Features policy management, claims processing, and real-time risk assessment with advanced analytics.",
      icon: <Shield size={40} />,
      category: "Insurance Platform",
      year: "2022-2024",
      status: "Production",
      technologies: [".NET Core", "React.js", "Azure", "Microservices", "SQL Server"],
      highlights: [
        "35% performance improvement",
        "Microservices architecture",
        "Azure DevOps CI/CD",
        "Real-time processing"
      ],
      metrics: {
        users: "5K+",
        performance: "35%",
        uptime: "99.9%"
      },
      color: {
        primary: theme.palette.primary.main,
        secondary: theme.palette.primary.dark,
        bg: theme.palette.primary.light + '10'
      }
    },
    {
      id: 2,
      title: "DSA Portal",
      company: "Thyrocare",
      description: "Direct Selling Agent portal for healthcare service distribution. Streamlined agent management, commission tracking, and comprehensive reporting dashboard.",
      icon: <Users size={40} />,
      category: "Healthcare Portal",
      year: "2020-2022",
      status: "Active",
      technologies: ["ASP.NET", "React.js", "SQL Server", "Chart.js", "Bootstrap"],
      highlights: [
        "Agent management system",
        "Commission tracking",
        "Analytics dashboard",
        "Multi-role access"
      ],
      metrics: {
        users: "2K+",
        agents: "500+",
        revenue: "↑40%"
      },
      color: {
        primary: theme.palette.secondary.main,
        secondary: theme.palette.secondary.dark,
        bg: theme.palette.secondary.light + '10'
      }
    },
    {
      id: 3,
      title: "RT-PCR COVID Booking App",
      company: "Thyrocare",
      description: "Mobile-responsive COVID-19 testing booking platform with real-time slot management, patient registration, and automated report delivery system.",
      icon: <TestTube size={40} />,
      category: "Healthcare Mobile App",
      year: "2020-2021",
      status: "Completed",
      technologies: ["React.js", "Node.js", "MongoDB", "PWA", "SMS Integration"],
      highlights: [
        "10K+ daily bookings",
        "Real-time slots",
        "Automated reports",
        "Mobile-first design"
      ],
      metrics: {
        bookings: "10K+",
        response: "<2s",
        accuracy: "99.5%"
      },
      color: {
        primary: theme.palette.success.main,
        secondary: theme.palette.success.dark,
        bg: theme.palette.success.light + '10'
      }
    },
    {
      id: 4,
      title: "Thyrocare APIs Suite",
      company: "Thyrocare",
      description: "Comprehensive RESTful API suite for healthcare operations. Includes lab integrations, report generation, payment processing, and third-party service connections.",
      icon: <Cog size={40} />,
      category: "API Platform",
      year: "2019-2022",
      status: "Production",
      technologies: ["ASP.NET Core", "Swagger", "JWT", "Redis", "Docker"],
      highlights: [
        "50+ API endpoints",
        "Lab integrations",
        "Payment gateway",
        "Rate limiting & caching"
      ],
      metrics: {
        endpoints: "50+",
        requests: "1M+",
        latency: "<100ms"
      },
      color: {
        primary: theme.palette.warning.main,
        secondary: theme.palette.warning.dark,
        bg: theme.palette.warning.light + '10'
      }
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[50]} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh'
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${theme.palette.primary.main}08 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: 250,
          height: 250,
          background: `radial-gradient(circle, ${theme.palette.secondary.main}08 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg">
        {/* Header */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant={isMobile ? 'h3' : 'h2'}
              component="h2"
              sx={{
                fontWeight: 800,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.success.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Featured Projects
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
                mx: 'auto',
                mb: 3
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 600,
                mx: 'auto',
                fontWeight: 400
              }}
            >
              Innovative solutions delivering real-world impact across healthcare and insurance domains
            </Typography>
          </Box>
        </Fade>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Slide
                in={isVisible}
                direction="up"
                timeout={1000 + index * 200}
              >
                <Card
                  elevation={hoveredCard === project.id ? 20 : 8}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    border: `1px solid ${theme.palette.divider}30`,
                    transform: hoveredCard === project.id ? 'translateY(-8px)' : 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 6,
                      background: `linear-gradient(90deg, ${project.color.primary}, ${project.color.secondary})`,
                      opacity: hoveredCard === project.id ? 1 : 0.7,
                      transition: 'opacity 0.3s ease'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, pb: 2 }}>
                    {/* Project Header */}
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                        <Avatar
                          sx={{
                            width: 64,
                            height: 64,
                            background: `linear-gradient(135deg, ${project.color.primary}, ${project.color.secondary})`,
                            mr: 2,
                            boxShadow: theme.shadows[8]
                          }}
                        >
                          {project.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h5"
                            component="h3"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.text.primary,
                              mb: 0.5,
                              lineHeight: 1.3
                            }}
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: project.color.primary,
                              fontWeight: 600,
                              mb: 1
                            }}
                          >
                            {project.company}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip
                              label={project.category}
                              size="small"
                              sx={{
                                background: project.color.bg,
                                color: project.color.primary,
                                fontWeight: 500
                              }}
                            />
                            <Chip
                              label={project.year}
                              size="small"
                              variant="outlined"
                              icon={<Calendar size={16} />}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        mb: 3
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Key Highlights */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <Zap size={18} style={{ color: project.color.primary }} />
                        Key Highlights
                      </Typography>
                      <Stack spacing={1}>
                        {project.highlights.map((highlight, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: project.color.primary
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ color: theme.palette.text.secondary }}
                            >
                              {highlight}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>

                    {/* Metrics */}
                    <Box sx={{ mb: 3 }}>
                      <Grid container spacing={2}>
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <Grid item xs={4} key={key}>
                            <Box sx={{ textAlign: 'center' }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 700,
                                  color: project.color.primary,
                                  fontSize: '1.1rem'
                                }}
                              >
                                {value}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  textTransform: 'capitalize',
                                  fontSize: '0.75rem'
                                }}
                              >
                                {key}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Technologies */}
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <Code size={18} style={{ color: project.color.primary }} />
                        Technologies
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: `${project.color.primary}40`,
                              color: theme.palette.text.secondary,
                              '&:hover': {
                                borderColor: project.color.primary,
                                background: project.color.bg,
                                transform: 'translateY(-2px)'
                              },
                              transition: 'all 0.2s ease'
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>

                  {/* Card Actions */}
                  <CardActions sx={{ px: 4, pb: 3, pt: 0 }}>
                    <Button
                      variant="contained"
                      startIcon={<ExternalLink size={18} />}
                      sx={{
                        background: `linear-gradient(135deg, ${project.color.primary}, ${project.color.secondary})`,
                        boxShadow: theme.shadows[4],
                        textTransform: 'none',
                        borderRadius: 2,
                        px: 3,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${project.color.secondary}, ${project.color.primary})`,
                          boxShadow: theme.shadows[8],
                          transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      View Details
                    </Button>
                    <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
                      <IconButton
                        size="small"
                        sx={{
                          color: theme.palette.text.secondary,
                          '&:hover': {
                            color: project.color.primary,
                            background: project.color.bg
                          }
                        }}
                      >
                        <Github size={20} />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{
                          color: theme.palette.text.secondary,
                          '&:hover': {
                            color: project.color.primary,
                            background: project.color.bg
                          }
                        }}
                      >
                        <ExternalLink size={20} />
                      </IconButton>
                    </Box>
                  </CardActions>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>

        {/* Summary Section */}
        <Fade in={isVisible} timeout={1500}>
          <Box sx={{ mt: 8 }}>
            <Card
              elevation={8}
              sx={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: 4,
                border: `1px solid ${theme.palette.divider}30`,
                p: 4
              }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 3
                }}
              >
                Project Impact Summary
              </Typography>
              <Grid container spacing={4} sx={{ textAlign: 'center' }}>
                <Grid item xs={12} sm={3}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1
                      }}
                    >
                      4
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Major Projects
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1
                      }}
                    >
                      15K+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Users Impacted
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1
                      }}
                    >
                      99.9%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      System Uptime
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${theme.palette.warning.main}, ${theme.palette.warning.dark})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1
                      }}
                    >
                      35%+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Performance Boost
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Projects;