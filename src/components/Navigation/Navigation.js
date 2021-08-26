import { NavLink } from 'react-router-dom'
import { authSelectors } from 'redux/auth'
import { useSelector } from 'react-redux'

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <nav>
      <ul>
        <NavLink to="/" exact>
          MainPage
        </NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </ul>
    </nav>
  )
}
