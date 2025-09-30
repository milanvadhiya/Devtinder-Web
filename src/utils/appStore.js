import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionSlice from "./connectionSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed:feedReducer,
    Connection:connectionSlice,
  },
});

export default appStore;
