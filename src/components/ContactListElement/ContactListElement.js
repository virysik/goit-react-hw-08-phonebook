import { Li, Button, Span } from './ContactListElement.styles'
import { IoIosContact } from 'react-icons/io'
import { FaTrashAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { contactsSelectors } from 'redux/contacts'
import SpinnerTwo from 'components/SpinnerTwo'
import PropTypes from 'prop-types'

function ContactListElement({
  contactId,
  contactName,
  contactNumber,
  onDelete,
}) {
  const isLoading = useSelector(contactsSelectors.getIsLoading)

  return (
    <Li>
      <Span>
        <IoIosContact />
      </Span>
      {`${contactName}: ${contactNumber}`}
      <Button
        type="button"
        onClick={() => onDelete(contactId)}
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
  onDelete: PropTypes.func.isRequired,
}
