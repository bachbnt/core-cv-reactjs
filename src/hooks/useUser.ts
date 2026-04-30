import di from '@core/di';
import { User } from '@models/user';
import { hideSpinner, showSpinner } from '@redux/spinnerSlice';
import { useAppDispatch } from '@redux/store';
import { setUser } from '@redux/userSlice';
import Service from '@services/service';
import { useCallback } from 'react';

const useUser = () => {
  const dispatch = useAppDispatch();
  const service = di.getSingleton(Service);

  const getData = useCallback(
    async (silent = false) => {
      try {
        if (!silent) dispatch(showSpinner());
        const [
          profile,
          education,
          experience,
          skill,
          project,
          serviceResult,
          contact,
          payment,
          certificate,
        ] = await Promise.all([
          service.getProfile(),
          service.getEducation(),
          service.getExperience(),
          service.getSkill(),
          service.getProject(),
          service.getService(),
          service.getContact(),
          service.getPayment(),
          service.getCertificate(),
        ]);

        const user: User = {
          certificate,
          profile,
          education,
          experience,
          skill,
          project,
          service: serviceResult,
          contact,
          payment,
        };

        dispatch(setUser(user));
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        if (!silent) dispatch(hideSpinner());
      }
    },
    [dispatch, service],
  );

  return {
    getData,
  };
};

export default useUser;
