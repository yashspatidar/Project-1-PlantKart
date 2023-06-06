import { useContext, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContextProvider";
import "./checkout.css";
import { useNavigate } from "react-router";
export const Checkout = () => {
  const { dataState} = useContext(ProductContext);
  const  navigate = useNavigate()
  const priceHandler = dataState.cartData?.reduce(
    (acc, curr) => curr.price * curr.qty + acc,
    0
  );
  const deliveryPrice = priceHandler >= 1500 ? 0 : 199;
  const discountHandler = priceHandler >= 1000 ? 200 : 0;
  const totalAmount = priceHandler - discountHandler + deliveryPrice;
  useEffect(() => {
    dataState?.cartData.length === 0 && navigate("/products");
  }, []);
  const orderPlacedHandler =()=>{
    navigate("/orderplaced")
  }
  return (
    <div className="checkout">
      
      <div>
        {dataState?.address.map((item)=>(
            <div key={item.id} className="address-container-main">
            <label>
                <input type="radio" name="radio"/>
                <p>{item.name}</p>
            </label>
            <div className="address-container">
            <p>{item.street}, {item.city}, {item.state}, {item.zipCode}</p>
            <p>{item.country}</p>
            <p>Mobile Number : {item.mobile}</p>
            </div>
            </div>
        ))}
      </div>
      <div className="checkout-container">
      <h2>ORDER DETIALS({dataState?.cartData.length})</h2>
      <hr />
      <div className="checkout-order-card">
        {dataState?.cartData.map((item) => (
          <div className="checkout-order-card-first">
            <p>{item.name}</p>
            <p>{item.qty}</p>
          </div>
        ))}
      </div>
      <hr/>
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
          <button className="placeOrderButton" onClick={()=>orderPlacedHandler()}>Place Order</button>
        </div>
      </div>
      
      </div>
    
  );
};
