import { responsiveFontSizes } from '@material-ui/core';
import { createTheme, Theme as MUITheme } from '@material-ui/core/styles';
import colors, { AppColor } from './colors';
import { AppStyle } from './styles';
import variables, { AppVariable } from './variables';

const themes = {
  ...responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: variables.fontFamily,
      },
      palette: {
        common: {
          white: colors.white,
          black: colors.black,
        },
        primary: {
          main: colors.primary,
          light: colors.primary,
          dark: colors.primary,
        },
        secondary: {
          main: colors.secondary,
          light: colors.secondary,
          dark: colors.secondary,
        },
        error: {
          main: colors.secondary,
          light: colors.secondary,
          dark: colors.secondary,
        },
        text: {
          disabled: colors.grey,
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 680,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
      shape: {
        borderRadius: variables.borderRadius,
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
          height: '4px',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': `inset 4px 4px 4px ${colors.black}`,
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: colors.primary,
        },
      },
    },
    MuiTypography: {
      root: {
        color: colors.white,
      },
    },
    MuiButton: {
      root: {
        padding: '6px 8px',
        borderRadius: variables.borderRadius,
        lineHeight: variables.lineHeight,
        color: colors.white,
        backgroundColor: colors.transparent,
        textTransform: 'uppercase',
        minWidth: variables.buttonMinWidth,
        fontSize: variables.fontSize,
        '&:hover': {
          color: colors.secondary,
        },
      },
      text: {
        color: colors.white,
        '&:hover': {
          color: colors.secondary,
        },
      },
      outlined: {
        borderWidth: 2,
        borderColor: colors.primary,
        color: colors.white,
        '&$disabled': {
          borderColor: colors.grey,
          color: colors.white,
        },
        '&:hover': {
          backgroundColor: colors.secondary,
          color: colors.white,
        },
      },
      contained: {
        backgroundColor: colors.primary,
        color: colors.white,
        '&$disabled': {
          backgroundColor: colors.grey,
          color: colors.white,
        },
        '&:hover': {
          backgroundColor: colors.secondary,
          color: colors.white,
        },
      },
      startIcon: {
        color: colors.primary,
      },
    },
    MuiIconButton: {
      root: {
        color: colors.white,
        '&:hover': {
          backgroundColor: colors.secondary,
        },
      },
    },
    MuiSvgIcon: {
      root: {
        color: colors.primary,
        fontSize: 48,
      },
    },
    MuiCard: {
      root: {
        borderRadius: variables.borderRadius,
        alignItems: 'center',
        backgroundColor: colors.grey,
        '&:hover': {
          backgroundColor: colors.black,
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: colors.secondary,
      },
    },
    MuiToolbar: {
      root: {
        justifyContent: 'space-between',
      },
    },
    MuiDrawer: {
      paper: {
        background: colors.grey,
      },
    },
    MuiList: {
      root: {
        width: 200,
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: colors.secondary,
        },
        '&$selected': {
          backgroundColor: colors.primary,
        },
        '&$selected:hover': {
          backgroundColor: colors.secondary,
        },
      },
    },
    MuiDialog: {
      root: {
        borderRadius: variables.borderRadius,
      },
      paper: {
        backgroundColor: colors.grey,
      },
    },
    MuiDialogContent: {
      root: {
        padding: '0px 0px 24px 0px',
        '&:first-child': {
          paddingTop: 0,
        },
      },
    },
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: 0,
        },
      },
    },
  },
};

export default themes;
export interface AppTheme extends MUITheme {
  colors: AppColor;
  variables: AppVariable;
  styles: AppStyle;
}
