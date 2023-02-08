import React, { useState } from "react";
import classes from "./AdminAddProduct.module.css";
import LoadingPage from '../notifications/LoadingPage'
import ModalMessage from '../notifications/ModalMessage'
import hostURL from "../../hosturl";

const AdminAddProduct = (props) => {
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState('');

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
    setIsLoading(true);
    // MUST USE FORMDATA TO INCLUDE A FILE/IMAGE
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", description);
    formData.append("image", image);

    const token = localStorage.getItem("token");
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
      setIsLoading(false);
      setMessage('Product Created!')
      setIsMessage(true);
    } catch (err) {
       setIsLoading(false);
       setMessage('ERROR!  Product could not be Created!')
      setIsMessage(true);
      console.log(err);
    }
    setTitle("");
    setPrice("");
    setDescription("");
    setStock("");
    refreshProducts();
  };

  const closeModalHandler = () => {
    setIsMessage(false);
    setMessage('');
  }

  return (
    <div className={classes.background}>
      <div className={classes["background-overlay"]}>
        {isLoading && <LoadingPage />}
        {isMessage && <ModalMessage onCloseModal={closeModalHandler} message={message} />}
        <div className={classes["form-body"]}>
          <h1 className={classes.title}>ADD A PRODUCT</h1>
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
            <button className={classes['submit-btn']} type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProduct;
