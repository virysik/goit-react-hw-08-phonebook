import { Redirect, Route } from 'react-router'
import { authSelectors } from 'redux/auth'
import { useSelector } from 'react-redux'

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const shouldRedirect = restricted && isLoggedIn

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  )
}
