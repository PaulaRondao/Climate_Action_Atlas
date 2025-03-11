'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Avatar,
} from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import SVGIMG from '../../../app/public/svg/logo-climate.svg';
import { Header } from '@/components/organisms';

interface NavbarProps {
  pageTitle?: string;
  description?: string;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 960); // 960px est le breakpoint 'md' par défaut de MUI
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

const Navbar: React.FC<NavbarProps> = ({ pageTitle, description }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useIsMobile();
  const { user, logout } = useAuth();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const themeColor = createTheme({
    palette: {
      primary: {
        main: '#fefcf6',
      },
    },
  });

  const renderNavLinks = () => (
    <ThemeProvider theme={themeColor}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Link href="/news" passHref>
          <Button
            sx={{
              fontSize: '12px',
              color: '#010020',
              '&:hover': {
                color: '#010020',
                WebkitTextStroke: '0.5px #010020',
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
              color: '#010020',
              '&:hover': {
                color: '#010020',
                WebkitTextStroke: '0.5px #010020',
              },
              transition: 'color 0.3s ease',
            }}
          >
            Ajouter une initiative
          </Button>
        </Link>

        {user ? (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar sx={{ bgcolor: '#6ee7b7', width: 32, height: 32 }}>
                {user.userName.charAt(0)}
              </Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <Typography>{user.userName}</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Se déconnecter</MenuItem>
            </Menu>
          </>
        ) : (
          <Link href="/signup" passHref>
            <Button
              sx={{
                fontSize: '12px',
                color: '#010020',
                backgroundColor: 'transparent',
                border: '1px solid #010020',
                borderRadius: '25px',
                padding: '8px 20px',
                '&:hover': {
                  borderColor: '#010020',
                  color: '#010020',
                  WebkitTextStroke: '0.5px #010020',
                },
                transition: 'color 0.3s ease',
              }}
            >
              S&apos;inscrire
            </Button>
          </Link>
        )}
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
            {user && (
              <ListItem>
                <ListItemText
                  primary={`Bonjour, ${user.userName}`}
                  sx={{ color: theme.palette.primary.main }}
                />
              </ListItem>
            )}
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
            {user ? (
              <ListItem>
                <ListItemText
                  primary="Se déconnecter"
                  onClick={handleLogout}
                  sx={{ cursor: 'pointer' }}
                />
              </ListItem>
            ) : (
              <ListItem>
                <ListItemText
                  primary={
                    <Link href="/signup" passHref>
                      S&apos;inscrire
                    </Link>
                  }
                />
              </ListItem>
            )}
            <Divider />
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box
          component={Link}
          href="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Image src={SVGIMG} alt="Logo" width={40} height={40} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {!isMobile && renderNavLinks()}
        {renderDrawer()}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
