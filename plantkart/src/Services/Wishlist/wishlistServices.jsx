import axios from "axios";

export const addToWishlist = async (product, token) => {
  
  try {
    const res = await axios.post(
      "/api/user/wishlist",
      {product},
      // { product :item },
      {
        headers: { authorization: token },
      }
    );
    // const data = res.data;
    console.log(res.data.wishlist, "wishlist post");
  } catch (e) {
    console.log(e);
  }
};

export const getFromWishlist = async (token, dispatch) => {
  try {
    const {
      data :{wishlist},
    } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    console.log(wishlist,"fromdaskdhs");
    dispatch({
      type: "addToWishlist",
      payload: wishlist,
    });
  } catch (e) {
    console.log(e);
  }
};
