import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import authReducer from './auth/auth-slice'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import contactsReducer from './contacts/contacts-slice'
import thunk from 'redux-thunk'

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  thunk,
]
if (process.env.NODE_ENV === `development`) {
  middleware.push(logger)
}
const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
}

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
export default store
