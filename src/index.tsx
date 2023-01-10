import {
  createGenerateClassName,
  CssBaseline,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core';
import { persistor, store } from '@redux/store';
import colors from '@themes/colors';
import styles from '@themes/styles';
import themes from '@themes/themes';
import variables from '@themes/variables';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

const generateClassName = createGenerateClassName({
  productionPrefix: 'jss',
});

render(
  <StylesProvider generateClassName={generateClassName}>
    <ThemeProvider theme={{ ...themes, colors, styles, variables }}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StylesProvider>,
  document.getElementById('root')
);
