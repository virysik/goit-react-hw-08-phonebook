import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchContactsApi,
  fetchPostNewContact,
  removeContactById,
  updateContactById,
} from '../../services/contacts-api'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContactsApi()
      return contacts
    } catch (error) {
      return rejectWithValue()
    }
  },
)

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await fetchPostNewContact(contact)
      return contacts
    } catch (error) {
      return rejectWithValue()
    }
  },
)

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await removeContactById(id)
      return contacts
    } catch (error) {
      return rejectWithValue()
    }
  },
)

export const fetchUpdateContact = createAsyncThunk(
  'contacts/updateContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await updateContactById(id)
      return contacts
    } catch (error) {
      return rejectWithValue()
    }
  },
)
