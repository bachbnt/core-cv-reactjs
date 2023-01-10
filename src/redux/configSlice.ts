import { Config } from '@models/config';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ConfigState {
  config: Config | null;
}

const initialState: ConfigState = { config: null };

export const configSlice = createSlice({
  name: 'configSlice',
  initialState,
  reducers: {
    setConfig: (state: ConfigState, action: PayloadAction<Config>) => {
      state.config = action.payload;
    },
  },
});

export const { setConfig } = configSlice.actions;
export default configSlice.reducer;
