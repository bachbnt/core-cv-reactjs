import { render } from 'react-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { colors } from './themes/colors';
import { styles } from './themes/styles';
import { themes } from './themes/themes';
import { variables } from './themes/variables';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './redux/store';

render(
  <ThemeProvider theme={{ ...themes, colors, styles, variables }}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
