import { Fragment, useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { MdMenu } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Button from '../button/button';
import Drawer from '../drawer/drawer';
import { Props } from './props';
import useStyles from './styles';
import { routes } from '../../routes/routes';
import OutlinedButton from '../button/outlinedButton/outlinedButton';
import { i18nKey } from '../../locales/i18n';
import { RootState } from '../../redux/rootState';
import { UserState } from '../../redux/user/userState';

const Header = (props: Props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { t } = useTranslation();
  const user = useSelector<RootState, UserState>((state) => state.UserReducer);
  const [open, setOpen] = useState<boolean>(false);

  const onPageClick = (path: string) => {
    if (location.pathname !== path) {
      history.push(path);
    }
  };

  const onCVClick = () => {
    window.open(user?.cv);
  };

  const onHamburgerClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar color='transparent' position='static'>
      <Toolbar className={clsx(classes.toolbar)}>
        <OutlinedButton className={clsx(classes.cv)} onClick={onCVClick}>
          <Typography className={clsx(classes.bold)}>
            {t(i18nKey.download_cv)}
          </Typography>
        </OutlinedButton>
        <Box className={clsx(classes.desktop)}>
          {routes.map((route) => (
            <Button
              selected={location.pathname === route.path}
              onClick={() => {
                onPageClick(route.path);
              }}>
              <Typography className={clsx(classes.bold)}>
                {t(route.name)}
              </Typography>
            </Button>
          ))}
        </Box>
        <Box className={clsx(classes.mobile)}>
          <Fragment>
            <IconButton
              className={clsx(classes.hamburger)}
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
