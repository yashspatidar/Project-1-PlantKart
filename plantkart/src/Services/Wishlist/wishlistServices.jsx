import axios from "axios";

export const addToWishlist = async (product, token,dispatch) => {
  
  dispatch({
    type:"disableWishlistButton",
    payload: true,
  })
  try {
    console.log("from cart")
    const res = await axios.post(
      "/api/user/wishlist",
      { product },
      // { product :item },
      {
        headers: { authorization: token },
      }
    );

    const {
      data: { wishlist },
    } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    //console.log(wishlist, "fromdaskdhs");
    dispatch({
      type: "addToWishlist",
      payload: wishlist,
    });
    
  } catch (e) {
    console.log(e);
  }finally{
    dispatch({
      type:"disableWishlistButton",
      payload: false,
    })
  }
};

export const getFromWishlist = async (token, dispatch) => {
  
  try {
    const {
      data: { wishlist },
    } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    //console.log(wishlist, "fromdaskdhs");
    dispatch({
      type: "addToWishlist",
      payload: wishlist,
    });
  } catch (e) {
    console.log(e);
  }
};

// export const deletFromWishlist = async (product, token, dispatch) => {
//   try {
//     const {
//       data: { wishlist },
//     } = await axios.delete(`/api/user/wishlist/${product._id}`, {
//       headers: {
//         authorization: token,
//       },
//     });
//     dispatch({
//       type: "addToWishlist",
//       payload: wishlist,
//     });
//   } catch (e) {
//     console.log("error from cart delete handler");
//   }
// };

export const deletFromWishlist = async (product, token, dispatch) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: { authorization: token },
    });
    dispatch({
      type: "addToWishlist",
      payload: wishlist,
    });
  } catch (e) {
    console.log(e);
  }
};
