import axios from 'axios'

export const fetchContactsApi = async () => {
  const { data } = await axios.get('/contacts')
  return data
}

export const fetchPostNewContact = async (contact) => {
  const { data } = await axios.post('/contacts', contact)
  return data
}

export const removeContactById = async (id) => {
  await axios.delete(`/contacts/${id}`)
  return id
}

export const updateContactById = async (id) => {
  const { data } = await axios.patch(`/contacts/${id}`)
  return data
}
