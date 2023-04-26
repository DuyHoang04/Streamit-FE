import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
const reducer = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer
})

export default reducer