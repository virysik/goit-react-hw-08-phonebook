import { Container, Title, TitleContacts } from './ContactsView.styles'
import { TiContacts } from 'react-icons/ti'
import { IoIosContacts } from 'react-icons/io'
import { Toaster } from 'react-hot-toast'
import ContactForm from 'components/ContactForm'
import Filter from 'components/Filter'
import ContactList from 'components/ContactList'
import Spinner from 'components/Spinner'
import { useSelector } from 'react-redux'
import { contactsSelectors } from 'redux/contacts'

export default function ContactsView() {
  const contacts = useSelector(contactsSelectors.getItems)

  return (
    <>
      <Container>
        <Title>
          <TiContacts /> Phonebook
        </Title>
        <ContactForm />
        {contacts.length > 0 ? (
          <>
            <TitleContacts>
              <IoIosContacts />
              Contacts
            </TitleContacts>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Spinner />
        )}
        <Toaster />
      </Container>
    </>
  )
}
