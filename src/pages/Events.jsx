import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import WineCellar from '../images/WineCellar1.jpg';
import LowerLevel from '../images/LowerLevel1.jpg';
import LowerLevel2 from '../images/LowerLevel2.PNG';
import WineCellar2 from '../images/WineCellar2.jpg';


export default function Events() {
    return (
        <Box sx={{ 
            background: 'linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)',
            minHeight: '100vh',
            py: { xs: 4, md: 6 }
        }}>
            <Container maxWidth="lg">
                {/* Elegant Header Section */}
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
                        Private Dining
                    </Typography>
                    
                    {/* Decorative line */}
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
                        Experience the perfect blend of intimate ambiance and exceptional cuisine in our 
                        <span style={{ color: '#cf2e2e', fontWeight: 600 }}> exclusive private dining spaces</span>. 
                        Whether celebrating a milestone or hosting a business gathering, we create unforgettable moments.
                    </Typography>
                </Box>
            
                {/* Private Dining Rooms Section */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: { xs: 4, md: 8 }, 
                    flexDirection: { xs: 'column', md: 'row' }, 
                    mb: { xs: 6, md: 8 },
                    alignItems: 'stretch'
                }}>
                    {/* Wine Cellar Section */}
                    <Box sx={{ 
                        flex: 1,
                        maxWidth: { xs: '100%', md: '550px' },
                        background: 'white',
                        borderRadius: 4,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
                        }
                    }}>
                        {/* Room Header */}
                        <Box sx={{
                            background: 'linear-gradient(135deg, #cf2e2e 0%, #a02323 100%)',
                            color: 'white',
                            p: 3,
                            textAlign: 'center'
                        }}>
                            <Typography variant="h4" sx={{ 
                                fontFamily: 'Playfair Display, serif', 
                                fontWeight: 600,
                                fontSize: { xs: '1.4rem', md: '1.6rem' },
                                mb: 1,
                                letterSpacing: '0.05em'
                            }}>
                                Wine Cellar
                            </Typography>
                            <Typography variant="body2" sx={{
                                fontFamily: 'Open Sans, sans-serif',
                                opacity: 0.9,
                                fontSize: '0.9rem'
                            }}>
                                Intimate • Elegant • Private Dining Available
                            </Typography>
                        </Box>
                        
                        {/* Images Container */}
                        <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: 3,
                                width: '100%',
                                flex: 1
                            }}>
                                <Box sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 2,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.18)'
                                    }
                                }}>
                                    <img 
                                        src={WineCellar} 
                                        alt="Elegant Wine Cellar with stone walls and wine collection" 
                                        style={{ 
                                            width: '100%', 
                                            height: 'auto',
                                            display: 'block',
                                            objectFit: 'cover'
                                        }} 
                                    />
                                </Box>
                                <Box sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 2,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.18)'
                                    }
                                }}>
                                    <img 
                                        src={WineCellar2} 
                                        alt="Intimate dining table in wine cellar setting" 
                                        style={{ 
                                            width: '100%', 
                                            height: 'auto',
                                            display: 'block',
                                            objectFit: 'cover'
                                        }} 
                                    />
                                </Box>
                            </Box>
                            
                            {/* Room Description */}
                            <Box sx={{ mt: 3, p: 2, background: '#f8f9fa', borderRadius: 2 }}>
                                <Typography variant="body1" sx={{
                                    fontFamily: 'Open Sans, sans-serif',
                                    color: '#555',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                    textAlign: 'center'
                                }}>
                                    Nestled in our authentic wine cellar, this intimate space offers an unparalleled dining experience surrounded by our curated wine collection.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Downstairs Dining Room Section */}
                    <Box sx={{ 
                        flex: 1,
                        maxWidth: { xs: '100%', md: '550px' },
                        background: 'white',
                        borderRadius: 4,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
                        }
                    }}>
                        {/* Room Header */}
                        <Box sx={{
                            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                            color: 'white',
                            p: 3,
                            textAlign: 'center'
                        }}>
                            <Typography variant="h4" sx={{ 
                                fontFamily: 'Playfair Display, serif', 
                                fontWeight: 600,
                                fontSize: { xs: '1.4rem', md: '1.6rem' },
                                mb: 1,
                                letterSpacing: '0.05em'
                            }}>
                                Downstairs Dining Room
                            </Typography>
                            <Typography variant="body2" sx={{
                                fontFamily: 'Open Sans, sans-serif',
                                opacity: 0.9,
                                fontSize: '0.9rem'
                            }}>
                                Spacious • Sophisticated • Private Dining Available
                            </Typography>
                        </Box>
                        
                        {/* Images Container */}
                        <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: 3,
                                width: '100%',
                                flex: 1
                            }}>
                                <Box sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 2,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.18)'
                                    }
                                }}>
                                    <img 
                                        src={LowerLevel} 
                                        alt="Elegant downstairs dining room with warm lighting" 
                                        style={{ 
                                            width: '100%', 
                                            height: 'auto',
                                            display: 'block',
                                            objectFit: 'cover'
                                        }} 
                                    />
                                </Box>
                                <Box sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 2,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 15px 40px rgba(0,0,0,0.18)'
                                    }
                                }}>
                                    <img 
                                        src={LowerLevel2} 
                                        alt="Sophisticated dining area with elegant table setting" 
                                        style={{ 
                                            width: '100%', 
                                            height: 'auto',
                                            display: 'block',
                                            objectFit: 'cover'
                                        }} 
                                    />
                                </Box>
                            </Box>
                            
                            {/* Room Description */}
                            <Box sx={{ mt: 3, p: 2, background: '#f8f9fa', borderRadius: 2 }}>
                                <Typography variant="body1" sx={{
                                    fontFamily: 'Open Sans, sans-serif',
                                    color: '#555',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                    textAlign: 'center'
                                }}>
                                    Our spacious downstairs dining room provides the perfect setting for larger gatherings, featuring sophisticated decor and flexible seating arrangements.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ 
                    textAlign: 'center',
                    mt: { xs: 6, md: 8 },
                    mb: 4
                }}>
                    <Typography variant="h3" sx={{
                        fontFamily: 'Playfair Display, serif',
                        color: '#cf2e2e',
                        fontSize: { xs: '1.8rem', md: '2.2rem' },
                        mb: 3,
                        fontWeight: 600
                    }}>
                        Explore Our Event Menus
                    </Typography>
                    
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: { xs: 3, md: 4 }, 
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        <Button
                            component={Link}
                            to="/EventDinner"
                            variant="contained"
                            size="large"
                            sx={{
                                background: 'linear-gradient(135deg, #cf2e2e 0%, #a02323 100%)',
                                color: 'white',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #a02323 0%, #8a1e1e 100%)',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 15px 35px rgba(207, 46, 46, 0.4)'
                                },
                                '&:active': {
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 8px 25px rgba(207, 46, 46, 0.3)'
                                },
                                px: { xs: 4, md: 5 },
                                py: { xs: 2, md: 2.5 },
                                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                minWidth: { xs: '100%', sm: '280px' },
                                maxWidth: { xs: '350px', sm: 'none' },
                                fontFamily: 'Open Sans, sans-serif',
                                fontWeight: 600,
                                minHeight: 56,
                                borderRadius: 3,
                                textTransform: 'none',
                                letterSpacing: '0.5px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 8px 25px rgba(207, 46, 46, 0.3)'
                            }}
                        >
                            Dinner Event Menu
                        </Button>
                        <Button
                            component={Link}
                            to="/EventLunch"
                            variant="contained"
                            size="large"
                            sx={{
                                background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                                color: 'white',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 15px 35px rgba(44, 62, 80, 0.4)'
                                },
                                '&:active': {
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 8px 25px rgba(44, 62, 80, 0.3)'
                                },
                                px: { xs: 4, md: 5 },
                                py: { xs: 2, md: 2.5 },
                                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                minWidth: { xs: '100%', sm: '280px' },
                                maxWidth: { xs: '350px', sm: 'none' },
                                fontFamily: 'Open Sans, sans-serif',
                                fontWeight: 600,
                                minHeight: 56,
                                borderRadius: 3,
                                textTransform: 'none',
                                letterSpacing: '0.5px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 8px 25px rgba(44, 62, 80, 0.3)'
                            }}
                        >
                            Lunch Event Menu
                        </Button>
                    </Box>
                </Box>
            
            </Container>
        </Box>
    );
}

