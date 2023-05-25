import axios from "axios";
import "../../Pages/Cart/CartStyle.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

export const Cart = () => {
  const [cartData, setCartData] = useState([]);
  console.log(cartData, "cart item");
  const { token } = useContext(AuthContext);

  const getData = async () => {
    try {
      const {
        data: { cart },
      } = await axios.get("/api/user/cart", {
        headers: {
          authorization: token,
        },
      });

      setCartData(cart);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {cartData?.map((item) => (
        <div>
          <img src={item.image_link} alt="cartImage" />
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>Quantity : </p>
            <button>Remove from Cart</button>
            <button>Add to Wishlist</button>
          </div>
        </div>
      ))}
    </div>
  );
};
