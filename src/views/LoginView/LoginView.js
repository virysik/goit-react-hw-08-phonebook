import { useState } from 'react'
import { authSelectors, authOperations } from 'redux/auth'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import toast from 'react-hot-toast'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '600px',
    margin: '20px auto',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}))

export default function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const classes = useStyles()
  const err = useSelector(authSelectors.getError)

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
    if (err) {
      toast.error(err)
    }
    setEmail('')
    setPassword('')
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        onChange={handleChange}
        required
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        name="email"
        value={email}
        autoComplete="on"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        required
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        name="password"
        value={password}
        autoComplete="current-password"
        variant="outlined"
      />
      <div style={{ margin: 8 }}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
        >
          Login
        </Button>
      </div>
    </form>
  )
}
