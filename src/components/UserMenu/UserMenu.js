import { authSelectors, authOperations } from 'redux/auth'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'

export default function UserMenu() {
  const dispatch = useDispatch()
  const email = useSelector(authSelectors.getUserEmail)
  const error = useSelector(authSelectors.getError)

  return (
    <div>
      <h2>{email}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut())
          if (error) {
            toast(error)
          }
        }}
      >
        LogOut
      </button>
      <Toaster />
    </div>
  )
}
