import { useContext } from "react";
import "./CartStyle.css";
import { ProductContext } from "../../Context/ProductContextProvider";
import { deletFromCart } from "../../Services/Cart/cartService";
import { AuthContext } from "../../Context/AuthContextProvider";
export const CartCard = ({ product }) => {
  const { quantityIncrease, quantityDecrease, dataState, dispatch } =
    useContext(ProductContext);
  const { token } = useContext(AuthContext);
  // const quantityIncrease = (quantity)=>{
  //   return quantity+1;
  // }

  // const quantityDecrease = ()=>{

  // }
  const removeCartHandler = (product) => {
    deletFromCart(product,token,dataState,dispatch);
  };

  return (
    <div className="cart-card">
      <img src={product.image_link} alt="cartImage" />
      <div className="cart-card-first">
        <p>{product.name}</p>
        <p>{product.price}</p>

        <div className="quantity-card">
          <p>Quantity : </p>
          <button onClick={() => quantityIncrease(product)}>+</button>
          <p>{product.quantity}</p>
          <button onClick={() => quantityDecrease(product)}>-</button>
        </div>
        <button onClick={() => removeCartHandler(product)}>
          Remove from Cart
        </button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  );
};
