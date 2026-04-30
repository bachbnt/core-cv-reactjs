import { createTheme, Theme as MUITheme, responsiveFontSizes } from '@mui/material/styles';
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
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            html: {
              WebkitFontSmoothing: 'auto',
              margin: 0,
            },
            body: {
              backgroundImage: `url('${variables.backgroundUrl}')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              fontFamily: 'SourceSerifPro',
              margin: 0,
            },
            '*::-webkit-scrollbar': {
              width: '4px',
              height: '4px',
            },
            '*::-webkit-scrollbar-track': {
              WebkitBoxShadow: `inset 4px 4px 4px ${colors.black}`,
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: colors.primary,
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: colors.white,
            },
          },
        },
        MuiButton: {
          styleOverrides: {
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
              '&.Mui-disabled': {
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
              '&.Mui-disabled': {
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
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              color: colors.white,
              '&:hover': {
                backgroundColor: colors.secondary,
              },
            },
          },
        },
        MuiSvgIcon: {
          styleOverrides: {
            root: {
              color: colors.primary,
              fontSize: 48,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: variables.borderRadius,
              alignItems: 'center',
              backgroundColor: colors.grey,
              '&:hover': {
                backgroundColor: colors.black,
              },
            },
          },
        },
        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              backgroundColor: colors.secondary,
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              justifyContent: 'space-between',
            },
          },
        },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              background: colors.grey,
            },
          },
        },
        MuiList: {
          styleOverrides: {
            root: {
              width: 200,
            },
          },
        },
        MuiListItem: {
          styleOverrides: {
            button: { // Note: MuiListItem no longer has 'button' class in v5 default usually, but if using ListItemButton it's different. Assuming ListItems are used as buttons
              '&:hover': {
                backgroundColor: colors.secondary,
              },
              '&.Mui-selected': {
                backgroundColor: colors.primary,
              },
              '&.Mui-selected:hover': {
                backgroundColor: colors.secondary,
              },
            },
          },
        },
        MuiDialog: {
          styleOverrides: {
            root: {
              borderRadius: variables.borderRadius,
            },
            paper: {
              backgroundColor: colors.grey,
            },
          },
        },
        MuiDialogContent: {
          styleOverrides: {
            root: {
              padding: '0px 0px 24px 0px',
              '&:first-child': {
                paddingTop: 0,
              },
            },
          },
        },
        MuiCardContent: {
          styleOverrides: {
            root: {
              '&:last-child': {
                paddingBottom: 0,
              },
            },
          },
        },
      },
    })
  ),
};

export default themes;
export interface AppTheme extends MUITheme {
  colors: AppColor;
  variables: AppVariable;
  styles: AppStyle;
}
