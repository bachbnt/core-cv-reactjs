import { Fragment, useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { MdMenu } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router';
import clsx from 'clsx';
import _ from 'lodash';
import Button from 'src/components/button/button';
import OutlinedButton from 'src/components/button/outlinedButton/outlinedButton';
import Drawer from 'src/components/drawer/drawer';
import { useConfig } from 'src/hooks/useConfig';
import { useUser } from 'src/hooks/useUser';
import { i18nKey } from 'src/locales/i18n';
import { useAppSelector } from 'src/redux/store';
import { RoutePath } from 'src/routes/routePath';
import { routes } from 'src/routes/routes';
import { variables } from 'src/themes/variables';
import { Props } from './props';
import useStyles from './styles';

const Header = (props: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const { getData: getConfig } = useConfig();
  const { getData: getUser } = useUser();

  const config = useAppSelector((state) => state.configReducer.config);
  const user = useAppSelector((state) => state.userReducer.user);

  const [open, setOpen] = useState<boolean>(false);

  const onLogoClick = async () => {
    navigate(RoutePath.HOME, { replace: true });
    await getConfig();
    await getUser();
  };

  const onPageClick = (name: string, path: string) => {
    if (
      (config as any)[`${_.lowerCase(name)}Enable`] &&
      location.pathname !== path
    ) {
      navigate(path);
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
          src={variables.logoUrl}
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
