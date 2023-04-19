import { all } from 'redux-saga/effects'
import Saga from './userSaga'

export default function* rootSaga() {
    yield all([
        ...Saga
    ])
}