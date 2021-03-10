import useStyles from './styles';
import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';
import {
  Home,
  Info,
  Assignment,
  Web,
  Contacts,
  Menu,
} from '@material-ui/icons';
import Drawer from '../drawer/drawer';
import { Link } from 'react-router-dom';
import { DrawerItem } from '../drawer/types';

const Navbar = () => {
  const items: DrawerItem[] = [
    {
      text: 'Home',
      icon: Home,
      path: '/',
    },
    {
      text: 'About',
      icon: Info,
      path: '/about',
    },
    {
      text: 'Resume',
      icon: Assignment,
      path: '/resume',
    },
    {
      text: 'Portfolio',
      icon: Web,
      path: '/portfolio',
    },
    {
      text: 'Contact',
      icon: Contacts,
      path: '/contact',
    },
  ];

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box component='nav'>
        <AppBar
          className={classes.appBar}
          color='transparent'
          position='static'>
          <Toolbar>
            <Box className={classes.actionBar}>
              {items.map((item) => (
                <Button
                  className={classes.actionButton}
                  component={Link}
                  {...({ to: item.path } as any)}>
                  <Typography className={classes.actionButton}>
                    {item.text}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Box className={classes.hamburgerButton}>
              <IconButton onClick={toggleDrawer}>
                <Menu className={classes.hamburgerIcon} />
              </IconButton>
            </Box>
            <Drawer open={open} onClose={toggleDrawer} items={items} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
