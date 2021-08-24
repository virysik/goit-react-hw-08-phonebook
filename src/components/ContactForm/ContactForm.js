import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { contactsOperations, contactsSelectors } from 'redux/contacts'
import { Form, Label, Input, Button } from './ContactForm.styles'
import { GiButterflyWarning } from 'react-icons/gi'
import toast from 'react-hot-toast'
import SpinnerTwo from 'components/SpinnerTwo'

function ContactForm() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const items = useSelector(contactsSelectors.getItems)
  const dispatch = useDispatch()
  const isLoading = useSelector(contactsSelectors.getIsLoading)

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    switch (name) {
      case 'name':
        return setName(value)

      case 'number':
        return setNumber(value)

      default:
        throw new Error(`there is no such name as ${name}`)
    }
  }

  const resetFormInputs = () => {
    setName('')
    setNumber('')
  }

  const showAlert = (value) => {
    toast(`${value} is already in contacts`, {
      style: { color: '#456173' },
      icon: <GiButterflyWarning />,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const normalizedName = name.toLowerCase()
    const contactExists = items.find(
      ({ name }) => name.toLowerCase() === normalizedName,
    )
    const numberExists = items.find((contact) => contact.number === number)

    if (contactExists) {
      showAlert(name)
      resetFormInputs()
      return
    }

    if (numberExists) {
      showAlert(number)
      resetFormInputs()
      return
    }

    dispatch(contactsOperations.fetchAddContact({ name, number }))
    resetFormInputs()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <>
        <Label>
          Name
          <Input
            onChange={handleInputChange}
            type="text"
            name="name"
            autoComplete="off"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
        <Label>
          Number
          <Input
            onChange={handleInputChange}
            type="tel"
            name="number"
            autoComplete="off"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <SpinnerTwo size={18} />
              Adding...
            </>
          ) : (
            'Add contact'
          )}
        </Button>
      </>
    </Form>
  )
}

export default ContactForm
