import { authSelectors, authOperations } from 'redux/auth'
import { useDispatch, useSelector } from 'react-redux'

export default function UserMenu() {
  const dispatch = useDispatch()
  const email = useSelector(authSelectors.getUserEmail)

  return (
    <div>
      <h2>{email}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut())
        }}
      >
        LogOut
      </button>
    </div>
  )
}
