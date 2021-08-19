import { Container, Title, TitleContacts } from './App.styles'
import { TiContacts } from 'react-icons/ti'
import { IoIosContacts } from 'react-icons/io'
import { Toaster } from 'react-hot-toast'
import { useGetContactsQuery } from 'services/contact-api'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'
import ContactList from './components/ContactList'
import Spinner from './components/Spinner'

function App() {
  const { data } = useGetContactsQuery()

  return (
    <Container>
      <Title>
        <TiContacts /> Phonebook
      </Title>
      <ContactForm />
      {data ? (
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

export default App
