import { lazy, Suspense, useMemo } from 'react';
import { Route } from 'react-router-dom';
import Spinner from 'src/components/spinner/spinner';
import { RouteName } from './routeName';

const NotFoundRoute = () => {
  const Component = useMemo(() => {
    return lazy(() => import(`src/pages/notFound`));
  }, []);

  return (
    <Route
      key={RouteName.NOT_FOUND}
      render={() => (
        <Suspense fallback={<Spinner visible />}>
          <Component />
        </Suspense>
      )}
    />
  );
};

export default NotFoundRoute;
