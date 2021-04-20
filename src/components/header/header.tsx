import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Fragment, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router';
import clsx from 'clsx';
import Button from '../button/button';
import Drawer from '../drawer/drawer';
import { Props } from './props';
import useStyles from './styles';
import { routes } from '../../routes/routes';

const Header = (props: Props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  const onPageClick = (path: string) => {
    if (location.pathname !== path) {
      history.push(path);
    }
  };
  const onHamburgerClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar color='transparent' position='static'>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.desktop}>
          {routes.map((route) => (
            <Button
              selected={location.pathname === route.path}
              onClick={() => {
                onPageClick(route.path);
              }}>
              <Typography className={clsx(classes.bold)}>
                {route.name}
              </Typography>
            </Button>
          ))}
        </Box>
        <Box className={classes.mobile}>
          <Fragment>
            <IconButton
              className={classes.hamburger}
              onClick={onHamburgerClick}>
              <MdMenu />
            </IconButton>
            <Drawer open={open} onClose={onHamburgerClick} />
          </Fragment>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
