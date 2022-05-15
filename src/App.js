import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserHistory } from "history";
import { DataProvider } from "./UI Components/DataProvider/DataProvider";
import LayoutClient from "./UI Components/LayoutClient/LayoutClient";
import LayoutAdmin from "./UI Components/LayoutAdmin/LayoutAdmin";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Cart from "./UI Components/Cart/Cart";
import CheckOut from "./Pages/CheckOut/CheckOut"
import DetailProduct from "./Pages/DetailProduct/DetailProduct";
import ProductNotFound from "./UI Components/ProductNotFound/ProductNotFound";
import Confirmation from "./Pages/Confirmation/Confirmation";

import "./App.css";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history.location.pathname}>
      <DataProvider>
        <HelmetProvider>
          <Routes>
            <Route
              path="/"
              element={
                <LayoutClient>
                  <Home />
                </LayoutClient>
              }
            />
            <Route
              path="/product/*"
              element={
                <LayoutClient>
                  <Product />
                </LayoutClient>
              }
            />
            <Route
              path="/detail/:id"
              element={
                <LayoutClient>
                  <DetailProduct />
                </LayoutClient>
              }
            />
            <Route
              path="/cart"
              element={
                <LayoutClient>
                  <Cart />
                </LayoutClient>
              }
            />
            <Route
              path="/checkout"
              element={
                <LayoutClient>
                  <CheckOut />
                </LayoutClient>
              }
            />
            <Route
              path="/confirmation"
              element={
                <LayoutClient>
                  <Confirmation />
                </LayoutClient>
              }
            />
            <Route path="/admin/*" element={<LayoutAdmin />} />
            <Route path="*" element={
              <LayoutClient>
                <ProductNotFound />
              </LayoutClient>
            } />
          </Routes>
        </HelmetProvider>
      </DataProvider>
    </Router>
  );
}

export default App;
