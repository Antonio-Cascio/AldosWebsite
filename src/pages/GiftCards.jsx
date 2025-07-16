import twofive from '../images/25.png';
import five from '../images/50.png';
import sevenfive from '../images/75.png';
import onetwentyfive from '../images/125.png';
import onefifty from '../images/150.png';
import onehundredseventyfive from '../images/175.png';
import onehundred from '../images/200.png';
import twotwentyfive from '../images/225.png';
import onehundredfifty from '../images/250.png';
import fourhundred from '../images/variable500a.png';
import { Box, Typography, Container } from '@mui/material';

export default function GiftCards() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        <Typography 
            variant="h1" 
            sx={{
                textAlign: 'center', 
                mb: { xs: 2, md: 3 }, 
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
                fontWeight: 'bold', 
                color: 'black',
                fontFamily: 'Playfair Display, serif'
            }}
        >
            Gift Cards
        </Typography>
        <Typography 
            variant="body1" 
            sx={{
                textAlign: 'center', 
                mb: { xs: 3, md: 4 }, 
                px: { xs: 2, md: 0 },
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, 
                color: 'black',
                fontFamily: 'Open Sans, sans-serif',
                lineHeight: { xs: 1.5, md: 1.6 },
                maxWidth: '800px',
                margin: '0 auto'
            }}
        >
            Please select any of the gift card values below.
            Once purchased, you will recieve the gift card at the shipping address specified on the payment form. If you would like to add a personal note, you may enter it in the box labeled "Description" on the payment form.
        </Typography>

        <Box sx={{
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            gap: { xs: '8px', sm: '10px' }, 
            flexWrap: 'wrap',
            px: { xs: 1, md: 0 }
        }}>
            <button className="GiftCardButton">
                <img 
                    src={twofive} 
                    alt="25" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: { xs: '80px', sm: '100px', md: '120px' }
                    }} 
                />
            </button>
            <button className="GiftCardButton">
                <img 
                    src={five} 
                    alt="50" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: { xs: '80px', sm: '100px', md: '120px' }
                    }} 
                />
            </button>
            <button className="GiftCardButton">
                <img 
                    src={sevenfive} 
                    alt="75" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: { xs: '80px', sm: '100px', md: '120px' }
                    }} 
                />
            </button>
            <button className="GiftCardButton">
                <img 
                    src={onetwentyfive} 
                    alt="125" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: { xs: '80px', sm: '100px', md: '120px' }
                    }} 
                />
            </button>
            <button className="GiftCardButton">
                <img 
                    src={onefifty} 
                    alt="150" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: { xs: '80px', sm: '100px', md: '120px' }
                    }} 
                />
            </button>
            <button className="GiftCardButton">
                <img 
                    src={onehundredseventyfive} 
                    alt="175" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: { xs: '80px', sm: '100px', md: '120px' }
                    }} 
                />
            </button>
            <button className="GiftCardButton">
                <img 
                    src={onehundred} 
                    alt="200" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: { xs: '80px', sm: '100px', md: '120px' }
                    }} 
                />
            </button>
            <button className="GiftCardButton">
                <img 
                    src={twotwentyfive} 
                    alt="225" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: { xs: '80px', sm: '100px', md: '120px' }
                    }} 
                />
            </button>
            <button className="GiftCardButton">
                <img 
                    src={onehundredfifty} 
                    alt="250" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: { xs: '80px', sm: '100px', md: '120px' }
                    }} 
                />
            </button>
            <button className="GiftCardButton">
                <img 
                    src={fourhundred} 
                    alt="500" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: { xs: '80px', sm: '100px', md: '120px' }
                    }} 
                />
            </button>
        </Box>
    </Container>
  );
}