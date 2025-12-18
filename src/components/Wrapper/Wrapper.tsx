import { Spinner } from '@components';
import { lazy, Suspense, useMemo } from 'react';
import Props from './props';

const files = import.meta.glob('../../pages/*/index.ts');

const Wrapper = (props: Props) => {
  const { page } = props;

  const Component = useMemo(() => {
    const loader = files[`../../pages/${page}/index.ts`];
    if (!loader) {
      return () => <div>Page not found</div>;
    }
    return lazy(loader as any);
  }, [page]);

  return (
    <Suspense fallback={<Spinner visible />}>
      <Component />
    </Suspense>
  );
};

export default Wrapper;
