import { configureStore } from "@reduxjs/toolkit"
import appSliceeeee from "./appSlice"

const store = configureStore({
  reducer: {
    app: appSliceeeee,
  }
});


export default store;