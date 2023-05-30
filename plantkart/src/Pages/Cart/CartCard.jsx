import { useContext } from "react";
import "./CartStyle.css";
import { ProductContext } from "../../Context/ProductContextProvider";
export const CartCard = ({ product }) => {

  const {quantityIncrease,quantityDecrease} = useContext(ProductContext)
    // const quantityIncrease = (quantity)=>{
    //   return quantity+1;
    // }

    // const quantityDecrease = ()=>{

    // }
  return (
    <div className="cart-card">
      <img src={product.image_link} alt="cartImage" />
      <div className="cart-card-first">
        <p>{product.name}</p>
        <p>{product.price}</p>

        <div className="quantity-card">
          <p>Quantity : </p>
          <button onClick={()=>quantityIncrease(product)}>+</button>
          <p>{product.quantity}</p>
          <button  onClick={()=>quantityDecrease(product)}>-</button>
        </div>
        <button>Remove from Cart</button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  );
};
