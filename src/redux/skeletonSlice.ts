import { createSlice } from '@reduxjs/toolkit';

interface SkeletonState {
  visible: boolean;
}

const initialState: SkeletonState = {
  visible: false,
};

export const skeletonSlice = createSlice({
  name: 'skeletonSlice',
  initialState,
  reducers: {
    showSkeleton: (state: SkeletonState) => {
      state.visible = true;
    },
    hideSkeleton: (state: SkeletonState) => {
      state.visible = false;
    },
  },
});

export const { showSkeleton, hideSkeleton } = skeletonSlice.actions;
export default skeletonSlice.reducer;
