import { configureStore } from "@reduxjs/toolkit";
import { lenguageReducer } from "./lenguage-slice";
import { scrollReducer } from "./scroll-slice";

const store = configureStore({
  reducer: {
    lenguage: lenguageReducer,
    scroll: scrollReducer
  },
});

export default store;

export type RootStore = ReturnType<typeof store.getState>;
