import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface NavState {
  visibleAbout: boolean;
  visibleSkill: boolean;
  visibleQualification: boolean;
  visibleTool: boolean;
}

// Initial state
const initialState: NavState = {
  visibleAbout: false,
  visibleSkill: false,
  visibleQualification: false,
  visibleTool: false,
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
        default:
          break;
      }
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.nav,
      };
    },
  },
});

export const { setSectionVisible } = navSlice.actions;

export default navSlice.reducer;
