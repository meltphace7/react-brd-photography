import React from "react";
import classes from "./AdminOrder.module.css";
import hostURL from "../hosturl";

const AdminOrder = (props) => {
  const fufillOrderHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${hostURL}/admin/fufill-order`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId: props.orderId }),
      });
      if (!response.ok) {
        throw new Error("Could not fufill order!");
      }
      const resData = await response.json();
      console.log(resData);
      setTimeout(() => {
        props.fetchOrders();
      }, 250);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={
        props.isFulfilled === false
          ? classes["admin-order"]
          : classes["admin-order-fulfilled"]
      }
    >
      <h3>{`Order#: ${props.orderId}`}</h3>
      <h3>{`Date: ${props.date}`}</h3>
      <h3>{`User ID: ${props.userId ? props.userId : "no account"}`}</h3>
      <div className={classes["contact-data"]}>
        <h3>CONTACT INFO</h3>
        <p>{`${props.billingData.firstName} ${props.billingData.lastName}`}</p>
        <p>{props.billingData.email}</p>
        <p>{`Phone: (${props.billingData.phoneNumber
          .toString()
          .slice(0, 3)}) ${props.billingData.phoneNumber
          .toString()
          .slice(3, 6)}-${props.billingData.phoneNumber
          .toString()
          .slice(6, 10)} `}</p>
      </div>
      <div className={classes["billing-data"]}>
        <h3>BILLING ADDRESS</h3>
        <p>{`${props.billingData.firstName} ${props.billingData.lastName}`}</p>
        <p>{props.billingData.streetAddress}</p>
        <p>{`${props.billingData.city}, ${props.billingData.state}`}</p>
        <p>{props.billingData.country}</p>
      </div>
      <div className={classes["shipping-data"]}>
        <h3>SHIP TO</h3>
        <p>{`${props.shippingData.firstName} ${props.shippingData.lastName}`}</p>
        <p>{props.shippingData.streetAddress}</p>
        <p>{`${props.shippingData.city}, ${props.shippingData.state}`}</p>
        <p>{props.shippingData.country}</p>
      </div>
      <h3>ITEMS TO SHIP</h3>
      <ul className={classes["order-item-list"]}>
        {props.cart.map((item) => {
          return (
            <li className={classes["order-item"]} key={Math.random()}>
              <p>{`-product ID: ${item.productId}`}</p>
              <p>{item.title}</p>
              <p>{`$${+item.price} per unit`}</p>
              <p>{` x ${+item.quantity}`}</p>
              <p>{`Unit Total Price $${item.price * item.quantity}`}</p>
              <p>_____________________________</p>
            </li>
          );
        })}
      </ul>
      <h3>{`Total Items: ${props.totalItems}`}</h3>
      <h3>{`Total Price: $${props.orderTotal}`}</h3>
      {props.isFulfilled === true && (
        <h3 className={classes["order-fulfilled"]}>Order Status: Fulfilled</h3>
      )}
      {props.isFulfilled === false && (
        <h3 className={classes["order-open"]}>Order Status: Open</h3>
      )}
      <button
        onClick={fufillOrderHandler}
        className={classes["fufill-order-btn"]}
      >
        {props.isFulfilled === true ? "Unfufill Order" : "Fufill Order"}
      </button>
    </div>
  );
};

export default AdminOrder;
