import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core';
import clsx from 'clsx';
import { lowerCase } from 'lodash';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdMenu } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router';
import { Button, Drawer } from 'src/components';
import { Constant } from 'src/core/constants';
import { useConfig } from 'src/hooks/useConfig';
import { useUser } from 'src/hooks/useUser';
import { i18nKey } from 'src/locales/i18n';
import { Config } from 'src/models/config';
import { User } from 'src/models/user';
import { useAppSelector } from 'src/redux/store';
import { RoutePath } from 'src/routes/routePath';
import { routes } from 'src/routes/routes';
import Props from './props';
import useStyles from './styles';

const Header = (props: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const { getData: getConfig } = useConfig();
  const { getData: getUser } = useUser();

  const config = useAppSelector(
    (state: any) => state.configReducer.config
  ) as Config;
  const user = useAppSelector((state: any) => state.userReducer.user) as User;

  const [open, setOpen] = useState<boolean>(false);

  const onLogoClick = async () => {
    navigate(RoutePath.HOME, { replace: true });
    await Promise.all([getConfig, getUser]);
  };

  const onPageClick = async (name: string, path: string) => {
    if (
      (config as any)[`${lowerCase(name)}Enable`] &&
      location.pathname !== path
    ) {
      navigate(path);
    } else {
      copyUrl(path);
    }
  };

  const copyUrl = async (path: string) => {
    const url = Constant.BASE_URL + path;
    await navigator.clipboard.writeText(url);
  };

  const onCVClick = async () => {
    const url = user.profile.cv;
    if (url) {
      window.open(url);
    }
  };

  const onHamburgerClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar color='transparent' position='static'>
      <Toolbar>
        <img
          src={config.appIcon}
          alt='logo'
          width={36}
          height={36}
          onClick={onLogoClick}
        />
        <Box className={clsx(classes.container)}>
          {config.cvVisible && (
            <Button
              className={classes.cvButton}
              variant='outlined'
              onClick={onCVClick}
            >
              {t(i18nKey.my_cv)}
            </Button>
          )}
          <Box className={clsx(classes.desktop)}>
            {routes.map((route) =>
              (config as any)?.[`${lowerCase(route.name)}Visible`] ? (
                <Button
                  className={classes.button}
                  variant={
                    location.pathname === route.path ? 'contained' : 'text'
                  }
                  key={route.name}
                  onClick={() => {
                    onPageClick(route.name, route.path);
                  }}
                >
                  {t(route.name)}
                </Button>
              ) : (
                <div key={route.name} />
              )
            )}
          </Box>
          <Box className={clsx(classes.mobile)}>
            <Fragment>
              <IconButton onClick={onHamburgerClick}>
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
