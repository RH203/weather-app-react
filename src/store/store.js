import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../reducers/reducers";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store