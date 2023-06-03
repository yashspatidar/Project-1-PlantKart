import "./App.css";

import { Header } from "./Components/Header";
import { Login, LoginPage } from "./Pages/Login/LoginPage";
import { Routes, Route } from "react-router-dom";


import Mockman from "mockman-js";
import { Home } from "./Pages/Home/Home";



import { CreateAccountPage } from "./Pages/CreateAccountPage";
import { Cart } from "./Pages/Cart/Cart";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { ProductListing } from "./Pages/Products/ProductListing";
import { Product } from "./Pages/Product/Product";

function App() {
  return (
    <div>
      <Header />
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/product/:productId" element={<Product/>}/>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />
      </Routes>
      {/* <AboveFooter/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
