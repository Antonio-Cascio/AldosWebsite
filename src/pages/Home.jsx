// Home.jsx
import outside from '../images/FullShot.png';
import '../App.css';
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import holderimage1 from '../images/holderimage1.jpeg';
import holderimage2 from '../images/holderimage2.png';
import holderimage3 from '../images/holderimage3.png';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [outside, holderimage1, holderimage2, holderimage3,];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade-in
      }, 500); // duration matches fade-out animation
    }, 5000); // Change image every 5s
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      <Typography 
        variant="h1" 
        sx={{ 
          textAlign: 'center', 
          mb: { xs: 2, md: 4 },
          color: '#cf2e2e',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 'bold',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          lineHeight: { xs: 1.2, md: 1.3 }
        }}
      >
        Welcome to Aldo's
      </Typography>
      
      <Typography 
        variant="h5" 
        sx={{ 
          textAlign: 'center',  
          mb: { xs: 3, md: 6 },
          color: '#666',
          maxWidth: '800px',
          margin: '0 auto',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
          lineHeight: { xs: 1.5, md: 1.6 },
          px: { xs: 2, md: 0 }
        }}
      >
        For the perfect dining experience, treat your family like you are right at home, with our homemade pasta and the finest Italian cuisine, Aldo's restaurant is the perfect choice.
      </Typography>
      
      {/* Slideshow Container */}
      <Box sx={{ 
        position: 'relative', 
        maxWidth: '800px', 
        height: { xs: '250px', sm: '350px', md: '500px' },
        margin: '0 auto',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
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
            backgroundColor: isMobile ? '#f5f5f5' : 'transparent',
            transition: 'opacity 0.5s ease-in-out',
            opacity: fade ? 1 : 0
          }}
        />
        
        {/* Navigation Arrows */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 10, md: 20 },
            top: '50%',
            transform: 'translateY(-50%)',
            width: { xs: 36, md: 40 },
            height: { xs: 36, md: 40 },
            borderRadius: '50%',
            bgcolor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            zIndex: 1,
            minHeight: 48,
            minWidth: 48,
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.8)',
              transform: 'translateY(-50%) scale(1.1)'
            },
            '&:active': {
              transform: 'translateY(-50%) scale(0.95)'
            }
          }}
          onClick={() => {
            setFade(false);
            setTimeout(() => {
              setCurrent((prev) => (prev - 1 + images.length) % images.length);
              setFade(true);
            }, 500);
          }}
        >
          <Typography sx={{ 
            color: 'white', 
            fontSize: { xs: '1.25rem', md: '1.5rem' }, 
            fontWeight: 'bold' 
          }}>
            ‹
          </Typography>
        </Box>
        
        <Box
          sx={{
            position: 'absolute',
            right: { xs: 10, md: 20 },
            top: '50%',
            transform: 'translateY(-50%)',
            width: { xs: 36, md: 40 },
            height: { xs: 36, md: 40 },
            borderRadius: '50%',
            bgcolor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            zIndex: 1,
            minHeight: 48,
            minWidth: 48,
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.8)',
              transform: 'translateY(-50%) scale(1.1)'
            },
            '&:active': {
              transform: 'translateY(-50%) scale(0.95)'
            }
          }}
          onClick={() => {
            setFade(false);
            setTimeout(() => {
              setCurrent((prev) => (prev + 1) % images.length);
              setFade(true);
            }, 500);
          }}
        >
          <Typography sx={{ 
            color: 'white', 
            fontSize: { xs: '1.25rem', md: '1.5rem' }, 
            fontWeight: 'bold' 
          }}>
            ›
          </Typography>
        </Box>

        {/* Slide Indicators */}
        <Box sx={{ 
          position: 'absolute',
          bottom: { xs: 15, md: 20 },
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', 
          gap: { xs: 0.5, md: 1 },
          zIndex: 1
        }}>
          {images.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: 10, md: 12 },
                height: { xs: 10, md: 12 },
                borderRadius: '50%',
                bgcolor: current === index ? '#cf2e2e' : 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                minHeight: 24,
                minWidth: 24,
                '&:hover': {
                  bgcolor: current === index ? '#a02323' : 'rgba(255,255,255,0.9)'
                },
                '&:active': {
                  transform: 'scale(0.9)'
                }
              }}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrent(index);
                  setFade(true);
                }, 500);
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}