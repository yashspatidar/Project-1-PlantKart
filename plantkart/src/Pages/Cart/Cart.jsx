import "../../Pages/Cart/CartStyle.css";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContextProvider";
import { CartCard } from "./CartCard";
import { CartPrice } from "./CartPrice";

export const Cart = () => {
  const { dataState } = useContext(ProductContext);
  const cartData = dataState.cartData;
  

  return (
    <div className="cart">
      <h1>My Cart </h1>
      {cartData?.length === 0 ? (
        <p>The cart is Empty</p>
      ) : (
        <div className="cart-container">
          <div className="cart-container-first">
            {cartData?.map((item) => (
              <CartCard product={item} />
            ))}
          </div>
          <div>
            <CartPrice />
          </div>
        </div>
      )}
    </div>
  );
};
