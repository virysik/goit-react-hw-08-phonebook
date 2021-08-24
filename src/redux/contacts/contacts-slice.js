import { createSlice } from '@reduxjs/toolkit'
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations'

const initialState = {
  items: [],
  filter: '',
  status: null,
  isLoading: false,
  error: null,
}

const loading = 'Loading'
const error = 'Error'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload
    },
  },

  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = null
      state.error = null
    },
    [fetchContacts.pending]: (state) => {
      state.status = loading
      state.error = null
    },
    [fetchContacts.rejected]: (state) => {
      state.status = null
      state.error = error
    },
    [fetchAddContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload]
      state.status = null
      state.error = null
      state.isLoading = false
    },
    [fetchAddContact.pending]: (state) => {
      state.status = loading
      state.error = null
      state.isLoading = true
    },
    [fetchAddContact.rejected]: (state) => {
      state.status = null
      state.error = error
      state.isLoading = false
    },
    [fetchDeleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.status = null
      state.error = null
    },
    [fetchDeleteContact.pending]: (state) => {
      state.status = loading
      state.error = null
    },
    [fetchDeleteContact.rejected]: (state) => {
      state.status = null
      state.error = error
    },
  },
})

export const { changeFilter } = contactsSlice.actions
export default contactsSlice.reducer
