import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "item",
    initialState: {
        items: [],
        loading: false,
        totalIncome: 0,
    },
    reducers: {
        itemStart: (state) => {
            state.loading = true;
        },
        itemSuccess: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        itemFail: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        itemAdd: (state, { payload }) => {
            state.items.map((item) => {
                const FData = payload.items.find((data) => data.id === item.id);
                if (FData) {
                    item.stock -= FData.quantity;
                    item.sold += FData.quantity;
                }
                return FData;
            });
            state.totalIncome += payload.totalPrice;
        },
        updateStock: (state, action) => {
            const FData = state.items.map((item) => 
                item.id === action.payload.id ? action.payload : item
            );
            state.items = FData;
        },
    }
})

export const { itemStart, itemSuccess, itemFail, itemAdd, updateStock } = itemsSlice.actions;
export default itemsSlice.reducer;