import { productDemo } from "../productDemo"
// import {CartStyle } from "src/Pages/Cart"
// import {CartStyle} from "../Cart/CartStyle"
import "../Cart/CartStle.css"
export const Cart = ()=>{
    return(
        
        <div className="cartContainer">
            <p className="cart-first">My Cart</p>
            <div>
            {productDemo.map((item)=>(
                <>
                <div>
                    <img src={item.image_link} alt="cartImage"/>
                </div>
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <button>Remove from Cart</button>
                    <button>Add to Wishlist</button>
                </div>
                </>
            ))}
            </div>
            {/* <div>
                <p>PRICE DETAILS</p>
                <div>
                <p>Price({productDemo?.length} item)</p>
                <p></p>
                </div>
                

            </div> */}
        </div>
    )
}