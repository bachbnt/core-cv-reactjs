/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { css, keyframes } from '@emotion/css';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import type { AppTheme } from './theme';

type StyleMap = Record<string, any>;
type Classes<T extends StyleMap> = {
  [K in keyof T as K extends `@keyframes ${string}` ? never : K]: string;
};

const keyframePrefix = '@keyframes ';

const replaceAnimationRefs = (
  value: unknown,
  animations: Record<string, string>,
): unknown => {
  if (typeof value === 'string') {
    return value.replace(/\$([A-Za-z0-9_-]+)/g, (_, name: string) => {
      return animations[name] ?? `$${name}`;
    });
  }

  if (Array.isArray(value)) {
    return value.map((item) => replaceAnimationRefs(item, animations));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        replaceAnimationRefs(item, animations),
      ]),
    );
  }

  return value;
};

const createStyleHook = <T extends StyleMap>(
  createStyleMap: (theme: AppTheme) => T,
) => {
  return () => {
    const theme = useTheme<AppTheme>();

    return useMemo(() => {
      const styles = createStyleMap(theme);
      const animations = Object.fromEntries(
        Object.entries(styles)
          .filter(([key]) => key.startsWith(keyframePrefix))
          .map(([key, value]) => [
            key.slice(keyframePrefix.length),
            keyframes(value),
          ]),
      );

      return Object.fromEntries(
        Object.entries(styles)
          .filter(([key]) => !key.startsWith(keyframePrefix))
          .map(([key, value]) => [
            key,
            css(replaceAnimationRefs(value, animations) as any),
          ]),
      ) as Classes<T>;
    }, [theme]);
  };
};

export default createStyleHook;
