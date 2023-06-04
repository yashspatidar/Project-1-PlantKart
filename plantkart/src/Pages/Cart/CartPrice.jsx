import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContextProvider";
import "./CartStyle.css";
export const CartPrice = ({ product }) => {
  const { dataState } = useContext(ProductContext);
  const cartData = dataState.cartData;
  //console.log(cartData, "cart data");
  const priceHandler = cartData?.reduce(
    (acc, curr) => curr.price * curr.quantity + acc,
    0
  );
  const deliveryPrice = priceHandler >= 1500 ? 0 : 199;
  const discountHandler = priceHandler >= 1000 ? 200 : 0;
  const totalAmount = priceHandler - discountHandler + deliveryPrice;
  return (
    <div className="cart-container-second">
      <h2>PRICE DETAILS</h2>
      <hr />
      <div className="cart-container-second-first">
        <p>Price</p>
        <p className="priceStyle">{priceHandler}</p>
      </div>
      <div className="cart-container-second-first">
        <p>Discount</p>
        <p className="priceStyle">{discountHandler}</p>
      </div>
      <div className="cart-container-second-first">
        <p>Delivery Charges</p>
        <p className="priceStyle">{deliveryPrice}</p>
      </div>
      <hr />
      <div className="cart-container-second-first">
        <p>Total Amount</p>
        <p className="priceStyle">{totalAmount}</p>
      </div>
      <hr />
      <div className="save-line">
        {priceHandler >= 1000 ? (
          <p>You will save Rs. 200 on this order</p>
        ) : (
          <p>Please make cart value above Rs. 1000 To Avail the discount</p>
        )}
      </div>
      <button className="placeOrderButton">Place Order</button>
    </div>
  );
};
