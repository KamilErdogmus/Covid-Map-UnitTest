import { createSlice } from "@reduxjs/toolkit";
import getData from "./actions.js";

const initialState = {
  isLoading: false,
  isError: false,
  data: null,
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getData.rejected, (state, { error }) => {
      state.isError = error.message;
      state.isLoading = false;
    });
    builder.addCase(getData.fulfilled, (state, { payload }) => {
      state.isError = null;
      state.isLoading = false;
      state.data = payload;
    });
  },
});

export default covidSlice.reducer;
