import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0.0,
  //
  stock: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const cartItem = action.payload;

      if (+cartItem.stock <= 0) {
        console.log("ITEM OUT OF STOCK");
        return;
      }
      const existingItem = state.cart.find((item) => item.id === cartItem.id);
      if (existingItem && existingItem.stock === 0) {
        console.log("OUT OF STOCK");
        return;
      }
      if (existingItem) {
        existingItem.quantity++;
        existingItem.stock--;
        state.totalQuantity++;
        console.log("item stock", existingItem.stock);
      } else {
        cartItem.quantity = 1;
        cartItem.stock--;
        state.cart.push(cartItem);
        state.totalQuantity++;
        console.log("item stock", cartItem.stock);
      }

      state.totalPrice = state.totalPrice + cartItem.price;
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.cart.find((item) => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.stock++;
        existingItem.quantity--;
        state.totalQuantity--;
      } else {
        // NEED TO COMMUNICATE STOCK TO DB
        state.stock = {
          productId: itemId,
          stock: 1,
        };
        //existingItem.stock++;
        //
        const updatedArray = state.cart.filter((item) => item.id !== itemId);
        state.cart = updatedArray;
        state.totalQuantity--;
      }
      state.totalPrice = state.totalPrice - existingItem.price;
      console.log("item stock", existingItem.stock);
    },
    clearItemFromCart(state, action) {
      console.log("item cleared from cart");
      const itemId = action.payload;
      const cartItem = state.cart.find((item) => item.id === itemId);
      const updatedCart = state.cart.filter((item) => item.id !== itemId);
      // MUST COMMUNICATE STOCK OF LAST ClEARED ITEM TO DB
      state.stock = {
        productId: itemId,
        stock: cartItem.quantity,
      };
      //
      state.cart = updatedCart;
      state.totalQuantity = state.totalQuantity - cartItem.quantity;
      state.totalPrice = state.totalPrice - cartItem.price * cartItem.quantity;
    },
    loadCart(state, action) {
      state.cart = action.payload;
      let totalItems = 0;
      let totalPrice = 0.0;
      state.cart.forEach((item) => {
        totalItems = totalItems + item.quantity;
        totalPrice = totalPrice + item.price * item.quantity;
      });

      state.totalQuantity = totalItems;
      state.totalPrice = totalPrice;
    },
    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0.0;
      state.totalQuantity = 0;
    },
    resetStock(state) {
      state.stock = null;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
