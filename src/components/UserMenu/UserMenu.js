import { authSelectors, authOperations } from 'redux/auth'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

export default function UserMenu() {
  const dispatch = useDispatch()
  const email = useSelector(authSelectors.getUserEmail)
  const history = useHistory()

  return (
    <div>
      <h2>{email}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut())
          history.push('/')
        }}
      >
        LogOut
      </button>
    </div>
  )
}
