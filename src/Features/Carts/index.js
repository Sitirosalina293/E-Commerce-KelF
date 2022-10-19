import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        soldOutItems: [],
        quantity: 0,
        totalQuantity: 0,   
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.quantity += 1;
            state.totalQuantity += action.payload.quantity;
            state.items.push(action.payload);
            state.totalPrice += action.payload.price * action.payload.quantity;
        },
        removeItem: (state, action) => {
            const newItem = state.items.filter((item) => item.id !== action.payload.id);
            state.items = newItem;
            state.quantity -= 1;
            state.totalQuantity -= action.payload.quantity;
            state.totalPrice -= action.payload.price * action.payload.quantity;
        },
        updateItems: (state, action) => {
            const newItem = state.items.filter((item) => item.id !== action.payload.id);
            state.items = newItem;
            state.quantity -= 1;
            state.totalQuantity -= action.payload.quantity;
            state.totalPrice -= action.payload.price * action.payload.quantity;
        },
        removeAllItems: (state) => {
            state.items = [];
            state.quantity = 0;
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
        checkout: (state, action) => {
            state.soldOutItems.push({
                ...action.payload,
            })
        }
        
    }

})

export const { addItem, removeItem, removeAllItems, checkout, updateItems } = cartSlice.actions;
export default cartSlice.reducer;