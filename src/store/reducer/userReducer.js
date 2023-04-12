import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const userReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { } = userReducer.actions

export default userReducer.reducer