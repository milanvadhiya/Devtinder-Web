import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionSlice from "./connectionSlice";
import requestSlice from "./requestReducer";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed:feedReducer,
    Connection:connectionSlice,
    request:requestSlice,
  },
});

export default appStore;
