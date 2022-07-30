import { configureStore } from '@reduxjs/toolkit';
import { featuresApi } from '../services/features';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';
import taskReducer from './slices/taskSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    [featuresApi.reducerPath]: featuresApi.reducer,
    tasks: taskReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(featuresApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
