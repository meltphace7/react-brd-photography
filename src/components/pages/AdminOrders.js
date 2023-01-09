import React, { useEffect, useCallback, useState } from "react";
import classes from "./AdminOrders.module.css";
import AdminOrder from "../AdminOrder";
import hostURL from "../../hosturl";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrdersHandler = useCallback(async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${hostURL}/admin/get-orders`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Could not get order!");
      }
      const resData = await response.json();
      setOrders(resData.orders);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchOrdersHandler();
  }, [fetchOrdersHandler]);

  return (
    <div className={classes["background"]}>
      <div className={classes["background-overlay"]}>
        <h1 className={classes["page-title"]}>Orders</h1>
        <div className={classes["orders-container"]}>
          {orders.map((order) => {
            return (
              <AdminOrder
                key={order._id}
                orderId={order._id}
                shippingData={order.shippingData}
                billingData={order.billingData}
                userId={order.user.userId}
                firstName={order.user.firstName}
                lastName={order.user.lastName}
                email={order.user.email}
                totalItems={order.totalItems}
                orderTotal={order.orderTotal}
                date={order.date}
                cart={order.cart}
                fetchOrders={fetchOrdersHandler}
                isFulfilled={order.fulfilled}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
