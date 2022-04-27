import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Config } from 'src/models/config';
import { SET_CONFIG } from 'src/redux/config/configAction';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { RoutePath } from 'src/routes/routePath';
import { service } from 'src/services/service';

export const useConfig = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getData = useCallback(async () => {
    dispatch({ type: SHOW_SPINNER });
    try {
      const config: Config = await service.getConfig();
      dispatch({
        type: SET_CONFIG,
        payload: config,
      });
    } catch (error) {
      history.push(RoutePath.ERROR);
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [dispatch, history]);

  return {
    getData,
  };
};
