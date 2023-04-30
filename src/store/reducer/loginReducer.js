import { createSlice } from '@reduxjs/toolkit'
import { notification } from 'antd'
const initialState = {
  isFetching: false,
  accessToken: "",
  error: null,
  accountRole: false
}

export const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getLoginSuccess(state, action) {
      state.isFetching = false,
        state.accessToken = action.payload.accessToken,
        state.accountRole = action.payload.accountRole
    },
    getLoginFailure(state, action) {
      state.isFetching = true,
        state.error = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getLoginRequest, getLoginSuccess, getLoginFailure } = loginReducer.actions

export default loginReducer.reducer