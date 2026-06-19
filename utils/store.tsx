import { configureStore } from "@reduxjs/toolkit"
import appSliceeeee from "./appSlice"

const store = configureStore({
  reducer: {
    app: appSliceeeee,
  }
});

//bridges th egap between redux and TS
export type RootState = ReturnType<typeof store.getState>

export default store;