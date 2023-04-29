import { useSelector } from "react-redux"

const useUser = () => {
    const accessToken = useSelector(state => state.userReducer.accessToken)
    return { accessToken }
}
export default useUser