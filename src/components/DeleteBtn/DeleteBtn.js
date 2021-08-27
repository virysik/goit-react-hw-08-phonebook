import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import SpinnerTwo from 'components/SpinnerTwo'
import { contactsSelectors, contactsOperations } from 'redux/contacts'
import { useSelector, useDispatch } from 'react-redux'

export default function DeleteBtn({ id }) {
  const isDeleting = useSelector(contactsSelectors.getIsDeleting)
  const dispatch = useDispatch()

  return (
    <IconButton
      type="button"
      onClick={() => dispatch(contactsOperations.fetchDeleteContact(id))}
      disabled={isDeleting}
      aria-label="delete"
    >
      {isDeleting ? <SpinnerTwo size={34} /> : <DeleteIcon />}
    </IconButton>
  )
}
