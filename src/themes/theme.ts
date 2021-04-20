import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const styles = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: 'Roboto',
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
          backgroundImage:
            "url('https://cdn.filtergrade.com/wp-content/uploads/2019/12/28151408/40-Black-Wood-Background-Textures-8.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
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
