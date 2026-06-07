/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { getCv } from '@services/service';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from './queryKeys';

const useCvQuery = () =>
  useQuery({
    queryKey: queryKeys.cv,
    queryFn: getCv,
    refetchOnMount: 'always',
    staleTime: 0,
  });

export default useCvQuery;
