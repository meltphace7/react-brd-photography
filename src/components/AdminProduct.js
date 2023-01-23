import React from "react";
import classes from "./AdminProduct.module.css";
import { Link } from "react-router-dom";
import hostURL from "../hosturl";

const AdminProduct = (props) => {
  const deleteItemHandler = async () => {
    const productData = {
      productId: props.id,
      imageUrl: props.imageUrl,
    };
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${hostURL}/admin/delete-product`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );
      if (!response.ok) {
        throw new Error("Could not delete product!");
      }
      const resData = await response.json();
      console.log(resData);
      props.onDelete();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes["admin-item"]}>
      <div className={classes["admin-item__img-container"]}>
        <img
          src={props.imageUrl}
          className={classes["admin-item__img"]}
          alt={props.title}
        />
      </div>
      <h2>{props.title}</h2>

      <div className={classes["admin-item__stats"]}>
        <h2>{`$ ${props.price}`}</h2>
        <p className={classes["admin-item__description"]}>
          {props.description}
        </p>
        <div className={classes["admin-item__controls"]}>
          <Link
            className={classes["admin-item__controls__btn"]}
            to={`/admin/edit-product/${props.id}`}
          >
            EDIT
          </Link>
          <button
            onClick={deleteItemHandler}
            className={classes["admin-item__controls__btn"]}
          >
            DELETE
          </button>
        </div>
      </div>
      {props.stock === 0 ? (
        <p className={classes["cart-item__stock"]}>{`OUT OF STOCK`}</p>
      ) : (
        <p
          className={classes["cart-item__stock"]}
        >{`${props.stock} left in stock`}</p>
      )}
    </div>
  );
};

export default AdminProduct;
