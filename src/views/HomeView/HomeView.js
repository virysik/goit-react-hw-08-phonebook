import { useSelector } from 'react-redux'
import { authSelectors } from 'redux/auth'
import { Wrapper, Title } from './HomeView.styles'

export default function HomeView() {
  const name = useSelector(authSelectors.getUserName)
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <Wrapper>
      <Title>
        Welcome to our Phonebook service 🖐🏻
        {isLoggedIn && `, ${name}`}
      </Title>
    </Wrapper>
  )
}
