import { configureStore } from '@reduxjs/toolkit'
import { contactsApi } from 'redux/contact-api'
import logger from 'redux-logger'
import filterReducer from './phonebook/phonebook-reducer'
import thunk from 'redux-thunk'

let middleware = [thunk, contactsApi.middleware]
if (process.env.NODE_ENV === `development`) {
  middleware.push(logger)
}

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
})

export default store
