import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './contactsReducer';
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
import storage from 'redux-persist/lib/storage';

const phonebookPersistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['token'],
  //   blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(phonebookPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
