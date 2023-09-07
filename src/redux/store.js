import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { advertsReducer } from './adverts/advertsSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const advertPersistConfig = {
  key: 'advert',
  storage,
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(advertPersistConfig, advertsReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
