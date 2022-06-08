import { createSlice } from "@reduxjs/toolkit";

export const directorySlice = createSlice({
  name: 'nightmode',
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload
    },
  }
})

export const { setDarkMode } = directorySlice.actions
export default directorySlice.reducer