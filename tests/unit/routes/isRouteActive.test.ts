/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import isRouteActive from '@routes/isRouteActive';
import { RoutePath } from '@routes/routePath';
import { describe, expect, it } from 'vitest';

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
