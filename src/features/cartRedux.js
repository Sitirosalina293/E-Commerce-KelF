import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    products: JSON.parse(localStorage.getItem('saved')) || [],
    soldOutProducts: JSON.parse(localStorage.getItem('sold')) || [],
    quantity: JSON.parse(localStorage.getItem('quantity')) || 0,
    totalQuantity: JSON.parse(localStorage.getItem('tquantity')) || 0,
    totalPrice: JSON.parse(localStorage.getItem('tprice')) || 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      localStorage.setItem('quantity', JSON.stringify(state.quantity))
      state.totalQuantity += action.payload.quantity;
      localStorage.setItem('tquantity', JSON.stringify(state.totalQuantity))
      state.products.unshift(action.payload);
      localStorage.setItem('saved', JSON.stringify(state.products))
      state.totalPrice += action.payload.price * action.payload.quantity;
      localStorage.setItem('tprice', JSON.stringify(state.totalPrice))
    },
    removeProduct: (state, action) => {
      const newProducts = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      state.products = newProducts;
      localStorage.setItem('saved', JSON.stringify(state.products))
      state.quantity -= 1;
      localStorage.setItem('quantity', JSON.stringify(state.quantity))
      state.totalQuantity -= action.payload.quantity;
      localStorage.setItem('tquantity', JSON.stringify(state.totalQuantity))
      state.totalPrice -= action.payload.price * action.payload.quantity;
      localStorage.setItem('tprice', JSON.stringify(state.totalPrice))
    },
    updateProduct: (state, action) => {
      const newProducts = state.products.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.products = newProducts;
      localStorage.setItem('saved', JSON.stringify(state.products))
      state.totalPrice = newProducts.reduce((prev, curr) => {
        return prev + curr.price * curr.quantity;
      },0);
      localStorage.setItem('tprice', JSON.stringify(state.totalPrice))
      state.totalQuantity = newProducts.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0);
      localStorage.setItem('tquantity', JSON.stringify(state.totalQuantity))
    },
    removeCart: (state) => {
      state.products = [];
      localStorage.setItem('saved', JSON.stringify(null))
      state.quantity = 0;
      localStorage.setItem('quantity', JSON.stringify(null))
      state.totalPrice = 0;
      localStorage.setItem('tprice', JSON.stringify(null))
      state.totalQuantity = 0;
      localStorage.setItem('tquantity', JSON.stringify(null))
      alert('Check Out Success')
    },
    checkOut: (state, action) => {
      state.soldOutProducts.push({
        ...action.payload,
      });
      localStorage.setItem('sold', JSON.stringify(state.soldOutProducts))
    }
  }
});

export const { addProduct, removeProduct, updateProduct, removeCart, checkOut } = cartSlice.actions;
export default cartSlice.reducer;
