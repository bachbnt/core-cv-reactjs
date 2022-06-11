import { Switch } from 'react-router';
import BaseRoute from './baseRoute';
import NotFoundRoute from './notFoundRoute';
import { routes } from './routes';

const MainRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <BaseRoute
          key={route.name}
          name={route.name}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
      <NotFoundRoute />
    </Switch>
  );
};

export default MainRouter;
