import "./App.css";

import { Header } from "./Components/Header";
import { Login, LoginPage } from "./Pages/Login/LoginPage";
import { Routes, Route } from "react-router-dom";

import Mockman from "mockman-js";
import { Home } from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";
import { CreateAccountPage } from "./Pages/CreateAccountPage";
import { Cart } from "./Pages/Cart/Cart";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { ProductListing } from "./Pages/Products/ProductListing";
import { Product } from "./Pages/Product/Product";
import { Profile } from "./Pages/Profile/Profile";
import { Address } from "./Pages/Address/Address";
import { AddAddress } from "./Pages/Address/AddAddress";
import { Checkout } from "./Pages/CheckoutPage/Checkout";
import { OrderPlaced } from "./Pages/OrderPlaced/OrderPlaced";

function App() {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path ="/address" element={<Address />} />
        <Route path ="/addAddress" element={<AddAddress />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
