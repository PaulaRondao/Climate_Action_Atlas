'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import SVGIMG from '../../../../public/logo/logo-full-climate-green.svg';
import {
  StyledButton,
  StyledLink,
} from '@/components/atoms/Button/button.styles';
import { usePathname } from 'next/navigation';

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

const Navbar: React.FC<NavbarProps> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useIsMobile();
  const { user, logout } = useAuth();
  const pathname = usePathname();

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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <StyledLink
          href="/carte"
          aria-current={pathname === '/carte' ? 'page' : undefined}
        >
          Explorer la carte
        </StyledLink>

        {user ? (
          <>
            <StyledLink
              href="/formulaire-initiative"
              aria-current={
                pathname === '/formulaire-initiative' ? 'page' : undefined
              }
            >
              Ajouter une initiative
            </StyledLink>

            <IconButton
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
                <Link
                  href="/profile"
                  passHref
                  aria-current={pathname === '/profile' ? 'page' : undefined}
                >
                  <Typography
                    component="a"
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Profil
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  href="/settings"
                  passHref
                  aria-current={pathname === '/settings' ? 'page' : undefined}
                >
                  <Typography
                    component="a"
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Paramètres
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Link
                  href="/"
                  aria-current={pathname === '/' ? 'page' : undefined}
                >
                  Se déconnecter
                </Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <StyledButton
              href="/inscription"
              aria-current={pathname === '/inscription' ? 'page' : undefined}
            >
              S&apos;enregistrer
            </StyledButton>

            <StyledButton
              href="/connexion"
              aria-current={pathname === '/connexion' ? 'page' : undefined}
            >
              Se connecter
            </StyledButton>

          </>
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
        PaperProps={{
          sx: {
            backgroundColor: 'var(--color-background-beige)',
          },
        }}
      >
        <nav role="navigation" aria-label="navigation principale">
          <Box
            width={250}
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <List>
              <ListItem>
                <Link
                  href="/"
                  passHref
                  aria-label="naviguer vers l'acceuil"
                  aria-current={pathname === '/' ? 'page' : undefined}
                >
                  <Image src={SVGIMG} alt="" width={186} height={41} />
                </Link>
              </ListItem>
              <Divider />
              <ListItem>
                <StyledLink
                  href="/carte"
                  aria-current={pathname === '/carte' ? 'page' : undefined}
                >
                  Explorer la carte
                </StyledLink>
              </ListItem>

              {user ? (
                <>
                <ListItem>
                <StyledLink
                  href="/formulaire-initiative"
                  aria-current={
                    pathname === '/formulaire-initiative' ? 'page' : undefined
                  }
                >
                  Ajouter une initiative
                </StyledLink>
              </ListItem>
              <ListItem>
                <ListItemText primary={`Bonjour, ${user.userName}`}/>
              </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <StyledLink
                          href="/profile"
                          passHref
                          aria-current={
                            pathname === '/profile' ? 'page' : undefined
                          }
                        >
                          Profil
                        </StyledLink>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <StyledLink
                          href="/settings"
                          passHref
                          aria-current={
                            pathname === '/settings' ? 'page' : undefined
                          }
                        >
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
                    <StyledButton
                      href="/inscription"
                      passHref
                      aria-current={
                        pathname === '/inscription' ? 'page' : undefined
                      }
                    >
                      S&apos;enregistrer
                    </StyledButton>
                  </ListItem>
                  <ListItem>
                    <StyledButton
                      href="/connexion"
                      passHref
                      aria-current={
                        pathname === '/connexion' ? 'page' : undefined
                      }
                    >
                      Se connecter
                    </StyledButton>
                  </ListItem>
                </>
              )}
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
        backgroundColor: 'var(--color-background-beige)',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ minHeight: '70px' }}>
        {isMobile && (
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            sx={{
              mr: 2,
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
          aria-current={pathname === '/' ? 'page' : undefined}
          aria-label="naviguer vers l'acceuil"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#010020',
          }}
        >
          <Image src={SVGIMG} alt="" width={186} height={41} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <nav role="navigation" aria-label="navigation principale">
          {!isMobile && renderNavLinks()}
          {isMobile && renderDrawer()}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
