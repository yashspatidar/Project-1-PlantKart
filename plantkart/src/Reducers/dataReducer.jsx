export const dataReducer = (state, action) => {
  switch (action.type) {
    case "add_to_product": {
      return { ...state, products: [...action.payload] };
    }
    case "cartItem": {
      return { ...state, cartData: [...action.payload] };
    }
    case "addToWishlist": {
      return { ...state, wishList: [...action.payload] };
    }
    case "disableCartButton":{
      return { ...state, cartDisable:action.payload}
    }
    case "disableWishlistButton":{
      return { ...state, wishlistDisable:action.payload}
    }
    default: {
      return state;
    }
  }
};
