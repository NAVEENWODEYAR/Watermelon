import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload;
      // console.log(newProduct)
      
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );
    state.totalQuantity++;
      if(!existingProduct){
          state.products.push({
              id:newProduct.id,
              price:newProduct.price,
              quantity:1,
              totalPrice:newProduct.price,
              title:newProduct.title
          })
      }else{
          existingProduct.quantity++
          existingProduct.totalPrice= existingProduct.totalPrice+ newProduct.price
      }
    },
    clearCart(state){
      state.totalQuantity=0
      state.products.length=0
    },
    
  },
});

export const cartActions=cartSlice.actions;
export default cartSlice;
