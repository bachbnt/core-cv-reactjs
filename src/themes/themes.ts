import { responsiveFontSizes } from '@material-ui/core';
import { createTheme, Theme as MUITheme } from '@material-ui/core/styles';
import { colors, AppColor } from './colors';
import { AppStyle } from './styles';
import { variables, AppVariable } from './variables';

export const themes = {
  ...responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: variables.fontFamily,
      },
    })
  ),
  overrides: {
    MuiCssBaseline: {
      '@global': {
        margin: 0,
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          backgroundImage: `url('${variables.backgroundUrl}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          fontFamily: 'SourceSerifPro',
        },
        '*::-webkit-scrollbar': {
          width: '4px',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': `inset 8px 8px 8px ${colors.black}`,
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: colors.secondary,
          outline: `2px solid ${colors.primary}`,
        },
      },
    },
  },
};

export interface AppTheme extends MUITheme {
  colors: AppColor;
  variables: AppVariable;
  styles: AppStyle;
}
