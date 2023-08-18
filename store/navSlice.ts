import { createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface NavState {
  visibleAbout: boolean;
  visibleSkill: boolean;
  visibleQualification: boolean;
  visibleTool: boolean;
  visibleContact: boolean;
}

// Initial state
const initialState: NavState = {
  visibleAbout: false,
  visibleSkill: false,
  visibleQualification: false,
  visibleTool: false,
  visibleContact: false,
};

// Actual Slice
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setSectionVisible(state, action) {
      switch (action.payload) {
        case "#about":
          state.visibleAbout = true;
          break;
        case "#skill":
          state.visibleAbout = true;
          state.visibleSkill = true;
          break;
        case "#qualification":
          state.visibleAbout = true;
          state.visibleSkill = true;
          state.visibleQualification = true;
          break;
        case "#tool":
          state.visibleAbout = true;
          state.visibleSkill = true;
          state.visibleQualification = true;
          state.visibleTool = true;
          break;
        case "#contact":
          state.visibleAbout = true;
          state.visibleSkill = true;
          state.visibleQualification = true;
          state.visibleTool = true;
          state.visibleContact = true;
          break;
        default:
          break;
      }
    },
  },
});

export const { setSectionVisible } = navSlice.actions;

export default navSlice.reducer;
