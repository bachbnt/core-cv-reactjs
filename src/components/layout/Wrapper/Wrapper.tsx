/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { Spinner } from '@components';
import {
  Component,
  ErrorInfo,
  lazy,
  ReactNode,
  type ComponentType,
  Suspense,
  useMemo,
} from 'react';

type Props = {
  page: string;
};

interface ErrorBoundaryState {
  hasError: boolean;
}

type PageModule = {
  default: ComponentType;
};

class ErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Page load error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

const files = import.meta.glob<PageModule>('../../../pages/*/index.ts');

const Wrapper = (props: Props) => {
  const { page } = props;

  const Component = useMemo(() => {
    const loader = files[`../../../pages/${page}/index.ts`];
    if (!loader) {
      return () => <div>Page not found</div>;
    }
    return lazy(loader);
  }, [page]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner visible />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Wrapper;
