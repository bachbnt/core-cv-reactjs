import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { service } from 'src/services/service';

export const useMessage = () => {
  const dispatch = useDispatch();

  const postData = useCallback(
    async (name: string, message: string) => {
      try {
        dispatch({ type: SHOW_SPINNER });
        await service.postMessage({ name, message });
      } catch (error) {
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [dispatch]
  );
  return {
    postData,
  };
};
