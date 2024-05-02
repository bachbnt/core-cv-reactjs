import { FirestoreCollection, FirestoreDocument } from '@core/configs';
import di from '@core/di';
import { hideSpinner, showSpinner } from '@redux/spinnerSlice';
import { useAppDispatch } from '@redux/store';
import MOCK from '@services/mock';
import Service from '@services/service';
import { useCallback } from 'react';

const service = di.getSingleton(Service);

const useMockData = () => {
  const dispatch = useAppDispatch();

  const postMockData = useCallback(async () => {
    try {
      dispatch(showSpinner());
      await service.postMockData(MOCK.SKILL.data, MOCK.SKILL.id, {
        collection: FirestoreCollection.USER,
        document: FirestoreDocument.SKILL,
      });
    } catch (error) {
    } finally {
      dispatch(hideSpinner());
    }
  }, [dispatch]);

  return {
    postMockData,
  };
};

export default useMockData;
