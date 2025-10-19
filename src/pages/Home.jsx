// Home.jsx
import outside from '../images/FullShot.png';
import '../App.css';
import { Box, Typography, Container, useTheme, useMediaQuery, Button } from '@mui/material';
import Violet1 from '../images/Violet1.jpg';
import Violet2 from '../images/Violet2.jpg';
import Violet3 from '../images/Violet3.jpg';
import Violet4 from '../images/Violet4.PNG';
import GreenRoom from '../images/GreenRoom1.PNG';
import GreenRoom2 from '../images/GreenRoom2.jpg';
import BlueRoom from '../images/BlueRoom1.jpg';
import BlueRoom2 from '../images/BlueRoom2.jpg';
import BlueRoom3 from '../images/BlueRoom3.jpg';
import patio from '../images/Patio1.PNG';
import patio2 from '../images/Patio2.PNG';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [outside, Violet1, Violet2, Violet3, Violet4, GreenRoom, GreenRoom2, BlueRoom, BlueRoom2, BlueRoom3, patio, patio2];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length, current]); // Add current as dependency to reset timer

  const handleImageChange = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(newIndex);
      setFade(true);
    }, 500);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eae9e9 0%, #f5f5f5 100%)', 
           py: { xs: 4, md: 6 }
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h1" 
            sx={{ 
              mb: { xs: 3, md: 4 },
              color: '#cf2e2e',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              lineHeight: { xs: 1.2, md: 1.1 },
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Welcome to Aldo's
          </Typography>
          <Box sx={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #cf2e2e, #a02323)',
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }} />
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
              lineHeight: { xs: 1.6, md: 1.7 },
              px: { xs: 2, md: 0 },
              fontWeight: 400
            }}
          >
            For the perfect dining experience, treat your family like you are right at home, with our homemade pasta and the finest Italian cuisine, Aldo's restaurant is the perfect choice.
          </Typography>
        </Box>
        
        {/* Slideshow Container */}
        <Box sx={{ 
          position: 'relative', 
          maxWidth: '900px', 
          height: { xs: '280px', sm: '400px', md: '550px' },
          margin: '0 auto',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          border: '4px solid white'
        }}>
          <img
            key={current}
            src={images[current]}
            alt={`Aldo's Restaurant ${current + 1}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: isMobile ? 'contain' : 'cover',
              backgroundColor: isMobile ? '#f8f8f8' : 'transparent',
              transition: 'opacity 0.5s ease-in-out',
              opacity: fade ? 1 : 0
            }}
          />
          
          {/* Navigation Arrows */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 12, md: 24 },
              top: '50%',
              transform: 'translateY(-50%)',
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              borderRadius: '50%',
              bgcolor: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 1,
              minHeight: 48,
              minWidth: 48,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.9)',
                transform: 'translateY(-50%) scale(1.1)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              },
              '&:active': {
                transform: 'translateY(-50%) scale(0.95)'
              }
            }}
            onClick={() => {
              const newIndex = (current - 1 + images.length) % images.length;
              handleImageChange(newIndex);
            }}
          >
            <Typography sx={{ 
              color: 'white', 
              fontSize: { xs: '1.5rem', md: '1.75rem' }, 
              fontWeight: 'bold' 
            }}>
              ‹
            </Typography>
          </Box>
          
          <Box
            sx={{
              position: 'absolute',
              right: { xs: 12, md: 24 },
              top: '50%',
              transform: 'translateY(-50%)',
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              borderRadius: '50%',
              bgcolor: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 1,
              minHeight: 48,
              minWidth: 48,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.9)',
                transform: 'translateY(-50%) scale(1.1)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              },
              '&:active': {
                transform: 'translateY(-50%) scale(0.95)'
              }
            }}
            onClick={() => {
              const newIndex = (current + 1) % images.length;
              handleImageChange(newIndex);
            }}
          >
            <Typography sx={{ 
              color: 'white', 
              fontSize: { xs: '1.5rem', md: '1.75rem' }, 
              fontWeight: 'bold' 
            }}>
              ›
            </Typography>
          </Box>

          {/* Slide Indicators */}
          <Box sx={{ 
            position: 'absolute',
            bottom: { xs: 16, md: 24 },
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', 
            gap: { xs: 0.75, md: 1 },
            zIndex: 1
          }}>
            {images.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: 12, md: 14 },
                  height: { xs: 12, md: 14 },
                  borderRadius: '50%',
                  bgcolor: current === index ? '#cf2e2e' : 'rgba(255,255,255,0.8)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minHeight: 24,
                  minWidth: 24,
                  border: '2px solid rgba(255,255,255,0.3)',
                  '&:hover': {
                    bgcolor: current === index ? '#a02323' : 'rgba(255,255,255,0.95)',
                    transform: 'scale(1.1)'
                  },
                  '&:active': {
                    transform: 'scale(0.9)'
                  }
                }}
                onClick={() => {
                  handleImageChange(index);
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#333',
              mb: 3,
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600,
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Experience Authentic Italian Cuisine
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7
            }}
          >
            Join us for an unforgettable dining experience that celebrates tradition, family, and the finest Italian flavors.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}