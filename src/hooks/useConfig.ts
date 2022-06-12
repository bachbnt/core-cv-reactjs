import { useCallback } from 'react';
import { Config } from 'src/models/config';
import { setConfig } from 'src/redux/configSlice';
import { show, hide } from 'src/redux/spinnerSlice';
import { useAppDispatch } from 'src/redux/store';
import { service } from 'src/services/service';

export const useConfig = () => {
  const dispatch = useAppDispatch();

  const getData = useCallback(async () => {
    dispatch(show());
    try {
      const config: Config = await service.getConfig();
      dispatch(setConfig(config));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hide());
    }
  }, [dispatch]);

  return {
    getData,
  };
};
