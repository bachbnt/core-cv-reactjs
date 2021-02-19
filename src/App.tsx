import React from 'react';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/home';
import Resume from './pages/resume/resume';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import About from './pages/about/about';

const styles = () => ({
  '@global': {
    body: {
      backgroundImage:
        "url('https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100%',
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
    <Router>
      <CssBaseline />
      {items.map((item) => (
        <Route exact path={item.path} component={item.component} />
      ))}
    </Router>
  );
};

export default withStyles(styles)(App);
