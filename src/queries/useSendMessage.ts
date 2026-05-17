/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { useMutation } from '@tanstack/react-query';
import { postMessage } from '@services/service';

interface SendMessagePayload {
  name: string;
  message: string;
}

const useSendMessage = () =>
  useMutation({
    mutationFn: ({ name, message }: SendMessagePayload) =>
      postMessage({ name, message }),
  });

export default useSendMessage;
