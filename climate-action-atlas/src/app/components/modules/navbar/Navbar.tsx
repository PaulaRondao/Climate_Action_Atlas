'use client';

import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, useMediaQuery, Drawer, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Pour les écrans plus petits que "md" (960px)

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
    <Box display="flex" alignItems="center" gap={2}>
      <Link href="/news" passHref>
        <Button color="inherit">S&apos;engager</Button>
      </Link>
      <Link href="/about-us" passHref>
        <Button color="inherit">Ajouter une initiative</Button>
      </Link>
      <Link href="/get-started" passHref>
        <Button color="primary" variant="contained">
          Connexion
        </Button>
      </Link>
    </Box>
  );

  const renderDrawer = () => (
    <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
      <Box width={250} role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
        <List>
          <ListItem>
            <ListItemText primary={<Link href="/news" passHref>S&apos;engager</Link>} />
          </ListItem>
          <ListItem>
            <ListItemText primary={<Link href="/about-us" passHref>Ajouter une initiative</Link>} />
          </ListItem>
          <ListItem>
            <ListItemText primary={<Link href="/location" passHref>Connexion</Link>} />
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)} aria-label="menu">
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
