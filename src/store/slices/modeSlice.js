// src/features/counter/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'dark',
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    updateMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {updateMode } = modeSlice.actions;

export default modeSlice.reducer;
