import "./App.css";

import { Header } from "./Components/Header";
import { Login, LoginPage } from "./Pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./Pages/ProductListing";

import Mockman from "mockman-js";
import { Home } from "./Pages/Home";


import { Wishlist } from "./Pages/Wishlist";
import { CreateAccountPage } from "./Pages/CreateAccountPage";
import { Cart } from "./Pages/Cart/Cart";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <Header />
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />
      </Routes>
      {/* <AboveFooter/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
