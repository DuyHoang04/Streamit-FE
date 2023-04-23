import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  genresList: [],
  error: null,
};

export const genresReducer = createSlice({
  name: "genres",
  initialState,
  getGenresRequest(state) {
    state.isFetching = true;
  },
  getGenresSuccess(state, action) {
    (state.isFetching = false), (state.categoryList = action.payload);
  },
  getGenresFailure(state, action) {
    (state.isFetching = false), (state.error = action.payload);
  },
});

// Action creators are generated for each case reducer function
export const {} = genresReducer.actions;

export default genresReducer.reducer;
