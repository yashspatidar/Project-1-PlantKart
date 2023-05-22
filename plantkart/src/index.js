import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  ProductContextProvider,
  ProductContext,
} from "./Context/ProductContextProvider";
import { CartContextProvider } from "./Context/CartContext";
import { HomeContextProvider } from "./Context/HomeContextProvider";
import { AuthContextProvider } from "./Context/AuthContextProvider";
export { ProductContext };
// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <HomeContextProvider>
            <App />
          </HomeContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
