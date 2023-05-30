import "./CartStyle.css";
export const CartCard = ({ product }) => {

    const quantityIncrease = ()=>{

    }

    const quantityDecrease = ()=>{

    }
  return (
    <div className="cart-card">
      <img src={product.image_link} alt="cartImage" />
      <div className="cart-card-first">
        <p>{product.name}</p>
        <p>{product.price}</p>

        <div className="quantity-card">
          <p>Quantity : </p>
          <button onClick={()=>quantityIncrease()}>+</button>
          <p>{product.quantity}</p>
          <button onClick={quantityDecrease}>-</button>
        </div>
        <button>Remove from Cart</button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  );
};
