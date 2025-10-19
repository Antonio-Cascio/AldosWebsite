import { useState } from 'react';
import image from '../images/Lunch.png';
import image2 from '../images/Dinner.png';
import image3 from '../images/Dinner2.png';
import image4 from '../images/TakeOut.png';
import image5 from '../images/DessertMenu.png';
import { Typography, Button, Box, Container, useTheme, useMediaQuery } from '@mui/material';
import { Restaurant, RestaurantMenu, TakeoutDining, DinnerDining, Cake } from '@mui/icons-material';

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState('lunch');  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eae9e9 0%, #f5f5f5 100%)',
      py: { xs: 4, md: 6 }
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h1" 
            sx={{ 
              mb: { xs: 3, md: 4 },
              color: '#cf2e2e',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Our Menu
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
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
              px: { xs: 2, md: 0 }
            }}
          >
            Discover our authentic Italian dishes, from traditional pasta to brick oven pizza
          </Typography>
        </Box>

        {/* Menu Selection Buttons */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, md: 6 },
          background: 'white',
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef'
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 2, sm: 3 }, 
            flexWrap: 'wrap',
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
            <Button
              variant={activeMenu === 'lunch' ? 'contained' : 'outlined'}
              size="large"
              onClick={() => setActiveMenu('lunch')}
              startIcon={<Restaurant />}
              sx={{
                bgcolor: activeMenu === 'lunch' ? '#cf2e2e' : 'transparent',
                color: activeMenu === 'lunch' ? 'white' : '#cf2e2e',
                borderColor: '#cf2e2e',
                '&:hover': {
                  bgcolor: activeMenu === 'lunch' ? '#a02323' : 'rgba(207, 46, 46, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: activeMenu === 'lunch' ? '0 8px 25px rgba(207, 46, 46, 0.3)' : '0 4px 15px rgba(207, 46, 46, 0.2)'
                },
                px: { xs: 3, md: 4 },
                py: { xs: 2, md: 2 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                minWidth: { xs: '100%', sm: '200px' },
                fontFamily: 'Open Sans, sans-serif',
                minHeight: 48,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                fontWeight: 600
              }}
            >
              Lunch Menu
            </Button>
            <Button
              variant={activeMenu === 'dinner' ? 'contained' : 'outlined'}
              size="large"
              onClick={() => setActiveMenu('dinner')}
              startIcon={<RestaurantMenu />}
              sx={{
                bgcolor: activeMenu === 'dinner' ? '#cf2e2e' : 'transparent',
                color: activeMenu === 'dinner' ? 'white' : '#cf2e2e',
                borderColor: '#cf2e2e',
                '&:hover': {
                  bgcolor: activeMenu === 'dinner' ? '#a02323' : 'rgba(207, 46, 46, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: activeMenu === 'dinner' ? '0 8px 25px rgba(207, 46, 46, 0.3)' : '0 4px 15px rgba(207, 46, 46, 0.2)'
                },
                px: { xs: 3, md: 4 },
                py: { xs: 2, md: 2 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                minWidth: { xs: '100%', sm: '200px' },
                fontFamily: 'Open Sans, sans-serif',
                minHeight: 48,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                fontWeight: 600
              }}
            >
              Dinner Menu
            </Button>
            <Button
              variant={activeMenu === 'takeout' ? 'contained' : 'outlined'}
              size="large"
              onClick={() => setActiveMenu('takeout')}
              startIcon={<DinnerDining />}
              sx={{
                bgcolor: activeMenu === 'takeout' ? '#cf2e2e' : 'transparent',
                color: activeMenu === 'takeout' ? 'white' : '#cf2e2e',
                borderColor: '#cf2e2e',
                '&:hover': {
                  bgcolor: activeMenu === 'takeout' ? '#a02323' : 'rgba(207, 46, 46, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: activeMenu === 'takeout' ? '0 8px 25px rgba(207, 46, 46, 0.3)' : '0 4px 15px rgba(207, 46, 46, 0.2)'
                },
                px: { xs: 3, md: 4 },
                py: { xs: 2, md: 2 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                minWidth: { xs: '100%', sm: '200px' },
                fontFamily: 'Open Sans, sans-serif',
                minHeight: 48,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                fontWeight: 600
              }}
            >
              Family-Style Menu
            </Button>
            <Button
              variant={activeMenu === 'dessert' ? 'contained' : 'outlined'}
              size="large"
              onClick={() => setActiveMenu('dessert')}
              startIcon={<Cake />}
              sx={{
                bgcolor: activeMenu === 'dessert' ? '#cf2e2e' : 'transparent',
                color: activeMenu === 'dessert' ? 'white' : '#cf2e2e',
                borderColor: '#cf2e2e',
                '&:hover': {
                  bgcolor: activeMenu === 'dessert' ? '#a02323' : 'rgba(207, 46, 46, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: activeMenu === 'dessert' ? '0 8px 25px rgba(207, 46, 46, 0.3)' : '0 4px 15px rgba(207, 46, 46, 0.2)'
                },  
                px: { xs: 3, md: 4 },
                py: { xs: 2, md: 2 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                minWidth: { xs: '100%', sm: '200px' },
                fontFamily: 'Open Sans, sans-serif',
                minHeight: 48,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                fontWeight: 600
              }}
            >
              Dessert Menu
            </Button>
          </Box>
        </Box>

        {/* Menu Content */}
        <Box sx={{ 
          background: 'white',
          borderRadius: 3,
          p: { xs: 3, md: 4 },
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef'
        }}>
          {activeMenu === 'lunch' && (
            <Box>
              <Typography 
                variant="h2" 
                sx={{ 
                  textAlign: 'center', 
                  mb: { xs: 3, md: 4 },
                  color: '#cf2e2e',
                  fontWeight: 'bold',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                }}
              >
                Lunch Menu
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                <img 
                  src={image} 
                  alt="Lunch Menu" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxWidth: '800px',
                    borderRadius: 8,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }} 
                />
              </Box>
            </Box>
          )}

          {activeMenu === 'dinner' && (
            <Box>
              <Typography 
                variant="h2" 
                sx={{ 
                  textAlign: 'center', 
                  mb: { xs: 3, md: 4 },
                  color: '#cf2e2e',
                  fontWeight: 'bold',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                }}
              >
                Dinner Menu
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                justifyContent: 'center', 
                gap: { xs: 3, md: 4 },
                alignItems: 'center'
              }}>
                <img 
                  src={image2} 
                  alt="Dinner Menu Page 1" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    maxWidth: '400px',
                    borderRadius: 8,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }} 
                />
                <img 
                  src={image3} 
                  alt="Dinner Menu Page 2" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    maxWidth: '400px',
                    borderRadius: 8,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }} 
                />
              </Box>
            </Box>
          )}

          {activeMenu === 'takeout' && (
            <Box>
              <Typography 
                variant="h2" 
                sx={{ 
                  textAlign: 'center', 
                  mb: { xs: 3, md: 4 },
                  color: '#cf2e2e',
                  fontWeight: 'bold',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                }}
              >
                Take-Out Menu
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                <img 
                  src={image4} 
                  alt="Take-Out Menu" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxWidth: '800px',
                    borderRadius: 8,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }} 
                />
              </Box>
            </Box>
          )}

          {activeMenu === 'dessert' && (
            <Box>
              <Typography 
                variant="h2" 
                sx={{ 
                  textAlign: 'center', 
                  mb: { xs: 3, md: 4 },
                  color: '#cf2e2e',  
                  fontWeight: 'bold',
                    fontFamily: 'Playfair Display, serif',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                }}
              >
                Dessert Menu
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                <img 
                  src={image5} 
                  alt="Dessert Menu" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxWidth: '800px',
                    borderRadius: 8,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }} 
                />
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}






