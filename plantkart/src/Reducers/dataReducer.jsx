export const dataReducer = (state, action) => {
  switch (action.type) {
    case "add_to_product": {
      return { ...state, products: [...action.payload] };
    }
    case "cartItem": {
      return { ...state, cartData: [...action.payload] };
    }
    
    case "updateCartItem": {
      return { ...state, cartData: [...action.payload] };
    }
    case "addToWishlist": {
      return { ...state, wishList: [...action.payload] };
    }
    case "disableCartButton": {
      return { ...state, cartDisable: action.payload };
    }
    case "disableWishlistButton": {
      return { ...state, wishlistDisable: action.payload };
    }
    case "addAddress": {
      return { ...state, address: [...state.address, action.payload] };
    }
    case "removeAddress": {
      return {
        ...state,
        address: state.address.filter((item) => item.id !== action.payload),
      };
    }
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: state.address.map((add) =>
          add.id === action.payLoad.id ? action.payLoad : add
        ),
      };
    default: {
      return state;
    }
  }
};
