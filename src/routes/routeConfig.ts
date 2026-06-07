/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Config } from '@models/config';
import { Route } from './routes';

type RouteFlag = 'Enable' | 'Visible';
type RouteConfigField = `${NonNullable<Route['configKey']>}${RouteFlag}`;

const getRouteConfigValue = (
  config: Config | undefined,
  route: Route,
  flag: RouteFlag,
) => {
  if (!config || !route.configKey) return false;
  const routeKey = `${route.configKey}${flag}` as RouteConfigField;
  return config[routeKey];
};

export const isRouteEnabled = (config: Config | undefined, route: Route) =>
  getRouteConfigValue(config, route, 'Enable');

export const isRouteVisible = (config: Config | undefined, route: Route) =>
  getRouteConfigValue(config, route, 'Visible');
