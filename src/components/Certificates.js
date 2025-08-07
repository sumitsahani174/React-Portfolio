import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Fade,
  useTheme,
  Divider,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
  Stack
} from '@mui/material';
import { 
  Award, 
  Calendar, 
  Eye, 
  ExternalLink, 
  Star,
  Sparkles,
  Trophy,
  BadgeCheck,
  Download,
  X
} from 'lucide-react';

const Certificates = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample certificates data - Replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: 'Learn How to Design Seamless Notification Services',
      issuer: 'Scaler Academy',
      date: 'June 2025',
      description: '🚀 Completed the Scaler Masterclass on "Learn How to Design Seamless Notification Services" held on 24th June 2025! It was a great session to dive deeper into designing reliable and scalable notification architectures. Big thanks to Scaler and Pragy Agarwal for the insightful session and guidance. 📈 Always excited to learn, grow, and build better systems',
      category: 'System Designing',
      image: `${process.env.PUBLIC_URL}/certificate/ScalerCertificate.jpeg`, // Replace with your actual image path
      //credentialId: 'META-REACT-2023-001',
      skills: ['System Design'],
      // verificationUrl: 'https://coursera.org/verify/your-credential',
      color: '#61dafb'
    }
    // ,
    // {
    //   id: 2,
    //   title: 'AWS Cloud Practitioner',
    //   issuer: 'Amazon Web Services',
    //   date: 'October 2023',
    //   description: 'Foundation-level certification demonstrating cloud fluency and foundational AWS knowledge.',
    //   category: 'Cloud Computing',
    //   image: '/certificate/aws-cert.jpg', // Replace with your actual image path
    //   credentialId: 'AWS-CP-2023-456',
    //   skills: ['AWS', 'Cloud Computing', 'EC2', 'S3'],
    //   verificationUrl: 'https://aws.amazon.com/verification/your-credential',
    //   color: '#ff9900'
    // },
    // {
    //   id: 3,
    //   title: 'JavaScript Algorithms and Data Structures',
    //   issuer: 'freeCodeCamp',
    //   date: 'August 2023',
    //   description: 'Certificate covering fundamental JavaScript concepts, algorithms, and data structure implementations.',
    //   category: 'Programming',
    //   image: '/certificate/javascript-cert.jpg', // Replace with your actual image path
    //   credentialId: 'FCC-JS-2023-789',
    //   skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
    //   verificationUrl: 'https://freecodecamp.org/certification/your-username/javascript',
    //   color: '#f7df1e'
    // },
    // {
    //   id: 4,
    //   title: 'Google UX Design Certificate',
    //   issuer: 'Google',
    //   date: 'June 2023',
    //   description: 'Professional certificate in user experience design, covering design thinking, prototyping, and user research.',
    //   category: 'Design',
    //   image: '/certificate/ux-cert.jpg', // Replace with your actual image path
    //   credentialId: 'GOOGLE-UX-2023-012',
    //   skills: ['UX Design', 'Figma', 'User Research', 'Prototyping'],
    //   verificationUrl: 'https://coursera.org/verify/professional-cert/your-credential',
    //   color: '#4285f4'
    // },
    // {
    //   id: 5,
    //   title: 'MongoDB Developer Path',
    //   issuer: 'MongoDB University',
    //   date: 'April 2023',
    //   description: 'Comprehensive training on MongoDB database design, development, and administration.',
    //   category: 'Database',
    //   image: '/certificate/mongodb-cert.jpg', // Replace with your actual image path
    //   credentialId: 'MONGO-DEV-2023-345',
    //   skills: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation'],
    //   verificationUrl: 'https://university.mongodb.com/course_completion/your-credential',
    //   color: '#47a248'
    // },
    // {
    //   id: 6,
    //   title: 'Docker Certified Associate',
    //   issuer: 'Docker',
    //   date: 'February 2023',
    //   description: 'Certification validating skills in containerization, Docker fundamentals, and container orchestration.',
    //   category: 'DevOps',
    //   image: '/certificate/docker-cert.jpg', // Replace with your actual image path
    //   credentialId: 'DOCKER-DCA-2023-678',
    //   skills: ['Docker', 'Containers', 'DevOps', 'Kubernetes'],
    //   verificationUrl: 'https://credentials.docker.com/your-credential',
    //   color: '#2496ed'
    // }
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

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCertificate(null);
  };

  const getCategoryIcon = (category) => 
    {
    switch (category.toLowerCase()) {
      case 'web development':
        return Trophy;
      case 'cloud computing':
        return BadgeCheck;
      case 'programming':
        return Award;
      case 'design':
        return Star;
      case 'database':
        return Trophy;
      case 'devops':
        return BadgeCheck;
      default:
        return Award;
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'web development':
        return '#61dafb';
      case 'cloud computing':
        return '#ff9900';
      case 'programming':
        return '#f7df1e';
      case 'design':
        return '#4285f4';
      case 'database':
        return '#47a248';
      case 'devops':
        return '#2496ed';
      default:
        return theme.palette.primary.main;
    }
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
          background: 'radial-gradient(circle at 20% 30%, rgba(255, 193, 7, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(76, 175, 80, 0.08) 0%, transparent 50%)',
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
                IconComponent={Trophy} 
                color={theme.palette.warning.main}
                size={32}
                sx={{ mr: 2, animation: 'pulse 2s infinite' }}
              />
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  background: `linear-gradient(45deg, ${theme.palette.warning.main}, ${theme.palette.success.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Certifications & Achievements
              </Typography>
              <LucideIcon 
                IconComponent={Sparkles} 
                color={theme.palette.success.main}
                size={32}
                sx={{ ml: 2, animation: 'pulse 2s infinite 0.5s' }}
              />
            </Box>
            <Divider
              sx={{
                width: 140,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.warning.main}, ${theme.palette.success.main})`,
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
                maxWidth: 700,
                mx: 'auto'
              }}
            >
              Professional certifications and continuous learning achievements that validate my expertise
            </Typography>
          </Box>
        </Fade>

        {/* Certificates Grid */}
        <Grid container spacing={4}>
          {certificates.map((certificate, index) => {
            const CategoryIcon = getCategoryIcon(certificate.category);
            return (
              <Grid item xs={12} sm={6} lg={4} key={certificate.id}>
                <Fade in={isVisible} timeout={1200 + index * 200}>
                  <Card
                    elevation={8}
                    onMouseEnter={() => setHoveredCard(certificate.id)}
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
                        transform: 'translateY(-12px) scale(1.02)',
                        boxShadow: theme.shadows[20],
                        '& .cert-image': {
                          transform: 'scale(1.05)'
                        },
                        '& .cert-overlay': {
                          opacity: 1
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${certificate.color}, ${certificate.color}80)`,
                        transform: hoveredCard === certificate.id ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease'
                      }
                    }}
                  >
                    {/* Certificate Image */}
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={certificate.image}
                        alt={certificate.title}
                        className="cert-image"
                        sx={{
                          transition: 'transform 0.4s ease',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback placeholder */}
                      <Box
                        sx={{
                          display: 'none',
                          height: 200,
                          background: `linear-gradient(135deg, ${certificate.color}20, ${certificate.color}10)`,
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          gap: 2
                        }}
                      >
                        <LucideIcon 
                          IconComponent={CategoryIcon} 
                          size={48} 
                          color={certificate.color} 
                        />
                        <Typography variant="h6" color="text.secondary">
                          Certificate Image
                        </Typography>
                      </Box>

                      {/* Overlay */}
                      <Box
                        className="cert-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0,0,0,0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        }}
                      >
                        <Button
                          variant="contained"
                          size="large"
                          startIcon={<Eye size={20} />}
                          onClick={() => handleViewCertificate(certificate)}
                          sx={{
                            background: 'rgba(255,255,255,0.9)',
                            color: 'black',
                            fontWeight: 600,
                            '&:hover': {
                              background: 'white'
                            }
                          }}
                        >
                          View Certificate
                        </Button>
                      </Box>

                      {/* Category Badge */}
                      <Chip
                        label={certificate.category}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          background: certificate.color,
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.75rem'
                        }}
                      />
                    </Box>

                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Title and Issuer */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 1,
                          lineHeight: 1.3
                        }}
                      >
                        {certificate.title}
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: certificate.color,
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        {certificate.issuer}
                      </Typography>

                      {/* Date */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Calendar size={16} color={theme.palette.text.secondary} />
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}
                        >
                          {certificate.date}
                        </Typography>
                      </Box>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.5,
                          mb: 3,
                          flexGrow: 1
                        }}
                      >
                        {certificate.description}
                      </Typography>

                      {/* Skills */}
                      <Box sx={{ mb: 3 }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                          {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                            <Chip
                              key={skillIndex}
                              label={skill}
                              size="small"
                              variant="outlined"
                              sx={{
                                fontSize: '0.7rem',
                                borderColor: `${certificate.color}50`,
                                color: certificate.color
                              }}
                            />
                          ))}
                          {certificate.skills.length > 3 && (
                            <Chip
                              label={`+${certificate.skills.length - 3}`}
                              size="small"
                              variant="outlined"
                              sx={{
                                fontSize: '0.7rem',
                                borderColor: theme.palette.grey[400],
                                color: theme.palette.text.secondary
                              }}
                            />
                          )}
                        </Stack>
                      </Box>

                      {/* Action Buttons */}
                      <Stack direction="row" spacing={1} mt="auto">
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<Eye size={16} />}
                          onClick={() => handleViewCertificate(certificate)}
                          sx={{
                            borderColor: certificate.color,
                            color: certificate.color,
                            '&:hover': {
                              borderColor: certificate.color,
                              background: `${certificate.color}10`
                            }
                          }}
                        >
                          View
                        </Button>
                        <Button
                          variant="text"
                          size="small"
                          endIcon={<ExternalLink size={14} />}
                          href={certificate.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontSize: '0.75rem'
                          }}
                        >
                          Verify
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            );
          })}
        </Grid>

        {/* Certificate Detail Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)'
            }
          }}
        >
          <DialogTitle sx={{ pb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h5" fontWeight={700}>
                {selectedCertificate?.title}
              </Typography>
              <IconButton onClick={handleCloseDialog}>
                <X size={24} />
              </IconButton>
            </Box>
          </DialogTitle>
          
          <DialogContent sx={{ pt: 1 }}>
            {selectedCertificate && (
              <Box>
                {/* Certificate Image */}
                <Box sx={{ mb: 3, borderRadius: 2, overflow: 'hidden' }}>
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: 400,
                      objectFit: 'contain',
                      background: `linear-gradient(135deg, ${selectedCertificate.color}20, ${selectedCertificate.color}10)`
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <Box
                    sx={{
                      display: 'none',
                      height: 300,
                      background: `linear-gradient(135deg, ${selectedCertificate.color}20, ${selectedCertificate.color}10)`,
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: 2,
                      borderRadius: 2
                    }}
                  >
                    <LucideIcon 
                      IconComponent={Award} 
                      size={64} 
                      color={selectedCertificate.color} 
                    />
                    <Typography variant="h6" color="text.secondary">
                      Certificate Preview
                    </Typography>
                  </Box>
                </Box>

                {/* Certificate Details */}
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      About This Certificate
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {selectedCertificate.description}
                    </Typography>

                    <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
                      Skills Demonstrated
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {selectedCertificate.skills.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          variant="filled"
                          sx={{
                            background: `${selectedCertificate.color}20`,
                            color: selectedCertificate.color,
                            fontWeight: 600
                          }}
                        />
                      ))}
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Stack spacing={3}>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Issuing Organization
                        </Typography>
                        <Typography variant="body1" fontWeight={600}>
                          {selectedCertificate.issuer}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Issue Date
                        </Typography>
                        <Typography variant="body1" fontWeight={600}>
                          {selectedCertificate.date}
                        </Typography>
                      </Box>
                      {selectedCertificate.credentialId && (
  <Box mt={2}>
    <Typography variant="subtitle2" color="text.secondary">
      Credential ID
    </Typography>
    <Typography variant="body1" fontWeight={600}>
      {selectedCertificate.credentialId}
    </Typography>
  </Box>
)}
                     

                      <Stack spacing={2}>
                      {selectedCertificate.verificationUrl && (
                        <Button
                        variant="contained"
                        fullWidth
                        startIcon={<ExternalLink size={20} />}
                        href={selectedCertificate.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: selectedCertificate.color,
                          '&:hover': {
                            background: `${selectedCertificate.color}dd`
                          }
                        }}
                      >
                        Verify Certificate
                      </Button>
                      )}
                        
                        
                        <Button
                          variant="outlined"
                          fullWidth
                          startIcon={<Download size={20} />}
                          sx={{
                            borderColor: selectedCertificate.color,
                            color: selectedCertificate.color,
                            '&:hover': {
                              borderColor: selectedCertificate.color,
                              background: `${selectedCertificate.color}10`
                            }
                          }}
                        >
                          Download Certificate
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Certificates;