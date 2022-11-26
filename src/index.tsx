import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './app';
import { persistor, store } from './redux/store';
import colors from './themes/colors';
import styles from './themes/styles';
import themes from './themes/themes';
import variables from './themes/variables';

render(
  <ThemeProvider theme={{ ...themes, colors, styles, variables }}>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
