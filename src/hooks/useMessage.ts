import { useCallback } from 'react';
import { showSpinner, hideSpinner } from 'src/redux/spinnerSlice';
import { useAppDispatch } from 'src/redux/store';
import { service } from 'src/services/service';

export const useMessage = () => {
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
