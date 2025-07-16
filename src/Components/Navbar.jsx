import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AldosLogo from '../images/aldos-logo.png';
import Image from '../images/Aldorks.png';
import '../App.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Menu', path: '/menu' },
    { text: 'About', path: '/about' },
    { text: 'Events', path: '/events' },
    { text: 'Pane & Vino', path: '/PaneVino' },
    { text: 'Gift Cards', path: '/gift-cards' },
  ];

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            component={Link} 
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              minHeight: 56,
              mx: 2,
              borderRadius: 2,
              mb: 1,
              '&:hover': {
                backgroundColor: 'rgba(207, 46, 46, 0.1)',
                transform: 'translateX(8px)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            <ListItemText 
              primary={item.text} 
              sx={{ 
                color: '#cf2e2e',
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      sx={{ 
        backgroundColor: '#cf2e2e', 
        color: 'white',
        boxShadow: '0 4px 20px rgba(207, 46, 46, 0.3)',
        position: 'static'
      }}
    >
      {/* Desktop Layout */}
      <Box sx={{ 
        display: { xs: 'none', md: 'flex' }, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        px: 4,
        py: 2
      }}>
        {/* Left Section - Logo */}
        <Box sx={{
          display: 'flex', 
          alignItems: 'center',
          gap: 3
        }}>
          <img 
            style={{
              width: '300px', 
              height: 'auto',
            }} 
            src={AldosLogo} 
            alt="Aldo's Logo" 
          />
        </Box>
        
        {/* Center Section - Navigation */}
        <Box sx={{
          display: 'flex',
          gap: 1
        }}>
          {menuItems.map((item) => (
            <Button 
              key={item.text}
              color="inherit" 
              component={Link} 
              to={item.path}
              sx={{
                minHeight: 48,
                minWidth: 48,
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 600,
                fontSize: '0.95rem',
                px: 2,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Right Section - Aldorks Image */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img 
            style={{
              width: '200px', 
              height: 'auto',
            }} 
            src={Image} 
            alt="Aldorks" 
          />
        </Box>
      </Box>

      {/* Mobile Layout */}
      <Box sx={{ 
        display: { xs: 'flex', md: 'none' }, 
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        py: 2
      }}>
        {/* Mobile Header */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          px: 3,
          mb: 2
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              minHeight: 48,
              minWidth: 48,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <img 
            style={{
              width: '160px', 
              height: 'auto',            }} 
            src={AldosLogo} 
            alt="Aldo's Logo" 
          />
          
          <Box sx={{ width: 48 }} />
        </Box>

        {/* Mobile Aldorks Image */}
        <img 
          style={{
            width: '180px', 
            height: 'auto',

          }} 
          src={Image} 
          alt="Aldorks" 
        />
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            backgroundColor: '#fff',
            boxShadow: '4px 0 20px rgba(0,0,0,0.15)'
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}   