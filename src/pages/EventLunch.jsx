import '../App.css';
import { Box, Typography, Container } from '@mui/material';
import image from '../images/LunchE.png';
import image2 from '../images/Lunch2.png';
import BackIcon from '../images/BackIcon.png';
import { Link } from 'react-router-dom';

function EventLunch() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Back Button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
                <Link to="/events">
                    <Box
                        component="button"
                        sx={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 1,
                            borderRadius: 1,
                            transition: 'background-color 0.2s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(0,0,0,0.05)'
                            }
                        }}
                    >
                        <img 
                            src={BackIcon} 
                            alt="Back to Events" 
                            style={{
                                width: '24px', 
                                height: '24px'
                            }} 
                        />
                    </Box>
                </Link>
            </Box>

            {/* Header */}
            <Typography 
                variant="h1" 
                sx={{ 
                    textAlign: 'center', 
                    mb: 4, 
                    color: '#cf2e2e', 
                    fontWeight: 'bold',
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
            >
                Lunch Event Menus
            </Typography>
            
            <Typography 
                variant="h5" 
                sx={{ 
                    textAlign: 'center', 
                    mb: 6, 
                    color: '#666', 
                    maxWidth: '800px', 
                    margin: '0 auto 2rem auto',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    fontFamily: 'Open Sans, sans-serif',
                }}
            >
                Please contact us at 201-891-2618 to reserve your event.
            </Typography>

            {/* Menu Images */}
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: { xs: 3, md: 6 }, 
                flexDirection: { xs: 'column', md: 'row' }, 
                alignItems: 'center',
                px: { xs: 2, md: 4 }
            }}>
                <Box sx={{ 
                    textAlign: 'center',
                    maxWidth: '500px',
                    width: '100%'
                }}>
                    <img 
                        src={image} 
                        alt="Event Lunch Menu 1" 
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            maxWidth: '500px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            borderRadius: '8px'
                        }}
                    />
                </Box>
                <Box sx={{ 
                    textAlign: 'center',
                    maxWidth: '500px',
                    width: '100%'
                }}>
                    <img 
                        src={image2} 
                        alt="Event Lunch Menu 2" 
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            maxWidth: '500px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            borderRadius: '8px'
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default EventLunch;