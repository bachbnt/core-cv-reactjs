/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import Constant from '@core/constants';
import { useQuery } from '@tanstack/react-query';
import { getConfig } from '@services/service';
import { useEffect } from 'react';
import { queryKeys } from './queryKeys';

const applyToDocument = (
  config: { appIcon?: string; appTitle?: string } | undefined,
) => {
  if (!config) return;
  const link = document.querySelector(
    'link[rel="icon"]',
  ) as HTMLLinkElement | null;
  if (link && config.appIcon) link.href = config.appIcon;
  if (config.appTitle) document.title = config.appTitle;
};

const useConfigQuery = () => {
  const query = useQuery({
    queryKey: queryKeys.config,
    queryFn: getConfig,
  });

  useEffect(() => {
    applyToDocument(query.data ?? undefined);
  }, [query.data]);

  useEffect(() => {
    if (!query.data) return;
    const img = new Image();
    img.onload = () => {
      document.body.style.backgroundImage = `url('${Constant.DEFAULT_BACKGROUND_IMAGE}')`;
    };
    img.src = Constant.DEFAULT_BACKGROUND_IMAGE;
  }, [query.data]);

  return query;
};

export default useConfigQuery;
