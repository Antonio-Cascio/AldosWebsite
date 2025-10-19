
import '../App.css';
import { Box, Typography, Container } from '@mui/material';
import { Button, Grid } from '@mui/material';

import giftCardImage from '../images/Card25.png';


export default function GiftCards() {


  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)',
      minHeight: '100vh',
      py: { xs: 4, md: 6 }
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, md: 8 },
          position: 'relative'
        }}>
          <Typography variant="h1" sx={{ 
            color: '#cf2e2e', 
            fontWeight: 700,
            fontFamily: 'Playfair Display, serif',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
            mb: 2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            letterSpacing: '0.02em'
          }}>
            Gift Cards
          </Typography>
          
          <Box sx={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #cf2e2e, #a02323)',
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }} />
          
          <Typography variant="h5" sx={{ 
            color: '#555', 
            maxWidth: '900px', 
            margin: '0 auto',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.4rem' },
            lineHeight: 1.6,
            fontWeight: 400,
            px: { xs: 2, md: 0 }
          }}>
            Give the gift of exceptional dining at 
            <span style={{ color: '#cf2e2e', fontWeight: 600 }}> Aldo's Italian Restaurant</span>. 
            Our gift cards are perfect for any occasion and never expire.
          </Typography>
        </Box>

        <Box sx={{
          background: 'white',
          borderRadius: 4,
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          p: { xs: 3, md: 5 },
          mb: { xs: 4, md: 6 },
          textAlign: 'center'
        }}>
          <Typography variant="h3" sx={{
            fontFamily: 'Playfair Display, serif',
            color: '#cf2e2e',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            mb: 3,
            fontWeight: 600,
            textAlign: 'center'
          }}>
            Purchase Gift Cards
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              sx={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease'
                }
              }}
            >
              <img 
                src={giftCardImage} 
                alt="Gift Card" 
                style={{ 
                  width: '300px', 
                  height: 'auto',
                  maxWidth: '100%',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  mixBlendMode: 'multiply'
                }} 
              />
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)'
          },
          gap: { xs: 3, md: 4 },
          mb: { xs: 4, md: 6 }
        }}>
          {/* Feature 1 */}
          <Box sx={{
            background: 'white',
            borderRadius: 3,
            p: 3,
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
            }
          }}>
            <Box sx={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #cf2e2e 0%, #a02323 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              color: 'white'
            }}>
              🎁
            </Box>
            <Typography variant="h6" sx={{
              fontFamily: 'Playfair Display, serif',
              color: '#cf2e2e',
              fontWeight: 600,
              mb: 1
            }}>
              Perfect for Any Occasion
            </Typography>
            <Typography variant="body2" sx={{
              fontFamily: 'Open Sans, sans-serif',
              color: '#666',
              lineHeight: 1.5
            }}>
              Birthdays, anniversaries, holidays, or just because - our gift cards make every moment special.
            </Typography>
          </Box>

          {/* Feature 2 */}
          <Box sx={{
            background: 'white',
            borderRadius: 3,
            p: 3,
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
            }
          }}>
            <Box sx={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #cf2e2e 0%, #a02323 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              color: 'white'
            }}>
              ⏰
            </Box>
            <Typography variant="h6" sx={{
              fontFamily: 'Playfair Display, serif',
              color: '#cf2e2e',
              fontWeight: 600,
              mb: 1
            }}>
              Never Expire
            </Typography>
            <Typography variant="body2" sx={{
              fontFamily: 'Open Sans, sans-serif',
              color: '#666',
              lineHeight: 1.5
            }}>
              Our gift cards have no expiration date, so recipients can enjoy their dining experience whenever they're ready.
            </Typography>
          </Box>

          {/* Feature 3 */}
          <Box sx={{
            background: 'white',
            borderRadius: 3,
            p: 3,
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
            }
          }}>
            <Box sx={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #cf2e2e 0%, #a02323 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              color: 'white'
            }}>
              🍽️
            </Box>
            <Typography variant="h6" sx={{
              fontFamily: 'Playfair Display, serif',
              color: '#cf2e2e',
              fontWeight: 600,
              mb: 1
            }}>
              Full Menu Access
            </Typography>
            <Typography variant="body2" sx={{
              fontFamily: 'Open Sans, sans-serif',
              color: '#666',
              lineHeight: 1.5
            }}>
              Gift card recipients can use their card for our complete menu, including food, beverages, and special events.
            </Typography>
          </Box>
        </Box>

        {/* Contact Information */}
        <Box sx={{
          background: 'linear-gradient(135deg, #cf2e2e 0%, #a02323 100%)',
          borderRadius: 4,
          p: { xs: 3, md: 4 },
          textAlign: 'center',
          color: 'white'
        }}>
          <Typography variant="h4" sx={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
            mb: 2,
            fontSize: { xs: '1.5rem', md: '1.8rem' }
          }}>
            Questions About Gift Cards?
          </Typography>
          <Typography variant="body1" sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1rem',
            opacity: 0.9,
            mb: 2
          }}>
            Contact us for more information about our gift card program or to purchase gift cards in person.
          </Typography>
          <Typography variant="body2" sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '0.9rem',
            opacity: 0.8
          }}>
            Call us at (201) 891-2618 or visit us at 640 Wyckoff Avenue, Wyckoff, NJ
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}