import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isFetching: false,
  accessToken: "",
  error: null
}

export const userReducer = createSlice({
  name: 'login',
  initialState,
  getLoginRequest(state, action) {
    state.isFetching = true
  },
  getLoginSuccess(state, action) {
    state.isFetching = false,
      state.accessToken = action.payload.accessToken
  },
  getLoginFailure(state, action) {
    state.isFetching = true,
    state.error = action.payload
  }
})

// Action creators are generated for each case reducer function
export const {getLoginRequest, getLoginSuccess, getLoginFailure } = userReducer.actions

export default userReducer.reducer