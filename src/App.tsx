import React from 'react';
import { CssBaseline, ThemeProvider, withStyles } from '@material-ui/core';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/home';
import Resume from './pages/resume/resume';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import theme from './shared/theme';

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
  const items = [
    {
      component: Home,
      path: '/',
    },
    {
      component: About,
      path: '/about',
    },
    {
      component: Resume,
      path: '/resume',
    },
    {
      component: Portfolio,
      path: '/portfolio',
    },
    {
      component: Contact,
      path: '/contact',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        {items.map((item) => (
          <Route exact path={item.path} component={item.component} />
        ))}
      </Router>
    </ThemeProvider>
  );
};

export default withStyles(styles, { index: 1 })(App);
