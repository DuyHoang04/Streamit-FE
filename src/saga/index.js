import { all } from 'redux-saga/effects'
import itemSaga from './userSaga'

export default function* rootSaga() {
    yield all([
        ...itemSaga
    ])
}