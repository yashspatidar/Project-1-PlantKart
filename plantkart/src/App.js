import "./App.css";

import { Header } from "./Components/Header";
import { Login } from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./Pages/ProductListing";

import Mockman from "mockman-js";
import { Home } from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { AboveFooter } from "./Components/AboveFooter";

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      {/* <AboveFooter/> */}
      <Footer/>
    </div>
  );
}

export default App;
