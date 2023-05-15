import "./App.css";

import { Header } from "./Components/Header";
import { Login } from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./Pages/ProductListing";

import Mockman from "mockman-js";

function App() {
  return (
    <div>
      <Header />
      <Login />

      <Routes>
        <Route path="/products" element={<ProductListing />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
