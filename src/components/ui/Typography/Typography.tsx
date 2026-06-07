/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Typography as MuiTypography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

type Props = TypographyProps;

const normalizeColorSx = (color: Props['color']): SxProps<Theme> | null => {
  if (color === 'primary') return { color: 'primary.main' };
  if (color === 'secondary') return { color: 'secondary.main' };
  if (color === 'error') return { color: 'error.main' };
  return null;
};

const mergeSx = (
  colorSx: SxProps<Theme> | null,
  sx: Props['sx'],
): Props['sx'] => {
  if (!colorSx) return sx;
  if (!sx) return colorSx;
  return (Array.isArray(sx) ? [colorSx, ...sx] : [colorSx, sx]) as Props['sx'];
};

const Typography = (props: Props) => {
  const { color, sx, ...rest } = props;
  const colorSx = normalizeColorSx(color);

  return (
    <MuiTypography
      color={colorSx ? undefined : color}
      sx={mergeSx(colorSx, sx)}
      {...rest}
    />
  );
};

export default Typography;
