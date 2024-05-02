import di from '@core/di';
import { hideSpinner, showSpinner } from '@redux/spinnerSlice';
import { useAppDispatch } from '@redux/store';
import Service from '@services/service';
import { useCallback } from 'react';

const useMessage = () => {
  const dispatch = useAppDispatch();
  const service = di.getSingleton(Service);

  const postData = useCallback(
    async (name: string, message: string) => {
      try {
        dispatch(showSpinner());
        await service.postMessage({ name, message });
      } catch (error) {
      } finally {
        dispatch(hideSpinner());
      }
    },
    [dispatch, service]
  );
  return {
    postData,
  };
};

export default useMessage;
