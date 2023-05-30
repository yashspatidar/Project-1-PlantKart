import axios from "axios";



export const addToCart =async(product,token,dispatch)=>{
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

    // cart data get data

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
  }
}