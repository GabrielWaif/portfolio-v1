import { createSlice } from "@reduxjs/toolkit";
import { Project } from "../type/types";
import portuguese from "./lenguages/portuguese.json";
import english from "./lenguages/english.json";

const lenguageSlice = createSlice({
  name: "lenguage",
  initialState: english,
  reducers: {
    change(state) {
      if (state.small === "pt_br") {
        return english;
      }
      if (state.small === "eng") {
        return portuguese;
      }
    },
  },
});

export const lenguageReducer = lenguageSlice.reducer;
export const lenguageActions = lenguageSlice.actions;
