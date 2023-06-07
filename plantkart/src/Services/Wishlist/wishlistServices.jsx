import axios from "axios";

export const addToWishlist = async (product, token,dispatch,toast) => {
  
  dispatch({
    type:"disableWishlistButton",
    payload: true,
  })
  try {
    
    const res = await axios.post(
      "/api/user/wishlist",
      { product },
      // { product :item },
      {
        headers: { authorization: token },
      }
    );

    toast.success("Product added to wishlist!",{ autoClose: 500 });

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


export const deletFromWishlist = async (product, token, dispatch,toast) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: { authorization: token },
    });

    toast.success("Product removed from wishlist!",{ autoClose: 500 });
    dispatch({
      type: "addToWishlist",
      payload: wishlist,
    });
  } catch (e) {
    console.log(e);
  }
};
