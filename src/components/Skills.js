import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Avatar,
  LinearProgress,
  Stack,
  Paper
} from '@mui/material';
import {
  Code,
  Globe,
  Database,
  Cloud,
  GitBranch,
  Settings,
  Layers,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react';

const TechnicalSkills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: <Code size={32} />,
      color: {
        primary: theme.palette.primary.main,
        secondary: theme.palette.primary.dark,
        bg: theme.palette.primary.light + '15'
      },
      skills: [
        { name: 'C#', level: 95, experience: '5+ years', category: 'Expert' },
        { name: 'JavaScript', level: 90, experience: '4+ years', category: 'Advanced' },
        { name: 'SQL', level: 85, experience: '5+ years', category: 'Advanced' },
        { name: 'TypeScript', level: 80, experience: '3+ years', category: 'Proficient' }
      ]
    },
    {
      id: 2,
      title: 'Frameworks & Libraries',
      icon: <Globe size={32} />,
      color: {
        primary: theme.palette.secondary.main,
        secondary: theme.palette.secondary.dark,
        bg: theme.palette.secondary.light + '15'
      },
      skills: [
        { name: '.NET Core', level: 95, experience: '4+ years', category: 'Expert' },
        { name: 'ASP.NET', level: 90, experience: '5+ years', category: 'Expert' },
        { name: 'React.js', level: 88, experience: '4+ years', category: 'Advanced' },
        { name: 'Node.js', level: 75, experience: '2+ years', category: 'Proficient' }
      ]
    },
    {
      id: 3,
      title: 'Databases & ORM',
      icon: <Database size={32} />,
      color: {
        primary: theme.palette.success.main,
        secondary: theme.palette.success.dark,
        bg: theme.palette.success.light + '15'
      },
      skills: [
        { name: 'SQL Server', level: 92, experience: '5+ years', category: 'Expert' },
        { name: 'Oracle', level: 80, experience: '3+ years', category: 'Advanced' },
        { name: 'LINQ', level: 88, experience: '4+ years', category: 'Advanced' },
        { name: 'Entity Framework', level: 85, experience: '4+ years', category: 'Advanced' }
      ]
    },
    {
      id: 4,
      title: 'Cloud & DevOps',
      icon: <Cloud size={32} />,
      color: {
        primary: theme.palette.warning.main,
        secondary: theme.palette.warning.dark,
        bg: theme.palette.warning.light + '15'
      },
      skills: [
        { name: 'Azure DevOps', level: 85, experience: '3+ years', category: 'Advanced' },
        { name: 'Git', level: 90, experience: '5+ years', category: 'Expert' },
        { name: 'Docker', level: 75, experience: '2+ years', category: 'Proficient' },
        { name: 'CI/CD', level: 80, experience: '3+ years', category: 'Advanced' }
      ]
    },
    {
      id: 5,
      title: 'APIs & Architecture',
      icon: <Settings size={32} />,
      color: {
        primary: theme.palette.info.main,
        secondary: theme.palette.info.dark,
        bg: theme.palette.info.light + '15'
      },
      skills: [
        { name: 'RESTful APIs', level: 92, experience: '4+ years', category: 'Expert' },
        { name: 'Swagger', level: 85, experience: '3+ years', category: 'Advanced' },
        { name: 'Microservices', level: 80, experience: '2+ years', category: 'Advanced' },
        { name: 'GraphQL', level: 70, experience: '1+ years', category: 'Proficient' }
      ]
    },
    {
      id: 6,
      title: 'Methodologies',
      icon: <Layers size={32} />,
      color: {
        primary: theme.palette.error.main,
        secondary: theme.palette.error.dark,
        bg: theme.palette.error.light + '15'
      },
      skills: [
        { name: 'Agile/Scrum', level: 90, experience: '5+ years', category: 'Expert' },
        { name: 'TDD', level: 75, experience: '2+ years', category: 'Proficient' },
        { name: 'Clean Architecture', level: 85, experience: '3+ years', category: 'Advanced' },
        { name: 'SOLID Principles', level: 88, experience: '4+ years', category: 'Advanced' }
      ]
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return theme.palette.success.main;
    if (level >= 80) return theme.palette.info.main;
    if (level >= 70) return theme.palette.warning.main;
    return theme.palette.error.main;
  };

  const getCategoryChipColor = (category) => {
    switch (category) {
      case 'Expert': return { bg: theme.palette.success.light + '20', color: theme.palette.success.main };
      case 'Advanced': return { bg: theme.palette.info.light + '20', color: theme.palette.info.main };
      case 'Proficient': return { bg: theme.palette.warning.light + '20', color: theme.palette.warning.main };
      default: return { bg: theme.palette.grey[100], color: theme.palette.grey[600] };
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[50]} 50%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: 200,
          height: 200,
          background: `radial-gradient(circle, ${theme.palette.primary.main}06 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 180,
          height: 180,
          background: `radial-gradient(circle, ${theme.palette.secondary.main}06 0%, transparent 70%)`,
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
              Technical Skills
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
              Comprehensive technical expertise across modern development stack
            </Typography>
          </Box>
        </Fade>

        {/* Skills Overview Cards */}
        <Fade in={isVisible} timeout={1200}>
          <Box sx={{ mb: 8 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}30`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[12]
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 2,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
                    }}
                  >
                    <Star size={28} />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}>
                    20+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Core Technologies
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}30`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[12]
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 2,
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`
                    }}
                  >
                    <TrendingUp size={28} />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.secondary.main, mb: 1 }}>
                    6+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Years Experience
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}30`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[12]
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 2,
                      background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`
                    }}
                  >
                    <Layers size={28} />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.success.main, mb: 1 }}>
                    6
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Skill Categories
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}30`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[12]
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 2,
                      background: `linear-gradient(135deg, ${theme.palette.warning.main}, ${theme.palette.warning.dark})`
                    }}
                  >
                    <Zap size={28} />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.warning.main, mb: 1 }}>
                    85%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Avg Proficiency
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Fade>

        {/* Skills Categories */}
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={category.id}>
              <Slide
                in={isVisible}
                direction="up"
                timeout={1000 + index * 150}
              >
                <Card
                  elevation={hoveredCategory === category.id ? 16 : 8}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    border: `1px solid ${theme.palette.divider}30`,
                    transform: hoveredCategory === category.id ? 'translateY(-6px)' : 'translateY(0)',
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
                      height: 5,
                      background: `linear-gradient(90deg, ${category.color.primary}, ${category.color.secondary})`,
                      opacity: hoveredCategory === category.id ? 1 : 0.8,
                      transition: 'opacity 0.3s ease'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Category Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          background: `linear-gradient(135deg, ${category.color.primary}, ${category.color.secondary})`,
                          mr: 3,
                          boxShadow: theme.shadows[8]
                        }}
                      >
                        {category.icon}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 1
                          }}
                        >
                          {category.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary
                          }}
                        >
                          {category.skills.length} Technologies
                        </Typography>
                      </Box>
                    </Box>

                    {/* Skills List */}
                    <Stack spacing={3}>
                      {category.skills.map((skill, skillIndex) => (
                        <Box key={skillIndex}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 600,
                                  color: theme.palette.text.primary
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Chip
                                label={skill.category}
                                size="small"
                                sx={{
                                  ...getCategoryChipColor(skill.category),
                                  fontWeight: 500,
                                  fontSize: '0.75rem'
                                }}
                              />
                            </Box>
                            <Box sx={{ textAlign: 'right' }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 700,
                                  color: getSkillColor(skill.level)
                                }}
                              >
                                {skill.level}%
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  fontSize: '0.7rem'
                                }}
                              >
                                {skill.experience}
                              </Typography>
                            </Box>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: theme.palette.grey[200],
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                                background: `linear-gradient(90deg, ${getSkillColor(skill.level)}, ${getSkillColor(skill.level)}dd)`,
                                transition: 'all 0.8s ease',
                                transitionDelay: `${index * 100 + skillIndex * 50}ms`
                              }
                            }}
                          />
                        </Box>
                      ))}
                    </Stack>

                    {/* Category Stats */}
                    <Box
                      sx={{
                        mt: 4,
                        p: 2,
                        background: category.color.bg,
                        borderRadius: 2,
                        border: `1px solid ${category.color.primary}20`
                      }}
                    >
                      <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                        <Grid item xs={4}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: category.color.primary,
                              fontSize: '1.1rem'
                            }}
                          >
                            {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: '0.75rem'
                            }}
                          >
                            Avg Level
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: category.color.primary,
                              fontSize: '1.1rem'
                            }}
                          >
                            {category.skills.filter(skill => skill.level >= 85).length}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: '0.75rem'
                            }}
                          >
                            Expert
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: category.color.primary,
                              fontSize: '1.1rem'
                            }}
                          >
                            {category.skills.length}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: '0.75rem'
                            }}
                          >
                            Skills
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnicalSkills;