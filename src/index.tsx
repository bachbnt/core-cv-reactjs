import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { colors } from './themes/colors';
import { styles } from './themes/styles';
import { themes } from './themes/themes';
import { variables } from './themes/variables';
import App from './app';

render(
  <ThemeProvider theme={{ ...themes, colors, styles, variables }}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
