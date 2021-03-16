import useStyles from './styles';
import { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';
import Drawer from '../drawer/drawer';
import { Link } from 'react-router-dom';
import { routeData } from '../../routes/routeData';
import { Props } from './types';
import { MdMenu } from 'react-icons/md';

const Navbar = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { currentRoute } = props;

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
              {Object.values(routeData).map((route) => (
                <Button
                  className={
                    route.name === currentRoute.name
                      ? classes.selectedActionButton
                      : classes.unselectedActionButton
                  }
                  component={Link}
                  {...({ to: route.path } as any)}>
                  <Typography
                    className={
                      route.name === currentRoute.name
                        ? classes.selectedActionButton
                        : classes.unselectedActionButton
                    }>
                    {route.title}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Box className={classes.hamburgerButton}>
              <IconButton onClick={toggleDrawer}>
                <MdMenu className={classes.hamburgerIcon} />
              </IconButton>
            </Box>
            <Drawer
              open={open}
              onClose={toggleDrawer}
              currentRoute={currentRoute}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
