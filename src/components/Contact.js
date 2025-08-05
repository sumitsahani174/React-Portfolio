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
  Button
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Contact = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactItems = [
    {
      label: 'Email',
      value: 'sumitsahani174@gmail.com',
      icon: <EmailIcon color="primary" />,
      link: 'mailto:sumitsahani174@gmail.com'
    },
    {
      label: 'Phone',
      value: '+91-9004844180',
      icon: <PhoneIcon color="primary" />,
      link: 'tel:+919004844180'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sumit-sahani100b1121b',
      icon: <LinkedInIcon color="primary" />,
      link: 'https://www.linkedin.com/in/sumit-sahani-100b1121b/'
    },
    {
      label: 'GitHub',
      value: 'github.com/sumitsahani174',
      icon: <GitHubIcon color="primary" />,
      link: 'https://github.com/sumitsahani174'
    },
    {
      label: 'Portfolio',
      value: 'sumitsahani.dev',
      icon: <LanguageIcon color="primary" />,
      link: 'https://sumitsahani174.github.io/React-Portfolio/'
    },
    {
      label: 'WhatsApp',
      value: '+91-9004844180',
      icon: <WhatsAppIcon color="primary" />,
      link: 'https://wa.me/919004844180'
    }
    // Uncomment the following lines if you want to include Twitter}
    // ,
    // {
    //   label: 'Twitter',
    //   value: '@yourhandle',
    //   icon: <TwitterIcon color="primary" />,
    //   link: 'https://twitter.com/yourhandle' // Replace with actual handle
    // }
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
      <Container maxWidth="sm">
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
              Contact
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
              Get in touch for opportunities or collaborations
            </Typography>
          </Box>
        </Fade>

        <Fade in={isVisible} timeout={1200}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.divider}30`
            }}
          >
            <Stack spacing={3}>
              {contactItems.slice(0, 2).map((item, index) => (
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  key={index}
                >
                  {item.icon}
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: theme.palette.text.primary }}
                    >
                      {item.label}
                    </Typography>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      underline="hover"
                      color="text.secondary"
                    >
                      {item.value}
                    </Link>
                  </Box>
                </Stack>
              ))}
            </Stack>

            {/* Social Icons */}
            <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
              {contactItems.slice(2).map((item, index) => (
                <Tooltip title={item.label} key={index}>
                  <IconButton
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    color="primary"
                  >
                    {item.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>

            {/* Resume Button */}
            <Box mt={4} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                startIcon={<PictureAsPdfIcon />}
                href="/Sumit-Sahani-Resume.pdf"
                download
                target="_blank"
              >
                Download Resume
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default Contact;
