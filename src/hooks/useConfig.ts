import di from '@core/di';
import { setConfig } from '@redux/configSlice';
import { hideSpinner, showSpinner } from '@redux/spinnerSlice';
import { useAppDispatch } from '@redux/store';
import Service from '@services/service';
import { useCallback } from 'react';

const useConfig = () => {
  const dispatch = useAppDispatch();
  const service = di.getSingleton(Service);

  const updateDocument = useCallback(
    ({ icon, title }: { icon: string; title: string }) => {
      (document.querySelector('link[rel="icon"]') as HTMLLinkElement).href =
        icon;
      document.title = title;
    },
    []
  );

  const getData = useCallback(async () => {
    try {
      dispatch(showSpinner());
      const config = await service.getConfig();
      updateDocument({ icon: config?.appIcon, title: config?.appTitle });
      dispatch(setConfig(config));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hideSpinner());
    }
  }, [dispatch, updateDocument, service]);

  return {
    getData,
  };
};

export default useConfig;
