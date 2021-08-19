import { Li, Button, Span } from './ContactListElement.styles'
import { IoIosContact } from 'react-icons/io'
import { FaTrashAlt } from 'react-icons/fa'
import { useRemoveContactByIdMutation } from 'redux/contact-api'
import SpinnerTwo from 'components/SpinnerTwo'
import PropTypes from 'prop-types'

function ContactListElement({ contactId, contactName, contactNumber }) {
  const [removeContactById, { isLoading }] = useRemoveContactByIdMutation()

  return (
    <Li>
      <Span>
        <IoIosContact />
      </Span>
      {`${contactName}: ${contactNumber}`}
      <Button
        type="button"
        onClick={() => removeContactById(contactId)}
        disabled={isLoading}
      >
        {isLoading ? <SpinnerTwo size={14} /> : <FaTrashAlt />}
      </Button>
    </Li>
  )
}

export default ContactListElement

ContactListElement.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
}
