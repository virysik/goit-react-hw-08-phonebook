import { useSelector } from 'react-redux'
import { getFilter } from '../../redux/phonebook/contacts-selectors'
import { Ul } from './ContactList.styles'
import ContactListElement from '../ContactListElement'
import { useGetContactsQuery } from 'redux/contact-api'

function ContactList() {
  const { data } = useGetContactsQuery()
  const filter = useSelector(getFilter)
  const contactsArr = data.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      number.includes(filter),
  )

  return (
    <Ul>
      {contactsArr.map(({ id, name, number }) => {
        return (
          <ContactListElement
            key={id}
            contactId={id}
            contactName={name}
            contactNumber={number}
          />
        )
      })}
    </Ul>
  )
}

export default ContactList
