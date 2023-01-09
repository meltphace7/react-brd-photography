import React, { useState, useEffect, useCallback } from "react";
import classes from "./AdminEditProduct.module.css";
import { useParams } from "react-router-dom";
import hostURL from "../../hosturl";

const AdminEditProduct = (props) => {
    let { productId } = useParams();
    
    console.log(productId)

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const getEditItemHandler = useCallback(async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${hostURL}/admin/edit-product/${productId}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Could not find product!");
      }

      const product = await response.json();
      setTitle(product.product.title);
      setPrice(product.product.price);
      setStock(product.product.stock);
      setDescription(product.product.description);
      setImage(product.product.imageName);
    } catch (err) {
      console.log(err);
    }
  }, [productId]);

  useEffect(() => {
    getEditItemHandler();
  }, [getEditItemHandler]);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const stockChangeHandler = (event) => {
    setStock(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setImage(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const refreshProducts = () => {
    setTimeout(() => {
      props.refreshProducts();
    }, 3000);
  };

  const editProductHandler = async (event) => {
    event.preventDefault();
    // MUST USE FORMDATA TO INCLUDE A FILE/IMAGE
    const formData = new FormData();
    formData.append("_id", productId);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", description);
    formData.append("image", image);

    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/admin/edit-product", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });
      if (!response.ok || response.status === 422) {
        throw new Error("Editing product failed!");
      }
    } catch (err) {
      console.log(err);
    }

    setTitle("");
    setPrice("");
    setDescription("");
    setStock("");
      setImage(null);
      refreshProducts();
  };

  return (
    <div className={classes.background}>
      <div className={classes["background-overlay"]}>
        <div className={classes["form-body"]}>
          <h1>EDIT PRODUCT</h1>
          <form onSubmit={editProductHandler}>
            <div className={classes["input-row"]}>
              <div className={classes["input-group"]}>
                <label className={classes["label"]} htmlFor="title">
                  Title
                </label>
                <input
                  className={classes["edit-product-input"]}
                  placeholder="Enter product name"
                  type="text"
                  id="title"
                  onChange={titleChangeHandler}
                  value={title}
                />
              </div>
              <div className={classes["input-group"]}>
                <label className={classes["label"]} htmlFor="price">
                  Price
                </label>
                <input
                  className={classes["edit-product-input"]}
                  placeholder="Enter product price"
                  type="number"
                  id="price"
                  onChange={priceChangeHandler}
                  value={price}
                />
              </div>
              <div className={classes["input-group"]}>
                <label className={classes["label"]} htmlFor="stock">
                  Stock
                </label>
                <input
                  className={classes["edit-product-input"]}
                  placeholder="Enter product stock"
                  type="number"
                  id="stock"
                  onChange={stockChangeHandler}
                  value={stock}
                />
              </div>
            </div>
            <label className={classes["label"]} htmlFor="description">
              Description
            </label>
            <textarea
              className={classes["edit-product-text-area"]}
              onChange={descChangeHandler}
              value={description}
              placeholder="Enter product description"
              id="description"
              rows="12"
              cols="50"
            ></textarea>
            <div className={classes["input-group"]}>
              <label className={classes["label"]} htmlFor="image">
                Select a product image
              </label>
              <input
                className={classes["file-input"]}
                type="file"
                id="image"
                onChange={imageChangeHandler}
              />
            </div>
            <button type="submit">EDIT PRODUCT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminEditProduct;
