/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { create } from 'zustand';

interface UiState {
  spinnerCount: number;
  showSpinner: () => void;
  hideSpinner: () => void;
  resetSpinner: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  spinnerCount: 0,
  showSpinner: () => set((state) => ({ spinnerCount: state.spinnerCount + 1 })),
  hideSpinner: () =>
    set((state) => ({ spinnerCount: Math.max(0, state.spinnerCount - 1) })),
  resetSpinner: () => set({ spinnerCount: 0 }),
}));

export const useSpinnerVisible = () =>
  useUiStore((state) => state.spinnerCount > 0);
