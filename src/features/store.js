import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userRedux";
import itemsReducer from "../features/productRedux";
import cartReducer from "../features/cartRedux";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    item: itemsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});