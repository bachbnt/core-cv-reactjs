import { createSlice } from '@reduxjs/toolkit';

interface SpinnerState {
  visible: boolean;
}

const initialState: SpinnerState = {
  visible: false,
};

export const spinnerSlice = createSlice({
  name: 'spinnerSlice',
  initialState,
  reducers: {
    show: (state: SpinnerState) => {
      state.visible = true;
    },
    hide: (state: SpinnerState) => {
      state.visible = false;
    },
  },
});

export const { show, hide } = spinnerSlice.actions;
export default spinnerSlice.reducer;
