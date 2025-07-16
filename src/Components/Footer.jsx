import { Box, Container, Typography, Link, IconButton, Grid, Divider } from '@mui/material';
import { Facebook, Instagram, Email, Phone, LocationOn } from '@mui/icons-material';
import Signature from '../images/aldo-signature.png';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #cf2e2e 0%, #a02323 100%)',
        color: 'white',
        py: { xs: 4, md: 6 },
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #ff6b6b, #ff8e53, #ff6b6b)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 3s ease infinite'
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 3, md: 4 } }}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Box className="fade-in">
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  mb: { xs: 2, md: 3 },
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ mr: 2, color: '#ffd700', fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                <Typography variant="body2" sx={{ 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}>
                  <Link 
                    href="https://www.google.com/maps/place/Aldo's+Italian+Restaurant+%26+Pane+E+Vino+%2F+Wyckoff/@41.0107628,-74.1749899,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2e330edbf11bf:0xb8f58dd21735845d!8m2!3d41.0107588!4d-74.172415!16s%2Fg%2F11b7v6j3c2!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': { color: '#ffd700' }
                    }}
                  >
                    640 Wyckoff Avenue, Wyckoff, New Jersey
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 2, color: '#ffd700', fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  <Link 
                    href="tel:2018912618"
                    sx={{ 
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': { color: '#ffd700' }
                    }}
                  >
                    201.891.2618
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ mr: 2, color: '#ffd700', fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  <Link 
                    href="mailto:newaldosofwyckoff@gmail.com"
                    sx={{ 
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': { color: '#ffd700' }
                    }}
                  > 
                    newaldosofwyckoff@gmail.com
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Hours */}
          <Grid item xs={12} md={4}>
            <Box className="fade-in">
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  mb: { xs: 2, md: 3 },
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Hours
              </Typography>
              <Box sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                p: { xs: 2, md: 3 },
                backdropFilter: 'blur(10px)'
              }}>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  fontWeight: 600,
                  fontSize: { xs: '0.85rem', md: '1rem' }
                }}>
                  Monday - Thursday: 11:30 AM - 10:00 PM
                </Typography>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  fontWeight: 600,
                  fontSize: { xs: '0.85rem', md: '1rem' }
                }}>
                  Friday - Saturday: 11:00 AM - 11:00 PM
                </Typography>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  fontWeight: 600,
                  fontSize: { xs: '0.85rem', md: '1rem' }
                }}> 
                  Sunday: 1:00 PM - 9:00 PM
                </Typography>
                <Typography variant="body2" sx={{ 
                  fontWeight: 600, 
                  color: '#ffd700',
                  fontSize: { xs: '0.85rem', md: '1rem' }
                }}>
                  Bar Open until 1:00 AM
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={4}>
            <Box className="fade-in">
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  mb: { xs: 2, md: 3 },
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <IconButton
                  component={Link}
                  href="https://www.facebook.com/Aldosofwyckoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    minHeight: 48,
                    minWidth: 48,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                    },
                    '&:active': {
                      transform: 'translateY(-1px)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://www.instagram.com/aldospanewyckoff/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    minHeight: 48,
                    minWidth: 48,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                    },
                    '&:active': {
                      transform: 'translateY(-1px)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://x.com/AldosofWyckoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    minHeight: 48,
                    minWidth: 48,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                    },
                    '&:active': {
                      transform: 'translateY(-1px)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <XIcon />
                </IconButton>
              </Box>
              
              {/* Signature */}
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <img 
                  src={Signature} 
                  alt="Aldo's Signature" 
                  style={{
                    width: 'auto',
                    height: { xs: '40px', md: '60px' },
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.9
                  }} 
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ 
          borderColor: 'rgba(255, 255, 255, 0.2)',
          mb: { xs: 2, md: 3 }
        }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
              fontFamily: 'Open Sans, sans-serif'
            }}
          >
            © {new Date().getFullYear()} Aldo's Restaurant. All rights reserved.
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: { xs: '0.7rem', md: '0.8rem' },
              mt: 1,
              fontFamily: 'Open Sans, sans-serif'
            }}
          >
            Website Developed by <Link href="https://www.linkedin.com/in/antonio-cascio-4713a6327/" target="_blank" rel="noopener noreferrer" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>Antonio Cascio</Link>
          </Typography>
        </Box>
      </Container>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </Box>
  );
} 