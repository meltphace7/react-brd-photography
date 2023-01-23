import React from "react";
import classes from "./AdminProducts.module.css";
import AdminProduct from "../AdminProduct";

const AdminProducts = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes["background-overlay"]}>
        <h1 className={classes.title}>Admin Products</h1>
        <div className={classes["shop-items-container"]}>
          {props.products.map((prod) => {
            return (
              <AdminProduct
                key={prod._id}
                id={prod._id}
                title={prod.title}
                imageName={prod.imageName}
                imageUrl={prod.imageUrl}
                price={prod.price}
                description={prod.description}
                stock={prod.stock}
                onDelete={props.onDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
