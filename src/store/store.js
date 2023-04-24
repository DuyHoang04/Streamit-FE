import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import rootSaga from "../saga";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);
