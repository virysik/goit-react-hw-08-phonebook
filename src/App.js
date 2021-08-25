import AppBar from 'components/AppBar'
import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from 'redux/auth'
//import HomeView from 'views/HomeView'
//import SignUpView from 'views/SignUpView'
//import LoginView from 'views/LoginView'
//import ContactsView from 'views/ContactsView'

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
        <Suspense fallback={<p>Загружаем...</p>}>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/users/signup">
            <SignUpView />
          </Route>
          <Route path="/users/login">
            <LoginView />
          </Route>
          <Route path="/contacts">
            <ContactsView />
          </Route>
          <Redirect to="/" />
        </Suspense>
      </Switch>
    </>
  )
}

export default App
