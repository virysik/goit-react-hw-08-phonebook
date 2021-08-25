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
  isDeleting: false,
  error: null,
}

const error = 'Error'
const loading = 'Loading'

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
      console.log(action)
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
      state.error = null
      state.status = null
      state.isLoading = false
    },
    [fetchAddContact.pending]: (state) => {
      state.error = null
      state.status = loading
      state.isLoading = true
    },
    [fetchAddContact.rejected]: (state) => {
      state.error = error
      state.status = null
      state.isLoading = false
    },
    [fetchDeleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.status = null
      state.error = null
      state.isDeleting = false
    },
    [fetchDeleteContact.pending]: (state) => {
      state.status = loading
      state.error = null
      state.isDeleting = true
    },
    [fetchDeleteContact.rejected]: (state) => {
      state.status = null
      state.error = error
      state.isDeleting = false
    },
  },
})

export const { changeFilter } = contactsSlice.actions
export default contactsSlice.reducer
