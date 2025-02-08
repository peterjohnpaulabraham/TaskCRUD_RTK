import contactsSlice from "../slices/contacts";
import usersSlice from "../slices/users";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

let allReducers = {
  contacts: contactsSlice.reducer,
  users: usersSlice.reducer
};

//logger
var logger = createLogger();

let store = configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => [ ...getDefaultMiddleware(), logger]
});

export default store;
