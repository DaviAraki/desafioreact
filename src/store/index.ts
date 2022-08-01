import { configureStore } from '@reduxjs/toolkit';
import { featuresApi } from '../services/tasks';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';
import taskReducer from './slices/taskSlice';
import emailReducer from './slices/emailSlice';
import { emailsApi } from '../services/emails';

const reducer = {
  theme: themeReducer,
  user: userReducer,
  [featuresApi.reducerPath]: featuresApi.reducer,
  tasks: taskReducer,
  [emailsApi.reducerPath]: emailsApi.reducer,
  emails: emailReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(featuresApi.middleware)
      .concat(emailsApi.middleware),
});

export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({ reducer, preloadedState });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
