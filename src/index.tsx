import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { persistor, store } from '@redux/store';
import Service from '@services/service';
import colors from '@themes/colors';
import styles from '@themes/styles';
import themes from '@themes/themes';
import variables from '@themes/variables';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import di from './core/di';
import { analytics } from './services/firebase';
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';
import { logEvent } from 'firebase/analytics';

di.registerSingleton(Service);

onCLS((m) =>
  logEvent(analytics, 'web_vitals', {
    metric_name: m.name,
    metric_value: Math.round(m.value * 1000),
    metric_rating: m.rating,
  }),
);
onFCP((m) =>
  logEvent(analytics, 'web_vitals', {
    metric_name: m.name,
    metric_value: Math.round(m.value),
    metric_rating: m.rating,
  }),
);
onINP((m) =>
  logEvent(analytics, 'web_vitals', {
    metric_name: m.name,
    metric_value: Math.round(m.value),
    metric_rating: m.rating,
  }),
);
onLCP((m) =>
  logEvent(analytics, 'web_vitals', {
    metric_name: m.name,
    metric_value: Math.round(m.value),
    metric_rating: m.rating,
  }),
);
onTTFB((m) =>
  logEvent(analytics, 'web_vitals', {
    metric_name: m.name,
    metric_value: Math.round(m.value),
    metric_rating: m.rating,
  }),
);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={{ ...themes, colors, styles, variables }}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StyledEngineProvider>,
);
