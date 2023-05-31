import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthContextProvider";
export const ProductContext = createContext();
// TODO: to create context for cart and wishlist

const initialState = {
  products: [],
  cartData: [],
  wishList: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "add_to_product": {
      return { ...state, products: [...action.payload] };
    }
    case "cartItem": {
      return { ...state, cartData: [...action.payload] };
    }
    default: {
      return state;
    }
  }
};

const filterInitialState = { searchFilter: "" };

const filterReducer = (state, action) => {
  switch (action.type) {
    case "search-bar": {
      return { ...state, searchFilter: action.payload };
    }
    default: {
      return state;
    }
  }
};
export const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );

  //console.log(filterState, "lalalala");
  //reducer
  const [dataState, dispatch] = useReducer(dataReducer, initialState);
  // console.log(dataState, "ohohoh");
  const appliedFilters = () => {
    let products = [...dataState.products];

    if (filterState.searchFilter.length > 0) {
      return (products = products.filter((item) =>
        item.name.toLowerCase().includes(filterState.searchFilter.toLowerCase())
      ));
    }
    return products;
  };

  // get request to fetch the product from the DB
  const newArray = appliedFilters();
  // console.log(newArray, "applied filters");
  const getData = async () => {
    try {
      const { data: products } = await axios.get("/api/products");
      // setProductData(res.data);
      dispatch({
        type: "add_to_product",
        payload: products.products,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // button handler for shop plants button on home screen to navigate it to the product listing page

  // cart handlers
  const quantityIncrease = (product) => {
    dispatch({
      type: "cartItem",
      payload: dataState?.cartData.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    });
  };

  const quantityDecrease = (product) => {
    if (product.quantity > 1){
      dispatch({
        type: "cartItem",
        payload: dataState?.cartData.map((item) =>
          item._id === product._id ? {...item, quantity: item.quantity - 1 } : item
        ),
      });
    }else{
      return product;
    }
  };

  const removeCartHandler = async ()=>{

  }

  const shopPlantButtonHandler = () => {
    navigate("/products");
  };

  return (
    <ProductContext.Provider
      value={{
        shopPlantButtonHandler,
        item: 3,

        dataState,
        dispatch,
        newArray,
        filterState,
        filterDispatch,
        quantityIncrease,
        quantityDecrease,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
