import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const exists = state.find((item) => item.id === movie.id);
      if (exists) {
        return state.filter((item) => item.id !== movie.id);
      } else {
        state.push(movie);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;