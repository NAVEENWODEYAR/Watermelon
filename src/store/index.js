import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import cartSlice from "./cart-slice";
import productSaga from "./productSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  middleware: [saga],
});

saga.run(productSaga);

export default store;