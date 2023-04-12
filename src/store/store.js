import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/userReducer'
import rootSaga from '../saga';
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    userReducer: userReducer
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);