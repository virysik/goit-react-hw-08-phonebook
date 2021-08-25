import { useSelector } from 'react-redux'
import { authSelectors } from 'redux/auth'

export default function HomeView() {
  const name = useSelector(authSelectors.getUserName)
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <h1>
      Welcome to our Phonebook service 🖐🏻
      {isLoggedIn && `, ${name}`}
    </h1>
  )
}
