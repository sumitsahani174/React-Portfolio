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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: <Code size={isMobile ? 24 : isTablet ? 28 : 32} />,
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
      icon: <Globe size={isMobile ? 24 : isTablet ? 28 : 32} />,
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
      icon: <Database size={isMobile ? 24 : isTablet ? 28 : 32} />,
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
      icon: <Cloud size={isMobile ? 24 : isTablet ? 28 : 32} />,
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
      icon: <Settings size={isMobile ? 24 : isTablet ? 28 : 32} />,
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
      icon: <Layers size={isMobile ? 24 : isTablet ? 28 : 32} />,
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
      case 'Expert': return { backgroundColor: theme.palette.success.light, color: theme.palette.success.main };
      case 'Advanced': return { backgroundColor: theme.palette.info.light, color: theme.palette.info.main };
      case 'Proficient': return { backgroundColor: theme.palette.warning.light, color: theme.palette.warning.main };
      default: return { backgroundColor: theme.palette.grey[100], color: theme.palette.grey[600] };
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, sm: 6, md: 8, lg: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[50]} 50%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements - Responsive positioning */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '10%', md: '15%' },
          right: { xs: '5%', md: '10%' },
          width: { xs: 120, sm: 150, md: 200 },
          height: { xs: 120, sm: 150, md: 200 },
          background: `radial-gradient(circle, ${theme.palette.primary.main}06 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '15%', md: '20%' },
          left: { xs: '0%', md: '5%' },
          width: { xs: 100, sm: 140, md: 180 },
          height: { xs: 100, sm: 140, md: 180 },
          background: `radial-gradient(circle, ${theme.palette.secondary.main}06 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />

      <Container 
        maxWidth="lg" 
        sx={{ 
          px: { xs: 1, sm: 2, md: 3 }
        }}
      >
        {/* Header - Responsive Typography */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 8 } }}>
            <Typography
              variant={isMobile ? 'h4' : isTablet ? 'h3' : 'h2'}
              component="h2"
              sx={{
                fontWeight: { xs: 700, md: 800 },
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.success.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: { xs: 1, sm: 2 },
                fontSize: { xs: '1.75rem', sm: '2.125rem', md: '3rem', lg: '3.75rem' }
              }}
            >
              Technical Skills
            </Typography>
            <Box
              sx={{
                width: { xs: 60, sm: 70, md: 80 },
                height: { xs: 3, md: 4 },
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
                mx: 'auto',
                mb: { xs: 2, sm: 3 }
              }}
            />
            <Typography
              variant={isMobile ? 'body1' : 'h6'}
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: { xs: '100%', sm: 500, md: 600 },
                mx: 'auto',
                fontWeight: 400,
                px: { xs: 2, sm: 0 },
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' }
              }}
            >
              Comprehensive technical expertise across modern development stack
            </Typography>
          </Box>
        </Fade>

        {/* Skills Overview Cards - Enhanced Responsive Grid */}
        <Fade in={isVisible} timeout={1200}>
          <Box sx={{ mb: { xs: 4, sm: 6, md: 8 } }}>
            <Grid container spacing={{ xs: 2, sm: 3, md: 3 }}>
              {[
                {
                  title: 'Core Technologies',
                  count: '20+',
                  icon: <Star size={isMobile ? 20 : isTablet ? 24 : 28} />,
                  color: theme.palette.primary.main
                },
                {
                  title: 'Years Experience',
                  count: '6+',
                  icon: <TrendingUp size={isMobile ? 20 : isTablet ? 24 : 28} />,
                  color: theme.palette.secondary.main
                },
                {
                  title: 'Skill Categories',
                  count: '6',
                  icon: <Layers size={isMobile ? 20 : isTablet ? 24 : 28} />,
                  color: theme.palette.success.main
                },
                {
                  title: 'Avg Proficiency',
                  count: '85%',
                  icon: <Zap size={isMobile ? 20 : isTablet ? 24 : 28} />,
                  color: theme.palette.warning.main
                }
              ].map((item, index) => (
                <Grid size={{ xs: 6, sm: 6, md: 3 }} key={index}>
                  <Paper
                    elevation={isMobile ? 2 : 4}
                    sx={{
                      p: { xs: 2, sm: 2.5, md: 3 },
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: { xs: 2, md: 3 },
                      border: `1px solid ${theme.palette.divider}30`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: isMobile ? 'none' : 'translateY(-4px)',
                        boxShadow: isMobile ? theme.shadows[4] : theme.shadows[12]
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        width: { xs: 40, sm: 48, md: 56 },
                        height: { xs: 40, sm: 48, md: 56 },
                        mx: 'auto',
                        mb: { xs: 1, sm: 1.5, md: 2 },
                        background: `linear-gradient(135deg, ${item.color}, ${theme.palette.primary.dark})`
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Typography 
                      variant={isMobile ? 'h5' : 'h4'} 
                      sx={{ 
                        fontWeight: 700, 
                        color: item.color, 
                        mb: { xs: 0.5, md: 1 },
                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' }
                      }}
                    >
                      {item.count}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' }
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        {/* Skills Categories - Enhanced Responsive Layout */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} key={category.id}>
              <Slide
                in={isVisible}
                direction="up"
                timeout={1000 + index * 150}
              >
                <Card
                  elevation={hoveredCategory === category.id ? (isMobile ? 8 : 16) : (isMobile ? 4 : 8)}
                  onMouseEnter={() => !isMobile && setHoveredCategory(category.id)}
                  onMouseLeave={() => !isMobile && setHoveredCategory(null)}
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: { xs: 3, md: 4 },
                    border: `1px solid ${theme.palette.divider}30`,
                    transform: (hoveredCategory === category.id && !isMobile) ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: isMobile ? 'default' : 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: { xs: 4, md: 5 },
                      background: `linear-gradient(90deg, ${category.color.primary}, ${category.color.secondary})`,
                      opacity: (hoveredCategory === category.id && !isMobile) ? 1 : 0.8,
                      transition: 'opacity 0.3s ease'
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                    {/* Category Header - Responsive Layout */}
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: { xs: 2, sm: 3, md: 4 },
                      flexDirection: { xs: 'column', sm: 'row' },
                      textAlign: { xs: 'center', sm: 'left' }
                    }}>
                      <Avatar
                        sx={{
                          width: { xs: 48, sm: 56, md: 64 },
                          height: { xs: 48, sm: 56, md: 64 },
                          background: `linear-gradient(135deg, ${category.color.primary}, ${category.color.secondary})`,
                          mr: { xs: 0, sm: 2, md: 3 },
                          mb: { xs: 1, sm: 0 },
                          boxShadow: theme.shadows[8]
                        }}
                      >
                        {category.icon}
                      </Avatar>
                      <Box>
                        <Typography
                          variant={isMobile ? 'h6' : 'h5'}
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: { xs: 0.5, md: 1 },
                            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                          }}
                        >
                          {category.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' }
                          }}
                        >
                          {category.skills.length} Technologies
                        </Typography>
                      </Box>
                    </Box>

                    {/* Skills List - Enhanced Mobile Layout */}
                    <Stack spacing={{ xs: 2, sm: 2.5, md: 3 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Box key={skillIndex}>
                          <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: { xs: 'flex-start', sm: 'center' },
                            mb: 1,
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: { xs: 1, sm: 2 }
                          }}>
                            <Box sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: { xs: 1, sm: 2 },
                              flexWrap: 'wrap'
                            }}>
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 600,
                                  color: theme.palette.text.primary,
                                  fontSize: { xs: '0.9rem', sm: '1rem' }
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
                                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                  height: { xs: 20, sm: 24 }
                                }}
                              />
                            </Box>
                            <Box sx={{ 
                              textAlign: { xs: 'left', sm: 'right' },
                              minWidth: { sm: 80 }
                            }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 700,
                                  color: getSkillColor(skill.level),
                                  fontSize: { xs: '0.85rem', sm: '0.875rem' }
                                }}
                              >
                                {skill.level}%
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  fontSize: { xs: '0.65rem', sm: '0.7rem' }
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
                              height: { xs: 6, sm: 7, md: 8 },
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

                    {/* Category Stats - Responsive Layout */}
                    <Box
                      sx={{
                        mt: { xs: 3, md: 4 },
                        p: { xs: 1.5, sm: 2 },
                        background: category.color.bg,
                        borderRadius: 2,
                        border: `1px solid ${category.color.primary}20`
                      }}
                    >
                      <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ textAlign: 'center' }}>
                        <Grid size={4}>
                          <Typography
                            variant={isMobile ? 'body1' : 'h6'}
                            sx={{
                              fontWeight: 700,
                              color: category.color.primary,
                              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                            }}
                          >
                            {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' }
                            }}
                          >
                            Avg Level
                          </Typography>
                        </Grid>
                        <Grid size={4}>
                          <Typography
                            variant={isMobile ? 'body1' : 'h6'}
                            sx={{
                              fontWeight: 700,
                              color: category.color.primary,
                              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                            }}
                          >
                            {category.skills.filter(skill => skill.level >= 85).length}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' }
                            }}
                          >
                            Expert
                          </Typography>
                        </Grid>
                        <Grid size={4}>
                          <Typography
                            variant={isMobile ? 'body1' : 'h6'}
                            sx={{
                              fontWeight: 700,
                              color: category.color.primary,
                              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                            }}
                          >
                            {category.skills.length}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' }
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