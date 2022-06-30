import React from "react";

const CartContext = React.createContext({
  items: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  incrementItem: (id) => {},
  decrementItem: (id) => {},
});

export default CartContext;
