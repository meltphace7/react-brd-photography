import Navigation from "./components/Navigation";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/Homepage";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import { SLIDER_IMAGES } from "./assets/SliderImages";
import Footer from "./components/Footer";
import Washington from "./components/pages/Washington";
import Oregon from "./components/pages/Oregon";
import California from "./components/pages/California";
import Idaho from "./components/pages/Idaho";
import Wyoming from "./components/pages/Wyoming";
import Montana from "./components/pages/Montana";
import Sierras from "./components/pages/Sierras"
import Cart from "./components/pages/Cart";
import Blog from "./components/pages/blog/Blog";
import KingsCanyon22Blog from './components/pages/blog/KingsCanyon22Blog'
import GranitePark22Blog from './components/pages/blog/GranitePark22Blog'
import CartProvider from "./store/CartProvider";
import { FormspreeProvider } from "@formspree/react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <CartProvider>
      <Navigation />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
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
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;
