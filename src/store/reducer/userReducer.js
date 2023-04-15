import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isFetching: false,
  value: "",
}

export const userReducer = createSlice({
  name: 'counter',
  initialState,
  getLoginRequest(state, action) {
    state.isFetching = true
  },
  getLoginSuccess(state, action) {
    state.isFetching = false,
      state.value = action.payload
  },
  getLoginFailure: {

  },
})

// Action creators are generated for each case reducer function
export const { } = userReducer.actions

export default userReducer.reducer