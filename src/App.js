import React, {Suspense} from 'react';
import Navigation from "./components/Navigation";
import { Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import HomePage from "./components/pages/Homepage";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Blog from "./components/pages/blog/Blog";
import { SLIDER_IMAGES } from "./assets/SliderImages";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";
import { FormspreeProvider } from "@formspree/react";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import Washington from "./components/pages/Washington";
// import Oregon from "./components/pages/Oregon";
// import California from "./components/pages/California";
// import Idaho from "./components/pages/Idaho";
// import Wyoming from "./components/pages/Wyoming";
// import Montana from "./components/pages/Montana";
// import Sierras from "./components/pages/Sierras"

// import KingsCanyon22Blog from './components/pages/blog/KingsCanyon22Blog'
// import GranitePark22Blog from './components/pages/blog/GranitePark22Blog'
// import WhiteClouds22Blog from "./components/pages/blog/WhiteClouds22Blog";

// GALLERIES
const Washington = React.lazy(() =>
  import("./components/pages/Washington")
);
const Oregon = React.lazy(() => import("./components/pages/Oregon"));
const California = React.lazy(() => import("./components/pages/California"));
const Idaho = React.lazy(() => import("./components/pages//Idaho"));
const Wyoming = React.lazy(() => import("./components/pages/Wyoming"));
const Montana = React.lazy(() => import("./components/pages/Montana"));

// BLOGS
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
  return (
    <CartProvider>
      <Navigation />
      <ScrollToTop />
      <Suspense fallback={<div className='centered'>
        <LoadingSpinner/>
      </div>}>
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
            <Shop />
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
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </CartProvider>
  );
}

export default App;
