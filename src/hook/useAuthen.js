import { useDispatch, useSelector } from "react-redux"
import { authActions } from '../action/index'
const useAuth = () => {
   
    const state = useSelector(state => state.userReducer.value)

    const handleLogin = (action) => {
        dispatch(authActions.loginRequest(action.payload))
    }
    return {
        handleLogin,
        state
    }
}
export default useAuth

useAuth()