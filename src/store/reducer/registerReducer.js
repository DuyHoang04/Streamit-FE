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
        getRegisterRequest(state, action) {
            state.isFetching = true
        },
        getRegisterSuccess(state, action) {
            console.log(action, "666")
            state.isFetching = false
            state.noti = notification.success({
                message: action.payload.message,
                placement: "topRight"
            })
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