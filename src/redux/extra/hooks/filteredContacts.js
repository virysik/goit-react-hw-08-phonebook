import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getFilter } from '../../contacts/contacts-selectors'
import { useGetContactsQuery } from 'redux/contact-api'

const getContacts = (contacts, filter) =>
  contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      number.includes(filter),
  )
export const useFilteredContacts = () => {
  const filter = useSelector(getFilter)
  const { data: contacts } = useGetContactsQuery()
  const filteredContacts = useMemo(() => getContacts(contacts, filter), [
    contacts,
    filter,
  ])
  return filteredContacts
}
