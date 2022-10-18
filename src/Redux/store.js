import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../FeaturesN/Users/index";

const rootReducer = combineReducers({
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});