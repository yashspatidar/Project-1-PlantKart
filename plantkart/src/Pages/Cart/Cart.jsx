import "../../Pages/Cart/CartStyle.css";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContextProvider";
import { CartCard } from "./CartCard";
import { CartPrice } from "./CartPrice";
import { useNavigate } from "react-router";

export const Cart = () => {
  const { dataState } = useContext(ProductContext);
  const cartData = dataState.cartData;
  console.log(cartData,"wuivbdhjlaybiasdjklv;");
  const navigate = useNavigate()
  return (
    <div className="cart">
      <h1>My Cart </h1>
      <div className="cart-aa">
      {cartData?.length === 0 ? (
        <div className="empytcart-card">
        <p>The cart is Empty</p>
        <button onClick={()=>navigate("/products")} className="addtocart">Go To Products</button>
        </div>
        
      ) : (
        <div className="cart-container">
          <div className="cart-container-first">
            {cartData?.map((item) => (
              <CartCard product={item} key={item._id}/>
            ))}
          </div>
          <div>
            <CartPrice />
          </div>
        </div>
      )}
      </div>
      
    </div>
  );
};
