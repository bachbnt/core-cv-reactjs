import { withStyles } from '@material-ui/core';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import Spinner from './components/spinner/spinner';
import { store } from './redux/store';
import BaseRoute from './routes/baseRoute';
import { routes } from './routes/routes';

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
    <Provider store={store}>
      <Switch>
        {routes.map((route) => (
          <BaseRoute
            name={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
      <Spinner />
    </Provider>
  );
};

export default withStyles(styles, { index: 1 })(App);
