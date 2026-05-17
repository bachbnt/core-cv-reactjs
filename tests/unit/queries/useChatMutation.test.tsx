/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { renderHook } from '@testing-library/react';
import useChatMutation from '@queries/useChatMutation';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createQueryWrapper } from '../helpers/queryWrapper';

const sendChatMessageMock = vi.fn();

vi.mock('@services/service', () => ({
  sendChatMessage: (...args: any[]) => sendChatMessageMock(...args),
}));

describe('useChatMutation', () => {
  beforeEach(() => {
    sendChatMessageMock.mockReset();
  });

  it('passes provider, messages and system prompt to the chat service', async () => {
    sendChatMessageMock.mockResolvedValueOnce('Hello Bach');
    const { Wrapper } = createQueryWrapper();
    const { result } = renderHook(() => useChatMutation(), {
      wrapper: Wrapper,
    });
    const messages = [{ id: '1', role: 'user' as const, content: 'Hi' }];

    await expect(
      result.current.mutateAsync({
        provider: 'openai',
        messages,
        systemPrompt: 'Portfolio assistant',
      }),
    ).resolves.toBe('Hello Bach');

    expect(sendChatMessageMock).toHaveBeenCalledWith(
      'openai',
      messages,
      'Portfolio assistant',
    );
  });

  it('surfaces chat service failures', async () => {
    sendChatMessageMock.mockRejectedValueOnce(new Error('rate_limit'));
    const { Wrapper } = createQueryWrapper();
    const { result } = renderHook(() => useChatMutation(), {
      wrapper: Wrapper,
    });

    await expect(
      result.current.mutateAsync({
        provider: 'gemini',
        messages: [{ id: '1', role: 'user', content: 'Hi' }],
        systemPrompt: 'Portfolio assistant',
      }),
    ).rejects.toThrow('rate_limit');
  });
});
