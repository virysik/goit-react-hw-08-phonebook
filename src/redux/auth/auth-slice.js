import { createSlice } from '@reduxjs/toolkit'
import { authOperations } from '.'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
      state.error = null
    },
    [authOperations.register.pending](state, action) {
      state.error = null
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload.message
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
      state.error = null
    },
    [authOperations.logIn.pending](state, action) {
      state.error = null
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload.message
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null }
      state.token = null
      state.isLoggedIn = false
      state.error = null
    },
    [authOperations.logOut.pending](state, action) {
      state.error = null
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload.message
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload
      state.isLoggedIn = true
      state.error = null
    },
  },
})

export default authSlice.reducer
