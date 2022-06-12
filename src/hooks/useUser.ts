import { useCallback } from 'react';
import _ from 'lodash';
import { User } from 'src/models/user';
import { setUser } from 'src/redux/userSlice';
import { show, hide } from 'src/redux/spinnerSlice';
import { useAppDispatch } from 'src/redux/store';
import { service } from 'src/services/service';
import { firestoreDocument } from 'src/constants/configs';

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
      dispatch(show());
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
      dispatch(hide());
    }
  }, [dispatch]);

  return {
    getData,
  };
};
