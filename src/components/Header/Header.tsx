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
import { RoutePath } from '@routes/routePath';
import { Route, routes } from '@routes/routes';
import lowerCase from 'lodash/lowerCase';
import { Fragment, lazy, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdMenu } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router';
import Props from './props';
import useStyles from './styles';

const CvPreviewDialog = lazy(() => import('@components/CvPreviewDialog'));

const Header = (_props: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
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
    navigate(RoutePath.HOME, { replace: true });
    queryClient.invalidateQueries({ queryKey: queryKeys.config });
    queryClient.invalidateQueries({ queryKey: queryKeys.user });
  };

  const onPageClick = async (route: Route) => {
    const { component, path, trackingName } = route;
    if (
      (config as any)?.[`${lowerCase(component)}Enable`] &&
      location.pathname !== path
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
