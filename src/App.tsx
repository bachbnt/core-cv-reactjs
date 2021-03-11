import React from 'react';
import { CssBaseline, ThemeProvider, withStyles } from '@material-ui/core';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import theme from './shared/theme';
import { routeData } from './routes/routeData';

const styles = () => ({
  '@global': {
    body: {
      backgroundImage:
        "url('https://cutewallpaper.org/21/hd-website-backgrounds/4k-Webpage-Background-Hd-Website-Backgrounds-Teriz-.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        {Object.values(routeData).map((route) => (
          <Route exact path={route.path} component={route.component} />
        ))}
      </Router>
    </ThemeProvider>
  );
};

export default withStyles(styles, { index: 1 })(App);
