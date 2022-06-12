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
    showSpinner: (state: SpinnerState) => {
      state.visible = true;
    },
    hideSpinner: (state: SpinnerState) => {
      state.visible = false;
    },
  },
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;
export default spinnerSlice.reducer;
