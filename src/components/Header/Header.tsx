import { Avatar, Button, Drawer } from '@components';
import Constant from '@core/constants';
import useConfig from '@hooks/useConfig';
import useUser from '@hooks/useUser';
import { Localization } from '@locales/i18n';
import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core';
import { Config } from '@models/config';
import { User } from '@models/user';
import { useAppSelector } from '@redux/store';
import { RoutePath } from '@routes/routePath';
import { routes } from '@routes/routes';
import { lowerCase } from 'lodash';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdMenu } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router';
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
    getConfig();
    getUser();
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
    const url = Constant.DOMAIN + path;
    await navigator.clipboard.writeText(url);
  };

  const onCVClick = async () => {
    const url = user?.profile?.cv;
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
        <Avatar
          src={config?.appIcon}
          variant='rounded'
          classes={{ root: classes.logo }}
          onClick={onLogoClick}
        />
        <Box className={classes.container}>
          {config?.cvVisible && (
            <Button
              className={classes.cvButton}
              variant='outlined'
              onClick={onCVClick}
            >
              {t(Localization.my_cv)}
            </Button>
          )}
          <Box className={classes.desktop}>
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
          <Box className={classes.mobile}>
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
