import {
  AppBar,
  Box,
  Grid,
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

const Header = (props: Props) => {
  const classes = useStyles();
  const { items } = props;
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  const onPageClick = (path: string) => {
    history.push(path);
  };
  const onHamburgerClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar color='transparent' position='static'>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.desktop}>
          {items.map((item) => (
            <Button
              selected={location.pathname === item.path}
              onClick={() => {
                onPageClick(item.path);
              }}>
              <Typography className={clsx(classes.bold)}>
                {item.name}
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
            <Drawer open={open} onClose={onHamburgerClick} items={items} />
          </Fragment>
        </Box>
      </Toolbar>
      <Drawer open={open} onClose={onHamburgerClick} items={items} />
    </AppBar>
  );
};

export default Header;
