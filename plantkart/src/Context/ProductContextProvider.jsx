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

  //cart handler

  // const cartHandler = async (product) => {
  //   if (token) {

  //     try {
  //       const response = await axios.post(
  //         "/api/user/cart",
  //         { product },
  //         {
  //           headers: {
  //             authorization: token,
  //           },
  //         }
  //       );

  //       // cart data get data

  //       const {
  //         data: { cart },
  //       } = await axios.get("/api/user/cart", {
  //         headers: {
  //           authorization: token,
  //         },
  //       });

  //       dispatch({
  //         type: "cartItem",
  //         payload: cart,
  //       });

  //       // const data = response.data;
  //       // console.log(data, "cart post");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     navigate("/login");
  //   }
  // };

  // button handler for shop plants button on home screen to navigate it to the product listing page
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
