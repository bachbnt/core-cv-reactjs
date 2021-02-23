import useStyles from './styles';
import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
} from '@material-ui/core';
import {
  Home,
  Info,
  Assignment,
  Web,
  Contacts,
  Menu,
} from '@material-ui/icons';
import DrawerMenu from '../drawerMenu/drawerMenu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const items = [
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
        <AppBar className={classes.appBar} position='static'>
          <Toolbar>
            <IconButton
              className={classes.hamburgerButton}
              onClick={toggleDrawer}>
              <Menu className={classes.hamburgerIcon} />
            </IconButton>
            <Box className={classes.actionBar}>
              {items.map((item) => (
                <Button
                  className={classes.actionButton}
                  color='inherit'
                  component={Link}
                  {...({ to: item.path } as any)}>
                  {item.text}
                </Button>
              ))}
            </Box>
            <Drawer open={open} onClose={toggleDrawer} anchor='right'>
              {<DrawerMenu items={items} />}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
