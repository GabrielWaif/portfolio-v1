import { createSlice } from "@reduxjs/toolkit";

type scroll = {
  homeHeight: number;
  projectsHeight: number;
  aboutMeHeight: number;
};

const initialState: scroll = {
  homeHeight: 0,
  projectsHeight: 0,
  aboutMeHeight: 0,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setHome(state, actions) {
      state.homeHeight = actions.payload;
      return state;
    },
    setAbout(state, actions) {
      state.aboutMeHeight = actions.payload;
      return state;
    },
    setProjects(state, actions) {
      state.projectsHeight = actions.payload;
      return state;
    },
  },
});

export const scrollReducer = scrollSlice.reducer;
export const scrollActions = scrollSlice.actions;
