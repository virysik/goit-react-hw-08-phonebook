import AppBar from 'components/AppBar'
import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from 'redux/auth'
import PrivateRoute from 'components/PrivateRoute'

const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "home-view" */),
)
const SignUpView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "signup-view" */),
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
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/users/signup">
            <SignUpView />
          </Route>
          <Route path="/users/login">
            <LoginView />
          </Route>
          <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute>
          <Redirect to="/" />
        </Suspense>
      </Switch>
    </>
  )
}

export default App
