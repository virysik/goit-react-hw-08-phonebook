import { authSelectors, authOperations } from 'redux/auth'

import { useDispatch, useSelector } from 'react-redux'

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUserName)

  return (
    <div>
      <h2>Welcome, {name}</h2>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </button>
    </div>
  )
}
