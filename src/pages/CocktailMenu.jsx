import '../App.css';
import { Box, Typography, Container } from '@mui/material';
import BackIcon from '../images/BackIcon.png';
import { Link } from 'react-router-dom';
import image from '../images/CocktailMenu.png';
import image2 from '../images/DessertDrinks.png';

export default function CocktailMenu() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Back Button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
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
                            '&:hover': {
                                backgroundColor: 'rgba(0,0,0,0.05)'
                            }
                        }}
                    >
                        <img 
                            src={BackIcon} 
                            alt="Back to PaneVino" 
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
                Cocktail Menu
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
                Discover our handcrafted cocktails
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
                        alt="Cocktail Menu" 
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