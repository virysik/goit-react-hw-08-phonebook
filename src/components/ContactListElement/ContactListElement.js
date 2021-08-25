import { Li, Button, Span } from './ContactListElement.styles'
import { IoIosContact } from 'react-icons/io'
import { FaTrashAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { contactsSelectors, contactsOperations } from 'redux/contacts'
import { useDispatch } from 'react-redux'
import SpinnerTwo from 'components/SpinnerTwo'
import PropTypes from 'prop-types'

function ContactListElement({ contactId, contactName, contactNumber }) {
  const isDeleting = useSelector(contactsSelectors.getIsDeleting)
  const dispatch = useDispatch()

  return (
    <Li>
      <Span>
        <IoIosContact />
      </Span>
      {`${contactName}: ${contactNumber}`}
      <Button
        type="button"
        onClick={() =>
          dispatch(contactsOperations.fetchDeleteContact(contactId))
        }
        disabled={isDeleting}
      >
        {isDeleting ? <SpinnerTwo size={14} /> : <FaTrashAlt />}
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
