import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React, { useState } from 'react';
import Slider from '../slider/slider';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const items = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'About',
      path: '/about',
    },
    {
      text: 'Resume',
      path: '/resume',
    },
    {
      text: 'Portfolio',
      path: '/portfolio',
    },
    {
      text: 'Contact',
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
            <Typography variant='h5'>Portfolio App</Typography>
            <IconButton className={classes.hamburger} onClick={toggleDrawer}>
              <Menu style={{ color: 'white' }} />
            </IconButton>
            <Box className={classes.buttonBar} component='div'>
              {items.map((item) => (
                <Button
                  className={classes.button}
                  color='inherit'
                  component={Link}
                  {...({ to: item.path } as any)}>
                  {item.text}
                </Button>
              ))}
            </Box>
            <Drawer open={open} onClose={toggleDrawer} anchor='right'>
              {<Slider items={items} />}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
