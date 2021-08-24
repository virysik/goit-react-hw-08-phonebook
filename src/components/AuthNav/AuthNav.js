import { NavLink } from 'react-router-dom'

export default function AuthNav() {
  return (
    <ul>
      <NavLink to="/users/login">Login</NavLink>
      <NavLink to="/users/signup">SignUp</NavLink>
    </ul>
  )
}
