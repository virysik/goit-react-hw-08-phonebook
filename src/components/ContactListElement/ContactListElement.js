import { Li, Div, Span } from './ContactListElement.styles'
import { IoIosContact } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { contactsSelectors, contactsOperations } from 'redux/contacts'
import { useDispatch } from 'react-redux'
import SpinnerTwo from 'components/SpinnerTwo'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

function ContactListElement({ contactId, contactName, contactNumber }) {
  const isDeleting = useSelector(contactsSelectors.getIsDeleting)
  const dispatch = useDispatch()

  return (
    <Li>
      <Span>
        <IoIosContact />
      </Span>
      {`${contactName}: ${contactNumber}`}
      <Div>
        <IconButton
          type="button"
          onClick={() =>
            dispatch(contactsOperations.fetchDeleteContact(contactId))
          }
          disabled={isDeleting}
          aria-label="delete"
        >
          {isDeleting ? <SpinnerTwo size={34} /> : <DeleteIcon />}
        </IconButton>
      </Div>
    </Li>
  )
}

export default ContactListElement

ContactListElement.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
}
