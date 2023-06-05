import { useContext } from "react"
import { ProductContext } from "../../Context/ProductContextProvider"

export const Checkout = ()=>{
    const {dataState} = useContext(ProductContext)
    return(
        <div>
            <hr/>
            <p>Order Details</p>
            <div>
                {/* {dataState?.cartData.map((item)=>(
                    <div>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    </div>
                ))} */}
            </div>

        </div>

    )
}