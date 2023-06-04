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

    // const data = response.data;
    // console.log(data, "cart post");
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