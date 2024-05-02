import { FirestoreDocument } from '@core/configs';
import di from '@core/di';
import { User } from '@models/user';
import { hideSpinner, showSpinner } from '@redux/spinnerSlice';
import { useAppDispatch } from '@redux/store';
import { setUser } from '@redux/userSlice';
import Service from '@services/service';
import capitalize from 'lodash/capitalize';
import { useCallback } from 'react';

const useUser = () => {
  const dispatch = useAppDispatch();
  const service = di.getSingleton(Service);

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
  }, [dispatch, service]);

  return {
    getData,
  };
};

export default useUser;
