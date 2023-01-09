import React, { useState } from "react";
import classes from "./AdminAddProduct.module.css";
import hostURL from "../../hosturl";

const AdminAddProduct = (props) => {
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

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
  };

  const refreshProducts = () => {
    setTimeout(() => {
      props.refreshProducts();
    }, 3000);
  };

  const addProductHandler = async (event) => {
    event.preventDefault();
    // MUST USE FORMDATA TO INCLUDE A FILE/IMAGE
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", description);
    formData.append("image", image);

    const token = localStorage.getItem("token");
    console.log(formData);
    try {
      const response = await fetch(`${hostURL}/admin/add-product`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });
      if (!response.ok || response.status === 422) {
        throw new Error("Creating product failed!");
      }
    } catch (err) {
      console.log(err);
    }
    setTitle("");
    setPrice("");
    setDescription("");
    setStock("");
    refreshProducts();
  };

  return (
    <div className={classes.background}>
      <div className={classes["background-overlay"]}>
        <div className={classes["form-body"]}>
          <h1>ADD A PRODUCT</h1>
          <form onSubmit={addProductHandler}>
            <div className={classes["input-row"]}>
              <div className={classes["input-group"]}>
                <label className={classes["label"]} htmlFor="title">
                  Title
                </label>
                <input
                  className={classes["add-product-input"]}
                  placeholder="Enter product name"
                  type="text"
                  id="title"
                  onChange={titleChangeHandler}
                  value={title}
                />
              </div>
              <div className={classes["input-group"]}>
                <label className={classes["label"]} htmlFor="title">
                  Price
                </label>
                <input
                  className={classes["add-product-input"]}
                  placeholder="Enter product price"
                  type="number"
                  id="price"
                  onChange={priceChangeHandler}
                  value={price}
                />
              </div>
              <div className={classes["input-group"]}>
                <label className={classes["label"]} htmlFor="title">
                  Stock
                </label>
                <input
                  className={classes["add-product-input"]}
                  placeholder="Enter product stock"
                  type="number"
                  id="stock"
                  onChange={stockChangeHandler}
                  value={stock}
                />
              </div>
            </div>
            <label className={classes["label"]} htmlFor="description">
              Product Description
            </label>
            <textarea
              className={classes["add-product-text-area"]}
              onChange={descChangeHandler}
              value={description}
              placeholder="Enter product description"
              id="description"
              rows="10"
              cols="50"
            ></textarea>
            <div className={classes["input-group"]}>
              <label className={classes["label"]} htmlFor="title">
                Select a product image
              </label>
              <input
                className={classes["file-input"]}
                type="file"
                id="image"
                onChange={imageChangeHandler}
              />
            </div>
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProduct;
