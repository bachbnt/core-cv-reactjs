import React from 'react';
import { CssBaseline, ThemeProvider, withStyles } from '@material-ui/core';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import theme from './shared/theme';
import { routeData } from './routes/routeData';

const styles = () => ({
  '@global': {
    body: {
      backgroundImage:
        "url('https://cdn.filtergrade.com/wp-content/uploads/2019/12/28151408/40-Black-Wood-Background-Textures-8.png')",
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
