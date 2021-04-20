import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: 'Roboto',
    },
  })
);

export default theme;
