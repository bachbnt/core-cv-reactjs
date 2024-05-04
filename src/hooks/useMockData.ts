import { FirestoreCollection, FirestoreDocument } from '@core/configs';
import di from '@core/di';
import { hideSpinner, showSpinner } from '@redux/spinnerSlice';
import { useAppDispatch } from '@redux/store';
import MOCK from '@services/mock';
import Service from '@services/service';

const useMockData = () => {
  const dispatch = useAppDispatch();
  const service = di.getSingleton(Service);

  const postMockData = async () => {
    try {
      dispatch(showSpinner());
      await service.postMockData(MOCK.SKILL.data, MOCK.SKILL.id, {
        collection: FirestoreCollection.USER,
        document: FirestoreDocument.SKILL,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hideSpinner());
    }
  };

  return {
    postMockData,
  };
};

export default useMockData;
