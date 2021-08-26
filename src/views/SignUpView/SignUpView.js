import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { authSelectors, authOperations } from 'redux/auth'

export default function SignUpView() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const error = useSelector(authSelectors.getError)
  const dispatch = useDispatch()

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
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
    dispatch(authOperations.register({ name, email, password }))
    if (error) {
      toast.error(error)
    }
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Please enter your name
        <input onChange={handleChange} type="text" name="name" value={name} />
      </label>
      <label>
        Please enter your email
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
        />
      </label>
      <label>
        Please enter your password
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
        />
      </label>
      <button type="submit">SignUp</button>
      <Toaster />
    </form>
  )
}
