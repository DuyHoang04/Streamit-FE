import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import rootSaga from "../saga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    reducer: reducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
