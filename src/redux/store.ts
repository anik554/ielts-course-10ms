import { configureStore } from "@reduxjs/toolkit";
import {ieltsCourseApi} from "./api/ieltsCourseApi"

export const store = configureStore({
  reducer: {
    [ieltsCourseApi.reducerPath]: ieltsCourseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ieltsCourseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
