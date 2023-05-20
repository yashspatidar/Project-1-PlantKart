import { productDemo } from "../productDemo";
import "../../Pages/Cart/CartStyle.css";

export const Cart = () => {
  return (
    <div className="cartContainer">
      <p className="cart-first">My Cart</p>
      <div className="cart-card-container">
        <div>
          {productDemo.map((item) => (
            <div className="cart-card">
              <img src={item.image_link} alt="cartImage" />
              <div className="cart-card-first">
                <p>{item.name}</p>
                <p className="cartPrice">{item.price}</p>
                <button className="cartButtons">Remove from Cart</button>
                <button className="cartButtons">Add to Wishlist</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p>PRICE DETAILS</p>
          <div>
            <p>Price({productDemo?.length} item)</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
