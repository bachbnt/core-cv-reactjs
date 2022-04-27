import { Fragment, useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { MdMenu } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router';
import clsx from 'clsx';
import _ from 'lodash';
import { Image } from 'src/constants/image';
import Button from 'src/components/button/button';
import OutlinedButton from 'src/components/button/outlinedButton/outlinedButton';
import Drawer from 'src/components/drawer/drawer';
import { i18nKey } from 'src/locales/i18n';
import { RootState } from 'src/redux/rootState';
import { ConfigState } from 'src/redux/config/configState';
import { UserState } from 'src/redux/user/userState';
import { RoutePath } from 'src/routes/routePath';
import { routes } from 'src/routes/routes';
import { Props } from './props';
import useStyles from './styles';

const Header = (props: Props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { t } = useTranslation();
  const config = useSelector<RootState, ConfigState>(
    (state) => state.configReducer
  );
  const user = useSelector<RootState, UserState>((state) => state.userReducer);
  const [open, setOpen] = useState<boolean>(false);

  const onLogoClick = () => {
    history.replace(RoutePath.HOME);
  };

  const onPageClick = (name: string, path: string) => {
    if (
      (config as any)[`${_.lowerCase(name)}Enable`] &&
      location.pathname !== path
    ) {
      history.push(path);
    }
  };

  const onCVClick = () => {
    if (user?.profile?.cv) {
      window.open(user?.profile?.cv);
    }
  };

  const onHamburgerClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar color='transparent' position='static'>
      <Toolbar className={clsx(classes.toolbar)}>
        <img
          src={Image.LOGO}
          alt='logo'
          width={36}
          height={36}
          onClick={onLogoClick}
        />
        <Box className={classes.row}>
          {config?.cvVisible && (
            <OutlinedButton className={clsx(classes.cv)} onClick={onCVClick}>
              <Typography className={clsx(classes.bold)}>
                {t(i18nKey.my_cv)}
              </Typography>
            </OutlinedButton>
          )}
          <Box className={clsx(classes.desktop)}>
            {routes.map((route) =>
              (config as any)?.[`${_.lowerCase(route.name)}Visible`] ? (
                <Button
                  key={route.name}
                  selected={location.pathname === route.path}
                  onClick={() => {
                    onPageClick(route.name, route.path);
                  }}
                >
                  <Typography className={clsx(classes.bold)}>
                    {t(route.name)}
                  </Typography>
                </Button>
              ) : (
                <div key={route.name} />
              )
            )}
          </Box>
          <Box className={clsx(classes.mobile)}>
            <Fragment>
              <IconButton
                className={clsx(classes.hamburger)}
                onClick={onHamburgerClick}
              >
                <MdMenu />
              </IconButton>
              <Drawer open={open} onClose={onHamburgerClick} />
            </Fragment>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
