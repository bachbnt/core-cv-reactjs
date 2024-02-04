import { Avatar, Button, Drawer } from '@components';
import Constant from '@core/constants';
import useConfig from '@hooks/useConfig';
import useUser from '@hooks/useUser';
import { Localization } from '@locales/i18n';
import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core';
import { RootState, useAppSelector } from '@redux/store';
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
    (state: RootState) => state.configReducer.config
  );
  const user = useAppSelector((state: RootState) => state.userReducer.user);

  const [open, setOpen] = useState<boolean>(false);

  const onLogoClick = async () => {
    navigate(RoutePath.HOME, { replace: true });
    getConfig();
    getUser();
  };

  const onPageClick = async (component: string, path: string) => {
    if (
      (config as any)[`${lowerCase(component)}Enable`] &&
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
              {t(Localization.page0)}
            </Button>
          )}
          <Box className={classes.desktop}>
            {routes.map((route) =>
              (config as any)?.[`${lowerCase(route.component)}Visible`] ? (
                <Button
                  className={classes.button}
                  variant={
                    location.pathname === route.path ? 'contained' : 'text'
                  }
                  key={route.name}
                  onClick={() => {
                    onPageClick(route.component, route.path);
                  }}
                >
                  {t(route.name)}
                </Button>
              ) : null
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
