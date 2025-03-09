'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import SVGIMG from '../../../../public/logo/logo-climate.svg';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Pour les écrans plus petits que "md" (960px)

  const themeColor = createTheme({
    palette: {
      primary: {
        main: '#fefcf6',
      },
      secondary: {
        main: '#010020',
      },
    },
  });

  // Ouvrir/fermer le menu hamburger
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const renderNavLinks = () => (
    <ThemeProvider theme={themeColor}>
      <Box display="flex" alignItems="center" gap={2}>
        <Link href="/news" passHref>
          <Button
            sx={{
              fontSize: '12px',
              '&:hover': {
                color: '#6ee7b7',
                backgroundColor: 'transparent',
                WebkitTextStroke: '0.5px #6ee7b7',
              },
              transition: 'color 0.3s ease',
            }}
          >
            S&apos;engager
          </Button>
        </Link>
        <Link href="/about-us" passHref>
          <Button
            sx={{
              fontSize: '12px',
              '&:hover': {
                color: '#6ee7b7',
                backgroundColor: 'transparent',
                WebkitTextStroke: '0.5px #6ee7b7',
              },
              transition: 'color 0.3s ease',
            }}
          >
            Ajouter une initiative
          </Button>
        </Link>
        <Link href="/get-started" passHref>
          <Button
            sx={{
              fontSize: '12px',
              color: '#fefcf6',
              backgroundColor: 'transparent',
              border: '1px solid #fefcf6',
              borderRadius: '25px',
              padding: '8px 20px',
              '&:hover': {
                borderColor: '#6ee7b7',
                color: '#6ee7b7',
                WebkitTextStroke: '0.5px #6ee7b7',
              },
              transition: 'color 0.3s ease',
            }}
          >
            Connexion
          </Button>
        </Link>
      </Box>
    </ThemeProvider>
  );

  const renderDrawer = () => (
    <ThemeProvider theme={themeColor}>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          width={250}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Link href="/news" passHref>
                    S&apos;engager
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Link href="/about-us" passHref>
                    Ajouter une initiative
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Link href="/location" passHref>
                    Connexion
                  </Link>
                }
              />
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: themeColor.palette.secondary.main }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, color: '#fefcf6' }}>
          <Image
            src={SVGIMG}
            alt="logo Climate Action Atlas"
            width={40}
            height={40}
          />
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              onClick={() => toggleDrawer(true)}
              aria-label="menu"
              sx={{ color: '#fefcf6' }}
            >
              <MenuIcon />
            </IconButton>

            {renderDrawer()}
          </>
        ) : (
          renderNavLinks()
        )}

        {/* Menu hamburger (pour petits écrans) */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>S&apos;engager</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Ajouter une iniative</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Connexion</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;