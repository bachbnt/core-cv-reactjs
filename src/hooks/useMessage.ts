import { useCallback } from 'react';
import { hide, show } from 'src/redux/spinnerSlice';
import { useAppDispatch } from 'src/redux/store';
import { service } from 'src/services/service';

export const useMessage = () => {
  const dispatch = useAppDispatch();

  const postData = useCallback(
    async (name: string, message: string) => {
      try {
        dispatch(show());
        await service.postMessage({ name, message });
      } catch (error) {
      } finally {
        dispatch(hide());
      }
    },
    [dispatch]
  );
  return {
    postData,
  };
};
