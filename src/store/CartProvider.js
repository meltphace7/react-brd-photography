import React, { useReducer, useEffect } from "react";
import CartContext from "./cart-context";



const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  
  let updatedItems;
  if (action.type === "ADD") {

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    // const updatedTotalAmount =
    //   state.totalAmount + action.item.price * action.item.amount;

    let updatedTotalAmount;
    if (existingItem && existingItem.stock === 0) {
      updatedTotalAmount = state.totalAmount
    } else {
      updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    }



    if (existingItem && existingItem.stock === 0) {
      updatedItems = [...state.items];
    } else if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
        stock: +existingItem.stock - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      const updatedItem = { ...action.item, stock: +action.item.stock - 1 };
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingItem.price * existingItem.amount;
    updatedItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "DECREMENT") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItem && existingItem.amount > 1) {
      const updatedItem = {
        ...existingItem,
        amount: +existingItem.amount - 1,
        stock: +existingItem.stock + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem('CART'));

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    localData ? localData : defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const incrementItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", id: item });
  };

  const decrementItemHandler = (id) => {
    dispatchCartAction({ type: "DECREMENT", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    incrementItem: incrementItemHandler,
    decrementItem: decrementItemHandler,
  };

  useEffect(() => {
    localStorage.setItem('CART', JSON.stringify(cartState))
  }, [cartState])

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
