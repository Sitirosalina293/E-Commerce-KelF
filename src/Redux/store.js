import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../Features/Users/index";
import itemsReducer from "../Features/Items/index";
import cartReducer from "../Features/Carts/index";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    items: itemsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});