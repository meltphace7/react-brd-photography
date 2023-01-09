import React, {Suspense, useState, useEffect, useCallback} from 'react';
import Navigation from "./components/Navigation";
import { Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import HomePage from "./components/pages/Homepage";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import Checkout from "./components/pages/Checkout";
import ProductDetail from './components/pages/ProductDetail'
import Cart from "./components/pages/Cart";
import Blog from "./components/pages/blog/Blog";
import Login from './components/pages/Login'
import Signup from "./components/pages/Signup";
import AdminAddProduct from './components/pages/AdminAddProduct';
import AdminProducts from "./components/pages/AdminProducts";
import AdminOrders from './components/pages/AdminOrders';
import AdminEditProduct from './components/pages/AdminEditProduct'
import { SLIDER_IMAGES } from "./assets/SliderImages";
import Footer from "./components/Footer";
import { FormspreeProvider } from "@formspree/react";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "./store/auth-actions";
import { cartActions } from "./store/cart-slice";
import hostURL from './hosturl'

// LAZY-LOADING GALLERIES
const Washington = React.lazy(() =>
  import("./components/pages/Washington")
);
const Oregon = React.lazy(() => import("./components/pages/Oregon"));
const California = React.lazy(() => import("./components/pages/California"));
const Idaho = React.lazy(() => import("./components/pages//Idaho"));
const Wyoming = React.lazy(() => import("./components/pages/Wyoming"));
const Montana = React.lazy(() => import("./components/pages/Montana"));

//LAZY-LOADING BLOGS
const KingsCanyon22Blog = React.lazy(() =>
  import("./components/pages/blog/KingsCanyon22Blog")
);
const GranitePark22Blog = React.lazy(() =>
  import("./components/pages/blog/GranitePark22Blog")
);
const WhiteClouds22Blog = React.lazy(() =>
  import("./components/pages/blog/WhiteClouds22Blog")
);
const Sierras = React.lazy(() => import("./components/pages/Sierras"));


function App() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  // CHECKS for ADMIN ACCESS if a token is saved in Localstorage
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(checkAuth());
  }

  // Gets Cart from local storage
  const cart = localStorage.getItem("cart");
  console.log('stored cart', JSON.parse(cart))

  useEffect(() => {
    if (cart) {
      dispatch(cartActions.syncCart(JSON.parse(cart)));
    }
  }, [cart, dispatch])


  // GETS ALL PRODUCTS IN DATABASE
  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await fetch(`${hostURL}/shop/products`);
      if (!response.ok) {
        throw new Error("Products not found!");
      }

      const resData = await response.json();
      console.log(resData);
      setProducts(resData.products);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  return (
    <Fragment>
      <Navigation />
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/home" exact>
            <HomePage images={SLIDER_IMAGES} />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <FormspreeProvider project="1986911482599701612">
              <Contact />
            </FormspreeProvider>
          </Route>
          <Route path="/shop">
            <Shop products={products} />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/product-detail/:productId">
            <ProductDetail onAddToCart={fetchProductsHandler} />
          </Route>
          <Route path="/washington">
            <Washington />
          </Route>
          <Route path="/oregon">
            <Oregon />
          </Route>
          <Route path="/california">
            <California />
          </Route>
          <Route path="/idaho">
            <Idaho />
          </Route>
          <Route path="/wyoming">
            <Wyoming />
          </Route>
          <Route path="/montana">
            <Montana />
          </Route>
          <Route path="/sierras">
            <Sierras />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/kings-canyon-22">
            <KingsCanyon22Blog />
          </Route>
          <Route path="/granite-park-22">
            <GranitePark22Blog />
          </Route>
          <Route path="/white-clouds-22">
            <WhiteClouds22Blog />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/admin/add-product">
            <AdminAddProduct refreshProducts={fetchProductsHandler} />
          </Route>
          <Route path="/admin/products">
            <AdminProducts
              onDelete={fetchProductsHandler}
              products={products}
            />
          </Route>
          <Route path="/admin/orders">
            <AdminOrders />
          </Route>
          <Route path="/admin/edit-product/:productId">
            <AdminEditProduct refreshProducts={fetchProductsHandler} />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Fragment>
  );
}

export default App;
