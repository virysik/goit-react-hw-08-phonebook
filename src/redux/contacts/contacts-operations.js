import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  removeContactById,
  updateContactById,
} from '../../services/contacts-api'
import axios from 'axios'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue()
    }

    token.set(persistedToken)
    try {
      const { data } = await axios.get('/contacts')

      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue()
    }

    token.set(persistedToken)
    try {
      const { data } = await axios.post('/contacts', contact)
      return data
    } catch (error) {
      console.log(error)
    }
  },
)

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    try {
      const contacts = await removeContactById(id)
      return contacts
    } catch (error) {
      console.log(error)
    }
  },
)

export const fetchUpdateContact = createAsyncThunk(
  'contacts/updateContact',
  async (id) => {
    try {
      const contacts = await updateContactById(id)
      return contacts
    } catch (error) {
      console.log(error)
    }
  },
)
