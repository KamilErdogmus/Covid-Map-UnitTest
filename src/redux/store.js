import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./covidSlice.js";

export default configureStore({
  reducer: covidReducer,
});
