import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: JSON.parse(localStorage.getItem('product')) || [],
    loading: false,
    totalIncome: JSON.parse(localStorage.getItem('income')) || 0,
  },
  reducers: {
    productStart: (state) => {
      state.loading = true;
    },
    productSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      localStorage.setItem('product', JSON.stringify(action.payload));
    },
    productFail: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      localStorage.setItem('product', JSON.stringify(null));
    },
    productCheckout: (state, { payload }) => {
      state.products.map((item) => {
        const newData = payload.products.find(data => data.id === item.id)
        if (newData) {
          item.stock -= newData.quantity;
          item.sold += newData.quantity;
        }
        return newData
      });
      localStorage.setItem('product', JSON.stringify(state.products))
      state.totalIncome += payload.totalPrice
      localStorage.setItem('income', JSON.stringify(state.totalIncome))
    },
    updateStock: (state, action) => {
      const newStock = state.products.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.products = newStock;
      localStorage.setItem('product', JSON.stringify(state.products))
    }
  },
});

export const { productStart, productSuccess, productFail, productCheckout, updateStock } =
  productSlice.actions;
export default productSlice.reducer;
