import { useCallback } from 'react';
import _ from 'lodash';
import { firestoreDocument } from 'src/constants/configs';
import { User } from 'src/models/user';
import { setUser } from 'src/redux/userSlice';
import { showSpinner, hideSpinner } from 'src/redux/spinnerSlice';
import { useAppDispatch } from 'src/redux/store';
import { service } from 'src/services/service';

export const useUser = () => {
  const dispatch = useAppDispatch();

  const getData = useCallback(async () => {
    const documents = [
      firestoreDocument.contact,
      firestoreDocument.education,
      firestoreDocument.experience,
      firestoreDocument.profile,
      firestoreDocument.project,
      firestoreDocument.service,
      firestoreDocument.skill,
    ];

    try {
      dispatch(showSpinner());
      const user: User = (
        await Promise.all(
          documents.map((document) => {
            return (
              (service as any)[`get${_.capitalize(document)}`] as Function
            ).call(null);
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
