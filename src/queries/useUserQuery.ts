/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { User } from '@models/user';
import { useQuery } from '@tanstack/react-query';
import {
  getCertificate,
  getContact,
  getEducation,
  getExperience,
  getPayment,
  getProfile,
  getProject,
  getService,
  getSkill,
} from '@services/service';
import { queryKeys } from './queryKeys';

const useUserQuery = () =>
  useQuery<User>({
    queryKey: queryKeys.user,
    queryFn: async () => {
      const [
        profile,
        education,
        experience,
        skill,
        project,
        serviceList,
        contact,
        payment,
        certificate,
      ] = await Promise.all([
        getProfile(),
        getEducation(),
        getExperience(),
        getSkill(),
        getProject(),
        getService(),
        getContact(),
        getPayment(),
        getCertificate(),
      ]);
      return {
        profile,
        education,
        experience,
        skill,
        project,
        service: serviceList,
        contact,
        payment,
        certificate,
      } as User;
    },
  });

export default useUserQuery;
