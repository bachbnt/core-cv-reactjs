import di from '@core/di';
import { hideSpinner, showSpinner } from '@redux/spinnerSlice';
import { useAppDispatch } from '@redux/store';
import Service from '@services/service';

const useMessage = () => {
  const dispatch = useAppDispatch();
  const service = di.getSingleton(Service);

  const postData = async (name: string, message: string) => {
    try {
      dispatch(showSpinner());
      await service.postMessage({ name, message });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hideSpinner());
    }
  };

  return {
    postData,
  };
};

export default useMessage;
