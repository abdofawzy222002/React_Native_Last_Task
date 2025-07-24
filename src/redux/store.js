
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favouriteSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;