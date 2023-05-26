import "../../Pages/Cart/CartStyle.css";
import { useContext} from "react";
import { ProductContext } from "../../Context/ProductContextProvider";

export const Cart = () => {
  const { dataState } = useContext(ProductContext);
  const cartData = dataState.cartData;
  console.log(cartData, "cart data");

  return (
    <div className="cart">
      <h1>My Cart </h1>
      {cartData?.length === 0 ? (
        <p>The cart is Empty</p>
      ) : (
        <div className="cart-container">
          <div className="cart-container-first">
            {cartData?.map((item) => (
              <div className="cart-card">
                <img src={item.image_link} alt="cartImage" />
                <div className="cart-card-first">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>Quantity : </p>
                  <button>Remove from Cart</button>
                  <button>Add to Wishlist</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-container-second">
            <h2>PRICE DETAILS</h2>
            <hr />
            <div className="cart-container-second-first">
              <p>Price</p>
              <p>Price Details</p>
            </div>
            <div className="cart-container-second-first">
              <p>Discount</p>
              <p>Discount Details</p>
            </div>
            <div className="cart-container-second-first">
              <p>Delivery Charges</p>
              <p>499</p>
            </div>
            <hr />
            <div className="cart-container-second-first">
              <p>Total Amount</p>
              <p>Total</p>
            </div>
            <hr />
            <div className="save-line">
              <p>You will save on this order</p>
            </div>
            <button className="placeOrderButton">Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};
