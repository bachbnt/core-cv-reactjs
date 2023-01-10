import { hideSpinner, showSpinner } from '@redux/spinnerSlice';
import { useAppDispatch } from '@redux/store';
import { service } from '@services/service';
import { useCallback } from 'react';

const useMessage = () => {
  const dispatch = useAppDispatch();

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
    [dispatch]
  );
  return {
    postData,
  };
};

export default useMessage;
