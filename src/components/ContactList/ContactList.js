import { Ul } from './ContactList.styles'
import { useFilteredContacts } from 'hooks/filteredContacts'
import ContactListElement from '../ContactListElement'

function ContactList() {
  const contactsArr = useFilteredContacts()

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
