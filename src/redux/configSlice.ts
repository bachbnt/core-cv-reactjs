import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Config } from 'src/models/config';

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
