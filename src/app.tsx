import { CssBaseline, ThemeProvider, withStyles } from '@material-ui/core';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import Spinner from './components/spinner/spinner';
import { store } from './redux/store';
import BaseRoute from './routes/baseRoute';
import ErrorRoute from './routes/errorRoute';
import { routes } from './routes/routes';
import theme from './styles/theme';

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
    '*::-webkit-scrollbar': {
      width: '8px',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 8px 8px 8px #222222',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#712218',
      outline: '2px solid #C03A2B712218',
    },
  },
});

const App = () => {
  console.log(routes);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Switch>
          {routes.map((route) => (
            <BaseRoute
              name={route.name}
              path={route.path}
              component={route.name}
              exact
            />
          ))}
          <ErrorRoute />
        </Switch>
        <Spinner />
      </Provider>
    </ThemeProvider>
  );
};

export default withStyles(styles, { index: 1 })(App);
