import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from 'redux/auth'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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

export default function SignUpView() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const classes = useStyles()

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
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          onChange={handleChange}
          required
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={name}
          autoComplete="on"
          variant="outlined"
        />
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
            SignUp
          </Button>
        </div>
      </form>
    </>
  )
}
