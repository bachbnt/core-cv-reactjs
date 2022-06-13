import { render } from 'react-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { colors } from './themes/colors';
import styles from './themes/styles';
import { themes } from './themes/themes';
import { variables } from './themes/variables';
import App from './app';

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
