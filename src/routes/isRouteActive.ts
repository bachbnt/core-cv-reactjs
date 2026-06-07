/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { RoutePath } from './routePath';

const normalizePath = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, '') : path;

const isRouteActive = (pathname: string, routePath: RoutePath) => {
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

export default isRouteActive;
