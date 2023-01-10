import { Spinner } from '@components';
import { lazy, Suspense, useMemo } from 'react';
import Props from './props';
import useStyles from './styles';

const Wrapper = (props: Props) => {
  const { page } = props;
  const classes = useStyles();

  const Component = useMemo(() => {
    return lazy(() => import(`@pages/${page}`));
  }, [page]);

  return (
    <Suspense fallback={<Spinner visible />}>
      <Component />
    </Suspense>
  );
};

export default Wrapper;
