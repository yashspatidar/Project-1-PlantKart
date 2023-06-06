import "./orderplaced.css"
import {  toast } from "react-toastify";
import { useContext, useEffect } from "react"
import { ProductContext } from "../../Context/ProductContextProvider"
import { useNavigate } from "react-router";

export const OrderPlaced = ()=>{
    const {dispatch} = useContext(ProductContext)
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch({type:"emptyCard",payload:[]})
        toast.success(`Order placed`,{ autoClose: 1000 });
        setTimeout(()=>{
            navigate("/")
        },2000)
    },[])

    return(
        <div className="orderPlaced-container">
            <p>Hurray! Order Placed</p>
            <p>Your Plants will reach to your address Soon</p>
            
        </div>
    )
}