import { FirestoreDocument } from '@core/configs';
import { User } from '@models/user';
import { hideSpinner, showSpinner } from '@redux/spinnerSlice';
import { useAppDispatch } from '@redux/store';
import { setUser } from '@redux/userSlice';
import { service } from '@services/service';
import { capitalize } from 'lodash';
import { useCallback } from 'react';

const useUser = () => {
  const dispatch = useAppDispatch();

  const getData = useCallback(async () => {
    const documents = Object.values(FirestoreDocument);

    try {
      dispatch(showSpinner());
      const user: User = (
        await Promise.all(
          documents.map((document) => {
            return (
              (service as any)[`get${capitalize(document)}`] as Function
            )?.call(null);
          })
        )
      ).reduce((total, value, index) => {
        total[documents[index]] = value;
        return total;
      }, {});
      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hideSpinner());
    }
  }, [dispatch]);

  return {
    getData,
  };
};

export default useUser;
