/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Avatar, Button, Drawer } from '@components';
import Constant from '@core/constants';
import useTracker from '@hooks/useTracker';
import { Localization } from '@locales/i18n';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import {
  queryKeys,
  queryClient,
  useConfigQuery,
  useCvQuery,
  usePostMockData,
} from '@queries';
import { isRouteEnabled, isRouteVisible } from '@routes/routeConfig';
import isRouteActive from '@routes/isRouteActive';
import { RoutePath } from '@routes/routePath';
import { Route, routes } from '@routes/routes';
import { Fragment, lazy, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdMenu } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import useStyles from './styles';

const CvPreviewDialog = lazy(() => import('@components/CvPreviewDialog'));

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { trackEvent } = useTracker({}, false);

  const { data: config } = useConfigQuery();
  const { data: cv } = useCvQuery();
  const postMockDataMutation = usePostMockData();

  const [open, setOpen] = useState<boolean>(false);
  const [openCvPreview, setOpenCvPreview] = useState<boolean>(false);

  const onLogoClick = async () => {
    trackEvent('component_clicked', {
      component_name: 'header',
      item_name: 'logo_button',
    });
    queryClient.invalidateQueries({ queryKey: queryKeys.config });
    queryClient.invalidateQueries({ queryKey: queryKeys.user });
    navigate(RoutePath.HOME, { replace: true });
  };

  const onPageClick = async (route: Route) => {
    const { path, trackingName } = route;
    if (
      isRouteEnabled(config, route) &&
      !isRouteActive(location.pathname, path)
    ) {
      trackEvent('component_clicked', {
        component_name: 'header',
        item_name: `${trackingName}_button`,
      });
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
    if (Constant.EDIT_MODE === 'true') {
      await postMockDataMutation.mutateAsync();
      return;
    }
    trackEvent('component_clicked', {
      component_name: 'header',
      item_name: 'cv_button',
    });
    setOpenCvPreview(true);
  };

  const onHamburgerClick = () => {
    trackEvent('component_clicked', {
      component_name: 'header',
      item_name: 'hamburger_button',
    });
    setOpen(!open);
  };

  return (
    <AppBar color='transparent' position='static'>
      <Toolbar className={classes.toolbar}>
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
              isRouteVisible(config, route) ? (
                <Button
                  aria-current={
                    isRouteActive(location.pathname, route.path)
                      ? 'page'
                      : undefined
                  }
                  className={classes.button}
                  variant={
                    isRouteActive(location.pathname, route.path)
                      ? 'contained'
                      : 'text'
                  }
                  key={route.name}
                  onClick={() => {
                    onPageClick(route);
                  }}
                >
                  {t(route.name)}
                </Button>
              ) : null,
            )}
          </Box>
          <Box className={classes.mobile}>
            <Fragment>
              <IconButton aria-label='Open menu' onClick={onHamburgerClick}>
                <MdMenu />
              </IconButton>
              <Drawer open={open} onClose={onHamburgerClick} />
            </Fragment>
          </Box>
        </Box>
      </Toolbar>
      {openCvPreview && (
        <Suspense fallback={null}>
          <CvPreviewDialog
            cv={cv}
            open={openCvPreview}
            onClose={() => setOpenCvPreview(false)}
          />
        </Suspense>
      )}
    </AppBar>
  );
};

export default Header;
