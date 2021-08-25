import { NavLink } from 'react-router-dom'
import { authSelectors } from 'redux/auth'
import { useSelector } from 'react-redux'
//import toast from 'react-hot-toast'

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const handleClick = () => {
    if (isLoggedIn) {
      return
    }
    return alert(`Please login or signup`)
  }

  return (
    <nav>
      <ul>
        <NavLink to="/" exact>
          MainPage
        </NavLink>
        <NavLink
          to={isLoggedIn ? '/contacts' : '/'}
          onClick={() => handleClick()}
        >
          Contacts
        </NavLink>
      </ul>
    </nav>
  )
}
