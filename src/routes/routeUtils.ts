/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Config } from '@models/config';
import { Route, RoutePath } from './routes';

type RouteFlag = 'Enable' | 'Visible';
type RouteConfigField = `${NonNullable<Route['configKey']>}${RouteFlag}`;

const normalizePath = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, '') : path;

export const isRouteActive = (pathname: string, routePath: RoutePath) => {
  if (routePath === RoutePath.NOT_FOUND) {
    return false;
  }

  const normalizedPathname = normalizePath(pathname);
  const normalizedRoutePath = normalizePath(routePath);

  if (normalizedRoutePath === RoutePath.HOME) {
    return normalizedPathname === RoutePath.HOME;
  }

  return (
    normalizedPathname === normalizedRoutePath ||
    normalizedPathname.startsWith(`${normalizedRoutePath}/`)
  );
};

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
