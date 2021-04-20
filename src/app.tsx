import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import Spinner from './components/spinner/spinner';
import { store } from './redux/store';
import BaseRoute from './routes/baseRoute';
import ErrorRoute from './routes/errorRoute';
import { routes } from './routes/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        {routes.map((route) => (
          <BaseRoute
            name={route.name}
            path={route.path}
            component={route.component}
            exact
          />
        ))}
        <ErrorRoute />
      </Switch>
      <Spinner />
    </Provider>
  );
};

export default App;
