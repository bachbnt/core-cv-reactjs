/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { createQueryWrapper } from '../helpers/queryWrapper';

const postMessageMock = vi.fn();

vi.mock('@services/service', () => ({
  postMessage: (...args: any[]) => postMessageMock(...args),
}));

import useSendMessage from '@queries/useSendMessage';

describe('useSendMessage', () => {
  beforeEach(() => {
    postMessageMock.mockReset();
  });

  it('invokes postMessage with the supplied payload', async () => {
    postMessageMock.mockResolvedValueOnce(undefined);
    const { Wrapper } = createQueryWrapper();
    const { result } = renderHook(() => useSendMessage(), { wrapper: Wrapper });

    await result.current.mutateAsync({ name: 'Bach', message: 'Hello' });

    expect(postMessageMock).toHaveBeenCalledWith({
      name: 'Bach',
      message: 'Hello',
    });
    await vi.waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it('surfaces errors back to the caller', async () => {
    postMessageMock.mockRejectedValueOnce(new Error('network down'));
    const { Wrapper } = createQueryWrapper();
    const { result } = renderHook(() => useSendMessage(), { wrapper: Wrapper });

    await expect(
      result.current.mutateAsync({ name: 'x', message: 'y' }),
    ).rejects.toThrow('network down');
  });
});
