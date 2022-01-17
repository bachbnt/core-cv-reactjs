import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import Spinner from 'src/components/spinner/spinner';
import { store } from 'src/redux/store';
import BaseRoute from 'src/routes/baseRoute';
import ErrorRoute from 'src/routes/errorRoute';
import { routes } from 'src/routes/routes';

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
