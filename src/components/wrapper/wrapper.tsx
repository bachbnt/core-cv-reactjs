import { lazy, Suspense, useMemo } from 'react';
import Spinner from 'src/components/spinner/spinner';
import Props from './props';
import classes from './styles';

const Wrapper = (props: Props) => {
  const { page } = props;

  const Component = useMemo(() => {
    return lazy(() => import(`src/pages/${page}`));
  }, [page]);

  return (
    <Suspense fallback={<Spinner visible />}>
      <Component />
    </Suspense>
  );
};

export default Wrapper;
