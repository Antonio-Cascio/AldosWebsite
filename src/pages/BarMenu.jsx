import { Box, Typography, Container } from '@mui/material';
import BackIcon from '../images/BackIcon.png';
import { Link } from 'react-router-dom';


export default function BarMenu() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
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
                                backgroundColor: 'rgba(0, 0, 0, 0.04)'
                            }
                        }}
                    >
                        <img src={BackIcon} alt="Back" style={{ width: '24px', height: '24px' }} />
                    </Box>
                </Link>
            </Box>
            <div>
                <h1>Bar Menu</h1>
            </div>
        </Container>
    );
}