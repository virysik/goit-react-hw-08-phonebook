import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchContactsApi,
  fetchPostNewContact,
  removeContactById,
  updateContactById,
} from '../../services/contacts-api'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const contacts = await fetchContactsApi()
      return contacts
    } catch (error) {
      console.log(error)
    }
  },
)

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    try {
      const contacts = await fetchPostNewContact(contact)
      return contacts
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
