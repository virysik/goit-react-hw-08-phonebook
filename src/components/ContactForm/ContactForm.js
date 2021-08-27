import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { contactsOperations, contactsSelectors } from 'redux/contacts'
import { Form, Label, Input } from './ContactForm.styles'
import { GiButterflyWarning } from 'react-icons/gi'
import toast from 'react-hot-toast'
import SpinnerTwo from 'components/SpinnerTwo'
import Button from '@material-ui/core/Button'

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
      <Label>
        Name
        <Input
          onChange={handleInputChange}
          type="text"
          name="name"
          autoComplete="off"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
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
          title="The phone number must consist of numbers and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" variant="contained" color="primary">
        {isLoading ? <SpinnerTwo size={34} /> : 'Add contact'}
      </Button>
    </Form>
  )
}

export default ContactForm
