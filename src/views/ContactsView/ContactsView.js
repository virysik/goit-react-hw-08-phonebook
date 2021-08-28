import { useSelector, useDispatch } from 'react-redux'
import { contactsSelectors, contactsOperations } from 'redux/contacts'
import { useEffect } from 'react'
import { TiContacts } from 'react-icons/ti'
import { IoIosContacts } from 'react-icons/io'
import { Toaster } from 'react-hot-toast'
import { Container, Title, TitleContacts } from './ContactsView.styles'
import ContactForm from 'components/ContactForm'
import Filter from 'components/Filter'
import ContactList from 'components/ContactList'
import Spinner from 'components/Spinner'

export default function ContactsView() {
  const contacts = useSelector(contactsSelectors.getItems)
  const dispatch = useDispatch()

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch])

  return (
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
  )
}
