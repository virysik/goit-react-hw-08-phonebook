import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (_, action) => action.payload,
  },
})

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer
