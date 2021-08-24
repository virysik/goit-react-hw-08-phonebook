import AppBar from 'components/AppBar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from 'redux/auth'
import HomeView from 'views/HomeView'
import SignUpView from 'views/SignUpView'
import LoginView from 'views/LoginView'
import ContactsView from 'views/ContactsView'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/users/signup">
          <SignUpView />
        </Route>
        <Route path="/users/login">
          <LoginView />
        </Route>
        <Route path="/users/current">
          <ContactsView />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
