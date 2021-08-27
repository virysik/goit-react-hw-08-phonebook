import Button from '@material-ui/core/Button'
import { NLink } from './AuthNav.styles'

export default function AuthNav() {
  return (
    <ul>
      <Button color="inherit">
        <NLink to="/users/login">Login</NLink>
      </Button>
      <Button color="inherit">
        <NLink to="/users/signup">SignUp</NLink>
      </Button>
    </ul>
  )
}
