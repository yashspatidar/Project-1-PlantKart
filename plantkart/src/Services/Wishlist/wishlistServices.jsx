import axios from "axios";

export const addToWishlist = async (token,product,dispatch)=>{
    try {
        const response = await axios.post(
          "/api/user/wishlist",
          { product },
          {
            headers: {
              authorization: token,
            },
          }
        );
        const data = response.data;
        console.log(data,"wish")
      } catch (error) {
        console.log(error);
      }
}