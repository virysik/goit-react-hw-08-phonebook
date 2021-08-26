import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { authSelectors, authOperations } from 'redux/auth'
import { useSelector, useDispatch } from 'react-redux'

export default function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const error = useSelector(authSelectors.getError)
  const dispatch = useDispatch()

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
    if (error) {
      toast.error(error)
    }
    setEmail('')
    setPassword('')
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
      <Toaster />
    </form>
  )
}
