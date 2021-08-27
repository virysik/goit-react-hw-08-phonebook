import { authSelectors, authOperations } from 'redux/auth'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Wrapper, Span } from './UserMenu.styles'

export default function UserMenu() {
  const dispatch = useDispatch()
  const email = useSelector(authSelectors.getUserEmail)

  return (
    <div>
      <Span>{email}</Span>
      <AccountCircleIcon />
      <Button
        color="inherit"
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut())
        }}
      >
        <Wrapper>LogOut</Wrapper>
      </Button>
    </div>
  )
}
