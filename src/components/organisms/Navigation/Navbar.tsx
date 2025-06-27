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
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import SVGIMG from '../../../../public/logo/logo-full-climate-green.svg';
import { Header } from '@/components/organisms';
import {
  StyledButton,
  StyledLink,
} from '@/components/atoms/Button/button.styles';

interface NavbarProps {
  pageTitle?: string;
  description?: string;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1219);
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
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
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
        main: '#F0EDEB',
      },
    },
  });

  const renderNavLinks = () => (
    <ThemeProvider theme={themeColor}>
      <nav aria-label="menu principal">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <StyledLink href="/explore-map">Explorer la carte</StyledLink>

          <StyledLink href="/add-initiative">Ajouter une initiative</StyledLink>

          {user ? (
            <>
              <IconButton
                href="/login"
                component="a"
                aria-label="se connecter"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <Image
                  src="/icons/login-icon.svg"
                  alt=""
                  width={36}
                  height={36}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Typography>{user.userName}</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/profile" passHref>
                    <Typography
                      component="a"
                      sx={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Profil
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/settings" passHref>
                    <Typography
                      component="a"
                      sx={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Paramètres
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Link href="/">Se déconnecter</Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <StyledButton href="/signup">S&apos;enregistrer</StyledButton>

              <IconButton
                href="/login"
                component="a"
                aria-label="se connecter"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <Image
                  src="/icons/login-icon.svg"
                  alt=""
                  width={36}
                  height={36}
                />
              </IconButton>
            </>
          )}
        </Box>
      </nav>
    </ThemeProvider>
  );

  const renderDrawer = () => (
    <ThemeProvider theme={themeColor}>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <nav aria-label="menu principal">
          <Box
            width={250}
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <List>
              {user && (
                <ListItem>
                  <ListItemText primary={`Bonjour, ${user.userName}`} />
                </ListItem>
              )}
              <ListItem>
                <Link href="/" passHref>
                  <Image
                    src={SVGIMG}
                    alt="Climate Action Atlas"
                    width={186}
                    height={41}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <StyledLink href="/explore-map">Explorer la carte</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink href="/add-initiative">
                  Ajouter une initiative
                </StyledLink>
              </ListItem>

              {user ? (
                <>
                  <ListItem>
                    <ListItemText
                      primary={
                        <StyledLink href="/profile" passHref>
                          Profil
                        </StyledLink>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <StyledLink href="/settings" passHref>
                          Paramètres
                        </StyledLink>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Se déconnecter"
                      onClick={handleLogout}
                      sx={{ cursor: 'pointer' }}
                    />
                  </ListItem>
                </>
              ) : (
                <>
                  <ListItem>
                    <StyledButton href="/signup" passHref>
                      S&apos;enregistrer
                    </StyledButton>
                  </ListItem>
                  <ListItem>
                    <IconButton
                      href="/login"
                      component="a"
                      aria-label="connexion"
                    >
                      <Image
                        src="/icons/login-icon.svg"
                        alt="connexion"
                        width={36}
                        height={36}
                      />
                    </IconButton>
                  </ListItem>
                </>
              )}
              <Divider />
            </List>
          </Box>
        </nav>
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
            edge="end"
            aria-label="menu"
            sx={{
              mr: 2,
              backgroundColor: 'transparent',
              color: 'var(--foreground-green)',
              border: '2px solid',
              borderRadius: '50px',
              borderColor: 'var(--foreground-green)',
              '&:hover': {
                backgroundColor: 'var(--color-background-green)',
                color: 'var(--color-background-beige)',
              },
            }}
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
            color: '#010020',
          }}
        >
          <Image
            src={SVGIMG}
            alt="Climate Action Atlas"
            width={186}
            height={41}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <nav aria-label="menu principal">
          {!isMobile && renderNavLinks()}
          {renderDrawer()}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
