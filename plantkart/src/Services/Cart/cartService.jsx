import axios from "axios";



export const addToCart =async(product,token,dispatch)=>{
  dispatch({
    type:"disableCartButton",
    payload:true,
  })
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );


    const {
      data: { cart },
    } = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });

    dispatch({
      type: "cartItem",
      payload: cart,
    });

    
  } catch (error) {
    console.log(error);
  }finally{
    dispatch({
      type:"disableCartButton",
      payload:false,
    })
  }
}

export const deletFromCart = async (product,token,dataState,dispatch)=>{
  try{
    const {
      data: { cart },
    } = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: token,
      },
    });

    dispatch({
      type: "cartItem",
      payload: cart,
    });
  }catch(e){
    console.log("error from cart delete handler")
  }
}

export const updateQuantityInCart = async(product,token,dispatch,actionType) => {
  try {
    const {data:{cart}}=await axios.post(`/api/user/cart/${product._id}`,
    {
        action: {
          type: actionType 
        }
      },
    {
        headers: {
        authorization: token
      }
    })
    console.log(cart,"updateQuantityInCart")
    dispatch({type:"updateCartItem" , payload: cart})
  }
 
  catch(error){
    console.log(error)
  }
  

}