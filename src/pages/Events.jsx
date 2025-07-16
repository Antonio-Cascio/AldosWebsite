import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Events() {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
            <Typography variant="h1" sx={{ 
                textAlign: 'center', 
                mb: { xs: 2, md: 4 }, 
                color: '#cf2e2e', 
                fontWeight: 'bold',
                fontFamily: 'Playfair Display, serif',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}>
                Events
            </Typography>
            <Typography variant="h5" sx={{ 
                textAlign: 'center', 
                mb: { xs: 3, md: 6 }, 
                color: '#666', 
                maxWidth: '800px', 
                margin: '0 auto',
                fontFamily: 'Open Sans, sans-serif',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                px: { xs: 2, md: 0 }
            }}>
                Aldo's Italian Restaurant has two beautiful Private Rooms for your special occasions.
            </Typography>
            
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: { xs: 2, md: 4 }, 
                flexDirection: { xs: 'column', md: 'row' }, 
                mb: { xs: 4, md: 6 },
                textAlign: 'center'
            }}>
                <Box sx={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}>
                    WINE CELLAR 
                </Box>
                <Box sx={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}>
                    DOWNSTAIRS DINING ROOM
                </Box>
            </Box>
            
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: { xs: 2, md: 3 }, 
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center'
            }}>
                <Button
                    component={Link}
                    to="/EventDinner"
                    variant="contained"
                    size="large"
                    sx={{
                        bgcolor: 'black',
                        '&:hover': {
                            bgcolor: 'gray',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                        },
                        '&:active': {
                            transform: 'translateY(0)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        },
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.5, md: 1.5 },
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                        minWidth: { xs: '100%', sm: '250px' },
                        maxWidth: { xs: '300px', sm: 'none' },
                        fontFamily: 'Open Sans, sans-serif',
                        minHeight: 48,
                        transition: 'all 0.3s ease'
                    }}
                >
                    See Dinner Event Menu
                </Button>
                <Button
                    component={Link}
                    to="/EventLunch"
                    variant="contained"
                    size="large"
                    sx={{
                        bgcolor: 'black',
                        '&:hover': {
                              bgcolor: 'gray',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                        },
                        '&:active': {
                            transform: 'translateY(0)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        },
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.5, md: 1.5 },
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                        minWidth: { xs: '100%', sm: '250px' },
                        maxWidth: { xs: '300px', sm: 'none' },
                        fontFamily: 'Open Sans, sans-serif',
                        minHeight: 48,
                        transition: 'all 0.3s ease'
                    }}
                >
                    See Lunch Event Menu
                </Button>
            </Box>
        </Container>
    );
}

