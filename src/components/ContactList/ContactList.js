import { useSelector } from 'react-redux'
import { Ul } from './ContactList.styles'
import { contactsSelectors } from 'redux/contacts'
import ContactListElement from '../ContactListElement'

function ContactList() {
  const contactsArr = useSelector(contactsSelectors.getContactsArr)

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
