import { lazy, Suspense, useMemo } from 'react';
import { Route } from 'react-router-dom';
import Spinner from 'src/components/spinner/spinner';
import { RouteName } from './routeName';

const ErrorRoute = () => {
  const Component = useMemo(() => {
    return lazy(() => import(`../pages/error`));
  }, []);

  return (
    <Route
      key={RouteName.ERROR}
      render={() => (
        <Suspense fallback={<Spinner visible />}>
          <Component />
        </Suspense>
      )}
    />
  );
};

export default ErrorRoute;
