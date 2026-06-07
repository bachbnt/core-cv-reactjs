/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { FirestoreCollection, FirestoreDocument } from '@core/firestore';
import Constant from '@core/constants';
import { useMutation } from '@tanstack/react-query';
import { postMockData } from '@services/service';

const usePostMockData = () =>
  useMutation({
    mutationFn: async () => {
      if (Constant.EDIT_MODE !== 'true') return;
      const { default: MOCK } = await import('@services/mock');
      await postMockData(MOCK.SKILL.data, MOCK.SKILL.id, {
        collection: FirestoreCollection.USER,
        document: FirestoreDocument.SKILL,
      });
    },
  });

export default usePostMockData;
