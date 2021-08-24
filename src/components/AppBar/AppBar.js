import Navigation from 'components/Navigation'
import UserMenu from 'components/UserMenu'
import AuthNav from 'components/AuthNav'
import { authSelectors } from 'redux/auth'
import { useSelector } from 'react-redux'

const styles = {
  header: {
    margin: '0px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
}
//const isLoggedIn = false

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}
