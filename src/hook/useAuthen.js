import { useDispatch, useSelector } from "react-redux"
import { authActions } from '../action/index'
const useAuth = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.userReducer.value)

    const handleLogin = (action) => {
        dispatch(authActions.loginRequest(action.payload))
    }
    return {
        state,
        handleLogin
    }
}
export default useAuth