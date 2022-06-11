import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { User } from 'src/models/user';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerAction';
import { SET_USER } from 'src/redux/user/userAction';
import { service } from 'src/services/service';
import { firestoreDocument } from 'src/constants/configs';

export const useUser = () => {
  const dispatch = useDispatch();

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
      dispatch({ type: SHOW_SPINNER });
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
      dispatch({
        type: SET_USER,
        payload: user,
      });
    } catch (error) {
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [dispatch]);

  return {
    getData,
  };
};
