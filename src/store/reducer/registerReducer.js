import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
const initialState = {
    isFetching: false,
    accessToken: "",
    error: null,
    noti: ""
}

const registerReducer = createSlice({
    name: 'register',
    initialState,
    reducers: {
        getRegisterSuccess(state, action) {
            state.isFetching = false
        },
        getRegisterFailure(state, action) {
            state.isFetching = true,
                state.error = action.payload
        }
    }
})
// Action creators are generated for each case reducer function
export const { getRegisterRequest, getRegisterSuccess, getRegisterFailure } = registerReducer.actions

export default registerReducer.reducer