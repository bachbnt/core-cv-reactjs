import { responsiveFontSizes } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { Color } from './color';

const theme = {
  ...responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: 'Source Code Pro',
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
          backgroundImage: "url('background.webp')",
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
          '-webkit-box-shadow': `inset 8px 8px 8px ${Color.black}`,
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: Color.secondary,
          outline: `2px solid ${Color.primary}`,
        },
      },
    },
  },
};

export default theme;
