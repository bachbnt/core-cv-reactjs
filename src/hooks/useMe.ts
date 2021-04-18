import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { SET_USER } from '../redux/user/userAction';
import { RoutePath } from '../routes/routePath';
import { apiService } from '../services/apiService';

export const useMe = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getData = useCallback(async () => {
    const response = await apiService.getMe();
    if (response.status === 200) {
      dispatch({
        type: SET_USER,
        payload: response.data,
      });
    } else {
      history.push(RoutePath.ERROR);
    }
  }, [dispatch, history]);

  return {
    getData,
  };
};
