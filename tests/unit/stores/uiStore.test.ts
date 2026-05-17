/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { describe, expect, it, beforeEach } from 'vitest';
import { useUiStore } from '@stores/uiStore';

describe('uiStore', () => {
  beforeEach(() => {
    useUiStore.getState().resetSpinner();
  });

  it('increments and decrements via reference counting', () => {
    useUiStore.getState().showSpinner();
    useUiStore.getState().showSpinner();
    expect(useUiStore.getState().spinnerCount).toBe(2);
    useUiStore.getState().hideSpinner();
    expect(useUiStore.getState().spinnerCount).toBe(1);
  });

  it('never goes below zero', () => {
    useUiStore.getState().hideSpinner();
    useUiStore.getState().hideSpinner();
    expect(useUiStore.getState().spinnerCount).toBe(0);
  });

  it('resetSpinner clears state', () => {
    useUiStore.getState().showSpinner();
    useUiStore.getState().showSpinner();
    useUiStore.getState().resetSpinner();
    expect(useUiStore.getState().spinnerCount).toBe(0);
  });
});
