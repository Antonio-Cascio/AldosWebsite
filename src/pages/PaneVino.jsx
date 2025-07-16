import { Button, Typography, Box, Container, useTheme, useMediaQuery } from '@mui/material';
import '../App.css';
import { Link } from 'react-router-dom';
import Winner from '../images/Winner.png';
import holderimage1 from '../images/holderimage1.jpeg';
import holderimage2 from '../images/holderimage2.png';
import holderimage3 from '../images/holderimage3.png';
import { useState, useEffect } from 'react';

export default function PaneVino() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const images = [holderimage1, holderimage2, holderimage3];
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
    }, [images.length]);
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
                        Pane & Vino
                    </Typography>
                    
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            mb: 3,
                            color: '#666',
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            lineHeight: 1.6,
                            maxWidth: '800px',
                            margin: '0 auto',
                            px: { xs: 2, md: 0 }
                        }}
                    >
                        A welcoming Full Bar where patrons will enjoy great food and an extensive wine selection.
                    </Typography>

                </Box>

                {/* Winner Badge */}
                <Box sx={{ 
                    textAlign: 'center', 
                    mb: { xs: 4, md: 6 },
                    background: 'white',
                    borderRadius: 3,
                    p: { xs: 3, md: 4 },
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid #e9ecef'
                }}>
                    <Typography 
                        variant="h3" 
                        sx={{ 
                            color: '#cf2e2e',
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 600,
                            fontSize: { xs: '1.2rem', md: '1.4rem' },
                            mb: 4
                        }}
                    >
                        2022 Best of Bergen Winner – Best Wine Bar/Wine List!
                    </Typography>
                    <img 
                        src={Winner} 
                        alt="Best of Bergen Winner" 
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            maxWidth: '400px',
                            borderRadius: 8
                        }} 
                    />
                </Box>

                {/* Menu Buttons Section */}
                <Box sx={{ 
                    textAlign: 'center',
                    background: 'white',
                    borderRadius: 3,
                    p: { xs: 4, md: 6 },
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid #e9ecef',
                    mb: { xs: 4, md: 6 }
                }}>
                    <Typography 
                        variant="h3" 
                        sx={{ 
                            mb: { xs: 3, md: 4 },
                            color: '#333',
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 600,
                            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
                        }}
                    >
                        Explore Our Selection
                    </Typography>
                    
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'center', 
                        gap: { xs: 3, md: 4 },
                        alignItems: 'center'
                    }}>
                        <Button
                            component={Link}
                            to="/WineList" 
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: '#cf2e2e',
                                '&:hover': {
                                    bgcolor: '#a02323',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 8px 25px rgba(207, 46, 46, 0.4)'
                                },
                                '&:active': {
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 4px 15px rgba(207, 46, 46, 0.3)'
                                },
                                px: { xs: 3, md: 4 },
                                py: { xs: 2, md: 2.5 },
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                minWidth: { xs: '100%', sm: '250px' },
                                maxWidth: { xs: '300px', sm: 'none' },
                                fontFamily: 'Open Sans, sans-serif',
                                fontWeight: 600,
                                minHeight: 48,
                                borderRadius: 3,
                                transition: 'all 0.3s ease',
                                textTransform: 'none'
                            }}
                        >
                            View Wine List
                        </Button>
                        
                        <Button
                            component={Link}
                            to="/BarMenu"
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: '#333',
                                '&:hover': {
                                    bgcolor: '#555',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
                                },
                                '&:active': {
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                                },
                                px: { xs: 3, md: 4 },
                                py: { xs: 2, md: 2.5 },
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                minWidth: { xs: '100%', sm: '250px' },
                                maxWidth: { xs: '300px', sm: 'none' },
                                fontFamily: 'Open Sans, sans-serif',
                                fontWeight: 600,
                                minHeight: 48,
                                borderRadius: 3,
                                transition: 'all 0.3s ease',
                                textTransform: 'none'
                            }}
                        >
                            View Bar Menu
                        </Button>
                        
                        <Button
                            component={Link}
                            to="/CocktailMenu"
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: '#8B4513',
                                '&:hover': {
                                    bgcolor: '#A0522D',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 8px 25px rgba(139, 69, 19, 0.4)'
                                },
                                '&:active': {
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 4px 15px rgba(139, 69, 19, 0.3)'
                                },
                                px: { xs: 3, md: 4 },
                                py: { xs: 2, md: 2.5 },
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                minWidth: { xs: '100%', sm: '250px' },
                                maxWidth: { xs: '300px', sm: 'none' },
                                fontFamily: 'Open Sans, sans-serif',
                                fontWeight: 600,
                                minHeight: 48,
                                borderRadius: 3,
                                transition: 'all 0.3s ease',
                                textTransform: 'none'
                            }}
                        >
                            View Cocktail Menu
                        </Button>   
                    </Box>
                </Box>

                {/* Drinks Slideshow Section */}
                <Box sx={{ 
                    textAlign: 'center',
                    background: 'white',
                    borderRadius: 3,
                    p: { xs: 3, md: 4 },
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid #e9ecef',
                    mb: { xs: 4, md: 6 }
                }}>
                    <Typography 
                        variant="h3" 
                        sx={{ 
                            mb: { xs: 3, md: 4 },
                            color: '#333',
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 600,
                            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
                        }}
                    >
                        Featured Drinks
                    </Typography>
                    
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            mb: 4,
                            color: '#666',
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.6,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}
                    >
                        Discover our carefully curated selection of fine wines, craft cocktails, and premium spirits
                    </Typography>

                    {/* Slideshow Container */}
                    <Box sx={{ 
                        position: 'relative', 
                        maxWidth: '600px', 
                        height: { xs: '300px', sm: '400px', md: '450px' },
                        margin: '0 auto',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        border: '3px solid #f8f8f8'
                    }}>
                        <img
                            key={current}
                            src={images[current]}
                            alt={`Featured Drink ${current + 1}`}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: isMobile ? 'contain' : 'cover',
                                backgroundColor: '#f8f8f8',
                                transition: 'opacity 0.5s ease-in-out',
                                opacity: fade ? 1 : 0
                            }}
                        />
                        
                        {/* Navigation Arrows */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: 12, md: 20 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: { xs: 36, md: 40 },
                                height: { xs: 36, md: 40 },
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
                                right: { xs: 12, md: 20 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: { xs: 36, md: 40 },
                                height: { xs: 36, md: 40 },
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
                            bottom: { xs: 12, md: 16 },
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex', 
                            gap: { xs: 0.5, md: 0.75 },
                            zIndex: 1
                        }}>
                            {images.map((_, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: { xs: 10, md: 12 },
                                        height: { xs: 10, md: 12 },
                                        borderRadius: '50%',
                                        bgcolor: current === index ? '#cf2e2e' : 'rgba(255,255,255,0.8)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        minHeight: 20,
                                        minWidth: 20,
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
                </Box>

                {/* Additional Information */}
                <Box sx={{ 
                    textAlign: 'center', 
                    background: 'white',
                    borderRadius: 3,
                    p: { xs: 3, md: 4 },
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid #e9ecef'
                }}>
                    <Typography 
                        variant="h4" 
                        sx={{ 
                            mb: 3,
                            color: '#333',
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 600,
                            fontSize: { xs: '1.5rem', md: '1.75rem' }
                        }}
                    >
                        Experience Excellence
                    </Typography>
                    
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: '#666',
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.7,
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}
                    >
                        At Pane Vino, we take pride in offering an exceptional wine and spirits experience. 
                        Our knowledgeable staff is here to guide you through our carefully curated selection 
                        of fine wines, craft cocktails, and premium spirits. Whether you're celebrating a 
                        special occasion or simply enjoying an evening out, we invite you to discover the 
                        perfect pairing for your dining experience.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}