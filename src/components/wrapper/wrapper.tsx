import { lazy, Suspense, useMemo } from 'react';
import { Spinner } from 'src/components';
import Props from './props';
import useStyles from './styles';

const Wrapper = (props: Props) => {
  const { page } = props;
  const classes = useStyles();

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
