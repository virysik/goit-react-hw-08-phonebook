import { authSelectors } from 'redux/auth'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { NLink } from './Navigation.styles'

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <nav>
      <ul>
        <Button color="inherit">
          <NLink to="/">Main Page</NLink>
        </Button>
        {isLoggedIn && (
          <Button color="inherit">
            <NLink to="/contacts">Contacts</NLink>
          </Button>
        )}
      </ul>
    </nav>
  )
}
