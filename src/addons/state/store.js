import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "addons/state/reducer";

export const store = configureStore({
  reducer:{
    theme: themeReducer,
  }
});