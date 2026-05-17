/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { persister, queryClient } from '@queries';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import colors from '@themes/colors';
import styles from '@themes/styles';
import themes from '@themes/themes';
import variables from '@themes/variables';
import { logEvent } from 'firebase/analytics';
import { createRoot } from 'react-dom/client';
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';
import { analytics } from './services/firebase';
import App from './App';

const reportWebVital =
  (metricValueMultiplier = 1) =>
  (m: { name: string; value: number; rating?: string }) =>
    logEvent(analytics, 'web_vitals', {
      metric_name: m.name,
      metric_value: Math.round(m.value * metricValueMultiplier),
      metric_rating: m.rating,
    });

onCLS(reportWebVital(1000));
onFCP(reportWebVital());
onINP(reportWebVital());
onLCP(reportWebVital());
onTTFB(reportWebVital());

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={{ ...themes, colors, styles, variables }}>
      <CssBaseline />
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister, maxAge: 24 * 60 * 60 * 1000 }}
      >
        <App />
      </PersistQueryClientProvider>
    </ThemeProvider>
  </StyledEngineProvider>,
);
