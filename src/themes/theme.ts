import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const styles = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: 'Source Code Pro',
    },
  })
);

const theme = {
  ...styles,
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
          width: '8px',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 8px 8px 8px #222222',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#712218',
          outline: '2px solid #C03A2B',
        },
      },
    },
  },
};

export default theme;
