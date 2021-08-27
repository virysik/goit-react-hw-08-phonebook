import AppBar from 'components/AppBar'
import { lazy, Suspense } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from 'redux/auth'
import PrivateRoute from 'components/PrivateRoute'
import PublicRoute from 'components/PublicRoute'

const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "home-view" */),
)
const SignUpView = lazy(() =>
  import('views/SignUpView' /* webpackChunkName: "signup-view" */),
)
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName: "login-view" */),
)
const ContactsView = lazy(() =>
  import('views/ContactsView' /* webpackChunkName: "contacts-view" */),
)

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])

  return (
    <>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/users/signup" restricted>
            <SignUpView />
          </PublicRoute>
          <PublicRoute path="/users/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/users/login">
            <ContactsView />
          </PrivateRoute>
          <Redirect to="/" />
        </Suspense>
      </Switch>
    </>
  )
}

export default App
