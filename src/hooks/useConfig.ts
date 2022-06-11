import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Config } from 'src/models/config';
import { SET_CONFIG } from 'src/redux/config/configAction';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { RoutePath } from 'src/routes/routePath';
import { service } from 'src/services/service';

export const useConfig = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const getData = useCallback(async () => {
    dispatch({ type: SHOW_SPINNER });
    try {
      const config: Config = await service.getConfig();
      dispatch({
        type: SET_CONFIG,
        payload: config,
      });
    } catch (error) {
      // navigate(RoutePath.ERROR);
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [dispatch]);

  return {
    getData,
  };
};
