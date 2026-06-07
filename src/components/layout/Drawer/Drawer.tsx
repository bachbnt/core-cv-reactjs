/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import Constant from '@core/constants';
import useTracker from '@hooks/useTracker';
import {
  List,
  ListItemButton,
  ListItemText,
  Drawer as MuiDrawer,
} from '@mui/material';
import { useConfigQuery } from '@queries';
import {
  isRouteActive,
  isRouteEnabled,
  isRouteVisible,
} from '@routes/routeUtils';
import { Route, routes } from '@routes/routes';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  open: boolean;
  onClose: () => void;
};

const Drawer = (props: Props) => {
  const { open, onClose } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { trackEvent } = useTracker({}, false);

  const { data: config } = useConfigQuery();

  const onPageClick = async (route: Route) => {
    const { path, trackingName } = route;
    if (
      isRouteEnabled(config, route) &&
      !isRouteActive(location.pathname, path)
    ) {
      trackEvent('component_clicked', {
        component_name: 'drawer',
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

  return (
    <MuiDrawer open={open} color='inherit' onClose={onClose} anchor='right'>
      <List>
        {routes.map((route) =>
          isRouteVisible(config, route) ? (
            <ListItemButton
              aria-current={
                isRouteActive(location.pathname, route.path)
                  ? 'page'
                  : undefined
              }
              key={route.name}
              selected={isRouteActive(location.pathname, route.path)}
              onClick={() => {
                onPageClick(route);
                onClose();
              }}
            >
              <ListItemText primary={t(route.name)}></ListItemText>
            </ListItemButton>
          ) : null,
        )}
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
