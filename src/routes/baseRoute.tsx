import { lazy, Suspense, useMemo } from 'react';
import { RouteProps } from './routeProps';
import { Route } from 'react-router-dom';
import Spinner from '../components/spinner/spinner';

const BaseRoute = (props: RouteProps) => {
  const { name, path, component, exact = true } = props;
  const Component = useMemo(() => {
    return lazy(() => import(`../pages/${component}`));
  }, [component]);

  return (
    <Route
      key={name}
      exact={exact}
      path={path}
      render={() => (
        <Suspense fallback={<Spinner visible />}>
          <Component />
        </Suspense>
      )}
    />
  );
};

export default BaseRoute;
