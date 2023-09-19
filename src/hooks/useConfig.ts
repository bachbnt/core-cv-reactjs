import di from '@core/di';
import { Config } from '@models/config';
import { setConfig } from '@redux/configSlice';
import { hideSkeleton, showSkeleton } from '@redux/skeletonSlice';
import { useAppDispatch } from '@redux/store';
import Service from '@services/service';
import { useCallback } from 'react';

const useConfig = () => {
  const dispatch = useAppDispatch();
  const service = di.getSingleton(Service);

  const updateDocument = useCallback(({ icon, title }: any) => {
    (document.querySelector('link[rel="icon"]') as any).href = icon;
    document.title = title;
  }, []);

  const getData = useCallback(async () => {
    try {
      dispatch(showSkeleton());
      const config: Config = await service.getConfig();
      updateDocument({ icon: config?.appIcon, title: config?.appTitle });
      dispatch(setConfig(config));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hideSkeleton());
    }
  }, [dispatch, updateDocument, service]);

  return {
    getData,
  };
};

export default useConfig;
