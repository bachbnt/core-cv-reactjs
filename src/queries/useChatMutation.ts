/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { ChatMessage, ChatProvider } from '@models/chat';
import { useMutation } from '@tanstack/react-query';
import { sendChatMessage } from '@services/service';

interface ChatPayload {
  provider: ChatProvider;
  messages: ChatMessage[];
  systemPrompt: string;
}

const useChatMutation = () =>
  useMutation<string, Error, ChatPayload>({
    mutationFn: ({ provider, messages, systemPrompt }) =>
      sendChatMessage(provider, messages, systemPrompt),
  });

export default useChatMutation;
