import { configureStore } from "@reduxjs/toolkit";
import framesReducer from "./infoSlice";

const store = configureStore({
  reducer: {
    frames: framesReducer,
  },
});

export default store;
