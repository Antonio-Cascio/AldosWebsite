import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import '../App.css';

export default function About() {
    return (
        <Box sx={{ 
            minHeight: '100vh', 
            backgroundColor: '#fafafa',
            py: 6
        }}>
            <Container maxWidth="lg">
                {/* Hero Section */}
                <Box className="fade-in" sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography 
                        variant="h1" 
                        sx={{ 
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 700,
                            color: '#cf2e2e',
                            mb: 3,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                            fontFamily: 'Playfair Display, serif'
                        }}
                    >
                        About Aldo's
                    </Typography>
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            color: '#666',
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: 1.8,
                            fontFamily: 'Open Sans, sans-serif',
                            fontWeight: 400
                        }}
                    >
                        A legacy of passion, tradition, and exceptional Italian cuisine
                    </Typography>
                </Box>

                {/* Main Content */}
                <Grid container spacing={6}>
                    {/* Left Column */}
                    <Grid item xs={12} md={6}>
                        <Box className="slide-in-left">
                            <Paper 
                                elevation={4}
                                sx={{ 
                                    p: 4,
                                    borderRadius: 3,
                                    backgroundColor: 'white',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                    border: '1px solid #e9ecef'
                                }}
                            >
                                <Typography 
                                    variant="h4" 
                                    sx={{ 
                                        color: '#cf2e2e',
                                        mb: 3,
                                        fontFamily: 'Playfair Display, serif',
                                        fontWeight: 600
                                    }}
                                >
                                    40+ Years of Excellence
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        mb: 3,
                                        fontSize: '1.1rem',
                                        lineHeight: 1.8,
                                        color: '#333',
                                        fontFamily: 'Open Sans, sans-serif'
                                    }}
                                >
                                    For More Than 40 years, Aldo's Italian Restaurant has supplied his customers with high quality food, great service and good prices.
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        mb: 3,
                                        fontSize: '1.1rem',
                                        lineHeight: 1.8,
                                        color: '#333',
                                        fontFamily: 'Open Sans, sans-serif'
                                    }}
                                >
                                    Open 7 Days a week, this newer location will provide a wonderful space for family dining or special intimate gatherings, featuring 3 separate dining rooms plus an outdoor patio, and private dining rooms.
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={6}>
                        <Box className="slide-in-right">
                            <Paper 
                                elevation={4}
                                sx={{ 
                                    p: 4,
                                    borderRadius: 3,
                                    backgroundColor: 'white',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                    border: '1px solid #e9ecef',
                                    height: '100%'
                                }}
                            >
                                <Typography 
                                    variant="h4" 
                                    sx={{ 
                                        color: '#cf2e2e',
                                        mb: 3,
                                        fontFamily: 'Playfair Display, serif',
                                        fontWeight: 600
                                    }}
                                >
                                    Brick Oven Pizza & Wine Bar
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        mb: 3,
                                        fontSize: '1.1rem',
                                        lineHeight: 1.8,
                                        color: '#333',
                                        fontFamily: 'Open Sans, sans-serif'
                                    }}
                                >
                                    As one of our new additions, customers will be delighted with a well prepared and fresh Brick Oven Pizza.
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        mb: 3,
                                        fontSize: '1.1rem',
                                        lineHeight: 1.8,
                                        color: '#333',
                                        fontFamily: 'Open Sans, sans-serif'
                                    }}
                                >
                                    Under the same roof you'll find Pane & Vino Wine Bar, a welcoming full bar and liquor store where patrons will enjoy great food and an extensive selection of wine and drinks. Customers may purchase at retail prices and enjoy at Aldo's Restaurant or you may bring your own.
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom Section */}
                <Box className="fade-in" sx={{ textAlign: 'center', mt: 8 }}>
                    <Paper 
                        elevation={6}
                        sx={{ 
                            p: 6,
                            borderRadius: 3,
                            background: 'linear-gradient(135deg, #cf2e2e 0%, #a02323 100%)',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                                opacity: 0.3
                            }}
                        />
                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    mb: 4,
                                    fontFamily: 'Playfair Display, serif',
                                    fontWeight: 700,
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                                }}
                            >
                                A Message from Aldo
                            </Typography>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    mb: 4,
                                    fontSize: '1.2rem',
                                    lineHeight: 1.8,
                                    fontFamily: 'Open Sans, sans-serif',
                                    fontWeight: 400,
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}
                            >
                                Aldo, his family and staff look forward to serving you. Thank you for your patronage.
                            </Typography>
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    fontFamily: 'Playfair Display, serif',
                                    fontWeight: 600,
                                    fontStyle: 'italic',
                                    color: '#ffd700'
                                }}
                            >
                                – Aldo's – Pane & Vino - Unique place with passion for people.
                            </Typography>
                        </Box>
                    </Paper>
                </Box>

                {/* Call to Action */}
                <Box className="fade-in" sx={{ textAlign: 'center', mt: 6 }}>
                    <Typography 
                        variant="h4" 
                        sx={{ 
                            color: '#333',
                            mb: 3,
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 600
                        }}
                    >
                        Experience Our Legacy
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto 3rem auto',
                            fontSize: '1.1rem',
                            lineHeight: 1.7
                        }}
                    >
                        Join us for an unforgettable dining experience that celebrates four decades of Italian tradition and culinary excellence.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}