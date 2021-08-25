import { Redirect, Route } from 'react-router'
import { authSelectors } from 'redux/auth'
import { useSelector } from 'react-redux'

export default function PrivateRoute({ children, ...props }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to="/users/login" />}
    </Route>
  )
}
