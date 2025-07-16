import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Wine1 from '../images/Wine1.png';
import Wine2 from '../images/Wine2.png';
import Wine3 from '../images/Wine3.png';
import Wine4 from '../images/Wine4.png';
import Wine5 from '../images/Wine5.png';
import Wine6 from '../images/Wine6.png';
import BackIcon from '../images/BackIcon.png';
import { Link } from 'react-router-dom';

function WineList() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [Wine1, Wine2, Wine3, Wine4, Wine5, Wine6];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      {/* Back Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: { xs: 2, md: 4 } }}>
        <Link to="/PaneVino">
          <Box
            component="button"
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 1,
              borderRadius: 1,
              transition: 'background-color 0.2s ease',
              minHeight: 48,
              minWidth: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.05)'
              }
            }}>
            <img 
              src={BackIcon} 
              alt="Back to Pane Vino" 
              style={{ 
                width: '24px', 
                height: '24px' 
              }} 
            />
          </Box>
        </Link>
      </Box>
      
      <Typography 
        variant="h1" 
        sx={{ 
          textAlign: 'center', 
          mb: { xs: 2, md: 4 },
          color: '#cf2e2e',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 'bold',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
        }}
      >
        Wine List
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
          px: { xs: 2, md: 0 }
        }}
      >
        Explore our carefully curated selection of fine wines to complement your dining experience.
      </Typography>

      {/* Wine List Slideshow Container */}
      <Box sx={{ 
        position: 'relative', 
        maxWidth: '1000px', 
        height: { xs: '400px', sm: '600px', md: '800px' },
        margin: '0 auto',
        backgroundColor: '#f8f8f8',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
      }}>
        <img
          key={current}
          src={images[current]}
          alt={`Wine List ${current + 1}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            backgroundColor: '#f8f8f8',
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
                bgcolor: current === index ? '#cf2e2e' : 'rgba(201, 198, 198, 0.7)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                minHeight: 24,
                minWidth: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover': {
                  bgcolor: current === index ? '#a02323' : 'rgba(175, 172, 172, 0.7)'
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

export default WineList;
