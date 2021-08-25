import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <NavLink to="/" exact>
          MainPage
        </NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </ul>
    </nav>
  )
}
