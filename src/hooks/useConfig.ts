import { useCallback } from 'react';
import { Config } from 'src/models/config';
import { setConfig } from 'src/redux/configSlice';
import { hideSpinner, showSpinner } from 'src/redux/spinnerSlice';
import { useAppDispatch } from 'src/redux/store';
import { service } from 'src/services/service';

export const useConfig = () => {
  const dispatch = useAppDispatch();

  const updateDocument = useCallback(({ icon, title }: any) => {
    (document.querySelector('link[rel="icon"]') as any).href = icon;
    document.title = title;
  }, []);

  const getData = useCallback(async () => {
    try {
      dispatch(showSpinner());
      const config: Config = await service.getConfig();
      updateDocument({ icon: config?.appIcon, title: config?.appTitle });
      dispatch(setConfig(config));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hideSpinner());
    }
  }, [dispatch, updateDocument]);

  return {
    getData,
  };
};
