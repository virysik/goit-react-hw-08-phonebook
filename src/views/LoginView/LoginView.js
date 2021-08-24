import { useState } from 'react'
import { useHistory } from 'react-router'
import { authOperations } from 'redux/auth'
import { useDispatch } from 'react-redux'

export default function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperations.logIn({ email, password }))
    setEmail('')
    setPassword('')

    history.push('/users/current')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Please enter your email
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          autoComplete="off"
        />
      </label>
      <label>
        Please enter your password
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          autoComplete="off"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}