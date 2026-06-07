/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { parseConfig } from '@models/config';
import {
  isRouteActive,
  isRouteEnabled,
  isRouteVisible,
} from '@routes/routeUtils';
import { RoutePath, routes } from '@routes/routes';
import { describe, expect, it } from 'vitest';

describe('routeUtils', () => {
  describe('isRouteActive', () => {
    it('matches the home route exactly', () => {
      expect(isRouteActive('/', RoutePath.HOME)).toBe(true);
      expect(isRouteActive('/about', RoutePath.HOME)).toBe(false);
    });

    it('matches nested and trailing paths for non-home routes', () => {
      expect(isRouteActive('/contact', RoutePath.CONTACT)).toBe(true);
      expect(isRouteActive('/contact/', RoutePath.CONTACT)).toBe(true);
      expect(isRouteActive('/contact/detail', RoutePath.CONTACT)).toBe(true);
      expect(isRouteActive('/project', RoutePath.CONTACT)).toBe(false);
    });

    it('does not mark the not-found route as active', () => {
      expect(isRouteActive('/unknown-route', RoutePath.NOT_FOUND)).toBe(false);
    });
  });

  describe('route config helpers', () => {
    it('reads visible and enabled flags from the route config key', () => {
      const config = parseConfig({
        aboutEnable: true,
        aboutVisible: false,
      });
      const aboutRoute = routes.find((route) => route.path === RoutePath.ABOUT);

      expect(aboutRoute).toBeDefined();
      expect(isRouteEnabled(config, aboutRoute!)).toBe(true);
      expect(isRouteVisible(config, aboutRoute!)).toBe(false);
    });

    it('returns false without config or config key', () => {
      const notFoundRoute = routes.find(
        (route) => route.path === RoutePath.NOT_FOUND,
      );

      expect(notFoundRoute).toBeDefined();
      expect(isRouteEnabled(undefined, routes[0])).toBe(false);
      expect(isRouteVisible(parseConfig({}), notFoundRoute!)).toBe(false);
    });
  });
});
