import { lazy, Suspense, useMemo } from 'react';
import { Route } from 'react-router-dom';
import Spinner from 'src/components/spinner/spinner';
import { RouteProps } from './routeProps';

const BaseRoute = (props: RouteProps) => {
  const { name, path, component, exact } = props;
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
