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
      } else {
        cartItem.quantity = 1;
        cartItem.stock--;
        state.cart.push(cartItem);
        state.totalQuantity++;
      }

      state.totalPrice = state.totalPrice + cartItem.price;
      localStorage.setItem("cart", JSON.stringify(state.cart));
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    resetStock(state) {
      state.stock = null;
    },
    syncCart(state, action) {
      const loadedCart = action.payload;
      state.cart = loadedCart;
      const itemCount = loadedCart.reduce((acc, cur) => acc + cur.quantity, 0);
      const cartTotalPrice = loadedCart.reduce(
        (acc, cur) => acc + +cur.quantity * +cur.price,
        0
      );
      state.totalQuantity = itemCount;
      state.totalPrice = cartTotalPrice;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
